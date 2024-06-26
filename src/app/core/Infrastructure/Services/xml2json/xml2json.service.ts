import { Injectable } from '@angular/core';

@Injectable()
export class Xml2jsonService {

    constructor() { }

    xml2json(xmlStr: string) {
        xmlStr = this.cleanXML(xmlStr);
        return this.xml2jsonRecurse(xmlStr);
    }

    decodeXmlStr2Json(xmlStr: string): any {
        return this.xml2json(this.decodeXmlStr(xmlStr))
    }

    decodeXmlStr(xmlStr: string): string {
        return xmlStr.replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/&amp;/g, '&');
    };

    //***********************************************************************
    // Recursive function that creates a JSON object with a given XML string.
    //***********************************************************************
    private xml2jsonRecurse(xmlStr: any) {
        var obj: any = {},
            tagName, indexClosingTag, inner_substring, tempVal, openingTag;

        while (xmlStr.match(/<[^\/][^>]*>/)) {
            openingTag = xmlStr.match(/<[^\/][^>]*>/)[0];
            tagName = openingTag.substring(1, openingTag.length - 1);
            indexClosingTag = xmlStr.indexOf(openingTag.replace('<', '</'));

            // account for case where additional information in the openning tag
            if (indexClosingTag == -1) {

                tagName = openingTag.match(/[^<][\w+$]*/)[0];
                indexClosingTag = xmlStr.indexOf('</' + tagName);
                if (indexClosingTag == -1) {
                    indexClosingTag = xmlStr.indexOf('<\\/' + tagName);
                }
            }
            inner_substring = xmlStr.substring(openingTag.length, indexClosingTag);
            if (inner_substring.match(/<[^\/][^>]*>/)) {
                tempVal = this.xml2json(inner_substring);
            }
            else {
                tempVal = inner_substring;
            }
            // account for array or obj //
            if (obj[tagName] === undefined) {
                obj[tagName] = tempVal;
            }
            else if (Array.isArray(obj[tagName])) {
                obj[tagName].push(tempVal);
            }
            else {
                obj[tagName] = [obj[tagName], tempVal];
            }

            xmlStr = xmlStr.substring(openingTag.length * 2 + 1 + inner_substring.length);
        }

        return obj;
    }

    //*****************************************************************
    // Removes some characters that would break the recursive function.
    //*****************************************************************
    private cleanXML(xmlStr: any) {

        xmlStr = xmlStr.replace(/<!--[\s\S]*?-->/g, ''); //remove commented lines
        xmlStr = xmlStr.replace(/\n|\t|\r/g, ''); //replace special characters
        xmlStr = xmlStr.replace(/ {1,}<|\t{1,}</g, '<'); //replace leading spaces and tabs
        xmlStr = xmlStr.replace(/> {1,}|>\t{1,}/g, '>'); //replace trailing spaces and tabs
        xmlStr = xmlStr.replace(/<\?[^>]*\?>/g, ''); //delete docType tags

        xmlStr = this.replaceSelfClosingTags(xmlStr); //replace self closing tags
        xmlStr = this.replaceAloneValues(xmlStr); //replace the alone tags values
        xmlStr = this.replaceAttributes(xmlStr); //replace attributes

        return xmlStr;
    }

    //************************************************************************************************************
    // Replaces all the self closing tags with attributes with another tag containing its attribute as a property.
    // The function works if the tag contains multiple attributes. 
    //
    // Example : '<tagName attrName="attrValue" />' becomes 
    //           '<tagName><attrName>attrValue</attrName></tagName>'
    //************************************************************************************************************
    private replaceSelfClosingTags(xmlStr: any) {

        var selfClosingTags = xmlStr.match(/<[^/][^>]*\/>/g);

        if (selfClosingTags) {
            for (var i = 0; i < selfClosingTags.length; i++) {

                var oldTag = selfClosingTags[i];
                var tempTag = oldTag.substring(0, oldTag.length - 2);
                tempTag += ">";

                var tagName = oldTag.match(/[^<][\w+$]*/)[0];
                var closingTag = "</" + tagName + ">";
                var newTag = "<" + tagName + ">";

                var attrs = tempTag.match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g);

                if (attrs) {
                    for (var j = 0; j < attrs.length; j++) {
                        var attr = attrs[j];
                        var attrName = attr.substring(0, attr.indexOf('='));
                        var attrValue = attr.substring(attr.indexOf('"') + 1, attr.lastIndexOf('"'));

                        newTag += "<" + attrName + ">" + attrValue + "</" + attrName + ">";
                    }
                }

                newTag += closingTag;

                xmlStr = xmlStr.replace(oldTag, newTag);
            }
        }

        return xmlStr;
    }

    //*************************************************************************************************
    // Replaces all the tags with attributes and a value with a new tag.
    // 
    // Example : '<tagName attrName="attrValue">tagValue</tagName>' becomes 
    //           '<tagName><attrName>attrValue</attrName><_@attribute>tagValue</_@attribute></tagName>'
    //*************************************************************************************************
    private replaceAloneValues(xmlStr: any) {

        var tagsWithAttributesAndValue = xmlStr.match(/<[^\/][^>][^<]+\s+.[^<]+[=][^<]+>{1}([^<]+)/g);

        if (tagsWithAttributesAndValue) {
            for (var i = 0; i < tagsWithAttributesAndValue.length; i++) {

                var oldTag = tagsWithAttributesAndValue[i];
                var oldTagName = oldTag.substring(0, oldTag.indexOf(">") + 1);
                var oldTagValue = oldTag.substring(oldTag.indexOf(">") + 1);

                var newTag = oldTagName + "<_@ttribute>" + oldTagValue + "</_@ttribute>";

                xmlStr = xmlStr.replace(oldTag, newTag);
            }
        }

        return xmlStr;
    }

    //*****************************************************************************************************************
    // Replaces all the tags with attributes with another tag containing its attribute as a property.
    // The function works if the tag contains multiple attributes.
    //
    // Example : '<tagName attrName="attrValue"></tagName>' becomes '<tagName><attrName>attrValue</attrName></tagName>'
    //*****************************************************************************************************************
    private replaceAttributes(xmlStr: any) {

        var tagsWithAttributes = xmlStr.match(/<[^\/][^>][^<]+\s+.[^<]+[=][^<]+>/g) as any;

        if (tagsWithAttributes) {
            for (var i = 0; i < tagsWithAttributes.length; i++) {

                var oldTag = tagsWithAttributes[i];
                var tagName = oldTag.match(/[^<][\w+$]*/)[0];
                var newTag = "<" + tagName + ">";
                var attrs = oldTag.match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g);

                if (attrs) {
                    for (var j = 0; j < attrs.length; j++) {

                        var attr = attrs[j];
                        var attrName = attr.substring(0, attr.indexOf('='));
                        var attrValue = attr.substring(attr.indexOf('"') + 1, attr.lastIndexOf('"'));

                        newTag += "<" + attrName + ">" + attrValue + "</" + attrName + ">";
                    }
                }

                xmlStr = xmlStr.replace(oldTag, newTag);
            }
        }

        return xmlStr;
    }
}
