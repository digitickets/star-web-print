//
// StarWebPrintExtManager API
//
// Version 0.1.0
//
// Copyright (C) 2016 STAR MICRONICS CO., LTD. All Rights Reserved.
//

var StarWebPrintExtManager = function (a) {
    this.url = this.onStatusUpdate = this.onAccessoryDisconnect = this.onAccessoryConnectFailure = this.onAccessoryConnectSuccess = this.onBarcodeDataReceive = this.onBarcodeReaderDisconnect = this.onBarcodeReaderConnect = this.onBarcodeReaderImpossible = this.onCashDrawerClose = this.onCashDrawerOpen = this.onPrinterCoverClose = this.onPrinterCoverOpen = this.onPrinterPaperEmpty = this.onPrinterPaperNearEmpty = this.onPrinterPaperReady = this.onPrinterOffline = this.onPrinterOnline = this.onPrinterImpossible =
        this.onError = this.onReceive = null;
    this.pollingInterval = 200;
    this.pollingTimeout = 3E4;
    this.isWaitCallback = !1;
    this.claimId = 0;
    this.isReleaseRequest = this.isPolling = !1;
    void 0 != a &&
    (void 0 != a.pollingTimeout && (this.pollingTimeout = a.pollingTimeout), void 0 != a.pollingInterval && (this.pollingInterval = a.pollingInterval), void 0 != a.url && (this.url = a.url));
};
StarWebPrintExtManager.prototype.connect = function (a) {
    void 0 != a &&
    (void 0 != a.pollingTimeout && (this.pollingTimeout = a.pollingTimeout), void 0 != a.pollingInterval && (this.pollingInterval = a.pollingInterval), void 0 != a.url && (this.url = a.url));
    return !this.isPolling && !this.isWaitCallback ? (this.isReleaseRequest = !1, this._sendExtMessage('claim', !0), !0) : !1;
};
StarWebPrintExtManager.prototype.disconnect = function () {return !this.isReleaseRequest && this.isPolling && !this.isWaitCallback ? this.isReleaseRequest = !0 : !1;};
StarWebPrintExtManager.prototype._getPollingInterval = function () {
    100 > this.pollingInterval && (this.pollingInterval = 100);
    return this.pollingInterval;
};
StarWebPrintExtManager.prototype._getPollingTimeout = function () {
    1E4 > this.pollingTimeout && (this.pollingTimeout = 1E4);
    return this.pollingTimeout;
};
StarWebPrintExtManager.prototype._polling = function () {
    this.isReleaseRequest ? (this.isReleaseRequest = !1, this._sendExtMessage('release', !0), this._clearClaimId()) : this._sendExtMessage('read', !1);
};
StarWebPrintExtManager.prototype._analyzeXml = function (a) {
    var f = new DOMParser, b, e;
    b = f.parseFromString(a.responseText, 'text/xml');
    e = b.getElementsByTagName('Response');
    b = f.parseFromString(e.item(0).textContent, 'text/xml');
    b.getElementsByTagName('root');
    e = b.getElementsByTagName('claimid').item(0);
    var d = b.getElementsByTagName('claim').item(0), f = b.getElementsByTagName('event');
    a.managerClaim = d.textContent;
    a.managerSuccess = a.traderSuccess;
    a.managerCode = a.traderCode;
    a.traderSuccess = void 0;
    a.traderCode = void 0;
    a.traderStatus = void 0;
    if ('true' == a.managerSuccess) {
        if ('true' == a.managerClaim) {
            void 0 != e && (this.claimId = e.textContent, this.isPolling = !0);
            var c = this;
            e = {
                onPrinterImpossible: function () {c.onPrinterImpossible();},
                onPrinterOnline: function () {c.onPrinterOnline();},
                onPrinterOffline: function () {c.onPrinterOffline();},
                onPrinterPaperReady: function () {c.onPrinterPaperReady();},
                onPrinterPaperNearEmpty: function () {c.onPrinterPaperNearEmpty();},
                onPrinterPaperEmpty: function () {c.onPrinterPaperEmpty();},
                onPrinterCoverOpen: function () {c.onPrinterCoverOpen();},
                onPrinterCoverClose: function () {c.onPrinterCoverClose();},
                onCashDrawerOpen: function () {c.onCashDrawerOpen();},
                onCashDrawerClose: function () {c.onCashDrawerClose();},
                onBarcodeReaderImpossible: function () {c.onBarcodeReaderImpossible();},
                onBarcodeReaderConnect: function () {c.onBarcodeReaderConnect();},
                onBarcodeReaderDisconnect: function () {c.onBarcodeReaderDisconnect();},
                onBarcodeDataReceive: function (a) {c.onBarcodeDataReceive({data: a});},
                onAccessoryConnectSuccess: function () {c.onAccessoryConnectSuccess();},
                onAccessoryConnectFailure: function () {c.onAccessoryConnectFailure();},
                onAccessoryDisconnect: function () {c.onAccessoryDisconnect();},
                onStatusUpdate: function (a) {c.onStatusUpdate({status: a});}
            };
            d = 0;
            if (this.isPolling) {
                void 0 != b.getElementsByTagName('eventcount') && (d = b.getElementsByTagName('eventcount').item(0).textContent);
                for (b = 0; b < d; b++) for (var g = 0;; g < f.length; g++) {
                    var h = f.item(g).getElementsByTagName('action').item(0).textContent;
                    if (f.item(g).getElementsByTagName('number').item(0).textContent == b) if ('onBarcodeDataReceive' == h || 'onStatusUpdate' == h) {
                        var k = f.item(g).getElementsByTagName('data').item(0).textContent;
                        try {e[h](k);} catch (l) {}
                    } else try {e[h]();} catch (m) {}
                }
            }
        }
    } else this._clearClaimId();
    return a;
};
StarWebPrintExtManager.prototype._clearClaimId = function () {
    this.claimId = 0;
    this.isPolling = !1;
};
StarWebPrintExtManager.prototype._sendExtMessage = function (a, f) {
    f && (this.isWaitCallback = !0);
    var b = '<extmanager ', b = 'claim' == a || 'read' == a ? b + ('request_type="' + a + '" ') : b + 'request_type="release" ';
    0 != this.claimId && (b += 'claimid="' + this.claimId + '" ');
    var b = b + '></extmanager>', e = new StarWebPrintTrader, d = this, c = this._getPollingTimeout();
    e.onReceive = function (a) {
        a = d._analyzeXml(a);
        if (f || 'false' == a.managerSuccess) {
            if (void 0 != d.onReceive) d.onReceive(a);
            d.isWaitCallback = !1;
        }
        d.isPolling && setTimeout(function () {d._polling();},
            d._getPollingInterval());
    };
    e.onError = function (a) {
        d.isWaitCallback = !1;
        d._clearClaimId();
        if (void 0 != d.onError) d.onError(a);
    };
    e.sendMessage({url: this.url, request: b, timeout: c});
};
