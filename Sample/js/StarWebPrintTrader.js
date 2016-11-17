//
// StarWebPrintTrader API
//
// Version 0.4.7
//
// Copyright (C) 2012-2016 STAR MICRONICS CO., LTD. All Rights Reserved.
//

var StarWebPrintTrader = function (a) {
    this.blackmark_sensor = this.papertype = this.checkedblock = this.url = null;
    this.timeout = 9E4;
    this.onTimeout = this.onError = this.onReceive = null;
    void 0 != a && (void 0 != a.url && (this.url = a.url), void 0 != a.checkedblock && (this.checkedblock = a.checkedblock), void 0 != a.papertype && (this.papertype = a.papertype), void 0 != a.blackmark_sensor && (this.blackmark_sensor = a.blackmark_sensor), void 0 != a.timeout && (this.timeout = a.timeout))
};
StarWebPrintTrader.prototype.sendMessage = function (a) {
    var b = "<root";
    void 0 != a.checkedblock ? !1 == a.checkedblock && (b += ' checkedblock="false"') : !1 == this.checkedblock && (b += ' checkedblock="false"');
    void 0 != a.papertype ? "normal" == a.papertype ? b += ' papertype="normal"' : "black_mark" == a.papertype ? b += ' papertype="black_mark"' : "black_mark_and_detect_at_power_on" == a.papertype && (b += ' papertype="black_mark_and_detect_at_power_on"') : "normal" == this.papertype ? b += ' papertype="normal"' : "black_mark" == this.papertype ? b += ' papertype="black_mark"' :
    "black_mark_and_detect_at_power_on" == this.papertype && (b += ' papertype="black_mark_and_detect_at_power_on"');
    void 0 != a.blackmark_sensor ? "back_side" == a.blackmark_sensor ? b += ' blackmark_sensor="back_side"' : "hole_or_gap" == a.blackmark_sensor && (b += ' blackmark_sensor="hole_or_gap"') : "back_side" == this.blackmark_sensor ? b += ' blackmark_sensor="back_side"' : "hole_or_gap" == this.blackmark_sensor && (b += ' blackmark_sensor="hole_or_gap"');
    var b = b + (">" + a.request + "</root>"), e;
    e = '<StarWebPrint xmlns="http://www.star-m.jp" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><Request>';
    e += this._encodeEscapeSequence(b);
    e += "</Request>";
    e += "</StarWebPrint>";
    var c = null;
    if (window.XMLHttpRequest)c = new XMLHttpRequest; else if (window.ActiveXObject)c = new ActiveXObject("Microsoft.XMLHTTP"); else {
        if (this.onError)this.onError({status: 10001, responseText: "XMLHttpRequest is not supported."});
        return
    }
    b = "";
    b = void 0 != a.url ? a.url : this.url;
    if (-1 != navigator.userAgent.indexOf("iPad;") || -1 != navigator.userAgent.indexOf("iPhone;") || -1 != navigator.userAgent.indexOf("iPod touch;") || -1 != navigator.userAgent.indexOf("Android"))if (0 ==
        b.toLowerCase().indexOf("https://localhost") || 0 == b.toLowerCase().indexOf("https://127.0.0.1"))b = "http://" + b.substring(8);
    try {
        c.open("POST", b, !0)
    } catch (f) {
        if (this.onError)this.onError({status: 10002, responseText: f.message});
        return
    }
    try {
        void 0 != a.timeout ? c.timeout = a.timeout : this.timeout && (c.timeout = this.timeout)
    } catch (h) {
    }
    c.setRequestHeader("Content-Type", "text/xml; charset=UTF-8");
    var d = this;
    c.onreadystatechange = function () {
        if (4 == c.readyState)try {
            if (200 == c.status) {
                var a = c.responseXML.getElementsByTagName("Response");
                if (0 < a.length) {
                    if (d.onReceive) {
                        var b = a[0].childNodes[0].nodeValue;
                        d.onReceive({
                            traderSuccess: b.slice(b.indexOf("<success>") + 9, b.indexOf("</success>")),
                            traderCode: b.slice(b.indexOf("<code>") + 6, b.indexOf("</code>")),
                            traderStatus: b.slice(b.indexOf("<status>") + 8, b.indexOf("</status>")),
                            status: c.status,
                            responseText: c.responseText
                        })
                    }
                } else if (d.onError)d.onError({status: c.status, responseText: c.responseText})
            } else if (d.onError)d.onError({status: c.status, responseText: c.responseText})
        } catch (e) {
            if (d.onError)d.onError({
                status: 0,
                responseText: "Connection timeout occurred."
            })
        }
    };
    try {
        c.ontimeout = function () {
            if (d.onTimeout)d.onTimeout()
        }
    } catch (k) {
    }
    try {
        c.send(e)
    } catch (g) {
        if (this.onError)this.onError({status: 10003, responseText: g.message})
    }
};
StarWebPrintTrader.prototype.isCoverOpen = function (a) {
    return parseInt(a.traderStatus.substr(4, 2), 16) & 32 ? !0 : !1
};
StarWebPrintTrader.prototype.isOffLine = function (a) {
    return parseInt(a.traderStatus.substr(4, 2), 16) & 8 ? !0 : !1
};
StarWebPrintTrader.prototype.isCompulsionSwitchClose = function (a) {
    return parseInt(a.traderStatus.substr(4, 2), 16) & 4 ? !0 : !1
};
StarWebPrintTrader.prototype.isEtbCommandExecute = function (a) {
    return parseInt(a.traderStatus.substr(4, 2), 16) & 2 ? !0 : !1
};
StarWebPrintTrader.prototype.isHighTemperatureStop = function (a) {
    return parseInt(a.traderStatus.substr(6, 2), 16) & 64 ? !0 : !1
};
StarWebPrintTrader.prototype.isNonRecoverableError = function (a) {
    return parseInt(a.traderStatus.substr(6, 2), 16) & 32 ? !0 : !1
};
StarWebPrintTrader.prototype.isAutoCutterError = function (a) {
    return parseInt(a.traderStatus.substr(6, 2), 16) & 8 ? !0 : !1
};
StarWebPrintTrader.prototype.isBlackMarkError = function (a) {
    return parseInt(a.traderStatus.substr(8, 2), 16) & 8 ? !0 : !1
};
StarWebPrintTrader.prototype.isPaperEnd = function (a) {
    return parseInt(a.traderStatus.substr(10, 2), 16) & 8 ? !0 : !1
};
StarWebPrintTrader.prototype.isPaperNearEnd = function (a) {
    return parseInt(a.traderStatus.substr(10, 2), 16) & 4 ? !0 : !1
};
StarWebPrintTrader.prototype.extractionEtbCounter = function (a) {
    var b = 0;
    parseInt(a.traderStatus.substr(14, 2), 16) & 64 && (b |= 16);
    parseInt(a.traderStatus.substr(14, 2), 16) & 32 && (b |= 8);
    parseInt(a.traderStatus.substr(14, 2), 16) & 8 && (b |= 4);
    parseInt(a.traderStatus.substr(14, 2), 16) & 4 && (b |= 2);
    parseInt(a.traderStatus.substr(14, 2), 16) & 2 && (b |= 1);
    return b
};
StarWebPrintTrader.prototype._encodeEscapeSequence = function (a) {
    var b = /[<>&]/g;
    b.test(a) && (a = a.replace(b, function (a) {
        switch (a) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;"
        }
        return "&amp;"
    }));
    return a
};
