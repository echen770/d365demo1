(function () {
  return this ? this : window;
})()["@pa-client/authflowauthframe"] = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 40))
  );
})([
  function (e, t, r) {
    "use strict";
    r(27), r(20);
    var n = r(2);
    r.d(t, "initializeLogger", function () {
      return n.a;
    }),
      r.d(t, "setSessionId", function () {
        return n.b;
      }),
      r.d(t, "trackCreateScenario", function () {
        return n.c;
      }),
      r.d(t, "trackError", function () {
        return n.d;
      }),
      r.d(t, "trackEvent", function () {
        return n.e;
      });
    r(4), r(18), r(37), r(19);
  },
  ,
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return u;
    }),
      r.d(t, "b", function () {
        return l;
      }),
      r.d(t, "d", function () {
        return d;
      }),
      r.d(t, "e", function () {
        return h;
      }),
      r.d(t, "c", function () {
        return p;
      });
    var n,
      o = r(18),
      i = r(20),
      a = r(4),
      s = r(19),
      c = "_PLAYERTELEMETRY_PERF_MARKER_";
    function u(e, t) {
      e && t
        ? (n = new i.a(e, t))
        : (n = new o.a()).trackError("Player.Telemetry.Logger.initialize", { message: "Missing Region" }),
        (c = "_" + t.toUpperCase() + "_PERF_MARKER_");
    }
    function l(e) {
      n && (e, n.setSessionId(e));
    }
    function d(e, t) {
      n && n.trackError(e, t);
    }
    function h(e, t) {
      n && n.trackEvent(e, t);
    }
    function p(e, t) {
      var r = Object(s.a)();
      return (
        Object(a.c)(e + "." + r, c),
        (function (e, t, r) {
          var o = e + "." + t;
          return (
            null == n ||
              n.trackEvent("Scenario.Start", {
                scenarioId: t,
                eventType: "Scenario",
                eventName: e,
                eventData: r,
                eventModifier: "Start",
                eventScenarioId: t,
              }),
            {
              scenarioId: t,
              complete: function (r) {
                Object(a.a)(o, c);
                var i = Object(a.b)(o);
                null == n ||
                  n.trackEvent("Scenario.Complete", {
                    scenarioId: t,
                    eventType: "Scenario",
                    eventName: e,
                    eventData: r,
                    eventDuration: i,
                    eventModifier: "Complete",
                    eventScenarioId: t,
                  });
              },
              failure: function (r) {
                Object(a.a)(o, c);
                var i = Object(a.b)(o);
                null == n ||
                  n.trackEvent("Scenario.Failure", {
                    scenarioId: t,
                    eventType: "Scenario",
                    eventName: e,
                    eventData: r,
                    eventDuration: i,
                    eventModifier: "Failure",
                    eventScenarioId: t,
                  });
              },
              completeWithError: function (r) {
                Object(a.a)(o, c);
                var i = Object(a.b)(o);
                null == n ||
                  n.trackEvent("Scenario.CompleteWithError", {
                    scenarioId: t,
                    eventType: "Scenario",
                    eventName: e,
                    eventData: r,
                    eventDuration: i,
                    eventSeverity: "Error",
                    eventModifier: "Complete",
                    eventScenarioId: t,
                  });
              },
            }
          );
        })(e, r, t)
      );
    }
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Unspecified = 0)] = "Unspecified"),
          (e[(e.String = 1)] = "String"),
          (e[(e.Int64 = 2)] = "Int64"),
          (e[(e.Double = 3)] = "Double"),
          (e[(e.Boolean = 4)] = "Boolean"),
          (e[(e.Date = 5)] = "Date");
      })(t.AWTPropertyType || (t.AWTPropertyType = {})),
      (function (e) {
        (e[(e.NotSet = 0)] = "NotSet"),
          (e[(e.DistinguishedName = 1)] = "DistinguishedName"),
          (e[(e.GenericData = 2)] = "GenericData"),
          (e[(e.IPV4Address = 3)] = "IPV4Address"),
          (e[(e.IPv6Address = 4)] = "IPv6Address"),
          (e[(e.MailSubject = 5)] = "MailSubject"),
          (e[(e.PhoneNumber = 6)] = "PhoneNumber"),
          (e[(e.QueryString = 7)] = "QueryString"),
          (e[(e.SipAddress = 8)] = "SipAddress"),
          (e[(e.SmtpAddress = 9)] = "SmtpAddress"),
          (e[(e.Identity = 10)] = "Identity"),
          (e[(e.Uri = 11)] = "Uri"),
          (e[(e.Fqdn = 12)] = "Fqdn"),
          (e[(e.IPV4AddressLegacy = 13)] = "IPV4AddressLegacy");
      })(t.AWTPiiKind || (t.AWTPiiKind = {})),
      (function (e) {
        (e[(e.NotSet = 0)] = "NotSet"), (e[(e.GenericContent = 1)] = "GenericContent");
      })(t.AWTCustomerContentKind || (t.AWTCustomerContentKind = {})),
      (function (e) {
        (e[(e.Low = 1)] = "Low"),
          (e[(e.Normal = 2)] = "Normal"),
          (e[(e.High = 3)] = "High"),
          (e[(e.Immediate_sync = 5)] = "Immediate_sync");
      })(t.AWTEventPriority || (t.AWTEventPriority = {})),
      (function (e) {
        (e[(e.NonRetryableStatus = 1)] = "NonRetryableStatus"),
          (e[(e.QueueFull = 3)] = "QueueFull"),
          (e[(e.MaxRetryLimit = 4)] = "MaxRetryLimit");
      })(t.AWTEventsDroppedReason || (t.AWTEventsDroppedReason = {})),
      (function (e) {
        (e[(e.InvalidEvent = 1)] = "InvalidEvent"),
          (e[(e.SizeLimitExceeded = 2)] = "SizeLimitExceeded"),
          (e[(e.KillSwitch = 3)] = "KillSwitch");
      })(t.AWTEventsRejectedReason || (t.AWTEventsRejectedReason = {}));
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return i;
    }),
      r.d(t, "a", function () {
        return a;
      }),
      r.d(t, "b", function () {
        return s;
      });
    var n =
        "undefined" != typeof window &&
        (window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance),
      o = n && "function" == typeof n.mark && "function" == typeof n.measure;
    function i(e, t) {
      o && n.mark("" + t + e + "_START");
    }
    function a(e, t) {
      if (o) {
        var r = "" + t + e + "_END";
        n.mark(r);
        var i = "" + t + e + "_START";
        n.measure(e, i, r);
      }
    }
    function s(e) {
      if (o) {
        var t = (function (e) {
          var t = n.getEntriesByName(e);
          if (t && t.length > 0) return t[t.length - 1];
        })(e);
        if (t) return t.duration;
      }
      return 0;
    }
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(16),
      o = r(3),
      i = /[xy]/g;
    (t.EventNameAndTypeRegex = /^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/),
      (t.EventNameDotRegex = /\./g),
      (t.PropertyNameRegex = /^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/),
      (t.StatsApiKey = "a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238");
    var a = null,
      s = null,
      c = null;
    function u(e) {
      return "string" == typeof e;
    }
    function l(e) {
      return "number" == typeof e;
    }
    function d(e) {
      return "boolean" == typeof e;
    }
    function h(e) {
      return e instanceof Date;
    }
    function p(e) {
      return 1e4 * (e + 621355968e5);
    }
    function f() {
      return !("undefined" == typeof navigator || !navigator.product) && "ReactNative" === navigator.product;
    }
    function g() {
      return "object" == typeof self && "ServiceWorkerGlobalScope" === self.constructor.name;
    }
    function y(e) {
      return e < 10 ? "0" + e : e.toString();
    }
    function m(e) {
      return null == e || "" === e;
    }
    (t.numberToBondInt64 = function (e) {
      var t = new n.Int64("0");
      return (t.low = 4294967295 & e), (t.high = Math.floor(e / 4294967296)), t;
    }),
      (t.newGuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(i, function (e) {
          var t = (16 * Math.random()) | 0;
          return ("x" === e ? t : (3 & t) | 8).toString(16);
        });
      }),
      (t.isString = u),
      (t.isNumber = l),
      (t.isBoolean = d),
      (t.isDate = h),
      (t.msToTicks = p),
      (t.getTenantId = function (e) {
        var t = e.indexOf("-");
        return t > -1 ? e.substring(0, t) : "";
      }),
      (t.isBeaconsSupported = function () {
        return null === a && (a = "undefined" != typeof navigator && Boolean(navigator.sendBeacon)), a;
      }),
      (t.isUint8ArrayAvailable = function () {
        return (
          null === s &&
            (s =
              "undefined" != typeof Uint8Array &&
              !(function () {
                if ("undefined" != typeof navigator && navigator.userAgent) {
                  var e = navigator.userAgent.toLowerCase();
                  if ((e.indexOf("safari") >= 0 || e.indexOf("firefox") >= 0) && e.indexOf("chrome") < 0) return !0;
                }
                return !1;
              })() &&
              !f()),
          s
        );
      }),
      (t.isPriority = function (e) {
        return !(!l(e) || !((e >= 1 && e <= 3) || 5 === e));
      }),
      (t.sanitizeProperty = function (e, r) {
        return !t.PropertyNameRegex.test(e) || m(r)
          ? null
          : (m(r.value) && (r = { value: r, type: o.AWTPropertyType.Unspecified }),
            (r.type = (function (e, t) {
              switch (
                (t = (function (e) {
                  if (l(e) && e >= 0 && e <= 4) return !0;
                  return !1;
                })(t)
                  ? t
                  : o.AWTPropertyType.Unspecified)
              ) {
                case o.AWTPropertyType.Unspecified:
                  return (function (e) {
                    switch (typeof e) {
                      case "string":
                        return o.AWTPropertyType.String;
                      case "boolean":
                        return o.AWTPropertyType.Boolean;
                      case "number":
                        return o.AWTPropertyType.Double;
                      case "object":
                        return h(e) ? o.AWTPropertyType.Date : null;
                    }
                    return null;
                  })(e);
                case o.AWTPropertyType.String:
                  return u(e) ? t : null;
                case o.AWTPropertyType.Boolean:
                  return d(e) ? t : null;
                case o.AWTPropertyType.Date:
                  return h(e) && NaN !== e.getTime() ? t : null;
                case o.AWTPropertyType.Int64:
                  return l(e) && e % 1 == 0 ? t : null;
                case o.AWTPropertyType.Double:
                  return l(e) ? t : null;
              }
              return null;
            })(r.value, r.type)),
            r.type
              ? (h(r.value) && (r.value = p(r.value.getTime())),
                r.pii > 0 && r.cc > 0
                  ? null
                  : r.pii
                  ? (function (e) {
                      if (l(e) && e >= 0 && e <= 13) return !0;
                      return !1;
                    })(r.pii)
                    ? r
                    : null
                  : r.cc
                  ? (function (e) {
                      if (l(e) && e >= 0 && e <= 1) return !0;
                      return !1;
                    })(r.cc)
                    ? r
                    : null
                  : r)
              : null);
      }),
      (t.getISOString = function (e) {
        return (
          e.getUTCFullYear() +
          "-" +
          y(e.getUTCMonth() + 1) +
          "-" +
          y(e.getUTCDate()) +
          "T" +
          y(e.getUTCHours()) +
          ":" +
          y(e.getUTCMinutes()) +
          ":" +
          y(e.getUTCSeconds()) +
          "." +
          (function (e) {
            if (e < 10) return "00" + e;
            if (e < 100) return "0" + e;
            return e.toString();
          })(e.getUTCMilliseconds()) +
          "Z"
        );
      }),
      (t.useXDomainRequest = function () {
        if (null === c) {
          var e = new XMLHttpRequest();
          c = void 0 === e.withCredentials && "undefined" != typeof XDomainRequest;
        }
        return c;
      }),
      (t.useFetchRequest = function () {
        return f() || g();
      }),
      (t.isReactNative = f),
      (t.isServiceWorkerGlobalScope = g);
  },
  function (e, t) {},
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {}
      return (
        (e.addNotificationListener = function (e) {
          this.listeners.push(e);
        }),
        (e.removeNotificationListener = function (e) {
          for (var t = this.listeners.indexOf(e); t > -1; )
            this.listeners.splice(t, 1), (t = this.listeners.indexOf(e));
        }),
        (e.eventsSent = function (e) {
          for (
            var t = this,
              r = function (r) {
                n.listeners[r].eventsSent &&
                  setTimeout(function () {
                    return t.listeners[r].eventsSent(e);
                  }, 0);
              },
              n = this,
              o = 0;
            o < this.listeners.length;
            ++o
          )
            r(o);
        }),
        (e.eventsDropped = function (e, t) {
          for (
            var r = this,
              n = function (n) {
                o.listeners[n].eventsDropped &&
                  setTimeout(function () {
                    return r.listeners[n].eventsDropped(e, t);
                  }, 0);
              },
              o = this,
              i = 0;
            i < this.listeners.length;
            ++i
          )
            n(i);
        }),
        (e.eventsRetrying = function (e) {
          for (
            var t = this,
              r = function (r) {
                n.listeners[r].eventsRetrying &&
                  setTimeout(function () {
                    return t.listeners[r].eventsRetrying(e);
                  }, 0);
              },
              n = this,
              o = 0;
            o < this.listeners.length;
            ++o
          )
            r(o);
        }),
        (e.eventsRejected = function (e, t) {
          for (
            var r = this,
              n = function (n) {
                o.listeners[n].eventsRejected &&
                  setTimeout(function () {
                    return r.listeners[n].eventsRejected(e, t);
                  }, 0);
              },
              o = this,
              i = 0;
            i < this.listeners.length;
            ++i
          )
            n(i);
        }),
        (e.listeners = []),
        e
      );
    })();
    t.default = n;
  },
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(3);
    (t.AWTPropertyType = n.AWTPropertyType),
      (t.AWTPiiKind = n.AWTPiiKind),
      (t.AWTEventPriority = n.AWTEventPriority),
      (t.AWTEventsDroppedReason = n.AWTEventsDroppedReason),
      (t.AWTEventsRejectedReason = n.AWTEventsRejectedReason),
      (t.AWTCustomerContentKind = n.AWTCustomerContentKind);
    var o = r(14);
    (t.AWTUserIdType = o.AWTUserIdType), (t.AWTSessionState = o.AWTSessionState);
    var i = r(30);
    (t.AWT_BEST_EFFORT = i.AWT_BEST_EFFORT),
      (t.AWT_NEAR_REAL_TIME = i.AWT_NEAR_REAL_TIME),
      (t.AWT_REAL_TIME = i.AWT_REAL_TIME);
    var a = r(15);
    t.AWTEventProperties = a.default;
    var s = r(31);
    t.AWTLogger = s.default;
    var c = r(35);
    t.AWTLogManager = c.default;
    var u = r(60);
    t.AWTTransmissionManager = u.default;
    var l = r(33);
    t.AWTSerializer = l.default;
    var d = r(25);
    (t.AWTSemanticContext = d.default),
      (t.AWT_COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/"),
      (t.AWT_COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/"),
      (t.AWT_COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/"),
      (t.AWT_COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/"),
      (t.AWT_COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/"),
      (t.AWT_COLLECTOR_URL_USGOV_DOD = "https://pf.pipe.aria.microsoft.com/Collector/3.0"),
      (t.AWT_COLLECTOR_URL_USGOV_DOJ = "https://tb.pipe.aria.microsoft.com/Collector/3.0");
  },
  function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(30),
      o = r(3),
      i = r(48),
      a = r(32),
      s = r(15),
      c = r(35),
      u = r(5),
      l = (function () {
        function e() {}
        return (
          (e.setEventsHandler = function (e) {
            this._eventHandler = e;
          }),
          (e.getEventsHandler = function () {
            return this._eventHandler;
          }),
          (e.scheduleTimer = function () {
            var e = this,
              t = this._profiles[this._currentProfile][2];
            this._timeout < 0 &&
              t >= 0 &&
              !this._paused &&
              (this._eventHandler.hasEvents()
                ? (0 === t && this._currentBackoffCount > 0 && (t = 1),
                  (this._timeout = setTimeout(function () {
                    return e._batchAndSendEvents();
                  }, t * (1 << this._currentBackoffCount) * 1e3)))
                : (this._timerCount = 0));
          }),
          (e.initialize = function (e) {
            var t = this;
            (this._newEventsAllowed = !0),
              (this._config = e),
              (this._eventHandler = new i.default(
                e.collectorUri,
                e.cacheMemorySizeLimitInNumberOfEvents,
                e.httpXHROverride,
                e.clockSkewRefreshDurationInMins
              )),
              this._initializeProfiles(),
              a.default.initialize(function (e, r) {
                if (t._config.canSendStatEvent("awt_stats")) {
                  var n = new s.default("awt_stats");
                  for (var i in (n.setEventPriority(o.AWTEventPriority.High), n.setProperty("TenantId", r), e))
                    e.hasOwnProperty(i) && n.setProperty(i, e[i].toString());
                  c.default.getLogger(u.StatsApiKey).logEvent(n);
                }
              });
          }),
          (e.setTransmitProfile = function (e) {
            this._currentProfile !== e &&
              void 0 !== this._profiles[e] &&
              (this.clearTimeout(), (this._currentProfile = e), this.scheduleTimer());
          }),
          (e.loadTransmitProfiles = function (e) {
            for (var t in (this._resetTransmitProfiles(), e))
              if (e.hasOwnProperty(t)) {
                if (3 !== e[t].length) continue;
                for (var r = 2; r >= 0; --r)
                  if (e[t][r] < 0) {
                    for (var n = r; n >= 0; --n) e[t][n] = -1;
                    break;
                  }
                for (r = 2; r > 0; --r)
                  if (e[t][r] > 0 && e[t][r - 1] > 0) {
                    var o = e[t][r - 1] / e[t][r];
                    e[t][r - 1] = Math.ceil(o) * e[t][r];
                  }
                this._profiles[t] = e[t];
              }
          }),
          (e.sendEvent = function (e) {
            this._newEventsAllowed &&
              (this._currentBackoffCount > 0 &&
                e.priority === o.AWTEventPriority.Immediate_sync &&
                (e.priority = o.AWTEventPriority.High),
              this._eventHandler.addEvent(e),
              this.scheduleTimer());
          }),
          (e.flush = function (e) {
            var t = new Date().getTime();
            !this._paused &&
              this._lastUploadNowCall + 3e4 < t &&
              ((this._lastUploadNowCall = t),
              this._timeout > -1 && (clearTimeout(this._timeout), (this._timeout = -1)),
              this._eventHandler.uploadNow(e));
          }),
          (e.pauseTransmission = function () {
            this._paused || (this.clearTimeout(), this._eventHandler.pauseTransmission(), (this._paused = !0));
          }),
          (e.resumeTransmision = function () {
            this._paused && ((this._paused = !1), this._eventHandler.resumeTransmission(), this.scheduleTimer());
          }),
          (e.flushAndTeardown = function () {
            a.default.teardown(), (this._newEventsAllowed = !1), this.clearTimeout(), this._eventHandler.teardown();
          }),
          (e.backOffTransmission = function () {
            this._currentBackoffCount < 4 && (this._currentBackoffCount++, this.clearTimeout(), this.scheduleTimer());
          }),
          (e.clearBackOff = function () {
            this._currentBackoffCount > 0 &&
              ((this._currentBackoffCount = 0), this.clearTimeout(), this.scheduleTimer());
          }),
          (e._resetTransmitProfiles = function () {
            this.clearTimeout(),
              this._initializeProfiles(),
              (this._currentProfile = n.AWT_REAL_TIME),
              this.scheduleTimer();
          }),
          (e.clearTimeout = function () {
            this._timeout > 0 && (clearTimeout(this._timeout), (this._timeout = -1), (this._timerCount = 0));
          }),
          (e._batchAndSendEvents = function () {
            var e = o.AWTEventPriority.High;
            this._timerCount++,
              this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][0]
                ? ((e = o.AWTEventPriority.Low), (this._timerCount = 0))
                : this._timerCount * this._profiles[this._currentProfile][2] ===
                    this._profiles[this._currentProfile][1] && (e = o.AWTEventPriority.Normal),
              this._eventHandler.sendEventsForPriorityAndAbove(e),
              (this._timeout = -1),
              this.scheduleTimer();
          }),
          (e._initializeProfiles = function () {
            (this._profiles = {}),
              (this._profiles[n.AWT_REAL_TIME] = [4, 2, 1]),
              (this._profiles[n.AWT_NEAR_REAL_TIME] = [12, 6, 3]),
              (this._profiles[n.AWT_BEST_EFFORT] = [36, 18, 9]);
          }),
          (e._newEventsAllowed = !1),
          (e._currentProfile = n.AWT_REAL_TIME),
          (e._timeout = -1),
          (e._currentBackoffCount = 0),
          (e._paused = !1),
          (e._timerCount = 0),
          (e._lastUploadNowCall = 0),
          e
        );
      })();
    t.default = l;
  },
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.MSACID = 1)] = "MSACID"),
          (e[(e.MSAPUID = 2)] = "MSAPUID"),
          (e[(e.ANID = 3)] = "ANID"),
          (e[(e.OrgIdCID = 4)] = "OrgIdCID"),
          (e[(e.OrgIdPUID = 5)] = "OrgIdPUID"),
          (e[(e.UserObjectId = 6)] = "UserObjectId"),
          (e[(e.Skype = 7)] = "Skype"),
          (e[(e.Yammer = 8)] = "Yammer"),
          (e[(e.EmailAddress = 9)] = "EmailAddress"),
          (e[(e.PhoneNumber = 10)] = "PhoneNumber"),
          (e[(e.SipAddress = 11)] = "SipAddress"),
          (e[(e.MUID = 12)] = "MUID");
      })(t.AWTUserIdType || (t.AWTUserIdType = {})),
      (function (e) {
        (e[(e.Started = 0)] = "Started"), (e[(e.Ended = 1)] = "Ended");
      })(t.AWTSessionState || (t.AWTSessionState = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(5),
      o = r(3),
      i = (function () {
        function e(e) {
          (this._event = { name: "", properties: {} }), e && this.setName(e);
        }
        return (
          (e.prototype.setName = function (e) {
            this._event.name = e;
          }),
          (e.prototype.getName = function () {
            return this._event.name;
          }),
          (e.prototype.setType = function (e) {
            this._event.type = e;
          }),
          (e.prototype.getType = function () {
            return this._event.type;
          }),
          (e.prototype.setTimestamp = function (e) {
            this._event.timestamp = e;
          }),
          (e.prototype.getTimestamp = function () {
            return this._event.timestamp;
          }),
          (e.prototype.setEventPriority = function (e) {
            this._event.priority = e;
          }),
          (e.prototype.getEventPriority = function () {
            return this._event.priority;
          }),
          (e.prototype.setProperty = function (e, t, r) {
            void 0 === r && (r = o.AWTPropertyType.Unspecified);
            var i = { value: t, type: r, pii: o.AWTPiiKind.NotSet, cc: o.AWTCustomerContentKind.NotSet };
            null !== (i = n.sanitizeProperty(e, i))
              ? (this._event.properties[e] = i)
              : delete this._event.properties[e];
          }),
          (e.prototype.setPropertyWithPii = function (e, t, r, i) {
            void 0 === i && (i = o.AWTPropertyType.Unspecified);
            var a = { value: t, type: i, pii: r, cc: o.AWTCustomerContentKind.NotSet };
            null !== (a = n.sanitizeProperty(e, a))
              ? (this._event.properties[e] = a)
              : delete this._event.properties[e];
          }),
          (e.prototype.setPropertyWithCustomerContent = function (e, t, r, i) {
            void 0 === i && (i = o.AWTPropertyType.Unspecified);
            var a = { value: t, type: i, pii: o.AWTPiiKind.NotSet, cc: r };
            null !== (a = n.sanitizeProperty(e, a))
              ? (this._event.properties[e] = a)
              : delete this._event.properties[e];
          }),
          (e.prototype.getPropertyMap = function () {
            return this._event.properties;
          }),
          (e.prototype.getEvent = function () {
            return this._event;
          }),
          e
        );
      })();
    t.default = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        (this.low = 0), (this.high = 0), (this.low = parseInt(e, 10)), this.low < 0 && (this.high = -1);
      }
      return (
        (e.prototype._Equals = function (t) {
          var r = new e(t);
          return this.low === r.low && this.high === r.high;
        }),
        e
      );
    })();
    t.Int64 = n;
    var o = (function () {
      function e(e) {
        (this.low = 0), (this.high = 0), (this.low = parseInt(e, 10));
      }
      return (
        (e.prototype._Equals = function (t) {
          var r = new e(t);
          return this.low === r.low && this.high === r.high;
        }),
        e
      );
    })();
    t.UInt64 = o;
    var i = (function () {
      function e() {}
      return (
        (e._ToByte = function (e) {
          return this._ToUInt8(e);
        }),
        (e._ToUInt8 = function (e) {
          return 255 & e;
        }),
        (e._ToInt32 = function (e) {
          return (2147483647 & e) | (2147483648 & e);
        }),
        (e._ToUInt32 = function (e) {
          return 4294967295 & e;
        }),
        e
      );
    })();
    t.Number = i;
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    });
    var n = function (e) {
      if ((void 0 === e && (e = window.navigator.userAgent), !e)) return !1;
      var t = function (t) {
        return -1 !== e.indexOf(t);
      };
      return (
        !(
          t(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) GearGame UnrealEngine/4.11.2-0   depot UE4-Releases 4.9 Safari/537.36"
          ) ||
          t(
            "Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) PingdomTMS/0.8.5 Safari/534.34"
          ) ||
          t("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36")
        ) &&
        !t("CPU iPhone OS 12") &&
        !t("iPad; CPU OS 12") &&
        !(t("Macintosh; Intel Mac OS X 10_14") && t("Version/") && t("Safari")) &&
        !(t("Chrome/49") || t("Chrome/5") || t("Chrome/6"))
      );
    };
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    });
    var n = (function () {
      function e() {
        this._sessionId = "";
      }
      return (
        (e.prototype.setSessionId = function (e) {
          this._sessionId = e;
        }),
        (e.prototype.trackError = function (e, t) {
          try {
            var r = "https://" + globalScopeObject.location.host + "/log/error",
              n = new FormData();
            if (
              (n.append("client_Event_Name", e),
              Object.getOwnPropertyNames(t).forEach(function (e) {
                n.append(e, JSON.stringify(t[e]));
              }),
              "function" == typeof XMLHttpRequest)
            ) {
              var o = new XMLHttpRequest();
              o.open("POST", r),
                o.setRequestHeader("x-ms-client-session-id", this._sessionId),
                o.setRequestHeader("x-ms-user-agent", " PowerApps (Web; Player)"),
                o.setRequestHeader("x-ms-client-request-id", "webplayer-logerror-" + Date.now()),
                o.send(n);
            } else
              globalScopeObject.fetch &&
                fetch(r, {
                  method: "POST",
                  headers: {
                    "x-ms-client-session-id": this._sessionId,
                    "x-ms-user-agent": " PowerApps (Web; Player)",
                    "x-ms-client-request-id": "webplayer-logerror-" + Date.now(),
                  },
                  body: n,
                });
          } catch (e) {
            console.log("Failed to Log Error to Server.");
          }
        }),
        (e.prototype.trackEvent = function (e, t) {}),
        (e.prototype.flush = function (e) {
          e();
        }),
        e
      );
    })();
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    });
    new RegExp(/(password|token|key)/i),
      new RegExp(
        /[a-zA-Z0-9\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF\.!#$%&'*+?^_{|}~\-\d]+(@|%40)[a-zA-Z0-9\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF\-\.\d]+\.[a-zA-Z\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF]{2,63}/g
      );
    function n() {
      var e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        return (function (e, t) {
          var r = (e + 16 * Math.random()) % 16 | 0;
          return ("x" === t ? r : (3 & r) | 8).toString(16);
        })(e, t);
      });
    }
  },
  function (e, t, r) {
    "use strict";
    var n = r(10);
    r.d(t, "a", function () {
      return i;
    });
    var o = (function () {
        function e(e, t) {
          void 0 === t && (t = !1), (this._columnName = e), (this._excludeFromCustomDimensions = t);
        }
        return (
          Object.defineProperty(e.prototype, "columnName", {
            get: function () {
              return this._columnName;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "excludeFromCustomDimensions", {
            get: function () {
              return this._excludeFromCustomDimensions;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(),
      i = (function () {
        function e(e, t, r) {
          var o = this;
          void 0 === r && (r = n.AWTLogManager), (this._awtLogManager = r);
          var i = this._getAriaConfig(e);
          this._setPropertyToColumn(),
            (this._pendingCallbacks = []),
            (this._logger = this._awtLogManager.initialize(i.instrumentationKey, { collectorUri: i.collectorUrl })),
            this._logger.setContext("app_Name", i.appName || "powerappsclient"),
            this._logger.setContext("device_Id", "browser"),
            this._logger.setContext("clientType", t),
            globalScopeObject.addEventListener("unload", function () {
              o._awtLogManager.flushAndTeardown(), void 0 !== o._flushInterval && o._flushCallback(!0);
            });
        }
        return (
          (e.prototype.setSessionId = function (e) {
            this._logger.setContext("session_Id", e);
          }),
          (e.prototype.trackError = function (e, t) {
            this._logEvent("PowerAppsClient.Error", e, t);
          }),
          (e.prototype.trackEvent = function (e, t) {
            this._logEvent("PowerAppsClient.Activity", e, t);
          }),
          (e.prototype.flush = function (e) {
            var t = this;
            this._pendingCallbacks.push(e),
              void 0 === this._flushInterval &&
                (this._awtLogManager.flush(function () {
                  t._flushCallback();
                }),
                (this._flushInterval = setInterval(function () {
                  t._awtLogManager.flush(function () {
                    t._flushCallback();
                  });
                }, 3e4)));
          }),
          (e.prototype._flushCallback = function (e) {
            var t = this;
            void 0 === e && (e = !1),
              (e || 0 === this._pendingCallbacks.length) &&
                (clearInterval(this._flushInterval), (this._flushInterval = void 0)),
              this._pendingCallbacks.forEach(function (e) {
                try {
                  e();
                } catch (e) {
                  var r = {};
                  e instanceof Error && (r = { name: e.name, message: e.message, stack: e.stack }),
                    t._logEvent("PowerAppsClient.Error", "_flushCallback", r);
                }
              }),
              (this._pendingCallbacks = []);
          }),
          (e.prototype._promoteProperty = function (e, t, r, n) {
            var o = e[t];
            r.setProperty(n.columnName, o), n.excludeFromCustomDimensions && delete e[t];
          }),
          (e.prototype._setPropertyToColumn = function () {
            (e._propertyToColumn = (function (e) {
              var t = Object.create(null);
              if (e) for (var r in e) t[r] = e[r];
              return t;
            })()),
              (e._propertyToColumn.operationName = new o("operation_Name")),
              (e._propertyToColumn.tenantId = new o("tenantId")),
              (e._propertyToColumn.oid = new o("objectId")),
              (e._propertyToColumn.scenarioName = new o("scenarioName")),
              (e._propertyToColumn.scenarioGuid = new o("scenarioGuid")),
              (e._propertyToColumn.scenarioResult = new o("scenarioResult")),
              (e._propertyToColumn.sequenceNumber = new o("sequenceNumber")),
              (e._propertyToColumn.environmentId = new o("environmentId")),
              (e._propertyToColumn.duration = new o("duration")),
              (e._propertyToColumn.latencyInMs = new o("duration")),
              (e._propertyToColumn.elapsedTime = new o("duration")),
              (e._propertyToColumn.apiId = new o("apiId")),
              (e._propertyToColumn.updateCadence = new o("updateCadence")),
              (e._propertyToColumn.url = new o("url")),
              (e._propertyToColumn.requestedUrl = new o("url")),
              (e._propertyToColumn.status = new o("httpStatus")),
              (e._propertyToColumn.httpStatus = new o("httpStatus")),
              (e._propertyToColumn.statusCode = new o("httpStatus")),
              (e._propertyToColumn.httpMethod = new o("httpMethod")),
              (e._propertyToColumn.webPlayerUrl = new o("webPlayerUrl")),
              (e._propertyToColumn.playerAppId = new o("playerAppId")),
              (e._propertyToColumn.appSequenceNumber = new o("appSequenceNumber"));
          }),
          (e.prototype._setCommonProperties = function (t, r) {
            if ((t.setProperty("timestamp", new Date().toISOString()), r)) {
              for (var n = 0, o = Object.keys(r); n < o.length; n++) {
                var i = o[n],
                  a = e._propertyToColumn[i];
                a && this._promoteProperty(r, i, t, a);
              }
              t.setProperty("customDimensions", JSON.stringify(r));
            }
          }),
          (e.prototype._logEvent = function (e, t, r) {
            void 0 === r && (r = {});
            var o = new n.AWTEventProperties("event");
            o.setProperty("timestamp", new Date().toISOString()),
              o.setProperty("event_Name", e),
              o.setProperty("operation_Name", t),
              this._setCommonProperties(o, r),
              this._logger.logEvent(o);
          }),
          (e.prototype._getAriaConfig = function (e) {
            switch (e) {
              case "mooncake":
                return {
                  instrumentationKey: "1c1d139788f74386bd95e752dd781371-8358812e-4215-49c1-8bfb-4d33f7435b83-6676",
                };
              case "preview":
              case "prod":
                return {
                  instrumentationKey: "5c3a61f48d7c4522912765ae7465ab5c-8472b9b6-f99b-4baf-8db9-f97fcc0ca092-7243",
                };
              case "gccmoderate":
                return {
                  instrumentationKey: "0d7685a948a140789ac92933d3dc2d87-80226e21-e88d-4b83-bb24-d510d20a6ea5-7425",
                  collectorUrl: n.AWT_COLLECTOR_URL_USGOV_DOJ,
                };
              case "gcchigh":
                return {
                  instrumentationKey: "d31229fb23b0406790b9332e5f465dfc-4319a692-da6e-4883-97fa-d6fa8b3156df-7315",
                  collectorUrl: n.AWT_COLLECTOR_URL_USGOV_DOJ,
                };
              case "dod":
                return {
                  instrumentationKey: "41cc10dad35043adbcdace2896484ab4-b5e658a4-2dec-4675-b9db-86682deb9bf8-7892",
                  collectorUrl: n.AWT_COLLECTOR_URL_USGOV_DOD,
                };
              case "ex":
                return {
                  instrumentationKey: "a09cee2ad1324d2d8277f41ee0856c47-8e5071fa-e2fd-4af8-8f57-26acbbda4c06-7556",
                  collectorUrl: "https://collector.azure.eaglex.ic.gov/Collector/3.0",
                };
              case "rx":
                return {
                  instrumentationKey: "f591e7376c264db59dd5d88561a1a444-92a6dc18-bf6c-46c6-b045-72524543df4a-7468",
                  collectorUrl: "https://collector.azure.microsoft.scloud/Collector/3.0",
                };
              default:
                return {
                  instrumentationKey: "3fb21f3df5c44380bf452fd710f4d50c-8402467d-497d-40a5-accb-00eb2db5f798-7638",
                  appName: "powerappsclientnonprod",
                };
            }
          }),
          e
        );
      })();
  },
  function (e, t, r) {
    "use strict";
    t.a = function (e) {
      var t = this.constructor;
      return this.then(
        function (r) {
          return t.resolve(e()).then(function () {
            return r;
          });
        },
        function (r) {
          return t.resolve(e()).then(function () {
            return t.reject(r);
          });
        }
      );
    };
  },
  function (e, t, r) {
    "use strict";
    t.a = function (e) {
      return new this(function (t, r) {
        if (!e || void 0 === e.length)
          return r(
            new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))")
          );
        var n = Array.prototype.slice.call(e);
        if (0 === n.length) return t([]);
        var o = n.length;
        function i(e, r) {
          if (r && ("object" == typeof r || "function" == typeof r)) {
            var a = r.then;
            if ("function" == typeof a)
              return void a.call(
                r,
                function (t) {
                  i(e, t);
                },
                function (r) {
                  (n[e] = { status: "rejected", reason: r }), 0 == --o && t(n);
                }
              );
          }
          (n[e] = { status: "fulfilled", value: r }), 0 == --o && t(n);
        }
        for (var a = 0; a < n.length; a++) i(a, n[a]);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(28);
    r.d(t, "CookieManager", function () {
      return n.a;
    });
    r(29), r(17);
  },
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(26),
      o = r(3),
      i = r(14),
      a = (function () {
        function e(e, t) {
          (this._allowDeviceFields = e), (this._properties = t);
        }
        return (
          (e.prototype.setAppId = function (e) {
            this._addContext("AppInfo.Id", e);
          }),
          (e.prototype.setAppVersion = function (e) {
            this._addContext("AppInfo.Version", e);
          }),
          (e.prototype.setAppLanguage = function (e) {
            this._addContext("AppInfo.Language", e);
          }),
          (e.prototype.setDeviceId = function (e) {
            this._allowDeviceFields && (n.default.checkAndSaveDeviceId(e), this._addContext("DeviceInfo.Id", e));
          }),
          (e.prototype.setDeviceOsName = function (e) {
            this._allowDeviceFields && this._addContext("DeviceInfo.OsName", e);
          }),
          (e.prototype.setDeviceOsVersion = function (e) {
            this._allowDeviceFields && this._addContext("DeviceInfo.OsVersion", e);
          }),
          (e.prototype.setDeviceBrowserName = function (e) {
            this._allowDeviceFields && this._addContext("DeviceInfo.BrowserName", e);
          }),
          (e.prototype.setDeviceBrowserVersion = function (e) {
            this._allowDeviceFields && this._addContext("DeviceInfo.BrowserVersion", e);
          }),
          (e.prototype.setDeviceMake = function (e) {
            this._allowDeviceFields && this._addContext("DeviceInfo.Make", e);
          }),
          (e.prototype.setDeviceModel = function (e) {
            this._allowDeviceFields && this._addContext("DeviceInfo.Model", e);
          }),
          (e.prototype.setUserId = function (e, t, r) {
            if (!isNaN(r) && null !== r && r >= 0 && r <= 12) this._addContext("UserInfo.IdType", r.toString());
            else {
              var n = void 0;
              switch (t) {
                case o.AWTPiiKind.SipAddress:
                  n = i.AWTUserIdType.SipAddress;
                  break;
                case o.AWTPiiKind.PhoneNumber:
                  n = i.AWTUserIdType.PhoneNumber;
                  break;
                case o.AWTPiiKind.SmtpAddress:
                  n = i.AWTUserIdType.EmailAddress;
                  break;
                default:
                  n = i.AWTUserIdType.Unknown;
              }
              this._addContext("UserInfo.IdType", n.toString());
            }
            if (isNaN(t) || null === t || t === o.AWTPiiKind.NotSet || t > 13)
              switch (r) {
                case i.AWTUserIdType.Skype:
                  t = o.AWTPiiKind.Identity;
                  break;
                case i.AWTUserIdType.EmailAddress:
                  t = o.AWTPiiKind.SmtpAddress;
                  break;
                case i.AWTUserIdType.PhoneNumber:
                  t = o.AWTPiiKind.PhoneNumber;
                  break;
                case i.AWTUserIdType.SipAddress:
                  t = o.AWTPiiKind.SipAddress;
                  break;
                default:
                  t = o.AWTPiiKind.NotSet;
              }
            this._addContextWithPii("UserInfo.Id", e, t);
          }),
          (e.prototype.setUserAdvertisingId = function (e) {
            this._addContext("UserInfo.AdvertisingId", e);
          }),
          (e.prototype.setUserTimeZone = function (e) {
            this._addContext("UserInfo.TimeZone", e);
          }),
          (e.prototype.setUserLanguage = function (e) {
            this._addContext("UserInfo.Language", e);
          }),
          (e.prototype._addContext = function (e, t) {
            "string" == typeof t && this._properties.setProperty(e, t);
          }),
          (e.prototype._addContextWithPii = function (e, t, r) {
            "string" == typeof t && this._properties.setPropertyWithPii(e, t, r);
          }),
          e
        );
      })();
    t.default = a;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(5),
      o = "MicrosoftApplicationsTelemetryDeviceId",
      i = "MicrosoftApplicationsTelemetryFirstLaunchTime",
      a = "MSIE",
      s = "Chrome",
      c = "Firefox",
      u = "Safari",
      l = "Edge",
      d = "Electron",
      h = "SkypeShell",
      p = "PhantomJS",
      f = "Opera",
      g = "Windows",
      y = "Mac OS X",
      m = "Windows Phone",
      v = "Windows RT",
      _ = "iOS",
      w = "Android",
      E = "Linux",
      T = "Chrome OS",
      C = /(windows|win32)/i,
      A = / arm;/i,
      S = /windows\sphone\s\d+\.\d+/i,
      b = /(macintosh|mac os x)/i,
      I = /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,
      R =
        /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
      k = /android/i,
      P = /CrOS/i,
      O = { 5.1: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", "10.0": "10" },
      N = (function () {
        function e() {}
        return (
          (e.addPropertyStorageOverride = function (e) {
            return !!e && ((this._propertyStorage = e), !0);
          }),
          (e.autoCollect = function (e, t, r) {
            if (
              ((this._semanticContext = e),
              (this._disableCookies = t),
              this._autoCollect(),
              r || "undefined" == typeof navigator || (r = navigator.userAgent || ""),
              this._autoCollectFromUserAgent(r),
              this._disableCookies && !this._propertyStorage)
            )
              return this._deleteCookie(o), void this._deleteCookie(i);
            (this._propertyStorage || (this._areCookiesAvailable && !this._disableCookies)) &&
              this._autoCollectDeviceId();
          }),
          (e.checkAndSaveDeviceId = function (e) {
            if (e) {
              var t = this._getData(o),
                r = this._getData(i);
              t !== e && (r = n.getISOString(new Date())),
                this._saveData(o, e),
                this._saveData(i, r),
                this._setFirstLaunchTime(r);
            }
          }),
          (e._autoCollectDeviceId = function () {
            var e = this._getData(o);
            e || (e = n.newGuid()), this._semanticContext.setDeviceId(e);
          }),
          (e._autoCollect = function () {
            "undefined" != typeof document &&
              document.documentElement &&
              this._semanticContext.setAppLanguage(document.documentElement.lang),
              "undefined" != typeof navigator &&
                this._semanticContext.setUserLanguage(navigator.userLanguage || navigator.language);
            var e = new Date().getTimezoneOffset(),
              t = e % 60,
              r = (e - t) / 60,
              n = "+";
            r > 0 && (n = "-"),
              (r = Math.abs(r)),
              (t = Math.abs(t)),
              this._semanticContext.setUserTimeZone(
                n + (r < 10 ? "0" + r : r.toString()) + ":" + (t < 10 ? "0" + t : t.toString())
              );
          }),
          (e._autoCollectFromUserAgent = function (e) {
            if (e) {
              var t = this._getBrowserName(e);
              this._semanticContext.setDeviceBrowserName(t),
                this._semanticContext.setDeviceBrowserVersion(this._getBrowserVersion(e, t));
              var r = this._getOsName(e);
              this._semanticContext.setDeviceOsName(r),
                this._semanticContext.setDeviceOsVersion(this._getOsVersion(e, r));
            }
          }),
          (e._getBrowserName = function (e) {
            return this._userAgentContainsString("OPR/", e)
              ? f
              : this._userAgentContainsString(p, e)
              ? p
              : this._userAgentContainsString(l, e) || this._userAgentContainsString("Edg", e)
              ? l
              : this._userAgentContainsString(d, e)
              ? d
              : this._userAgentContainsString(s, e)
              ? s
              : this._userAgentContainsString("Trident", e)
              ? a
              : this._userAgentContainsString(c, e)
              ? c
              : this._userAgentContainsString(u, e)
              ? u
              : this._userAgentContainsString(h, e)
              ? h
              : "Unknown";
          }),
          (e._setFirstLaunchTime = function (e) {
            if (!isNaN(e)) {
              var t = new Date();
              t.setTime(parseInt(e, 10)), (e = n.getISOString(t));
            }
            this.firstLaunchTime = e;
          }),
          (e._userAgentContainsString = function (e, t) {
            return t.indexOf(e) > -1;
          }),
          (e._getBrowserVersion = function (e, t) {
            if (t === a) return this._getIeVersion(e);
            if (t === l) {
              var r = this._getOtherVersion(t, e);
              return "Unknown" === r ? this._getOtherVersion("Edg", e) : r;
            }
            return this._getOtherVersion(t, e);
          }),
          (e._getIeVersion = function (e) {
            var t = e.match(new RegExp(a + " ([\\d,.]+)"));
            if (t) return t[1];
            var r = e.match(new RegExp("rv:([\\d,.]+)"));
            return r ? r[1] : void 0;
          }),
          (e._getOtherVersion = function (e, t) {
            e === u && (e = "Version");
            var r = t.match(new RegExp(e + "/([\\d,.]+)"));
            return r ? r[1] : "Unknown";
          }),
          (e._getOsName = function (e) {
            return e.match(S)
              ? m
              : e.match(A)
              ? v
              : e.match(I)
              ? _
              : e.match(k)
              ? w
              : e.match(R)
              ? E
              : e.match(b)
              ? y
              : e.match(C)
              ? g
              : e.match(P)
              ? T
              : "Unknown";
          }),
          (e._getOsVersion = function (e, t) {
            return t === g
              ? this._getGenericOsVersion(e, "Windows NT")
              : t === w
              ? this._getGenericOsVersion(e, t)
              : t === y
              ? this._getMacOsxVersion(e)
              : "Unknown";
          }),
          (e._getGenericOsVersion = function (e, t) {
            var r = e.match(new RegExp(t + " ([\\d,.]+)"));
            return r ? (O[r[1]] ? O[r[1]] : r[1]) : "Unknown";
          }),
          (e._getMacOsxVersion = function (e) {
            var t = e.match(new RegExp(y + " ([\\d,_,.]+)"));
            if (t) {
              var r = t[1].replace(/_/g, ".");
              if (r) {
                var n = this._getDelimiter(r);
                return n ? r.split(n)[0] : r;
              }
            }
            return "Unknown";
          }),
          (e._getDelimiter = function (e) {
            return e.indexOf(".") > -1 ? "." : e.indexOf("_") > -1 ? "_" : null;
          }),
          (e._saveData = function (e, t) {
            if (this._propertyStorage) this._propertyStorage.setProperty(e, t);
            else if (this._areCookiesAvailable) {
              var r = new Date();
              r.setTime(r.getTime() + 31536e6);
              var n = "expires=" + r.toUTCString();
              document.cookie = e + "=" + t + "; " + n;
            }
          }),
          (e._getData = function (e) {
            if (this._propertyStorage) return this._propertyStorage.getProperty(e) || "";
            if (this._areCookiesAvailable) {
              e += "=";
              for (var t = document.cookie.split(";"), r = 0; r < t.length; r++) {
                for (var n = t[r], o = 0; " " === n.charAt(o); ) o++;
                if (0 === (n = n.substring(o)).indexOf(e)) return n.substring(e.length, n.length);
              }
            }
            return "";
          }),
          (e._deleteCookie = function (e) {
            this._areCookiesAvailable && (document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;");
          }),
          (e._disableCookies = !1),
          (e._areCookiesAvailable = "undefined" != typeof document && void 0 !== document.cookie),
          e
        );
      })();
    t.default = N;
  },
  function (e, t, r) {
    "use strict";
    (function (e) {
      var t =
        ("object" == typeof self && self.self === self && self) ||
        ("object" == typeof e && e.global === e && e) ||
        void 0;
      t.globalScopeObject = t;
    }.call(this, r(11)));
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return o;
    });
    var n = r(17),
      o = (function () {
        function e(e, t) {
          void 0 === e && (e = window),
            void 0 === t && (t = !0),
            (this._window = e),
            (this._autoIncludeSameSiteNone = t),
            (this._allowSameSiteNone = Object(n.a)(this._window.navigator.userAgent));
        }
        return (
          (e.prototype.getCookie = function (e) {
            for (var t = e.trim() + "=", r = this._window.document.cookie.split(";"), n = 0; n < r.length; n++) {
              var o = r[n],
                i = o.indexOf(t);
              if (-1 !== i) {
                var a = i + t.length;
                return o.substring(a, o.length);
              }
            }
            return "";
          }),
          (e.prototype.createCookie = function (e, t, r) {
            void 0 === r && (r = {});
            var n = [];
            n.push(e + "=" + encodeURI(t)),
              r.path && n.push("path=" + r.path),
              r.domain && n.push("domain=" + r.domain),
              r.maxAge && n.push("max-age=" + r.maxAge),
              r.expires && n.push("expires=" + r.expires.toUTCString());
            var o = "",
              i = r.secure ? "secure" : "";
            r.samesite
              ? "none" === r.samesite && this._allowSameSiteNone
                ? ((o = "samesite=" + r.samesite), (i = "secure"))
                : "none" !== r.samesite && (o = "samesite=" + r.samesite)
              : this._autoIncludeSameSiteNone && this._allowSameSiteNone && ((o = "samesite=none"), (i = "secure")),
              o && n.push(o),
              i && n.push(i),
              (this._window.document.cookie = n.join(";"));
          }),
          (e.prototype.deleteCookie = function (e, t, r) {
            this.createCookie(e, "", { expires: new Date(0), path: t, domain: r });
          }),
          (e.prototype.areCookiesEnabled = function () {
            if (this._window.navigator.cookieEnabled)
              try {
                if (this._window.document.cookie) return !0;
                this.createCookie("testcookie", "1", { expires: new Date(Date.now() + 6e4) });
                var e = !!this.getCookie("testcookie");
                return this.deleteCookie("testcookie"), e;
              } catch (e) {
                console.log("Error thrown in areCookiesEnabled - " + e.message);
              }
            return !1;
          }),
          e
        );
      })();
  },
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.AWT_REAL_TIME = "REAL_TIME"),
      (t.AWT_NEAR_REAL_TIME = "NEAR_REAL_TIME"),
      (t.AWT_BEST_EFFORT = "BEST_EFFORT");
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(3),
      o = r(14),
      i = r(15),
      a = r(5),
      s = r(32),
      c = r(8),
      u = r(12),
      l = r(36),
      d = r(34),
      h = r(25),
      p = r(26),
      f = (function () {
        function e(e) {
          (this._apiKey = e),
            (this._contextProperties = new i.default()),
            (this._semanticContext = new h.default(!1, this._contextProperties)),
            (this._sessionStartTime = 0),
            this._createInitId();
        }
        return (
          (e.prototype.setContext = function (e, t, r) {
            void 0 === r && (r = n.AWTPropertyType.Unspecified), this._contextProperties.setProperty(e, t, r);
          }),
          (e.prototype.setContextWithPii = function (e, t, r, o) {
            void 0 === o && (o = n.AWTPropertyType.Unspecified), this._contextProperties.setPropertyWithPii(e, t, r, o);
          }),
          (e.prototype.setContextWithCustomerContent = function (e, t, r, o) {
            void 0 === o && (o = n.AWTPropertyType.Unspecified),
              this._contextProperties.setPropertyWithCustomerContent(e, t, r, o);
          }),
          (e.prototype.getSemanticContext = function () {
            return this._semanticContext;
          }),
          (e.prototype.logEvent = function (t) {
            if (l.default.loggingEnabled) {
              this._apiKey || ((this._apiKey = l.default.defaultTenantToken), this._createInitId());
              var r = !0;
              a.isString(t) ? (t = { name: t }) : t instanceof i.default && ((t = t.getEvent()), (r = !1)),
                s.default.eventReceived(this._apiKey),
                e._logEvent(e._getInternalEvent(t, this._apiKey, r), this._contextProperties);
            }
          }),
          (e.prototype.logSession = function (t, r) {
            if (l.default.sessionEnabled) {
              var i = { name: "session", type: "session", properties: {} };
              if (
                (e._addPropertiesToEvent(i, r), (i.priority = n.AWTEventPriority.High), t === o.AWTSessionState.Started)
              ) {
                if (this._sessionStartTime > 0) return;
                (this._sessionStartTime = new Date().getTime()),
                  (this._sessionId = a.newGuid()),
                  this.setContext("Session.Id", this._sessionId),
                  (i.properties["Session.State"] = "Started");
              } else {
                if (t !== o.AWTSessionState.Ended) return;
                if (0 === this._sessionStartTime) return;
                var s = Math.floor((new Date().getTime() - this._sessionStartTime) / 1e3);
                (i.properties["Session.Id"] = this._sessionId),
                  (i.properties["Session.State"] = "Ended"),
                  (i.properties["Session.Duration"] = s.toString()),
                  (i.properties["Session.DurationBucket"] = e._getSessionDurationFromTime(s)),
                  (this._sessionStartTime = 0),
                  this.setContext("Session.Id", null),
                  (this._sessionId = void 0);
              }
              (i.properties["Session.FirstLaunchTime"] = p.default.firstLaunchTime), this.logEvent(i);
            }
          }),
          (e.prototype.getSessionId = function () {
            return this._sessionId;
          }),
          (e.prototype.logFailure = function (t, r, o, i, a) {
            if (t && r) {
              var s = { name: "failure", type: "failure", properties: {} };
              e._addPropertiesToEvent(s, a),
                (s.properties["Failure.Signature"] = t),
                (s.properties["Failure.Detail"] = r),
                o && (s.properties["Failure.Category"] = o),
                i && (s.properties["Failure.Id"] = i),
                (s.priority = n.AWTEventPriority.High),
                this.logEvent(s);
            }
          }),
          (e.prototype.logPageView = function (t, r, n, o, i, a) {
            if (t && r) {
              var s = { name: "pageview", type: "pageview", properties: {} };
              e._addPropertiesToEvent(s, a),
                (s.properties["PageView.Id"] = t),
                (s.properties["PageView.Name"] = r),
                n && (s.properties["PageView.Category"] = n),
                o && (s.properties["PageView.Uri"] = o),
                i && (s.properties["PageView.ReferrerUri"] = i),
                this.logEvent(s);
            }
          }),
          (e.prototype._createInitId = function () {
            !e._initIdMap[this._apiKey] && this._apiKey && (e._initIdMap[this._apiKey] = a.newGuid());
          }),
          (e._addPropertiesToEvent = function (e, t) {
            if (t)
              for (var r in (t instanceof i.default && (t = t.getEvent()),
              t.name && (e.name = t.name),
              t.priority && (e.priority = t.priority),
              t.properties))
                t.properties.hasOwnProperty(r) && (e.properties[r] = t.properties[r]);
          }),
          (e._getSessionDurationFromTime = function (e) {
            return e < 0
              ? "Undefined"
              : e <= 3
              ? "UpTo3Sec"
              : e <= 10
              ? "UpTo10Sec"
              : e <= 30
              ? "UpTo30Sec"
              : e <= 60
              ? "UpTo60Sec"
              : e <= 180
              ? "UpTo3Min"
              : e <= 600
              ? "UpTo10Min"
              : e <= 1800
              ? "UpTo30Min"
              : "Above30Min";
          }),
          (e._logEvent = function (e, t) {
            e.name && a.isString(e.name)
              ? ((e.name = e.name.toLowerCase()),
                (e.name = e.name.replace(a.EventNameDotRegex, "_")),
                e.type && a.isString(e.type) ? (e.type = e.type.toLowerCase()) : (e.type = "custom"),
                a.EventNameAndTypeRegex.test(e.name) && a.EventNameAndTypeRegex.test(e.type)
                  ? ((!a.isNumber(e.timestamp) || e.timestamp < 0) && (e.timestamp = new Date().getTime()),
                    e.properties || (e.properties = {}),
                    this._addContextIfAbsent(e, t.getPropertyMap()),
                    this._addContextIfAbsent(e, l.default.logManagerContext.getPropertyMap()),
                    this._setDefaultProperty(e, "EventInfo.InitId", this._getInitId(e.apiKey)),
                    this._setDefaultProperty(e, "EventInfo.Sequence", this._getSequenceId(e.apiKey)),
                    this._setDefaultProperty(e, "EventInfo.SdkVersion", d.FullVersionString),
                    this._setDefaultProperty(e, "EventInfo.Name", e.name),
                    this._setDefaultProperty(e, "EventInfo.Time", new Date(e.timestamp).toISOString()),
                    a.isPriority(e.priority) || (e.priority = n.AWTEventPriority.Normal),
                    this._sendEvent(e))
                  : c.default.eventsRejected([e], n.AWTEventsRejectedReason.InvalidEvent))
              : c.default.eventsRejected([e], n.AWTEventsRejectedReason.InvalidEvent);
          }),
          (e._addContextIfAbsent = function (e, t) {
            if (t) for (var r in t) t.hasOwnProperty(r) && (e.properties[r] || (e.properties[r] = t[r]));
          }),
          (e._setDefaultProperty = function (e, t, r) {
            e.properties[t] = { value: r, pii: n.AWTPiiKind.NotSet, type: n.AWTPropertyType.String };
          }),
          (e._sendEvent = function (e) {
            u.default.sendEvent(e);
          }),
          (e._getInternalEvent = function (e, t, r) {
            if (((e.properties = e.properties || {}), r))
              for (var n in e.properties)
                e.properties.hasOwnProperty(n) &&
                  ((e.properties[n] = a.sanitizeProperty(n, e.properties[n])),
                  null === e.properties[n] && delete e.properties[n]);
            var o = e;
            return (o.id = a.newGuid()), (o.apiKey = t), o;
          }),
          (e._getInitId = function (t) {
            return e._initIdMap[t];
          }),
          (e._getSequenceId = function (t) {
            return void 0 === e._sequenceIdMap[t] && (e._sequenceIdMap[t] = 0), (++e._sequenceIdMap[t]).toString();
          }),
          (e._sequenceIdMap = {}),
          (e._initIdMap = {}),
          e
        );
      })();
    t.default = f;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(5),
      o = r(8),
      i = r(3),
      a = (function () {
        function e() {}
        return (
          (e.initialize = function (e) {
            var t = this;
            (this._sendStats = e),
              (this._isInitalized = !0),
              o.default.addNotificationListener({
                eventsSent: function (e) {
                  t._addStat("records_sent_count", e.length, e[0].apiKey);
                },
                eventsDropped: function (e, r) {
                  switch (r) {
                    case i.AWTEventsDroppedReason.NonRetryableStatus:
                      t._addStat("d_send_fail", e.length, e[0].apiKey),
                        t._addStat("records_dropped_count", e.length, e[0].apiKey);
                      break;
                    case i.AWTEventsDroppedReason.MaxRetryLimit:
                      t._addStat("d_retry_limit", e.length, e[0].apiKey),
                        t._addStat("records_dropped_count", e.length, e[0].apiKey);
                      break;
                    case i.AWTEventsDroppedReason.QueueFull:
                      t._addStat("d_queue_full", e.length, e[0].apiKey);
                  }
                },
                eventsRejected: function (e, r) {
                  switch (r) {
                    case i.AWTEventsRejectedReason.InvalidEvent:
                      t._addStat("r_inv", e.length, e[0].apiKey);
                      break;
                    case i.AWTEventsRejectedReason.KillSwitch:
                      t._addStat("r_kl", e.length, e[0].apiKey);
                      break;
                    case i.AWTEventsRejectedReason.SizeLimitExceeded:
                      t._addStat("r_size", e.length, e[0].apiKey);
                  }
                  t._addStat("r_count", e.length, e[0].apiKey);
                },
                eventsRetrying: null,
              }),
              setTimeout(function () {
                return t.flush();
              }, 6e4);
          }),
          (e.teardown = function () {
            this._isInitalized && (this.flush(), (this._isInitalized = !1));
          }),
          (e.eventReceived = function (t) {
            e._addStat("records_received_count", 1, t);
          }),
          (e.flush = function () {
            var e = this;
            if (this._isInitalized) {
              for (var t in this._stats) this._stats.hasOwnProperty(t) && this._sendStats(this._stats[t], t);
              (this._stats = {}),
                setTimeout(function () {
                  return e.flush();
                }, 6e4);
            }
          }),
          (e._addStat = function (e, t, r) {
            if (this._isInitalized && r !== n.StatsApiKey) {
              var o = n.getTenantId(r);
              this._stats[o] || (this._stats[o] = {}),
                this._stats[o][e] ? (this._stats[o][e] = this._stats[o][e] + t) : (this._stats[o][e] = t);
            }
          }),
          (e._isInitalized = !1),
          (e._stats = {}),
          e
        );
      })();
    t.default = a;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(50),
      o = r(3),
      i = r(8),
      a = r(5),
      s = (function () {
        function e() {}
        return (
          (e.getPayloadBlob = function (e, t) {
            var r,
              s = !1,
              c = new n.IO.MemoryStream(),
              u = new n.CompactBinaryProtocolWriter(c);
            for (var l in (u._WriteFieldBegin(n._BondDataType._BT_MAP, 3, null),
            u._WriteMapContainerBegin(t, n._BondDataType._BT_STRING, n._BondDataType._BT_LIST),
            e))
              if (s) r || (r = {}), (r[l] = e[l]), delete e[l];
              else if (e.hasOwnProperty(l)) {
                u._WriteString(l);
                var d = e[l];
                u._WriteContainerBegin(1, n._BondDataType._BT_STRUCT),
                  u._WriteFieldBegin(n._BondDataType._BT_STRING, 2, null),
                  u._WriteString("act_default_source"),
                  u._WriteFieldBegin(n._BondDataType._BT_STRING, 5, null),
                  u._WriteString(a.newGuid()),
                  u._WriteFieldBegin(n._BondDataType._BT_INT64, 6, null),
                  u._WriteInt64(a.numberToBondInt64(Date.now())),
                  u._WriteFieldBegin(n._BondDataType._BT_LIST, 8, null);
                var h = c._GetBuffer().length + 1;
                u._WriteContainerBegin(e[l].length, n._BondDataType._BT_STRUCT);
                for (var p = c._GetBuffer().length - h, f = 0; f < d.length; ++f) {
                  var g = c._GetBuffer().length;
                  if ((this.writeEvent(d[f], u), c._GetBuffer().length - g > 2936012))
                    i.default.eventsRejected([d[f]], o.AWTEventsRejectedReason.SizeLimitExceeded),
                      d.splice(f--, 1),
                      c._GetBuffer().splice(g),
                      this._addNewDataPackageSize(d.length, c, p, h);
                  else if (c._GetBuffer().length > 2936012) {
                    c._GetBuffer().splice(g),
                      r || (r = {}),
                      (e[l] = d.splice(0, f)),
                      (r[l] = d),
                      this._addNewDataPackageSize(e[l].length, c, p, h),
                      (s = !0);
                    break;
                  }
                }
                u._WriteStructEnd(!1);
              }
            return u._WriteStructEnd(!1), { payloadBlob: c._GetBuffer(), remainingRequest: r };
          }),
          (e._addNewDataPackageSize = function (e, t, r, o) {
            for (var i = n._Encoding._Varint_GetBytes(n.Number._ToUInt32(e)), a = 0; a < r; ++a) {
              if (!(a < i.length)) {
                t._GetBuffer().slice(o + a, r - a);
                break;
              }
              t._GetBuffer()[o + a] = i[a];
            }
          }),
          (e.writeEvent = function (e, t) {
            t._WriteFieldBegin(n._BondDataType._BT_STRING, 1, null),
              t._WriteString(e.id),
              t._WriteFieldBegin(n._BondDataType._BT_INT64, 3, null),
              t._WriteInt64(a.numberToBondInt64(e.timestamp)),
              t._WriteFieldBegin(n._BondDataType._BT_STRING, 5, null),
              t._WriteString(e.type),
              t._WriteFieldBegin(n._BondDataType._BT_STRING, 6, null),
              t._WriteString(e.name);
            var r = {},
              i = 0,
              s = {},
              c = 0,
              u = {},
              l = 0,
              d = {},
              h = 0,
              p = {},
              f = 0,
              g = {},
              y = 0,
              m = {},
              v = 0;
            for (var _ in e.properties) {
              if (e.properties.hasOwnProperty(_))
                if ((E = e.properties[_]).cc > 0) (m[_] = E), v++;
                else if (E.pii > 0) (g[_] = E), y++;
                else
                  switch (E.type) {
                    case o.AWTPropertyType.String:
                      (r[_] = E.value), i++;
                      break;
                    case o.AWTPropertyType.Int64:
                      (s[_] = E.value), c++;
                      break;
                    case o.AWTPropertyType.Double:
                      (u[_] = E.value), l++;
                      break;
                    case o.AWTPropertyType.Boolean:
                      (d[_] = E.value), h++;
                      break;
                    case o.AWTPropertyType.Date:
                      (p[_] = E.value), f++;
                  }
            }
            if (i)
              for (var _ in (t._WriteFieldBegin(n._BondDataType._BT_MAP, 13, null),
              t._WriteMapContainerBegin(i, n._BondDataType._BT_STRING, n._BondDataType._BT_STRING),
              r))
                if (r.hasOwnProperty(_)) {
                  var w = r[_];
                  t._WriteString(_), t._WriteString(w.toString());
                }
            if (y)
              for (var _ in (t._WriteFieldBegin(n._BondDataType._BT_MAP, 30, null),
              t._WriteMapContainerBegin(y, n._BondDataType._BT_STRING, n._BondDataType._BT_STRUCT),
              g))
                if (g.hasOwnProperty(_)) {
                  var E = g[_];
                  t._WriteString(_),
                    t._WriteFieldBegin(n._BondDataType._BT_INT32, 1, null),
                    t._WriteInt32(1),
                    t._WriteFieldBegin(n._BondDataType._BT_INT32, 2, null),
                    t._WriteInt32(E.pii),
                    t._WriteFieldBegin(n._BondDataType._BT_STRING, 3, null),
                    t._WriteString(E.value.toString()),
                    t._WriteStructEnd(!1);
                }
            if (h)
              for (var _ in (t._WriteFieldBegin(n._BondDataType._BT_MAP, 31, null),
              t._WriteMapContainerBegin(h, n._BondDataType._BT_STRING, n._BondDataType._BT_BOOL),
              d))
                if (d.hasOwnProperty(_)) {
                  w = d[_];
                  t._WriteString(_), t._WriteBool(w);
                }
            if (f)
              for (var _ in (t._WriteFieldBegin(n._BondDataType._BT_MAP, 32, null),
              t._WriteMapContainerBegin(f, n._BondDataType._BT_STRING, n._BondDataType._BT_INT64),
              p))
                if (p.hasOwnProperty(_)) {
                  w = p[_];
                  t._WriteString(_), t._WriteInt64(a.numberToBondInt64(w));
                }
            if (c)
              for (var _ in (t._WriteFieldBegin(n._BondDataType._BT_MAP, 33, null),
              t._WriteMapContainerBegin(c, n._BondDataType._BT_STRING, n._BondDataType._BT_INT64),
              s))
                if (s.hasOwnProperty(_)) {
                  w = s[_];
                  t._WriteString(_), t._WriteInt64(a.numberToBondInt64(w));
                }
            if (l)
              for (var _ in (t._WriteFieldBegin(n._BondDataType._BT_MAP, 34, null),
              t._WriteMapContainerBegin(l, n._BondDataType._BT_STRING, n._BondDataType._BT_DOUBLE),
              u))
                if (u.hasOwnProperty(_)) {
                  w = u[_];
                  t._WriteString(_), t._WriteDouble(w);
                }
            if (v)
              for (var _ in (t._WriteFieldBegin(n._BondDataType._BT_MAP, 36, null),
              t._WriteMapContainerBegin(v, n._BondDataType._BT_STRING, n._BondDataType._BT_STRUCT),
              m))
                if (m.hasOwnProperty(_)) {
                  E = m[_];
                  t._WriteString(_),
                    t._WriteFieldBegin(n._BondDataType._BT_INT32, 1, null),
                    t._WriteInt32(E.cc),
                    t._WriteFieldBegin(n._BondDataType._BT_STRING, 2, null),
                    t._WriteString(E.value.toString()),
                    t._WriteStructEnd(!1);
                }
            t._WriteStructEnd(!1);
          }),
          (e.base64Encode = function (e) {
            return n._Encoding._Base64_GetString(e);
          }),
          e
        );
      })();
    t.default = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Version = "1.8.6"),
      (t.FullVersionString = "AWT-Web-JS-" + t.Version);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(3),
      o = r(14),
      i = r(36),
      a = r(31),
      s = r(12),
      c = r(8),
      u = r(26),
      l = (function () {
        function e() {}
        return (
          (e.initialize = function (e, t) {
            if ((void 0 === t && (t = {}), !this._isInitialized))
              return (
                (this._isInitialized = !0),
                (i.default.defaultTenantToken = e),
                this._overrideValuesFromConfig(t),
                this._config.disableCookiesUsage &&
                  !this._config.propertyStorageOverride &&
                  (i.default.sessionEnabled = !1),
                u.default.addPropertyStorageOverride(this._config.propertyStorageOverride),
                u.default.autoCollect(
                  i.default.semanticContext,
                  this._config.disableCookiesUsage,
                  this._config.userAgent
                ),
                s.default.initialize(this._config),
                (i.default.loggingEnabled = !0),
                this._config.enableAutoUserSession &&
                  (this.getLogger().logSession(o.AWTSessionState.Started),
                  window.addEventListener("beforeunload", this.flushAndTeardown)),
                this.getLogger()
              );
          }),
          (e.getSemanticContext = function () {
            return i.default.semanticContext;
          }),
          (e.flush = function (e) {
            this._isInitialized && !this._isDestroyed && s.default.flush(e);
          }),
          (e.flushAndTeardown = function () {
            this._isInitialized &&
              !this._isDestroyed &&
              (this._config.enableAutoUserSession && this.getLogger().logSession(o.AWTSessionState.Ended),
              s.default.flushAndTeardown(),
              (i.default.loggingEnabled = !1),
              (this._isDestroyed = !0));
          }),
          (e.pauseTransmission = function () {
            this._isInitialized && !this._isDestroyed && s.default.pauseTransmission();
          }),
          (e.resumeTransmision = function () {
            this._isInitialized && !this._isDestroyed && s.default.resumeTransmision();
          }),
          (e.setTransmitProfile = function (e) {
            this._isInitialized && !this._isDestroyed && s.default.setTransmitProfile(e);
          }),
          (e.loadTransmitProfiles = function (e) {
            this._isInitialized && !this._isDestroyed && s.default.loadTransmitProfiles(e);
          }),
          (e.setContext = function (e, t, r) {
            void 0 === r && (r = n.AWTPropertyType.Unspecified), i.default.logManagerContext.setProperty(e, t, r);
          }),
          (e.setContextWithPii = function (e, t, r, o) {
            void 0 === o && (o = n.AWTPropertyType.Unspecified),
              i.default.logManagerContext.setPropertyWithPii(e, t, r, o);
          }),
          (e.setContextWithCustomerContent = function (e, t, r, o) {
            void 0 === o && (o = n.AWTPropertyType.Unspecified),
              i.default.logManagerContext.setPropertyWithCustomerContent(e, t, r, o);
          }),
          (e.getLogger = function (e) {
            var t = e;
            return (
              (t && t !== i.default.defaultTenantToken) || (t = ""),
              this._loggers[t] || (this._loggers[t] = new a.default(t)),
              this._loggers[t]
            );
          }),
          (e.addNotificationListener = function (e) {
            c.default.addNotificationListener(e);
          }),
          (e.removeNotificationListener = function (e) {
            c.default.removeNotificationListener(e);
          }),
          (e._overrideValuesFromConfig = function (e) {
            e.collectorUri && (this._config.collectorUri = e.collectorUri),
              e.cacheMemorySizeLimitInNumberOfEvents > 0 &&
                (this._config.cacheMemorySizeLimitInNumberOfEvents = e.cacheMemorySizeLimitInNumberOfEvents),
              e.httpXHROverride && e.httpXHROverride.sendPOST && (this._config.httpXHROverride = e.httpXHROverride),
              e.propertyStorageOverride &&
                e.propertyStorageOverride.getProperty &&
                e.propertyStorageOverride.setProperty &&
                (this._config.propertyStorageOverride = e.propertyStorageOverride),
              e.userAgent && (this._config.userAgent = e.userAgent),
              e.disableCookiesUsage && (this._config.disableCookiesUsage = e.disableCookiesUsage),
              e.canSendStatEvent && (this._config.canSendStatEvent = e.canSendStatEvent),
              e.enableAutoUserSession &&
                "undefined" != typeof window &&
                window.addEventListener &&
                (this._config.enableAutoUserSession = e.enableAutoUserSession),
              e.clockSkewRefreshDurationInMins > 0 &&
                (this._config.clockSkewRefreshDurationInMins = e.clockSkewRefreshDurationInMins);
          }),
          (e._loggers = {}),
          (e._isInitialized = !1),
          (e._isDestroyed = !1),
          (e._config = {
            collectorUri: "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
            cacheMemorySizeLimitInNumberOfEvents: 1e4,
            disableCookiesUsage: !1,
            canSendStatEvent: function (e) {
              return !0;
            },
            clockSkewRefreshDurationInMins: 0,
          }),
          e
        );
      })();
    t.default = l;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(15),
      o = r(25),
      i = (function () {
        function e() {}
        return (
          (e.logManagerContext = new n.default()),
          (e.sessionEnabled = !0),
          (e.loggingEnabled = !1),
          (e.defaultTenantToken = ""),
          (e.semanticContext = new o.default(!0, e.logManagerContext)),
          e
        );
      })();
    t.default = i;
  },
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    (function (e) {
      var n = r(21),
        o = r(22),
        i = setTimeout;
      function a(e) {
        return Boolean(e && void 0 !== e.length);
      }
      function s() {}
      function c(e) {
        if (!(this instanceof c)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), f(e, this);
      }
      function u(e, t) {
        for (; 3 === e._state; ) e = e._value;
        0 !== e._state
          ? ((e._handled = !0),
            c._immediateFn(function () {
              var r = 1 === e._state ? t.onFulfilled : t.onRejected;
              if (null !== r) {
                var n;
                try {
                  n = r(e._value);
                } catch (e) {
                  return void d(t.promise, e);
                }
                l(t.promise, n);
              } else (1 === e._state ? l : d)(t.promise, e._value);
            }))
          : e._deferreds.push(t);
      }
      function l(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var r = t.then;
            if (t instanceof c) return (e._state = 3), (e._value = t), void h(e);
            if ("function" == typeof r)
              return void f(
                (function (e, t) {
                  return function () {
                    e.apply(t, arguments);
                  };
                })(r, t),
                e
              );
          }
          (e._state = 1), (e._value = t), h(e);
        } catch (t) {
          d(e, t);
        }
      }
      function d(e, t) {
        (e._state = 2), (e._value = t), h(e);
      }
      function h(e) {
        2 === e._state &&
          0 === e._deferreds.length &&
          c._immediateFn(function () {
            e._handled || c._unhandledRejectionFn(e._value);
          });
        for (var t = 0, r = e._deferreds.length; t < r; t++) u(e, e._deferreds[t]);
        e._deferreds = null;
      }
      function p(e, t, r) {
        (this.onFulfilled = "function" == typeof e ? e : null),
          (this.onRejected = "function" == typeof t ? t : null),
          (this.promise = r);
      }
      function f(e, t) {
        var r = !1;
        try {
          e(
            function (e) {
              r || ((r = !0), l(t, e));
            },
            function (e) {
              r || ((r = !0), d(t, e));
            }
          );
        } catch (e) {
          if (r) return;
          (r = !0), d(t, e);
        }
      }
      (c.prototype.catch = function (e) {
        return this.then(null, e);
      }),
        (c.prototype.then = function (e, t) {
          var r = new this.constructor(s);
          return u(this, new p(e, t, r)), r;
        }),
        (c.prototype.finally = n.a),
        (c.all = function (e) {
          return new c(function (t, r) {
            if (!a(e)) return r(new TypeError("Promise.all accepts an array"));
            var n = Array.prototype.slice.call(e);
            if (0 === n.length) return t([]);
            var o = n.length;
            function i(e, a) {
              try {
                if (a && ("object" == typeof a || "function" == typeof a)) {
                  var s = a.then;
                  if ("function" == typeof s)
                    return void s.call(
                      a,
                      function (t) {
                        i(e, t);
                      },
                      r
                    );
                }
                (n[e] = a), 0 == --o && t(n);
              } catch (e) {
                r(e);
              }
            }
            for (var s = 0; s < n.length; s++) i(s, n[s]);
          });
        }),
        (c.allSettled = o.a),
        (c.resolve = function (e) {
          return e && "object" == typeof e && e.constructor === c
            ? e
            : new c(function (t) {
                t(e);
              });
        }),
        (c.reject = function (e) {
          return new c(function (t, r) {
            r(e);
          });
        }),
        (c.race = function (e) {
          return new c(function (t, r) {
            if (!a(e)) return r(new TypeError("Promise.race accepts an array"));
            for (var n = 0, o = e.length; n < o; n++) c.resolve(e[n]).then(t, r);
          });
        }),
        (c._immediateFn =
          ("function" == typeof e &&
            function (t) {
              e(t);
            }) ||
          function (e) {
            i(e, 0);
          }),
        (c._unhandledRejectionFn = function (e) {
          "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }),
        (t.a = c);
    }.call(this, r(43).setImmediate));
  },
  function (e, t, r) {
    "use strict";
    var n = r(46);
    function o(e) {
      this.message = e;
    }
    (o.prototype = new Error()),
      (o.prototype.name = "InvalidTokenError"),
      (e.exports = function (e, t) {
        if ("string" != typeof e) throw new o("Invalid token specified");
        var r = !0 === (t = t || {}).header ? 0 : 1;
        try {
          return JSON.parse(n(e.split(".")[r]));
        } catch (e) {
          throw new o("Invalid token specified: " + e.message);
        }
      }),
      (e.exports.InvalidTokenError = o);
  },
  function (e, t, r) {
    e.exports = r(61);
  },
  function (e, t, r) {
    (function (r) {
      var n, o, i, a, s, c, u, l, d, h, p, f, g, y, m, v, _, w, E, T, C;
      !(function (A) {
        var S = "object" == typeof r ? r : "object" == typeof self ? self : "object" == typeof this ? this : {};
        function b(e, t) {
          return (
            e !== S &&
              ("function" == typeof Object.create
                ? Object.defineProperty(e, "__esModule", { value: !0 })
                : (e.__esModule = !0)),
            function (r, n) {
              return (e[r] = t ? t(r, n) : n);
            }
          );
        }
        void 0 ===
          (n = function (e) {
            !(function (e) {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                };
              (o = function (e, r) {
                function n() {
                  this.constructor = e;
                }
                t(e, r), (e.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
              }),
                (i =
                  Object.assign ||
                  function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                  }),
                (a = function (e, t) {
                  var r = {};
                  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                  }
                  return r;
                }),
                (s = function (e, t, r, n) {
                  var o,
                    i = arguments.length,
                    a = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
                  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, r, n);
                  else
                    for (var s = e.length - 1; s >= 0; s--)
                      (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                  return i > 3 && a && Object.defineProperty(t, r, a), a;
                }),
                (c = function (e, t) {
                  return function (r, n) {
                    t(r, n, e);
                  };
                }),
                (u = function (e, t) {
                  if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t);
                }),
                (l = function (e, t, r, n) {
                  return new (r || (r = Promise))(function (o, i) {
                    function a(e) {
                      try {
                        c(n.next(e));
                      } catch (e) {
                        i(e);
                      }
                    }
                    function s(e) {
                      try {
                        c(n.throw(e));
                      } catch (e) {
                        i(e);
                      }
                    }
                    function c(e) {
                      e.done
                        ? o(e.value)
                        : new r(function (t) {
                            t(e.value);
                          }).then(a, s);
                    }
                    c((n = n.apply(e, t || [])).next());
                  });
                }),
                (d = function (e, t) {
                  var r,
                    n,
                    o,
                    i,
                    a = {
                      label: 0,
                      sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                      },
                      trys: [],
                      ops: [],
                    };
                  return (
                    (i = { next: s(0), throw: s(1), return: s(2) }),
                    "function" == typeof Symbol &&
                      (i[Symbol.iterator] = function () {
                        return this;
                      }),
                    i
                  );
                  function s(i) {
                    return function (s) {
                      return (function (i) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; a; )
                          try {
                            if (
                              ((r = 1),
                              n &&
                                (o =
                                  2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                                !(o = o.call(n, i[1])).done)
                            )
                              return o;
                            switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                              case 0:
                              case 1:
                                o = i;
                                break;
                              case 4:
                                return a.label++, { value: i[1], done: !1 };
                              case 5:
                                a.label++, (n = i[1]), (i = [0]);
                                continue;
                              case 7:
                                (i = a.ops.pop()), a.trys.pop();
                                continue;
                              default:
                                if (
                                  !((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                                ) {
                                  a = 0;
                                  continue;
                                }
                                if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                  a.label = i[1];
                                  break;
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                  (a.label = o[1]), (o = i);
                                  break;
                                }
                                if (o && a.label < o[2]) {
                                  (a.label = o[2]), a.ops.push(i);
                                  break;
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue;
                            }
                            i = t.call(e, a);
                          } catch (e) {
                            (i = [6, e]), (n = 0);
                          } finally {
                            r = o = 0;
                          }
                        if (5 & i[0]) throw i[1];
                        return { value: i[0] ? i[1] : void 0, done: !0 };
                      })([i, s]);
                    };
                  }
                }),
                (h = function (e, t) {
                  for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
                }),
                (p = function (e) {
                  var t = "function" == typeof Symbol && e[Symbol.iterator],
                    r = 0;
                  return t
                    ? t.call(e)
                    : {
                        next: function () {
                          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                        },
                      };
                }),
                (f = function (e, t) {
                  var r = "function" == typeof Symbol && e[Symbol.iterator];
                  if (!r) return e;
                  var n,
                    o,
                    i = r.call(e),
                    a = [];
                  try {
                    for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; ) a.push(n.value);
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      n && !n.done && (r = i.return) && r.call(i);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                  return a;
                }),
                (g = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
                  return e;
                }),
                (y = function () {
                  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                  var n = Array(e),
                    o = 0;
                  for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
                  return n;
                }),
                (m = function (e) {
                  return this instanceof m ? ((this.v = e), this) : new m(e);
                }),
                (v = function (e, t, r) {
                  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                  var n,
                    o = r.apply(e, t || []),
                    i = [];
                  return (
                    (n = {}),
                    a("next"),
                    a("throw"),
                    a("return"),
                    (n[Symbol.asyncIterator] = function () {
                      return this;
                    }),
                    n
                  );
                  function a(e) {
                    o[e] &&
                      (n[e] = function (t) {
                        return new Promise(function (r, n) {
                          i.push([e, t, r, n]) > 1 || s(e, t);
                        });
                      });
                  }
                  function s(e, t) {
                    try {
                      !(function (e) {
                        e.value instanceof m ? Promise.resolve(e.value.v).then(c, u) : l(i[0][2], e);
                      })(o[e](t));
                    } catch (e) {
                      l(i[0][3], e);
                    }
                  }
                  function c(e) {
                    s("next", e);
                  }
                  function u(e) {
                    s("throw", e);
                  }
                  function l(e, t) {
                    e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
                  }
                }),
                (_ = function (e) {
                  var t, r;
                  return (
                    (t = {}),
                    n("next"),
                    n("throw", function (e) {
                      throw e;
                    }),
                    n("return"),
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                    t
                  );
                  function n(n, o) {
                    t[n] = e[n]
                      ? function (t) {
                          return (r = !r) ? { value: m(e[n](t)), done: "return" === n } : o ? o(t) : t;
                        }
                      : o;
                  }
                }),
                (w = function (e) {
                  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                  var t,
                    r = e[Symbol.asyncIterator];
                  return r
                    ? r.call(e)
                    : ((e = p(e)),
                      (t = {}),
                      n("next"),
                      n("throw"),
                      n("return"),
                      (t[Symbol.asyncIterator] = function () {
                        return this;
                      }),
                      t);
                  function n(r) {
                    t[r] =
                      e[r] &&
                      function (t) {
                        return new Promise(function (n, o) {
                          (function (e, t, r, n) {
                            Promise.resolve(n).then(function (t) {
                              e({ value: t, done: r });
                            }, t);
                          })(n, o, (t = e[r](t)).done, t.value);
                        });
                      };
                  }
                }),
                (E = function (e, t) {
                  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
                }),
                (T = function (e) {
                  if (e && e.__esModule) return e;
                  var t = {};
                  if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                  return (t.default = e), t;
                }),
                (C = function (e) {
                  return e && e.__esModule ? e : { default: e };
                }),
                e("__extends", o),
                e("__assign", i),
                e("__rest", a),
                e("__decorate", s),
                e("__param", c),
                e("__metadata", u),
                e("__awaiter", l),
                e("__generator", d),
                e("__exportStar", h),
                e("__values", p),
                e("__read", f),
                e("__spread", g),
                e("__spreadArrays", y),
                e("__await", m),
                e("__asyncGenerator", v),
                e("__asyncDelegator", _),
                e("__asyncValues", w),
                e("__makeTemplateObject", E),
                e("__importStar", T),
                e("__importDefault", C);
            })(b(S, b(e)));
          }.apply(t, [t])) || (e.exports = n);
      })();
    }.call(this, r(11)));
  },
  function (e, t, r) {
    "use strict";
    (function (e) {
      var t = r(38),
        n = r(21),
        o = r(22),
        i = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== e) return e;
          throw new Error("unable to locate global object");
        })();
      "function" != typeof i.Promise
        ? (i.Promise = t.a)
        : i.Promise.prototype.finally
        ? i.Promise.allSettled || (i.Promise.allSettled = o.a)
        : (i.Promise.prototype.finally = n.a);
    }.call(this, r(11)));
  },
  function (e, t, r) {
    (function (e) {
      var n = (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        o = Function.prototype.apply;
      function i(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new i(o.call(setTimeout, n, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new i(o.call(setInterval, n, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (i.prototype.unref = i.prototype.ref = function () {}),
        (i.prototype.close = function () {
          this._clearFn.call(n, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        r(44),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, r(11)));
  },
  function (e, t, r) {
    (function (e, t) {
      !(function (e, r) {
        "use strict";
        if (!e.setImmediate) {
          var n,
            o = 1,
            i = {},
            a = !1,
            s = e.document,
            c = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (c = c && c.setTimeout ? c : e),
            "[object process]" === {}.toString.call(e.process)
              ? (function () {
                  n = function (e) {
                    t.nextTick(function () {
                      l(e);
                    });
                  };
                })()
              : (function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      r = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = r),
                      t
                    );
                  }
                })()
              ? (function () {
                  var t = "setImmediate$" + Math.random() + "$",
                    r = function (r) {
                      r.source === e &&
                        "string" == typeof r.data &&
                        0 === r.data.indexOf(t) &&
                        l(+r.data.slice(t.length));
                    };
                  e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r),
                    (n = function (r) {
                      e.postMessage(t + r, "*");
                    });
                })()
              : e.MessageChannel
              ? (function () {
                  var e = new MessageChannel();
                  (e.port1.onmessage = function (e) {
                    l(e.data);
                  }),
                    (n = function (t) {
                      e.port2.postMessage(t);
                    });
                })()
              : s && "onreadystatechange" in s.createElement("script")
              ? (function () {
                  var e = s.documentElement;
                  n = function (t) {
                    var r = s.createElement("script");
                    (r.onreadystatechange = function () {
                      l(t), (r.onreadystatechange = null), e.removeChild(r), (r = null);
                    }),
                      e.appendChild(r);
                  };
                })()
              : (function () {
                  n = function (e) {
                    setTimeout(l, 0, e);
                  };
                })(),
            (c.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
              var a = { callback: e, args: t };
              return (i[o] = a), n(o), o++;
            }),
            (c.clearImmediate = u);
        }
        function u(e) {
          delete i[e];
        }
        function l(e) {
          if (a) setTimeout(l, 0, e);
          else {
            var t = i[e];
            if (t) {
              a = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    r = e.args;
                  switch (r.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(r[0]);
                      break;
                    case 2:
                      t(r[0], r[1]);
                      break;
                    case 3:
                      t(r[0], r[1], r[2]);
                      break;
                    default:
                      t.apply(void 0, r);
                  }
                })(t);
              } finally {
                u(e), (a = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }.call(this, r(11), r(45)));
  },
  function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === i || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        r = i;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        n = a;
      }
    })();
    var c,
      u = [],
      l = !1,
      d = -1;
    function h() {
      l && c && ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && p());
    }
    function p() {
      if (!l) {
        var e = s(h);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === a || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function f(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new f(e, t)), 1 !== u.length || l || s(p);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = g),
      (o.addListener = g),
      (o.once = g),
      (o.off = g),
      (o.removeListener = g),
      (o.removeAllListeners = g),
      (o.emit = g),
      (o.prependListener = g),
      (o.prependOnceListener = g),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, r) {
    var n = r(47);
    e.exports = function (e) {
      var t = e.replace(/-/g, "+").replace(/_/g, "/");
      switch (t.length % 4) {
        case 0:
          break;
        case 2:
          t += "==";
          break;
        case 3:
          t += "=";
          break;
        default:
          throw "Illegal base64url string!";
      }
      try {
        return (function (e) {
          return decodeURIComponent(
            n(e).replace(/(.)/g, function (e, t) {
              var r = t.charCodeAt(0).toString(16).toUpperCase();
              return r.length < 2 && (r = "0" + r), "%" + r;
            })
          );
        })(t);
      } catch (e) {
        return n(t);
      }
    };
  },
  function (e, t) {
    function r(e) {
      this.message = e;
    }
    (r.prototype = new Error()),
      (r.prototype.name = "InvalidCharacterError"),
      (e.exports =
        ("undefined" != typeof window && window.atob && window.atob.bind(window)) ||
        function (e) {
          var t = String(e).replace(/=+$/, "");
          if (t.length % 4 == 1) throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
          for (
            var n, o, i = 0, a = 0, s = "";
            (o = t.charAt(a++));
            ~o && ((n = i % 4 ? 64 * n + o : o), i++ % 4) ? (s += String.fromCharCode(255 & (n >> ((-2 * i) & 6)))) : 0
          )
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
          return s;
        });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(3),
      o = r(49),
      i = r(12),
      a = r(59),
      s = r(8),
      c = r(5),
      u = (function () {
        function e(e, t, r, i) {
          (this._queueSizeLimit = t),
            (this._isCurrentlyUploadingNow = !1),
            (this._uploadNowQueue = []),
            (this._shouldDropEventsOnPause = !1),
            (this._paused = !1),
            (this._queueSize = 0),
            (this._outboundQueue = []),
            (this._inboundQueues = {}),
            (this._inboundQueues[n.AWTEventPriority.High] = []),
            (this._inboundQueues[n.AWTEventPriority.Normal] = []),
            (this._inboundQueues[n.AWTEventPriority.Low] = []),
            this._addEmptyQueues(),
            (this._batcher = new a.default(this._outboundQueue, 500)),
            (this._httpManager = new o.default(this._outboundQueue, e, this, r, i));
        }
        return (
          (e.prototype.addEvent = function (e) {
            c.isPriority(e.priority) || (e.priority = n.AWTEventPriority.Normal),
              e.priority === n.AWTEventPriority.Immediate_sync
                ? this._httpManager.sendSynchronousRequest(this._batcher.addEventToBatch(e), e.apiKey)
                : this._queueSize < this._queueSizeLimit || this._dropEventWithPriorityOrLess(e.priority)
                ? this._addEventToProperQueue(e)
                : s.default.eventsDropped([e], n.AWTEventsDroppedReason.QueueFull);
          }),
          (e.prototype.sendEventsForPriorityAndAbove = function (e) {
            this._batchEvents(e), this._httpManager.sendQueuedRequests();
          }),
          (e.prototype.hasEvents = function () {
            return (
              (this._inboundQueues[n.AWTEventPriority.High][0].length > 0 ||
                this._inboundQueues[n.AWTEventPriority.Normal][0].length > 0 ||
                this._inboundQueues[n.AWTEventPriority.Low][0].length > 0 ||
                this._batcher.hasBatch()) &&
              this._httpManager.hasIdleConnection()
            );
          }),
          (e.prototype.addBackRequest = function (e) {
            if (!this._paused || !this._shouldDropEventsOnPause) {
              for (var t in e)
                if (e.hasOwnProperty(t))
                  for (var r = 0; r < e[t].length; ++r)
                    e[t][r].sendAttempt < 6
                      ? this.addEvent(e[t][r])
                      : s.default.eventsDropped([e[t][r]], n.AWTEventsDroppedReason.MaxRetryLimit);
              i.default.scheduleTimer();
            }
          }),
          (e.prototype.teardown = function () {
            this._paused || (this._batchEvents(n.AWTEventPriority.Low), this._httpManager.teardown());
          }),
          (e.prototype.uploadNow = function (e) {
            var t = this;
            this._addEmptyQueues(),
              this._isCurrentlyUploadingNow
                ? this._uploadNowQueue.push(e)
                : ((this._isCurrentlyUploadingNow = !0),
                  setTimeout(function () {
                    return t._uploadNow(e);
                  }, 0));
          }),
          (e.prototype.pauseTransmission = function () {
            (this._paused = !0),
              this._httpManager.pause(),
              this.shouldDropEventsOnPause &&
                ((this._queueSize -=
                  this._inboundQueues[n.AWTEventPriority.High][0].length +
                  this._inboundQueues[n.AWTEventPriority.Normal][0].length +
                  this._inboundQueues[n.AWTEventPriority.Low][0].length),
                (this._inboundQueues[n.AWTEventPriority.High][0] = []),
                (this._inboundQueues[n.AWTEventPriority.Normal][0] = []),
                (this._inboundQueues[n.AWTEventPriority.Low][0] = []),
                this._httpManager.removeQueuedRequests());
          }),
          (e.prototype.resumeTransmission = function () {
            (this._paused = !1), this._httpManager.resume();
          }),
          (e.prototype.shouldDropEventsOnPause = function (e) {
            this._shouldDropEventsOnPause = e;
          }),
          (e.prototype._removeFirstQueues = function () {
            this._inboundQueues[n.AWTEventPriority.High].shift(),
              this._inboundQueues[n.AWTEventPriority.Normal].shift(),
              this._inboundQueues[n.AWTEventPriority.Low].shift();
          }),
          (e.prototype._addEmptyQueues = function () {
            this._inboundQueues[n.AWTEventPriority.High].push([]),
              this._inboundQueues[n.AWTEventPriority.Normal].push([]),
              this._inboundQueues[n.AWTEventPriority.Low].push([]);
          }),
          (e.prototype._addEventToProperQueue = function (e) {
            (this._paused && this._shouldDropEventsOnPause) ||
              (this._queueSize++, this._inboundQueues[e.priority][this._inboundQueues[e.priority].length - 1].push(e));
          }),
          (e.prototype._dropEventWithPriorityOrLess = function (e) {
            for (var t = n.AWTEventPriority.Low; t <= e; ) {
              if (this._inboundQueues[t][this._inboundQueues[t].length - 1].length > 0)
                return (
                  s.default.eventsDropped(
                    [this._inboundQueues[t][this._inboundQueues[t].length - 1].shift()],
                    n.AWTEventsDroppedReason.QueueFull
                  ),
                  !0
                );
              t++;
            }
            return !1;
          }),
          (e.prototype._batchEvents = function (e) {
            for (var t = n.AWTEventPriority.High; t >= e; ) {
              for (; this._inboundQueues[t][0].length > 0; ) {
                var r = this._inboundQueues[t][0].pop();
                this._queueSize--, this._batcher.addEventToBatch(r);
              }
              t--;
            }
            this._batcher.flushBatch();
          }),
          (e.prototype._uploadNow = function (e) {
            var t = this;
            this.hasEvents() && this.sendEventsForPriorityAndAbove(n.AWTEventPriority.Low),
              this._checkOutboundQueueEmptyAndSent(function () {
                t._removeFirstQueues(),
                  null != e && e(),
                  t._uploadNowQueue.length > 0
                    ? setTimeout(function () {
                        return t._uploadNow(t._uploadNowQueue.shift());
                      }, 0)
                    : ((t._isCurrentlyUploadingNow = !1), t.hasEvents() && i.default.scheduleTimer());
              });
          }),
          (e.prototype._checkOutboundQueueEmptyAndSent = function (e) {
            var t = this;
            this._httpManager.isCompletelyIdle()
              ? e()
              : setTimeout(function () {
                  return t._checkOutboundQueueEmptyAndSent(e);
                }, 250);
          }),
          e
        );
      })();
    t.default = u;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(3),
      o = r(33),
      i = r(56),
      a = r(57),
      s = r(58),
      c = r(34),
      u = r(5),
      l = r(8),
      d = r(12),
      h = (function () {
        function e(e, t, r, n, o) {
          var i = this;
          (this._requestQueue = e),
            (this._queueManager = r),
            (this._httpInterface = n),
            (this._urlString =
              "?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version=" +
              c.FullVersionString),
            (this._killSwitch = new a.default()),
            (this._paused = !1),
            (this._useBeacons = !1),
            (this._activeConnections = 0),
            (this._clockSkewManager = new s.default(o)),
            u.isUint8ArrayAvailable() || (this._urlString += "&content-encoding=base64"),
            (this._urlString = t + this._urlString),
            this._httpInterface ||
              ((this._useBeacons = !u.isReactNative()),
              (this._httpInterface = {
                sendPOST: function (e, t, r, n, o, a) {
                  try {
                    if (u.useFetchRequest())
                      fetch(e, { body: t, method: "POST" })
                        .then(function (e) {
                          var t = {};
                          e.headers &&
                            e.headers.forEach(function (e, r) {
                              t[r] = e;
                            }),
                            o(e.status, t);
                        })
                        .catch(function (e) {
                          n(0, {});
                        });
                    else if (u.useXDomainRequest()) {
                      var s = new XDomainRequest();
                      s.open("POST", e),
                        (s.onload = function () {
                          o(200, null);
                        }),
                        (s.onerror = function () {
                          n(400, null);
                        }),
                        (s.ontimeout = function () {
                          r(500, null);
                        }),
                        s.send(t);
                    } else {
                      var c = new XMLHttpRequest();
                      c.open("POST", e, !a),
                        (c.onload = function () {
                          o(c.status, i._convertAllHeadersToMap(c.getAllResponseHeaders()));
                        }),
                        (c.onerror = function () {
                          n(c.status, i._convertAllHeadersToMap(c.getAllResponseHeaders()));
                        }),
                        (c.ontimeout = function () {
                          r(c.status, i._convertAllHeadersToMap(c.getAllResponseHeaders()));
                        }),
                        c.send(t);
                    }
                  } catch (e) {
                    n(400, null);
                  }
                },
              }));
        }
        return (
          (e.prototype.hasIdleConnection = function () {
            return this._activeConnections < 2;
          }),
          (e.prototype.sendQueuedRequests = function () {
            for (
              ;
              this.hasIdleConnection() &&
              !this._paused &&
              this._requestQueue.length > 0 &&
              this._clockSkewManager.allowRequestSending();

            )
              this._activeConnections++, this._sendRequest(this._requestQueue.shift(), 0, !1);
            this.hasIdleConnection() && d.default.scheduleTimer();
          }),
          (e.prototype.isCompletelyIdle = function () {
            return 0 === this._activeConnections;
          }),
          (e.prototype.teardown = function () {
            for (; this._requestQueue.length > 0; ) this._sendRequest(this._requestQueue.shift(), 0, !0);
          }),
          (e.prototype.pause = function () {
            this._paused = !0;
          }),
          (e.prototype.resume = function () {
            (this._paused = !1), this.sendQueuedRequests();
          }),
          (e.prototype.removeQueuedRequests = function () {
            this._requestQueue.length = 0;
          }),
          (e.prototype.sendSynchronousRequest = function (e, t) {
            this._paused && (e[t][0].priority = n.AWTEventPriority.High),
              this._activeConnections++,
              this._sendRequest(e, 0, !1, !0);
          }),
          (e.prototype._sendRequest = function (e, t, r, i) {
            var a = this;
            void 0 === i && (i = !1);
            try {
              if (this._paused) return this._activeConnections--, void this._queueManager.addBackRequest(e);
              var s = 0,
                c = "";
              for (var d in e)
                e.hasOwnProperty(d) &&
                  (this._killSwitch.isTenantKilled(d)
                    ? (l.default.eventsRejected(e[d], n.AWTEventsRejectedReason.KillSwitch), delete e[d])
                    : (c.length > 0 && (c += ","), (c += d), s++));
              if (s > 0) {
                var h = o.default.getPayloadBlob(e, s);
                h.remainingRequest && this._requestQueue.push(h.remainingRequest);
                var p = this._urlString + "&x-apikey=" + c + "&client-time-epoch-millis=" + Date.now().toString();
                this._clockSkewManager.shouldAddClockSkewHeaders() &&
                  (p = p + "&time-delta-to-apply-millis=" + this._clockSkewManager.getClockSkewHeaderValue());
                var f = void 0;
                for (var d in ((f = u.isUint8ArrayAvailable()
                  ? new Uint8Array(h.payloadBlob)
                  : o.default.base64Encode(h.payloadBlob)),
                e))
                  if (e.hasOwnProperty(d))
                    for (var g = 0; g < e[d].length; ++g)
                      e[d][g].sendAttempt > 0 ? e[d][g].sendAttempt++ : (e[d][g].sendAttempt = 1);
                if (this._useBeacons && r && u.isBeaconsSupported() && navigator.sendBeacon(p, f)) return;
                this._httpInterface.sendPOST(
                  p,
                  f,
                  function (n, o) {
                    a._retryRequestIfNeeded(n, o, e, s, c, t, r, i);
                  },
                  function (n, o) {
                    a._retryRequestIfNeeded(n, o, e, s, c, t, r, i);
                  },
                  function (n, o) {
                    a._retryRequestIfNeeded(n, o, e, s, c, t, r, i);
                  },
                  r || i
                );
              } else r || this._handleRequestFinished(!1, {}, r, i);
            } catch (e) {
              this._handleRequestFinished(!1, {}, r, i);
            }
          }),
          (e.prototype._retryRequestIfNeeded = function (e, t, r, o, a, s, c, u) {
            var h = this,
              p = !0;
            if (void 0 !== e) {
              if (t) {
                var f = this._killSwitch.setKillSwitchTenants(t["kill-tokens"], t["kill-duration-seconds"]);
                this._clockSkewManager.setClockSkew(t["time-delta-millis"]);
                for (var g = 0; g < f.length; ++g)
                  l.default.eventsRejected(r[f[g]], n.AWTEventsRejectedReason.KillSwitch), delete r[f[g]], o--;
              } else this._clockSkewManager.setClockSkew(null);
              if (200 === e) return void this._handleRequestFinished(!0, r, c, u);
              (!i.default.shouldRetryForStatus(e) || o <= 0) && (p = !1);
            }
            if (p)
              if (u)
                this._activeConnections--,
                  (r[a][0].priority = n.AWTEventPriority.High),
                  this._queueManager.addBackRequest(r);
              else if (s < 1) {
                for (var y in r) r.hasOwnProperty(y) && l.default.eventsRetrying(r[y]);
                setTimeout(function () {
                  return h._sendRequest(r, s + 1, !1);
                }, i.default.getMillisToBackoffForRetry(s));
              } else this._activeConnections--, d.default.backOffTransmission(), this._queueManager.addBackRequest(r);
            else this._handleRequestFinished(!1, r, c, u);
          }),
          (e.prototype._handleRequestFinished = function (e, t, r, o) {
            for (var i in (e && d.default.clearBackOff(), t))
              t.hasOwnProperty(i) &&
                (e
                  ? l.default.eventsSent(t[i])
                  : l.default.eventsDropped(t[i], n.AWTEventsDroppedReason.NonRetryableStatus));
            this._activeConnections--, o || r || this.sendQueuedRequests();
          }),
          (e.prototype._convertAllHeadersToMap = function (e) {
            var t = {};
            if (e)
              for (var r = e.split("\n"), n = 0; n < r.length; ++n) {
                var o = r[n].split(": ");
                t[o[0]] = o[1];
              }
            return t;
          }),
          e
        );
      })();
    t.default = h;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(51);
    t._BondDataType = n._BondDataType;
    var o = r(52);
    t._Encoding = o;
    var i = r(55);
    t.IO = i;
    var a = r(16);
    (t.Int64 = a.Int64), (t.UInt64 = a.UInt64), (t.Number = a.Number);
    var s = (function () {
      function e(e) {
        this._stream = e;
      }
      return (
        (e.prototype._WriteBlob = function (e) {
          this._stream._Write(e, 0, e.length);
        }),
        (e.prototype._WriteBool = function (e) {
          this._stream._WriteByte(e ? 1 : 0);
        }),
        (e.prototype._WriteContainerBegin = function (e, t) {
          this._WriteUInt8(t), this._WriteUInt32(e);
        }),
        (e.prototype._WriteMapContainerBegin = function (e, t, r) {
          this._WriteUInt8(t), this._WriteUInt8(r), this._WriteUInt32(e);
        }),
        (e.prototype._WriteDouble = function (e) {
          var t = o._Double_GetBytes(e);
          this._stream._Write(t, 0, t.length);
        }),
        (e.prototype._WriteFieldBegin = function (e, t, r) {
          t <= 5
            ? this._stream._WriteByte(e | (t << 5))
            : t <= 255
            ? (this._stream._WriteByte(192 | e), this._stream._WriteByte(t))
            : (this._stream._WriteByte(224 | e), this._stream._WriteByte(t), this._stream._WriteByte(t >> 8));
        }),
        (e.prototype._WriteInt32 = function (e) {
          (e = o._Zigzag_EncodeZigzag32(e)), this._WriteUInt32(e);
        }),
        (e.prototype._WriteInt64 = function (e) {
          this._WriteUInt64(o._Zigzag_EncodeZigzag64(e));
        }),
        (e.prototype._WriteString = function (e) {
          if ("" === e) this._WriteUInt32(0);
          else {
            var t = o._Utf8_GetBytes(e);
            this._WriteUInt32(t.length), this._stream._Write(t, 0, t.length);
          }
        }),
        (e.prototype._WriteStructEnd = function (e) {
          this._WriteUInt8(e ? n._BondDataType._BT_STOP_BASE : n._BondDataType._BT_STOP);
        }),
        (e.prototype._WriteUInt32 = function (e) {
          var t = o._Varint_GetBytes(a.Number._ToUInt32(e));
          this._stream._Write(t, 0, t.length);
        }),
        (e.prototype._WriteUInt64 = function (e) {
          var t = o._Varint64_GetBytes(e);
          this._stream._Write(t, 0, t.length);
        }),
        (e.prototype._WriteUInt8 = function (e) {
          this._stream._WriteByte(a.Number._ToUInt8(e));
        }),
        e
      );
    })();
    t.CompactBinaryProtocolWriter = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e._BT_STOP = 0)] = "_BT_STOP"),
          (e[(e._BT_STOP_BASE = 1)] = "_BT_STOP_BASE"),
          (e[(e._BT_BOOL = 2)] = "_BT_BOOL"),
          (e[(e._BT_DOUBLE = 8)] = "_BT_DOUBLE"),
          (e[(e._BT_STRING = 9)] = "_BT_STRING"),
          (e[(e._BT_STRUCT = 10)] = "_BT_STRUCT"),
          (e[(e._BT_LIST = 11)] = "_BT_LIST"),
          (e[(e._BT_MAP = 13)] = "_BT_MAP"),
          (e[(e._BT_INT32 = 16)] = "_BT_INT32"),
          (e[(e._BT_INT64 = 17)] = "_BT_INT64");
      })(t._BondDataType || (t._BondDataType = {}));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(16),
      o = r(53),
      i = r(54);
    (t._Utf8_GetBytes = function (e) {
      for (var t = [], r = 0; r < e.length; ++r) {
        var n = e.charCodeAt(r);
        n < 128
          ? t.push(n)
          : n < 2048
          ? t.push(192 | (n >> 6), 128 | (63 & n))
          : n < 55296 || n >= 57344
          ? t.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
          : ((n = 65536 + (((1023 & n) << 10) | (1023 & e.charCodeAt(++r)))),
            t.push(240 | (n >> 18), 128 | ((n >> 12) & 63), 128 | ((n >> 6) & 63), 128 | (63 & n)));
      }
      return t;
    }),
      (t._Base64_GetString = function (e) {
        for (
          var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            r = [],
            n = e.length % 3,
            o = function (e) {
              return [
                t.charAt((e >> 18) & 63),
                t.charAt((e >> 12) & 63),
                t.charAt((e >> 6) & 63),
                t.charAt(63 & e),
              ].join("");
            },
            i = 0,
            a = e.length - n;
          i < a;
          i += 3
        ) {
          var s = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2];
          r.push(o(s));
        }
        switch (n) {
          case 1:
            s = e[e.length - 1];
            r.push(t.charAt(s >> 2)), r.push(t.charAt((s << 4) & 63)), r.push("==");
            break;
          case 2:
            var c = (e[e.length - 2] << 8) + e[e.length - 1];
            r.push(t.charAt(c >> 10)), r.push(t.charAt((c >> 4) & 63)), r.push(t.charAt((c << 2) & 63)), r.push("=");
        }
        return r.join("");
      }),
      (t._Varint_GetBytes = function (e) {
        for (var t = []; 4294967168 & e; ) t.push((127 & e) | 128), (e >>>= 7);
        return t.push(127 & e), t;
      }),
      (t._Varint64_GetBytes = function (e) {
        for (var t = e.low, r = e.high, n = []; r || 4294967168 & t; )
          n.push((127 & t) | 128), (t = ((127 & r) << 25) | (t >>> 7)), (r >>>= 7);
        return n.push(127 & t), n;
      }),
      (t._Double_GetBytes = function (e) {
        if (i.BrowserChecker._IsDataViewSupport()) {
          var t = new DataView(new ArrayBuffer(8));
          t.setFloat64(0, e, !0);
          for (var r = [], n = 0; n < 8; ++n) r.push(t.getUint8(n));
          return r;
        }
        return o.FloatUtils._ConvertNumberToArray(e, !0);
      }),
      (t._Zigzag_EncodeZigzag32 = function (e) {
        return ((e = n.Number._ToInt32(e)) << 1) ^ (e >> 31);
      }),
      (t._Zigzag_EncodeZigzag64 = function (e) {
        var t = e.low,
          r = e.high,
          o = (r << 1) | (t >>> 31),
          i = t << 1;
        2147483648 & r && ((o = ~o), (i = ~i));
        var a = new n.UInt64("0");
        return (a.low = i), (a.high = o), a;
      });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {}
      return (
        (e._ConvertNumberToArray = function (e, t) {
          if (!e) return t ? this._doubleZero : this._floatZero;
          var r = t ? 52 : 23,
            n = (1 << ((t ? 11 : 8) - 1)) - 1,
            o = 1 - n,
            i = n,
            a = e < 0 ? 1 : 0;
          e = Math.abs(e);
          for (var s = Math.floor(e), c = e - s, u = 2 * (n + 2) + r, l = new Array(u), d = 0; d < u; ) l[d++] = 0;
          for (d = n + 2; d && s; ) (l[--d] = s % 2), (s = Math.floor(s / 2));
          for (d = n + 1; d < u - 1 && c > 0; ) (c *= 2) >= 1 ? ((l[++d] = 1), --c) : (l[++d] = 0);
          for (var h = 0; h < u && !l[h]; ) h++;
          var p = n + 1 - h,
            f = h + r;
          if (l[f + 1]) {
            for (d = f; d > h && ((l[d] = 1 - l[d]), !l); --d);
            d === h && ++p;
          }
          if (p > i || s)
            return a
              ? t
                ? this._doubleNegInifinity
                : this._floatNegInifinity
              : t
              ? this._doubleInifinity
              : this._floatInifinity;
          if (p < o) return t ? this._doubleZero : this._floatZero;
          if (t) {
            var g = 0;
            for (d = 0; d < 20; ++d) g = (g << 1) | l[++h];
            for (var y = 0; d < 52; ++d) y = (y << 1) | l[++h];
            return [
              255 & y,
              (y >> 8) & 255,
              (y >> 16) & 255,
              y >>> 24,
              255 & (g = (a << 31) | (2147483647 & (g |= (p + n) << 20))),
              (g >> 8) & 255,
              (g >> 16) & 255,
              g >>> 24,
            ];
          }
          var m = 0;
          for (d = 0; d < 23; ++d) m = (m << 1) | l[++h];
          return [
            255 & (m = (a << 31) | (2147483647 & (m |= (p + n) << 23))),
            (m >> 8) & 255,
            (m >> 16) & 255,
            m >>> 24,
          ];
        }),
        (e._floatZero = [0, 0, 0, 0]),
        (e._doubleZero = [0, 0, 0, 0, 0, 0, 0, 0]),
        (e._floatInifinity = [0, 0, 128, 127]),
        (e._floatNegInifinity = [0, 0, 128, 255]),
        (e._doubleInifinity = [0, 0, 0, 0, 0, 0, 240, 127]),
        (e._doubleNegInifinity = [0, 0, 0, 0, 0, 0, 240, 255]),
        e
      );
    })();
    t.FloatUtils = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {}
      return (
        (e._IsDataViewSupport = function () {
          return "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
        }),
        e
      );
    })();
    t.BrowserChecker = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(16),
      o = (function () {
        function e() {
          this._buffer = [];
        }
        return (
          (e.prototype._WriteByte = function (e) {
            this._buffer.push(n.Number._ToByte(e));
          }),
          (e.prototype._Write = function (e, t, r) {
            for (; r--; ) this._WriteByte(e[t++]);
          }),
          (e.prototype._GetBuffer = function () {
            return this._buffer;
          }),
          e
        );
      })();
    t.MemoryStream = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {}
      return (
        (e.shouldRetryForStatus = function (e) {
          return !((e >= 300 && e < 500 && 408 !== e) || 501 === e || 505 === e);
        }),
        (e.getMillisToBackoffForRetry = function (e) {
          var t,
            r = Math.floor(1200 * Math.random()) + 2400;
          return (t = Math.pow(4, e) * r), Math.min(t, 12e4);
        }),
        e
      );
    })();
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e() {
        this._killedTokenDictionary = {};
      }
      return (
        (e.prototype.setKillSwitchTenants = function (e, t) {
          if (e && t)
            try {
              var r = e.split(",");
              if ("this-request-only" === t) return r;
              for (var n = 1e3 * parseInt(t, 10), o = 0; o < r.length; ++o)
                this._killedTokenDictionary[r[o]] = Date.now() + n;
            } catch (e) {
              return [];
            }
          return [];
        }),
        (e.prototype.isTenantKilled = function (e) {
          return (
            (void 0 !== this._killedTokenDictionary[e] && this._killedTokenDictionary[e] > Date.now()) ||
            (delete this._killedTokenDictionary[e], !1)
          );
        }),
        e
      );
    })();
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
      function e(e) {
        (this.clockSkewRefreshDurationInMins = e), this._reset();
      }
      return (
        (e.prototype.allowRequestSending = function () {
          return this._isFirstRequest && !this._clockSkewSet
            ? ((this._isFirstRequest = !1), (this._allowRequestSending = !1), !0)
            : this._allowRequestSending;
        }),
        (e.prototype.shouldAddClockSkewHeaders = function () {
          return this._shouldAddClockSkewHeaders;
        }),
        (e.prototype.getClockSkewHeaderValue = function () {
          return this._clockSkewHeaderValue;
        }),
        (e.prototype.setClockSkew = function (e) {
          this._clockSkewSet ||
            (e ? (this._clockSkewHeaderValue = e) : (this._shouldAddClockSkewHeaders = !1),
            (this._clockSkewSet = !0),
            (this._allowRequestSending = !0));
        }),
        (e.prototype._reset = function () {
          var e = this;
          (this._isFirstRequest = !0),
            (this._clockSkewSet = !1),
            (this._allowRequestSending = !0),
            (this._shouldAddClockSkewHeaders = !0),
            (this._clockSkewHeaderValue = "use-collector-delta"),
            this.clockSkewRefreshDurationInMins > 0 &&
              setTimeout(function () {
                return e._reset();
              }, 6e4 * this.clockSkewRefreshDurationInMins);
        }),
        e
      );
    })();
    t.default = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(3),
      o = (function () {
        function e(e, t) {
          (this._outboundQueue = e),
            (this._maxNumberOfEvents = t),
            (this._currentBatch = {}),
            (this._currentNumEventsInBatch = 0);
        }
        return (
          (e.prototype.addEventToBatch = function (e) {
            if (e.priority === n.AWTEventPriority.Immediate_sync) {
              var t = {};
              return (t[e.apiKey] = [e]), t;
            }
            return (
              this._currentNumEventsInBatch >= this._maxNumberOfEvents && this.flushBatch(),
              void 0 === this._currentBatch[e.apiKey] && (this._currentBatch[e.apiKey] = []),
              this._currentBatch[e.apiKey].push(e),
              this._currentNumEventsInBatch++,
              null
            );
          }),
          (e.prototype.flushBatch = function () {
            this._currentNumEventsInBatch > 0 &&
              (this._outboundQueue.push(this._currentBatch),
              (this._currentBatch = {}),
              (this._currentNumEventsInBatch = 0));
          }),
          (e.prototype.hasBatch = function () {
            return this._currentNumEventsInBatch > 0;
          }),
          e
        );
      })();
    t.default = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(12),
      o = (function () {
        function e() {}
        return (
          (e.setEventsHandler = function (e) {
            n.default.setEventsHandler(e);
          }),
          (e.getEventsHandler = function () {
            return n.default.getEventsHandler();
          }),
          (e.scheduleTimer = function () {
            n.default.scheduleTimer();
          }),
          e
        );
      })();
    t.default = o;
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    r(41), r(27), r(42);
    var n = r(23),
      o = function (e, t) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
    function i(e, t) {
      function r() {
        this.constructor = e;
      }
      o(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    }
    var a = function () {
      return (a =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function s(e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function a(e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          e.done
            ? o(e.value)
            : (function (e) {
                return e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    });
              })(e.value).then(a, s);
        }
        c((n = n.apply(e, t || [])).next());
      });
    }
    function c(e, t) {
      var r,
        n,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function s(i) {
        return function (s) {
          return (function (i) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((r = 1),
                  n &&
                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                    !(o = o.call(n, i[1])).done)
                )
                  return o;
                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++, { value: i[1], done: !1 };
                  case 5:
                    a.label++, (n = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = i);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                i = t.call(e, a);
              } catch (e) {
                (i = [6, e]), (n = 0);
              } finally {
                r = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, s]);
        };
      }
    }
    function u() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      var n = Array(e),
        o = 0;
      for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
      return n;
    }
    var l,
      d,
      h,
      p,
      f,
      g = {
        LIBRARY_NAME: "MSAL.JS",
        SKU: "msal.js.common",
        CACHE_PREFIX: "msal",
        DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
        DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
        ADFS: "adfs",
        AAD_INSTANCE_DISCOVERY_ENDPT:
          "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
        RESOURCE_DELIM: "|",
        NO_ACCOUNT: "NO_ACCOUNT",
        CLAIMS: "claims",
        CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
        OPENID_SCOPE: "openid",
        PROFILE_SCOPE: "profile",
        OFFLINE_ACCESS_SCOPE: "offline_access",
        EMAIL_SCOPE: "email",
        CODE_RESPONSE_TYPE: "code",
        CODE_GRANT_TYPE: "authorization_code",
        RT_GRANT_TYPE: "refresh_token",
        FRAGMENT_RESPONSE_MODE: "fragment",
        S256_CODE_CHALLENGE_METHOD: "S256",
        URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
        AUTHORIZATION_PENDING: "authorization_pending",
        NOT_DEFINED: "not_defined",
        EMPTY_STRING: "",
        FORWARD_SLASH: "/",
        IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
        IMDS_VERSION: "2020-06-01",
        IMDS_TIMEOUT: 2e3,
        AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
        REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
        KNOWN_PUBLIC_CLOUDS: [
          "login.microsoftonline.com",
          "login.windows.net",
          "login.microsoft.com",
          "sts.windows.net",
        ],
      },
      y = [g.OPENID_SCOPE, g.PROFILE_SCOPE, g.OFFLINE_ACCESS_SCOPE],
      m = u(y, [g.EMAIL_SCOPE]);
    !(function (e) {
      (e.CONTENT_TYPE = "Content-Type"),
        (e.RETRY_AFTER = "Retry-After"),
        (e.CCS_HEADER = "X-AnchorMailbox"),
        (e.WWWAuthenticate = "WWW-Authenticate"),
        (e.AuthenticationInfo = "Authentication-Info");
    })(l || (l = {})),
      (function (e) {
        (e.ID_TOKEN = "idtoken"),
          (e.CLIENT_INFO = "client.info"),
          (e.ADAL_ID_TOKEN = "adal.idtoken"),
          (e.ERROR = "error"),
          (e.ERROR_DESC = "error.description"),
          (e.ACTIVE_ACCOUNT = "active-account");
      })(d || (d = {})),
      (function (e) {
        (e.COMMON = "common"), (e.ORGANIZATIONS = "organizations"), (e.CONSUMERS = "consumers");
      })(h || (h = {})),
      (function (e) {
        (e.CLIENT_ID = "client_id"),
          (e.REDIRECT_URI = "redirect_uri"),
          (e.RESPONSE_TYPE = "response_type"),
          (e.RESPONSE_MODE = "response_mode"),
          (e.GRANT_TYPE = "grant_type"),
          (e.CLAIMS = "claims"),
          (e.SCOPE = "scope"),
          (e.ERROR = "error"),
          (e.ERROR_DESCRIPTION = "error_description"),
          (e.ACCESS_TOKEN = "access_token"),
          (e.ID_TOKEN = "id_token"),
          (e.REFRESH_TOKEN = "refresh_token"),
          (e.EXPIRES_IN = "expires_in"),
          (e.STATE = "state"),
          (e.NONCE = "nonce"),
          (e.PROMPT = "prompt"),
          (e.SESSION_STATE = "session_state"),
          (e.CLIENT_INFO = "client_info"),
          (e.CODE = "code"),
          (e.CODE_CHALLENGE = "code_challenge"),
          (e.CODE_CHALLENGE_METHOD = "code_challenge_method"),
          (e.CODE_VERIFIER = "code_verifier"),
          (e.CLIENT_REQUEST_ID = "client-request-id"),
          (e.X_CLIENT_SKU = "x-client-SKU"),
          (e.X_CLIENT_VER = "x-client-VER"),
          (e.X_CLIENT_OS = "x-client-OS"),
          (e.X_CLIENT_CPU = "x-client-CPU"),
          (e.X_CLIENT_CURR_TELEM = "x-client-current-telemetry"),
          (e.X_CLIENT_LAST_TELEM = "x-client-last-telemetry"),
          (e.X_MS_LIB_CAPABILITY = "x-ms-lib-capability"),
          (e.POST_LOGOUT_URI = "post_logout_redirect_uri"),
          (e.ID_TOKEN_HINT = "id_token_hint"),
          (e.DEVICE_CODE = "device_code"),
          (e.CLIENT_SECRET = "client_secret"),
          (e.CLIENT_ASSERTION = "client_assertion"),
          (e.CLIENT_ASSERTION_TYPE = "client_assertion_type"),
          (e.TOKEN_TYPE = "token_type"),
          (e.REQ_CNF = "req_cnf"),
          (e.OBO_ASSERTION = "assertion"),
          (e.REQUESTED_TOKEN_USE = "requested_token_use"),
          (e.ON_BEHALF_OF = "on_behalf_of"),
          (e.FOCI = "foci"),
          (e.CCS_HEADER = "X-AnchorMailbox");
      })(p || (p = {})),
      (function (e) {
        (e.ACCESS_TOKEN = "access_token"), (e.XMS_CC = "xms_cc");
      })(f || (f = {}));
    var v,
      _ = { LOGIN: "login", SELECT_ACCOUNT: "select_account", CONSENT: "consent", NONE: "none", CREATE: "create" };
    !(function (e) {
      (e.ACCOUNT = "account"),
        (e.SID = "sid"),
        (e.LOGIN_HINT = "login_hint"),
        (e.ID_TOKEN = "id_token"),
        (e.DOMAIN_HINT = "domain_hint"),
        (e.ORGANIZATIONS = "organizations"),
        (e.CONSUMERS = "consumers"),
        (e.ACCOUNT_ID = "accountIdentifier"),
        (e.HOMEACCOUNT_ID = "homeAccountIdentifier");
    })(v || (v = {}));
    var w,
      E,
      T,
      C,
      A,
      S,
      b,
      I = { PLAIN: "plain", S256: "S256" };
    !(function (e) {
      (e.QUERY = "query"), (e.FRAGMENT = "fragment"), (e.FORM_POST = "form_post");
    })(w || (w = {})),
      (function (e) {
        (e.IMPLICIT_GRANT = "implicit"),
          (e.AUTHORIZATION_CODE_GRANT = "authorization_code"),
          (e.CLIENT_CREDENTIALS_GRANT = "client_credentials"),
          (e.RESOURCE_OWNER_PASSWORD_GRANT = "password"),
          (e.REFRESH_TOKEN_GRANT = "refresh_token"),
          (e.DEVICE_CODE_GRANT = "device_code"),
          (e.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer");
      })(E || (E = {})),
      (function (e) {
        (e.MSSTS_ACCOUNT_TYPE = "MSSTS"),
          (e.ADFS_ACCOUNT_TYPE = "ADFS"),
          (e.MSAV1_ACCOUNT_TYPE = "MSA"),
          (e.GENERIC_ACCOUNT_TYPE = "Generic");
      })(T || (T = {})),
      (function (e) {
        (e.CACHE_KEY_SEPARATOR = "-"), (e.CLIENT_INFO_SEPARATOR = ".");
      })(C || (C = {})),
      (function (e) {
        (e.ID_TOKEN = "IdToken"),
          (e.ACCESS_TOKEN = "AccessToken"),
          (e.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme"),
          (e.REFRESH_TOKEN = "RefreshToken");
      })(A || (A = {})),
      (function (e) {
        (e.ACCOUNT = "Account"),
          (e.CREDENTIAL = "Credential"),
          (e.ID_TOKEN = "IdToken"),
          (e.ACCESS_TOKEN = "AccessToken"),
          (e.REFRESH_TOKEN = "RefreshToken"),
          (e.APP_METADATA = "AppMetadata"),
          (e.TEMPORARY = "TempCache"),
          (e.TELEMETRY = "Telemetry"),
          (e.UNDEFINED = "Undefined"),
          (e.THROTTLING = "Throttling");
      })(S || (S = {})),
      (function (e) {
        (e[(e.ADFS = 1001)] = "ADFS"),
          (e[(e.MSA = 1002)] = "MSA"),
          (e[(e.MSSTS = 1003)] = "MSSTS"),
          (e[(e.GENERIC = 1004)] = "GENERIC"),
          (e[(e.ACCESS_TOKEN = 2001)] = "ACCESS_TOKEN"),
          (e[(e.REFRESH_TOKEN = 2002)] = "REFRESH_TOKEN"),
          (e[(e.ID_TOKEN = 2003)] = "ID_TOKEN"),
          (e[(e.APP_METADATA = 3001)] = "APP_METADATA"),
          (e[(e.UNDEFINED = 9999)] = "UNDEFINED");
      })(b || (b = {}));
    var R,
      k = "authority-metadata",
      P = 86400;
    !(function (e) {
      (e.CONFIG = "config"), (e.CACHE = "cache"), (e.NETWORK = "network");
    })(R || (R = {}));
    var O,
      N = {
        SCHEMA_VERSION: 5,
        MAX_CUR_HEADER_BYTES: 80,
        MAX_LAST_HEADER_BYTES: 330,
        MAX_CACHED_ERRORS: 50,
        CACHE_KEY: "server-telemetry",
        CATEGORY_SEPARATOR: "|",
        VALUE_SEPARATOR: ",",
        OVERFLOW_TRUE: "1",
        OVERFLOW_FALSE: "0",
        UNKNOWN_ERROR: "unknown_error",
      };
    !(function (e) {
      (e.BEARER = "Bearer"), (e.POP = "pop"), (e.SSH = "ssh-cert");
    })(O || (O = {}));
    var F,
      M,
      U,
      D,
      L,
      x = 60,
      q = 3600,
      H = "throttling",
      B = "retry-after, h429",
      W = "invalid_grant",
      K = "client_mismatch";
    !(function (e) {
      (e.username = "username"), (e.password = "password");
    })(F || (F = {})),
      (function (e) {
        (e[(e.httpSuccess = 200)] = "httpSuccess"), (e[(e.httpBadRequest = 400)] = "httpBadRequest");
      })(M || (M = {})),
      (function (e) {
        (e.FAILED_AUTO_DETECTION = "1"), (e.INTERNAL_CACHE = "2"), (e.ENVIRONMENT_VARIABLE = "3"), (e.IMDS = "4");
      })(U || (U = {})),
      (function (e) {
        (e.CONFIGURED_MATCHES_DETECTED = "1"),
          (e.CONFIGURED_NO_AUTO_DETECTION = "2"),
          (e.CONFIGURED_NOT_DETECTED = "3"),
          (e.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4"),
          (e.AUTO_DETECTION_REQUESTED_FAILED = "5");
      })(D || (D = {})),
      (function (e) {
        (e.NO_CACHE_HIT = "0"),
          (e.FORCE_REFRESH = "1"),
          (e.NO_CACHED_ACCESS_TOKEN = "2"),
          (e.CACHED_ACCESS_TOKEN_EXPIRED = "3"),
          (e.REFRESH_CACHED_ACCESS_TOKEN = "4");
      })(L || (L = {}));
    var j,
      G,
      z,
      V,
      Q,
      J,
      Y,
      X = "invalid_grant",
      Z = 483,
      $ = 600,
      ee = "msal",
      te = 50,
      re = "msal.js.browser";
    !(function (e) {
      (e.LocalStorage = "localStorage"), (e.SessionStorage = "sessionStorage"), (e.MemoryStorage = "memoryStorage");
    })(j || (j = {})),
      (function (e) {
        (e.GET = "GET"), (e.POST = "POST");
      })(G || (G = {})),
      (function (e) {
        (e.AUTHORITY = "authority"),
          (e.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account"),
          (e.SESSION_STATE = "session.state"),
          (e.REQUEST_STATE = "request.state"),
          (e.NONCE_IDTOKEN = "nonce.id_token"),
          (e.ORIGIN_URI = "request.origin"),
          (e.RENEW_STATUS = "token.renew.status"),
          (e.URL_HASH = "urlHash"),
          (e.REQUEST_PARAMS = "request.params"),
          (e.SCOPES = "scopes"),
          (e.INTERACTION_STATUS_KEY = "interaction.status"),
          (e.CCS_CREDENTIAL = "ccs.credential"),
          (e.CORRELATION_ID = "request.correlationId");
      })(z || (z = {})),
      (function (e) {
        (e.WRAPPER_SKU = "wrapper.sku"), (e.WRAPPER_VER = "wrapper.version");
      })(V || (V = {})),
      (function (e) {
        (e[(e.acquireTokenRedirect = 861)] = "acquireTokenRedirect"),
          (e[(e.acquireTokenPopup = 862)] = "acquireTokenPopup"),
          (e[(e.ssoSilent = 863)] = "ssoSilent"),
          (e[(e.acquireTokenSilent_authCode = 864)] = "acquireTokenSilent_authCode"),
          (e[(e.handleRedirectPromise = 865)] = "handleRedirectPromise"),
          (e[(e.acquireTokenSilent_silentFlow = 61)] = "acquireTokenSilent_silentFlow"),
          (e[(e.logout = 961)] = "logout"),
          (e[(e.logoutPopup = 962)] = "logoutPopup");
      })(Q || (Q = {})),
      (function (e) {
        (e.Redirect = "redirect"), (e.Popup = "popup"), (e.Silent = "silent");
      })(J || (J = {})),
      (function (e) {
        (e.Startup = "startup"),
          (e.Login = "login"),
          (e.Logout = "logout"),
          (e.AcquireToken = "acquireToken"),
          (e.SsoSilent = "ssoSilent"),
          (e.HandleRedirect = "handleRedirect"),
          (e.None = "none");
      })(Y || (Y = {}));
    var ne,
      oe = { scopes: y };
    !(function (e) {
      (e.React = "@azure/msal-react"), (e.Angular = "@azure/msal-angular");
    })(ne || (ne = {}));
    var ie = function (e, t) {
      return (ie =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        })(e, t);
    };
    function ae(e, t) {
      function r() {
        this.constructor = e;
      }
      ie(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    }
    var se = function () {
      return (se =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function ce(e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function a(e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          e.done
            ? o(e.value)
            : (function (e) {
                return e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    });
              })(e.value).then(a, s);
        }
        c((n = n.apply(e, t || [])).next());
      });
    }
    function ue(e, t) {
      var r,
        n,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function s(i) {
        return function (s) {
          return (function (i) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((r = 1),
                  n &&
                    (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                    !(o = o.call(n, i[1])).done)
                )
                  return o;
                switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++, { value: i[1], done: !1 };
                  case 5:
                    a.label++, (n = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = i);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                i = t.call(e, a);
              } catch (e) {
                (i = [6, e]), (n = 0);
              } finally {
                r = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, s]);
        };
      }
    }
    function le(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var n,
        o,
        i = r.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; ) a.push(n.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          n && !n.done && (r = i.return) && r.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    }
    function de() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(le(arguments[t]));
      return e;
    }
    var he,
      pe = (function () {
        function e() {}
        return (
          (e.decimalToHex = function (e) {
            for (var t = e.toString(16); t.length < 2; ) t = "0" + t;
            return t;
          }),
          e
        );
      })(),
      fe = (function () {
        function e(e) {
          this.cryptoObj = e;
        }
        return (
          (e.prototype.generateGuid = function () {
            try {
              var e = new Uint8Array(16);
              return (
                this.cryptoObj.getRandomValues(e),
                (e[6] |= 64),
                (e[6] &= 79),
                (e[8] |= 128),
                (e[8] &= 191),
                pe.decimalToHex(e[0]) +
                  pe.decimalToHex(e[1]) +
                  pe.decimalToHex(e[2]) +
                  pe.decimalToHex(e[3]) +
                  "-" +
                  pe.decimalToHex(e[4]) +
                  pe.decimalToHex(e[5]) +
                  "-" +
                  pe.decimalToHex(e[6]) +
                  pe.decimalToHex(e[7]) +
                  "-" +
                  pe.decimalToHex(e[8]) +
                  pe.decimalToHex(e[9]) +
                  "-" +
                  pe.decimalToHex(e[10]) +
                  pe.decimalToHex(e[11]) +
                  pe.decimalToHex(e[12]) +
                  pe.decimalToHex(e[13]) +
                  pe.decimalToHex(e[14]) +
                  pe.decimalToHex(e[15])
              );
            } catch (e) {
              for (
                var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", r = "0123456789abcdef", n = 0, o = "", i = 0;
                i < 36;
                i++
              )
                "-" !== t[i] && "4" !== t[i] && (n = (16 * Math.random()) | 0),
                  "x" === t[i] ? (o += r[n]) : "y" === t[i] ? ((n &= 3), (o += r[(n |= 8)])) : (o += t[i]);
              return o;
            }
          }),
          (e.isGuid = function (e) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
          }),
          e
        );
      })(),
      ge = (function () {
        function e() {}
        return (
          (e.stringToUtf8Arr = function (e) {
            for (var t, r = 0, n = e.length, o = 0; o < n; o++)
              r +=
                (t = e.charCodeAt(o)) < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
            for (var i = new Uint8Array(r), a = 0, s = 0; a < r; s++)
              (t = e.charCodeAt(s)) < 128
                ? (i[a++] = t)
                : t < 2048
                ? ((i[a++] = 192 + (t >>> 6)), (i[a++] = 128 + (63 & t)))
                : t < 65536
                ? ((i[a++] = 224 + (t >>> 12)), (i[a++] = 128 + ((t >>> 6) & 63)), (i[a++] = 128 + (63 & t)))
                : t < 2097152
                ? ((i[a++] = 240 + (t >>> 18)),
                  (i[a++] = 128 + ((t >>> 12) & 63)),
                  (i[a++] = 128 + ((t >>> 6) & 63)),
                  (i[a++] = 128 + (63 & t)))
                : t < 67108864
                ? ((i[a++] = 248 + (t >>> 24)),
                  (i[a++] = 128 + ((t >>> 18) & 63)),
                  (i[a++] = 128 + ((t >>> 12) & 63)),
                  (i[a++] = 128 + ((t >>> 6) & 63)),
                  (i[a++] = 128 + (63 & t)))
                : ((i[a++] = 252 + (t >>> 30)),
                  (i[a++] = 128 + ((t >>> 24) & 63)),
                  (i[a++] = 128 + ((t >>> 18) & 63)),
                  (i[a++] = 128 + ((t >>> 12) & 63)),
                  (i[a++] = 128 + ((t >>> 6) & 63)),
                  (i[a++] = 128 + (63 & t)));
            return i;
          }),
          (e.stringToArrayBuffer = function (e) {
            for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n < e.length; n++)
              r[n] = e.charCodeAt(n);
            return t;
          }),
          (e.utf8ArrToString = function (e) {
            for (var t = "", r = void 0, n = e.length, o = 0; o < n; o++)
              (r = e[o]),
                (t += String.fromCharCode(
                  r > 251 && r < 254 && o + 5 < n
                    ? 1073741824 * (r - 252) +
                        ((e[++o] - 128) << 24) +
                        ((e[++o] - 128) << 18) +
                        ((e[++o] - 128) << 12) +
                        ((e[++o] - 128) << 6) +
                        e[++o] -
                        128
                    : r > 247 && r < 252 && o + 4 < n
                    ? ((r - 248) << 24) +
                      ((e[++o] - 128) << 18) +
                      ((e[++o] - 128) << 12) +
                      ((e[++o] - 128) << 6) +
                      e[++o] -
                      128
                    : r > 239 && r < 248 && o + 3 < n
                    ? ((r - 240) << 18) + ((e[++o] - 128) << 12) + ((e[++o] - 128) << 6) + e[++o] - 128
                    : r > 223 && r < 240 && o + 2 < n
                    ? ((r - 224) << 12) + ((e[++o] - 128) << 6) + e[++o] - 128
                    : r > 191 && r < 224 && o + 1 < n
                    ? ((r - 192) << 6) + e[++o] - 128
                    : r
                ));
            return t;
          }),
          e
        );
      })(),
      ye = (function () {
        function e() {}
        return (
          (e.prototype.urlEncode = function (e) {
            return encodeURIComponent(this.encode(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"));
          }),
          (e.prototype.urlEncodeArr = function (e) {
            return this.base64EncArr(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
          }),
          (e.prototype.encode = function (e) {
            var t = ge.stringToUtf8Arr(e);
            return this.base64EncArr(t);
          }),
          (e.prototype.base64EncArr = function (e) {
            for (var t = (3 - (e.length % 3)) % 3, r = "", n = void 0, o = e.length, i = 0, a = 0; a < o; a++)
              (n = a % 3),
                (i |= e[a] << ((16 >>> n) & 24)),
                (2 !== n && e.length - a != 1) ||
                  ((r += String.fromCharCode(
                    this.uint6ToB64((i >>> 18) & 63),
                    this.uint6ToB64((i >>> 12) & 63),
                    this.uint6ToB64((i >>> 6) & 63),
                    this.uint6ToB64(63 & i)
                  )),
                  (i = 0));
            return 0 === t ? r : r.substring(0, r.length - t) + (1 === t ? "=" : "==");
          }),
          (e.prototype.uint6ToB64 = function (e) {
            return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : 62 === e ? 43 : 63 === e ? 47 : 65;
          }),
          e
        );
      })(),
      me = (function () {
        function e() {}
        return (
          (e.prototype.decode = function (e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw new Error("Invalid base64 string");
            }
            var r = this.base64DecToArr(t);
            return ge.utf8ArrToString(r);
          }),
          (e.prototype.base64DecToArr = function (e, t) {
            for (
              var r = e.replace(/[^A-Za-z0-9\+\/]/g, ""),
                n = r.length,
                o = t ? Math.ceil(((3 * n + 1) >>> 2) / t) * t : (3 * n + 1) >>> 2,
                i = new Uint8Array(o),
                a = void 0,
                s = void 0,
                c = 0,
                u = 0,
                l = 0;
              l < n;
              l++
            )
              if (((s = 3 & l), (c |= this.b64ToUint6(r.charCodeAt(l)) << (18 - 6 * s)), 3 === s || n - l == 1)) {
                for (a = 0; a < 3 && u < o; a++, u++) i[u] = (c >>> ((16 >>> a) & 24)) & 255;
                c = 0;
              }
            return i;
          }),
          (e.prototype.b64ToUint6 = function (e) {
            return e > 64 && e < 91
              ? e - 65
              : e > 96 && e < 123
              ? e - 71
              : e > 47 && e < 58
              ? e + 4
              : 43 === e
              ? 62
              : 47 === e
              ? 63
              : 0;
          }),
          e
        );
      })(),
      ve = { code: "unexpected_error", desc: "Unexpected error in authentication." },
      _e = (function (e) {
        function t(r, n, o) {
          var i = this,
            a = n ? r + ": " + n : r;
          return (
            (i = e.call(this, a) || this),
            Object.setPrototypeOf(i, t.prototype),
            (i.errorCode = r || g.EMPTY_STRING),
            (i.errorMessage = n || ""),
            (i.subError = o || ""),
            (i.name = "AuthError"),
            i
          );
        }
        return (
          i(t, e),
          (t.prototype.setCorrelationId = function (e) {
            this.correlationId = e;
          }),
          (t.createUnexpectedError = function (e) {
            return new t(ve.code, ve.desc + ": " + e);
          }),
          t
        );
      })(Error),
      we = {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause.",
      },
      Ee = {
        code: "client_info_empty_error",
        desc: "The client info was empty. Please review the trace to determine the root cause.",
      },
      Te = {
        code: "token_parsing_error",
        desc: "Token cannot be parsed. Please review stack trace to determine root cause.",
      },
      Ce = {
        code: "null_or_empty_token",
        desc: "The token is null or empty. Please review the trace to determine the root cause.",
      },
      Ae = {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again.",
      },
      Se = {
        code: "network_error",
        desc: "Network request failed. Please check network trace to determine root cause.",
      },
      be = {
        code: "openid_config_error",
        desc: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
      },
      Ie = {
        code: "hash_not_deserialized",
        desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause.",
      },
      Re = {
        code: "invalid_state",
        desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState().",
      },
      ke = {
        code: "state_mismatch",
        desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow.",
      },
      Pe = { code: "state_not_found", desc: "State not found" },
      Oe = {
        code: "nonce_mismatch",
        desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests.",
      },
      Ne = { code: "nonce_not_found", desc: "nonce not found" },
      Fe = {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
      },
      Me = {
        code: "multiple_matching_accounts",
        desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
      },
      Ue = {
        code: "multiple_matching_appMetadata",
        desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
      },
      De = {
        code: "request_cannot_be_made",
        desc: "Token request cannot be made without authorization code or refresh token.",
      },
      Le = {
        code: "cannot_append_empty_scope",
        desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info.",
      },
      xe = {
        code: "cannot_remove_empty_scope",
        desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info.",
      },
      qe = { code: "cannot_append_scopeset", desc: "Cannot append ScopeSet due to error." },
      He = { code: "empty_input_scopeset", desc: "Empty input ScopeSet cannot be processed." },
      Be = {
        code: "device_code_polling_cancelled",
        desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
      },
      We = { code: "device_code_expired", desc: "Device code is expired." },
      Ke = { code: "device_code_unknown_error", desc: "Device code stopped polling for unknown reasons." },
      je = {
        code: "no_account_in_silent_request",
        desc: "Please pass an account object, silent flow is not supported without account information",
      },
      Ge = { code: "invalid_cache_record", desc: "Cache record object was null or undefined." },
      ze = { code: "invalid_cache_environment", desc: "Invalid environment when attempting to create cache entry" },
      Ve = { code: "no_account_found", desc: "No account found in cache for given key." },
      Qe = {
        code: "no cache plugin set on CacheManager",
        desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage",
      },
      Je = {
        code: "no_crypto_object",
        desc: "No crypto object detected. This is required for the following operation: ",
      },
      Ye = { code: "invalid_cache_type", desc: "Invalid cache type" },
      Xe = { code: "unexpected_account_type", desc: "Unexpected account type." },
      Ze = { code: "unexpected_credential_type", desc: "Unexpected credential type." },
      $e = {
        code: "invalid_assertion",
        desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
      },
      et = {
        code: "invalid_client_credential",
        desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
      },
      tt = {
        code: "token_refresh_required",
        desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
      },
      rt = { code: "user_timeout_reached", desc: "User defined timeout for device code polling reached" },
      nt = {
        code: "token_claims_cnf_required_for_signedjwt",
        desc: "Cannot generate a POP jwt if the token_claims are not populated",
      },
      ot = {
        code: "authorization_code_missing_from_server_response",
        desc: "Server response does not contain an authorization code to proceed",
      },
      it = { code: "binding_key_not_removed", desc: "Could not remove the credential's binding key from storage." },
      at = { code: "end_session_endpoint_not_supported", desc: "Provided authority does not support logout." },
      st = (function (e) {
        function t(r, n) {
          var o = e.call(this, r, n) || this;
          return (o.name = "ClientAuthError"), Object.setPrototypeOf(o, t.prototype), o;
        }
        return (
          i(t, e),
          (t.createClientInfoDecodingError = function (e) {
            return new t(we.code, we.desc + " Failed with error: " + e);
          }),
          (t.createClientInfoEmptyError = function () {
            return new t(Ee.code, "" + Ee.desc);
          }),
          (t.createTokenParsingError = function (e) {
            return new t(Te.code, Te.desc + " Failed with error: " + e);
          }),
          (t.createTokenNullOrEmptyError = function (e) {
            return new t(Ce.code, Ce.desc + " Raw Token Value: " + e);
          }),
          (t.createEndpointDiscoveryIncompleteError = function (e) {
            return new t(Ae.code, Ae.desc + " Detail: " + e);
          }),
          (t.createNetworkError = function (e, r) {
            return new t(
              Se.code,
              Se.desc + " | Fetch client threw: " + r + " | Attempted to reach: " + e.split("?")[0]
            );
          }),
          (t.createUnableToGetOpenidConfigError = function (e) {
            return new t(be.code, be.desc + " Attempted to retrieve endpoints from: " + e);
          }),
          (t.createHashNotDeserializedError = function (e) {
            return new t(Ie.code, Ie.desc + " Given Object: " + e);
          }),
          (t.createInvalidStateError = function (e, r) {
            return new t(Re.code, Re.desc + " Invalid State: " + e + ", Root Err: " + r);
          }),
          (t.createStateMismatchError = function () {
            return new t(ke.code, ke.desc);
          }),
          (t.createStateNotFoundError = function (e) {
            return new t(Pe.code, Pe.desc + ":  " + e);
          }),
          (t.createNonceMismatchError = function () {
            return new t(Oe.code, Oe.desc);
          }),
          (t.createNonceNotFoundError = function (e) {
            return new t(Ne.code, Ne.desc + ":  " + e);
          }),
          (t.createMultipleMatchingTokensInCacheError = function () {
            return new t(Fe.code, Fe.desc + ".");
          }),
          (t.createMultipleMatchingAccountsInCacheError = function () {
            return new t(Me.code, Me.desc);
          }),
          (t.createMultipleMatchingAppMetadataInCacheError = function () {
            return new t(Ue.code, Ue.desc);
          }),
          (t.createTokenRequestCannotBeMadeError = function () {
            return new t(De.code, De.desc);
          }),
          (t.createAppendEmptyScopeToSetError = function (e) {
            return new t(Le.code, Le.desc + " Given Scope: " + e);
          }),
          (t.createRemoveEmptyScopeFromSetError = function (e) {
            return new t(xe.code, xe.desc + " Given Scope: " + e);
          }),
          (t.createAppendScopeSetError = function (e) {
            return new t(qe.code, qe.desc + " Detail Error: " + e);
          }),
          (t.createEmptyInputScopeSetError = function () {
            return new t(He.code, "" + He.desc);
          }),
          (t.createDeviceCodeCancelledError = function () {
            return new t(Be.code, "" + Be.desc);
          }),
          (t.createDeviceCodeExpiredError = function () {
            return new t(We.code, "" + We.desc);
          }),
          (t.createDeviceCodeUnknownError = function () {
            return new t(Ke.code, "" + Ke.desc);
          }),
          (t.createNoAccountInSilentRequestError = function () {
            return new t(je.code, "" + je.desc);
          }),
          (t.createNullOrUndefinedCacheRecord = function () {
            return new t(Ge.code, Ge.desc);
          }),
          (t.createInvalidCacheEnvironmentError = function () {
            return new t(ze.code, ze.desc);
          }),
          (t.createNoAccountFoundError = function () {
            return new t(Ve.code, Ve.desc);
          }),
          (t.createCachePluginError = function () {
            return new t(Qe.code, "" + Qe.desc);
          }),
          (t.createNoCryptoObjectError = function (e) {
            return new t(Je.code, "" + Je.desc + e);
          }),
          (t.createInvalidCacheTypeError = function () {
            return new t(Ye.code, "" + Ye.desc);
          }),
          (t.createUnexpectedAccountTypeError = function () {
            return new t(Xe.code, "" + Xe.desc);
          }),
          (t.createUnexpectedCredentialTypeError = function () {
            return new t(Ze.code, "" + Ze.desc);
          }),
          (t.createInvalidAssertionError = function () {
            return new t($e.code, "" + $e.desc);
          }),
          (t.createInvalidCredentialError = function () {
            return new t(et.code, "" + et.desc);
          }),
          (t.createRefreshRequiredError = function () {
            return new t(tt.code, tt.desc);
          }),
          (t.createUserTimeoutReachedError = function () {
            return new t(rt.code, rt.desc);
          }),
          (t.createTokenClaimsRequiredError = function () {
            return new t(nt.code, nt.desc);
          }),
          (t.createNoAuthCodeInServerResponseError = function () {
            return new t(ot.code, ot.desc);
          }),
          (t.createBindingKeyNotRemovedError = function () {
            return new t(it.code, it.desc);
          }),
          (t.createLogoutNotSupportedError = function () {
            return new t(at.code, at.desc);
          }),
          t
        );
      })(_e),
      ct = (function () {
        function e() {}
        return (
          (e.decodeAuthToken = function (t) {
            if (e.isEmpty(t)) throw st.createTokenNullOrEmptyError(t);
            var r = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(t);
            if (!r || r.length < 4) throw st.createTokenParsingError("Given token is malformed: " + JSON.stringify(t));
            return { header: r[1], JWSPayload: r[2], JWSSig: r[3] };
          }),
          (e.isEmpty = function (e) {
            return void 0 === e || !e || 0 === e.length;
          }),
          (e.isEmptyObj = function (t) {
            if (t && !e.isEmpty(t))
              try {
                var r = JSON.parse(t);
                return 0 === Object.keys(r).length;
              } catch (e) {}
            return !0;
          }),
          (e.startsWith = function (e, t) {
            return 0 === e.indexOf(t);
          }),
          (e.endsWith = function (e, t) {
            return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
          }),
          (e.queryStringToObject = function (e) {
            var t = {},
              r = e.split("&"),
              n = function (e) {
                return decodeURIComponent(e.replace(/\+/g, " "));
              };
            return (
              r.forEach(function (e) {
                if (e.trim()) {
                  var r = e.split(/=(.+)/g, 2),
                    o = r[0],
                    i = r[1];
                  o && i && (t[n(o)] = n(i));
                }
              }),
              t
            );
          }),
          (e.trimArrayEntries = function (e) {
            return e.map(function (e) {
              return e.trim();
            });
          }),
          (e.removeEmptyStringsFromArray = function (t) {
            return t.filter(function (t) {
              return !e.isEmpty(t);
            });
          }),
          (e.jsonParseHelper = function (e) {
            try {
              return JSON.parse(e);
            } catch (e) {
              return null;
            }
          }),
          (e.matchPattern = function (e, t) {
            return new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(t);
          }),
          e
        );
      })(),
      ut = {
        pkceNotGenerated: {
          code: "pkce_not_created",
          desc: "The PKCE code challenge and verifier could not be generated.",
        },
        cryptoDoesNotExist: { code: "crypto_nonexistent", desc: "The crypto object or function is not available." },
        httpMethodNotImplementedError: {
          code: "http_method_not_implemented",
          desc: "The HTTP method given has not been implemented in this library.",
        },
        emptyNavigateUriError: {
          code: "empty_navigate_uri",
          desc: "Navigation URI is empty. Please check stack trace for more info.",
        },
        hashEmptyError: {
          code: "hash_empty_error",
          desc: "Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash.",
        },
        hashDoesNotContainStateError: {
          code: "no_state_in_hash",
          desc: "Hash does not contain state. Please verify that the request originated from msal.",
        },
        hashDoesNotContainKnownPropertiesError: {
          code: "hash_does_not_contain_known_properties",
          desc: "Hash does not contain known properites. Please verify that your redirectUri is not changing the hash.",
        },
        unableToParseStateError: {
          code: "unable_to_parse_state",
          desc: "Unable to parse state. Please verify that the request originated from msal.",
        },
        stateInteractionTypeMismatchError: {
          code: "state_interaction_type_mismatch",
          desc: "Hash contains state but the interaction type does not match the caller.",
        },
        interactionInProgress: {
          code: "interaction_in_progress",
          desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.  For more visit: aka.ms/msaljs/browser-errors.",
        },
        popupWindowError: {
          code: "popup_window_error",
          desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.",
        },
        emptyWindowError: { code: "empty_window_error", desc: "window.open returned null or undefined window object." },
        userCancelledError: { code: "user_cancelled", desc: "User cancelled the flow." },
        monitorPopupTimeoutError: {
          code: "monitor_window_timeout",
          desc: "Token acquisition in popup failed due to timeout. For more visit: aka.ms/msaljs/browser-errors.",
        },
        monitorIframeTimeoutError: {
          code: "monitor_window_timeout",
          desc: "Token acquisition in iframe failed due to timeout. For more visit: aka.ms/msaljs/browser-errors.",
        },
        redirectInIframeError: {
          code: "redirect_in_iframe",
          desc: "Code flow is not supported inside an iframe. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs.",
        },
        blockTokenRequestsInHiddenIframeError: {
          code: "block_iframe_reload",
          desc: "Request was blocked inside an iframe because MSAL detected an authentication response. For more visit: aka.ms/msaljs/browser-errors",
        },
        blockAcquireTokenInPopupsError: {
          code: "block_nested_popups",
          desc: "Request was blocked inside a popup because MSAL detected it was running in a popup.",
        },
        iframeClosedPrematurelyError: {
          code: "iframe_closed_prematurely",
          desc: "The iframe being monitored was closed prematurely.",
        },
        silentLogoutUnsupportedError: {
          code: "silent_logout_unsupported",
          desc: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead.",
        },
        noAccountError: {
          code: "no_account_error",
          desc: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request.",
        },
        silentPromptValueError: {
          code: "silent_prompt_value_error",
          desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none'.",
        },
        noTokenRequestCacheError: { code: "no_token_request_cache_error", desc: "No token request in found in cache." },
        unableToParseTokenRequestCacheError: {
          code: "unable_to_parse_token_request_cache_error",
          desc: "The cached token request could not be parsed.",
        },
        noCachedAuthorityError: { code: "no_cached_authority_error", desc: "No cached authority found." },
        authRequestNotSet: {
          code: "auth_request_not_set_error",
          desc: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler",
        },
        invalidCacheType: { code: "invalid_cache_type", desc: "Invalid cache type" },
        notInBrowserEnvironment: {
          code: "non_browser_environment",
          desc: "Login and token requests are not supported in non-browser environments.",
        },
        databaseNotOpen: { code: "database_not_open", desc: "Database is not open!" },
        noNetworkConnectivity: {
          code: "no_network_connectivity",
          desc: "No network connectivity. Check your internet connection.",
        },
        postRequestFailed: {
          code: "post_request_failed",
          desc: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'",
        },
        getRequestFailed: {
          code: "get_request_failed",
          desc: "Network request failed. Please check the network trace to determine root cause.",
        },
        failedToParseNetworkResponse: {
          code: "failed_to_parse_response",
          desc: "Failed to parse network response. Check network trace.",
        },
        unableToLoadTokenError: { code: "unable_to_load_token", desc: "Error loading token to cache." },
        signingKeyNotFoundInStorage: {
          code: "crypto_key_not_found",
          desc: "Cryptographic Key or Keypair not found in browser storage.",
        },
      },
      lt = (function (e) {
        function t(r, n) {
          var o = e.call(this, r, n) || this;
          return Object.setPrototypeOf(o, t.prototype), (o.name = "BrowserAuthError"), o;
        }
        return (
          ae(t, e),
          (t.createPkceNotGeneratedError = function (e) {
            return new t(ut.pkceNotGenerated.code, ut.pkceNotGenerated.desc + " Detail:" + e);
          }),
          (t.createCryptoNotAvailableError = function (e) {
            return new t(ut.cryptoDoesNotExist.code, ut.cryptoDoesNotExist.desc + " Detail:" + e);
          }),
          (t.createHttpMethodNotImplementedError = function (e) {
            return new t(
              ut.httpMethodNotImplementedError.code,
              ut.httpMethodNotImplementedError.desc + " Given Method: " + e
            );
          }),
          (t.createEmptyNavigationUriError = function () {
            return new t(ut.emptyNavigateUriError.code, ut.emptyNavigateUriError.desc);
          }),
          (t.createEmptyHashError = function (e) {
            return new t(ut.hashEmptyError.code, ut.hashEmptyError.desc + " Given Url: " + e);
          }),
          (t.createHashDoesNotContainStateError = function () {
            return new t(ut.hashDoesNotContainStateError.code, ut.hashDoesNotContainStateError.desc);
          }),
          (t.createHashDoesNotContainKnownPropertiesError = function () {
            return new t(
              ut.hashDoesNotContainKnownPropertiesError.code,
              ut.hashDoesNotContainKnownPropertiesError.desc
            );
          }),
          (t.createUnableToParseStateError = function () {
            return new t(ut.unableToParseStateError.code, ut.unableToParseStateError.desc);
          }),
          (t.createStateInteractionTypeMismatchError = function () {
            return new t(ut.stateInteractionTypeMismatchError.code, ut.stateInteractionTypeMismatchError.desc);
          }),
          (t.createInteractionInProgressError = function () {
            return new t(ut.interactionInProgress.code, ut.interactionInProgress.desc);
          }),
          (t.createPopupWindowError = function (e) {
            var r = ut.popupWindowError.desc;
            return (r = ct.isEmpty(e) ? r : r + " Details: " + e), new t(ut.popupWindowError.code, r);
          }),
          (t.createEmptyWindowCreatedError = function () {
            return new t(ut.emptyWindowError.code, ut.emptyWindowError.desc);
          }),
          (t.createUserCancelledError = function () {
            return new t(ut.userCancelledError.code, ut.userCancelledError.desc);
          }),
          (t.createMonitorPopupTimeoutError = function () {
            return new t(ut.monitorPopupTimeoutError.code, ut.monitorPopupTimeoutError.desc);
          }),
          (t.createMonitorIframeTimeoutError = function () {
            return new t(ut.monitorIframeTimeoutError.code, ut.monitorIframeTimeoutError.desc);
          }),
          (t.createRedirectInIframeError = function (e) {
            return new t(
              ut.redirectInIframeError.code,
              ut.redirectInIframeError.desc + " (window.parent !== window) => " + e
            );
          }),
          (t.createBlockReloadInHiddenIframeError = function () {
            return new t(ut.blockTokenRequestsInHiddenIframeError.code, ut.blockTokenRequestsInHiddenIframeError.desc);
          }),
          (t.createBlockAcquireTokenInPopupsError = function () {
            return new t(ut.blockAcquireTokenInPopupsError.code, ut.blockAcquireTokenInPopupsError.desc);
          }),
          (t.createIframeClosedPrematurelyError = function () {
            return new t(ut.iframeClosedPrematurelyError.code, ut.iframeClosedPrematurelyError.desc);
          }),
          (t.createSilentLogoutUnsupportedError = function () {
            return new t(ut.silentLogoutUnsupportedError.code, ut.silentLogoutUnsupportedError.desc);
          }),
          (t.createNoAccountError = function () {
            return new t(ut.noAccountError.code, ut.noAccountError.desc);
          }),
          (t.createSilentPromptValueError = function (e) {
            return new t(ut.silentPromptValueError.code, ut.silentPromptValueError.desc + " Given value: " + e);
          }),
          (t.createUnableToParseTokenRequestCacheError = function () {
            return new t(ut.unableToParseTokenRequestCacheError.code, ut.unableToParseTokenRequestCacheError.desc);
          }),
          (t.createNoTokenRequestCacheError = function () {
            return new t(ut.noTokenRequestCacheError.code, ut.noTokenRequestCacheError.desc);
          }),
          (t.createAuthRequestNotSetError = function () {
            return new t(ut.authRequestNotSet.code, ut.authRequestNotSet.desc);
          }),
          (t.createNoCachedAuthorityError = function () {
            return new t(ut.noCachedAuthorityError.code, ut.noCachedAuthorityError.desc);
          }),
          (t.createInvalidCacheTypeError = function () {
            return new t(ut.invalidCacheType.code, "" + ut.invalidCacheType.desc);
          }),
          (t.createNonBrowserEnvironmentError = function () {
            return new t(ut.notInBrowserEnvironment.code, ut.notInBrowserEnvironment.desc);
          }),
          (t.createDatabaseNotOpenError = function () {
            return new t(ut.databaseNotOpen.code, ut.databaseNotOpen.desc);
          }),
          (t.createNoNetworkConnectivityError = function () {
            return new t(ut.noNetworkConnectivity.code, ut.noNetworkConnectivity.desc);
          }),
          (t.createPostRequestFailedError = function (e, r) {
            return new t(
              ut.postRequestFailed.code,
              ut.postRequestFailed.desc + " | Network client threw: " + e + " | Attempted to reach: " + r.split("?")[0]
            );
          }),
          (t.createGetRequestFailedError = function (e, r) {
            return new t(
              ut.getRequestFailed.code,
              ut.getRequestFailed.desc + " | Network client threw: " + e + " | Attempted to reach: " + r.split("?")[0]
            );
          }),
          (t.createFailedToParseNetworkResponseError = function (e) {
            return new t(
              ut.failedToParseNetworkResponse.code,
              ut.failedToParseNetworkResponse.desc + " | Attempted to reach: " + e.split("?")[0]
            );
          }),
          (t.createUnableToLoadTokenError = function (e) {
            return new t(ut.unableToLoadTokenError.code, ut.unableToLoadTokenError.desc + " | " + e);
          }),
          (t.createSigningKeyNotFoundInStorageError = function (e) {
            return new t(
              ut.signingKeyNotFoundInStorage.code,
              ut.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + e
            );
          }),
          t
        );
      })(_e),
      dt = (function () {
        function e(e) {
          (this.base64Encode = new ye()), (this.cryptoObj = e);
        }
        return (
          (e.prototype.generateCodes = function () {
            return ce(this, void 0, void 0, function () {
              var e, t;
              return ue(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (e = this.generateCodeVerifier()), [4, this.generateCodeChallengeFromVerifier(e)];
                  case 1:
                    return (t = r.sent()), [2, { verifier: e, challenge: t }];
                }
              });
            });
          }),
          (e.prototype.generateCodeVerifier = function () {
            try {
              var e = new Uint8Array(32);
              return this.cryptoObj.getRandomValues(e), this.base64Encode.urlEncodeArr(e);
            } catch (e) {
              throw lt.createPkceNotGeneratedError(e);
            }
          }),
          (e.prototype.generateCodeChallengeFromVerifier = function (e) {
            return ce(this, void 0, void 0, function () {
              var t, r;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([0, 2, , 3]), [4, this.cryptoObj.sha256Digest(e)];
                  case 1:
                    return (t = n.sent()), [2, this.base64Encode.urlEncodeArr(new Uint8Array(t))];
                  case 2:
                    throw ((r = n.sent()), lt.createPkceNotGeneratedError(r));
                  case 3:
                    return [2];
                }
              });
            });
          }),
          e
        );
      })(),
      ht = new Uint8Array([1, 0, 1]),
      pt = (function () {
        function e() {
          if (!this.hasCryptoAPI())
            throw lt.createCryptoNotAvailableError("Browser crypto or msCrypto object not available.");
          this._keygenAlgorithmOptions = {
            name: "RSASSA-PKCS1-v1_5",
            hash: "SHA-256",
            modulusLength: 2048,
            publicExponent: ht,
          };
        }
        return (
          (e.prototype.sha256Digest = function (e) {
            return ce(this, void 0, void 0, function () {
              var t;
              return ue(this, function (r) {
                return (
                  (t = ge.stringToUtf8Arr(e)),
                  [
                    2,
                    this.hasIECrypto()
                      ? this.getMSCryptoDigest("SHA-256", t)
                      : this.getSubtleCryptoDigest("SHA-256", t),
                  ]
                );
              });
            });
          }),
          (e.prototype.getRandomValues = function (e) {
            var t = window.msCrypto || window.crypto;
            if (!t.getRandomValues) throw lt.createCryptoNotAvailableError("getRandomValues does not exist.");
            t.getRandomValues(e);
          }),
          (e.prototype.generateKeyPair = function (e, t) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (r) {
                return [
                  2,
                  this.hasIECrypto()
                    ? this.msCryptoGenerateKey(e, t)
                    : window.crypto.subtle.generateKey(this._keygenAlgorithmOptions, e, t),
                ];
              });
            });
          }),
          (e.prototype.exportJwk = function (e) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (t) {
                return [2, this.hasIECrypto() ? this.msCryptoExportJwk(e) : window.crypto.subtle.exportKey("jwk", e)];
              });
            });
          }),
          (e.prototype.importJwk = function (t, r, n) {
            return ce(this, void 0, void 0, function () {
              var o, i;
              return ue(this, function (a) {
                return (
                  (o = e.getJwkString(t)),
                  (i = ge.stringToArrayBuffer(o)),
                  [
                    2,
                    this.hasIECrypto()
                      ? this.msCryptoImportKey(i, r, n)
                      : window.crypto.subtle.importKey("jwk", t, this._keygenAlgorithmOptions, r, n),
                  ]
                );
              });
            });
          }),
          (e.prototype.sign = function (e, t) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (r) {
                return [
                  2,
                  this.hasIECrypto()
                    ? this.msCryptoSign(e, t)
                    : window.crypto.subtle.sign(this._keygenAlgorithmOptions, e, t),
                ];
              });
            });
          }),
          (e.prototype.hasCryptoAPI = function () {
            return this.hasIECrypto() || this.hasBrowserCrypto();
          }),
          (e.prototype.hasIECrypto = function () {
            return "msCrypto" in window;
          }),
          (e.prototype.hasBrowserCrypto = function () {
            return "crypto" in window;
          }),
          (e.prototype.getSubtleCryptoDigest = function (e, t) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (r) {
                return [2, window.crypto.subtle.digest(e, t)];
              });
            });
          }),
          (e.prototype.getMSCryptoDigest = function (e, t) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (r) {
                return [
                  2,
                  new Promise(function (r, n) {
                    var o = window.msCrypto.subtle.digest(e, t.buffer);
                    o.addEventListener("complete", function (e) {
                      r(e.target.result);
                    }),
                      o.addEventListener("error", function (e) {
                        n(e);
                      });
                  }),
                ];
              });
            });
          }),
          (e.prototype.msCryptoGenerateKey = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r = this;
              return ue(this, function (n) {
                return [
                  2,
                  new Promise(function (n, o) {
                    var i = window.msCrypto.subtle.generateKey(r._keygenAlgorithmOptions, e, t);
                    i.addEventListener("complete", function (e) {
                      n(e.target.result);
                    }),
                      i.addEventListener("error", function (e) {
                        o(e);
                      });
                  }),
                ];
              });
            });
          }),
          (e.prototype.msCryptoExportJwk = function (e) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (t) {
                return [
                  2,
                  new Promise(function (t, r) {
                    var n = window.msCrypto.subtle.exportKey("jwk", e);
                    n.addEventListener("complete", function (e) {
                      var n = e.target.result,
                        o = ge
                          .utf8ArrToString(new Uint8Array(n))
                          .replace(/\r/g, "")
                          .replace(/\n/g, "")
                          .replace(/\t/g, "")
                          .split(" ")
                          .join("")
                          .replace("\0", "");
                      try {
                        t(JSON.parse(o));
                      } catch (e) {
                        r(e);
                      }
                    }),
                      n.addEventListener("error", function (e) {
                        r(e);
                      });
                  }),
                ];
              });
            });
          }),
          (e.prototype.msCryptoImportKey = function (e, t, r) {
            return ce(this, void 0, void 0, function () {
              var n = this;
              return ue(this, function (o) {
                return [
                  2,
                  new Promise(function (o, i) {
                    var a = window.msCrypto.subtle.importKey("jwk", e, n._keygenAlgorithmOptions, t, r);
                    a.addEventListener("complete", function (e) {
                      o(e.target.result);
                    }),
                      a.addEventListener("error", function (e) {
                        i(e);
                      });
                  }),
                ];
              });
            });
          }),
          (e.prototype.msCryptoSign = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r = this;
              return ue(this, function (n) {
                return [
                  2,
                  new Promise(function (n, o) {
                    var i = window.msCrypto.subtle.sign(r._keygenAlgorithmOptions, e, t);
                    i.addEventListener("complete", function (e) {
                      n(e.target.result);
                    }),
                      i.addEventListener("error", function (e) {
                        o(e);
                      });
                  }),
                ];
              });
            });
          }),
          (e.getJwkString = function (e) {
            return JSON.stringify(e, Object.keys(e).sort());
          }),
          e
        );
      })(),
      ft = (function () {
        function e(e, t, r) {
          (this.dbName = e), (this.tableName = t), (this.version = r), (this.dbOpen = !1);
        }
        return (
          (e.prototype.open = function () {
            return ce(this, void 0, void 0, function () {
              var e = this;
              return ue(this, function (t) {
                return [
                  2,
                  new Promise(function (t, r) {
                    var n = window.indexedDB.open(e.dbName, e.version);
                    n.addEventListener("upgradeneeded", function (t) {
                      t.target.result.createObjectStore(e.tableName);
                    }),
                      n.addEventListener("success", function (r) {
                        var n = r;
                        (e.db = n.target.result), (e.dbOpen = !0), t();
                      }),
                      n.addEventListener("error", function (e) {
                        return r(e);
                      });
                  }),
                ];
              });
            });
          }),
          (e.prototype.get = function (e) {
            return ce(this, void 0, void 0, function () {
              var t = this;
              return ue(this, function (r) {
                switch (r.label) {
                  case 0:
                    return this.dbOpen ? [3, 2] : [4, this.open()];
                  case 1:
                    r.sent(), (r.label = 2);
                  case 2:
                    return [
                      2,
                      new Promise(function (r, n) {
                        if (!t.db) return n(lt.createDatabaseNotOpenError());
                        var o = t.db.transaction([t.tableName], "readonly").objectStore(t.tableName).get(e);
                        o.addEventListener("success", function (e) {
                          r(e.target.result);
                        }),
                          o.addEventListener("error", function (e) {
                            return n(e);
                          });
                      }),
                    ];
                }
              });
            });
          }),
          (e.prototype.put = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r = this;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this.dbOpen ? [3, 2] : [4, this.open()];
                  case 1:
                    n.sent(), (n.label = 2);
                  case 2:
                    return [
                      2,
                      new Promise(function (n, o) {
                        if (!r.db) return o(lt.createDatabaseNotOpenError());
                        var i = r.db.transaction([r.tableName], "readwrite").objectStore(r.tableName).put(t, e);
                        i.addEventListener("success", function (e) {
                          n(e.target.result);
                        }),
                          i.addEventListener("error", function (e) {
                            return o(e);
                          });
                      }),
                    ];
                }
              });
            });
          }),
          (e.prototype.delete = function (e) {
            return ce(this, void 0, void 0, function () {
              var t = this;
              return ue(this, function (r) {
                switch (r.label) {
                  case 0:
                    return this.dbOpen ? [3, 2] : [4, this.open()];
                  case 1:
                    r.sent(), (r.label = 2);
                  case 2:
                    return [
                      2,
                      new Promise(function (r, n) {
                        if (!t.db) return n(lt.createDatabaseNotOpenError());
                        var o = t.db.transaction([t.tableName], "readwrite").objectStore(t.tableName).delete(e);
                        o.addEventListener("success", function (e) {
                          r(void 0 === e.target.result);
                        }),
                          o.addEventListener("error", function (e) {
                            return n(e);
                          });
                      }),
                    ];
                }
              });
            });
          }),
          (e.prototype.clear = function () {
            return ce(this, void 0, void 0, function () {
              var e = this;
              return ue(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.dbOpen ? [3, 2] : [4, this.open()];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [
                      2,
                      new Promise(function (t, r) {
                        if (!e.db) return r(lt.createDatabaseNotOpenError());
                        var n = e.db.transaction([e.tableName], "readwrite").objectStore(e.tableName).clear();
                        n.addEventListener("success", function (e) {
                          t(void 0 === e.target.result);
                        }),
                          n.addEventListener("error", function (e) {
                            return r(e);
                          });
                      }),
                    ];
                }
              });
            });
          }),
          e
        );
      })(),
      gt = (function () {
        function e() {
          (this.browserCrypto = new pt()),
            (this.b64Encode = new ye()),
            (this.b64Decode = new me()),
            (this.guidGenerator = new fe(this.browserCrypto)),
            (this.pkceGenerator = new dt(this.browserCrypto)),
            (this.cache = new ft(e.DB_NAME, e.TABLE_NAME, e.DB_VERSION));
        }
        return (
          (e.prototype.createNewGuid = function () {
            return this.guidGenerator.generateGuid();
          }),
          (e.prototype.base64Encode = function (e) {
            return this.b64Encode.encode(e);
          }),
          (e.prototype.base64Decode = function (e) {
            return this.b64Decode.decode(e);
          }),
          (e.prototype.generatePkceCodes = function () {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (e) {
                return [2, this.pkceGenerator.generateCodes()];
              });
            });
          }),
          (e.prototype.getPublicKeyThumbprint = function (t) {
            return ce(this, void 0, void 0, function () {
              var r, n, o, i, a, s, c, u;
              return ue(this, function (l) {
                switch (l.label) {
                  case 0:
                    return [4, this.browserCrypto.generateKeyPair(e.EXTRACTABLE, e.POP_KEY_USAGES)];
                  case 1:
                    return (r = l.sent()), [4, this.browserCrypto.exportJwk(r.publicKey)];
                  case 2:
                    return (
                      (n = l.sent()),
                      (o = { e: n.e, kty: n.kty, n: n.n }),
                      (i = pt.getJwkString(o)),
                      [4, this.browserCrypto.sha256Digest(i)]
                    );
                  case 3:
                    return (
                      (a = l.sent()),
                      (s = this.b64Encode.urlEncodeArr(new Uint8Array(a))),
                      [4, this.browserCrypto.exportJwk(r.privateKey)]
                    );
                  case 4:
                    return (c = l.sent()), [4, this.browserCrypto.importJwk(c, !1, ["sign"])];
                  case 5:
                    return (
                      (u = l.sent()),
                      [
                        4,
                        this.cache.put(s, {
                          privateKey: u,
                          publicKey: r.publicKey,
                          requestMethod: t.resourceRequestMethod,
                          requestUri: t.resourceRequestUri,
                        }),
                      ]
                    );
                  case 6:
                    return l.sent(), [2, s];
                }
              });
            });
          }),
          (e.prototype.removeTokenBindingKey = function (e) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (t) {
                return [2, this.cache.delete(e)];
              });
            });
          }),
          (e.prototype.clearKeystore = function () {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (e) {
                return [2, this.cache.clear()];
              });
            });
          }),
          (e.prototype.signJwt = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r, n, o, i, a, s, c, u, l, d;
              return ue(this, function (h) {
                switch (h.label) {
                  case 0:
                    return [4, this.cache.get(t)];
                  case 1:
                    if (!(r = h.sent())) throw lt.createSigningKeyNotFoundInStorageError(t);
                    return [4, this.browserCrypto.exportJwk(r.publicKey)];
                  case 2:
                    return (
                      (n = h.sent()),
                      (o = pt.getJwkString(n)),
                      (i = { alg: n.alg, type: "jwk" }),
                      (a = this.b64Encode.urlEncode(JSON.stringify(i))),
                      (e.cnf = { jwk: JSON.parse(o) }),
                      (s = this.b64Encode.urlEncode(JSON.stringify(e))),
                      (c = a + "." + s),
                      (u = ge.stringToArrayBuffer(c)),
                      [4, this.browserCrypto.sign(r.privateKey, u)]
                    );
                  case 3:
                    return (l = h.sent()), (d = this.b64Encode.urlEncodeArr(new Uint8Array(l))), [2, c + "." + d];
                }
              });
            });
          }),
          (e.POP_KEY_USAGES = ["sign", "verify"]),
          (e.EXTRACTABLE = !0),
          (e.DB_VERSION = 1),
          (e.DB_NAME = "msal.db"),
          (e.TABLE_NAME = e.DB_NAME + ".keys"),
          e
        );
      })();
    !(function (e) {
      (e[(e.Error = 0)] = "Error"),
        (e[(e.Warning = 1)] = "Warning"),
        (e[(e.Info = 2)] = "Info"),
        (e[(e.Verbose = 3)] = "Verbose"),
        (e[(e.Trace = 4)] = "Trace");
    })(he || (he = {}));
    var yt,
      mt = (function () {
        function e(e, t, r) {
          this.level = he.Info;
          (this.localCallback = e.loggerCallback || function () {}),
            (this.piiLoggingEnabled = e.piiLoggingEnabled || !1),
            (this.level = "number" == typeof e.logLevel ? e.logLevel : he.Info),
            (this.correlationId = e.correlationId || ""),
            (this.packageName = t || g.EMPTY_STRING),
            (this.packageVersion = r || g.EMPTY_STRING);
        }
        return (
          (e.prototype.clone = function (t, r, n) {
            return new e(
              {
                loggerCallback: this.localCallback,
                piiLoggingEnabled: this.piiLoggingEnabled,
                logLevel: this.level,
                correlationId: n || this.correlationId,
              },
              t,
              r
            );
          }),
          (e.prototype.logMessage = function (e, t) {
            if (!(t.logLevel > this.level || (!this.piiLoggingEnabled && t.containsPii))) {
              var r = new Date().toUTCString(),
                n =
                  (ct.isEmpty(t.correlationId)
                    ? ct.isEmpty(this.correlationId)
                      ? "[" + r + "]"
                      : "[" + r + "] : [" + this.correlationId + "]"
                    : "[" + r + "] : [" + t.correlationId + "]") +
                  " : " +
                  this.packageName +
                  "@" +
                  this.packageVersion +
                  " : " +
                  he[t.logLevel] +
                  " - " +
                  e;
              this.executeCallback(t.logLevel, n, t.containsPii || !1);
            }
          }),
          (e.prototype.executeCallback = function (e, t, r) {
            this.localCallback && this.localCallback(e, t, r);
          }),
          (e.prototype.error = function (e, t) {
            this.logMessage(e, { logLevel: he.Error, containsPii: !1, correlationId: t || "" });
          }),
          (e.prototype.errorPii = function (e, t) {
            this.logMessage(e, { logLevel: he.Error, containsPii: !0, correlationId: t || "" });
          }),
          (e.prototype.warning = function (e, t) {
            this.logMessage(e, { logLevel: he.Warning, containsPii: !1, correlationId: t || "" });
          }),
          (e.prototype.warningPii = function (e, t) {
            this.logMessage(e, { logLevel: he.Warning, containsPii: !0, correlationId: t || "" });
          }),
          (e.prototype.info = function (e, t) {
            this.logMessage(e, { logLevel: he.Info, containsPii: !1, correlationId: t || "" });
          }),
          (e.prototype.infoPii = function (e, t) {
            this.logMessage(e, { logLevel: he.Info, containsPii: !0, correlationId: t || "" });
          }),
          (e.prototype.verbose = function (e, t) {
            this.logMessage(e, { logLevel: he.Verbose, containsPii: !1, correlationId: t || "" });
          }),
          (e.prototype.verbosePii = function (e, t) {
            this.logMessage(e, { logLevel: he.Verbose, containsPii: !0, correlationId: t || "" });
          }),
          (e.prototype.trace = function (e, t) {
            this.logMessage(e, { logLevel: he.Trace, containsPii: !1, correlationId: t || "" });
          }),
          (e.prototype.tracePii = function (e, t) {
            this.logMessage(e, { logLevel: he.Trace, containsPii: !0, correlationId: t || "" });
          }),
          (e.prototype.isPiiLoggingEnabled = function () {
            return this.piiLoggingEnabled || !1;
          }),
          e
        );
      })(),
      vt = {
        createNewGuid: function () {
          throw _e.createUnexpectedError("Crypto interface - createNewGuid() has not been implemented");
        },
        base64Decode: function () {
          throw _e.createUnexpectedError("Crypto interface - base64Decode() has not been implemented");
        },
        base64Encode: function () {
          throw _e.createUnexpectedError("Crypto interface - base64Encode() has not been implemented");
        },
        generatePkceCodes: function () {
          return s(this, void 0, void 0, function () {
            return c(this, function (e) {
              throw (
                ("Crypto interface - generatePkceCodes() has not been implemented",
                _e.createUnexpectedError("Crypto interface - generatePkceCodes() has not been implemented"))
              );
            });
          });
        },
        getPublicKeyThumbprint: function () {
          return s(this, void 0, void 0, function () {
            return c(this, function (e) {
              throw (
                ("Crypto interface - getPublicKeyThumbprint() has not been implemented",
                _e.createUnexpectedError("Crypto interface - getPublicKeyThumbprint() has not been implemented"))
              );
            });
          });
        },
        removeTokenBindingKey: function () {
          return s(this, void 0, void 0, function () {
            return c(this, function (e) {
              throw (
                ("Crypto interface - removeTokenBindingKey() has not been implemented",
                _e.createUnexpectedError("Crypto interface - removeTokenBindingKey() has not been implemented"))
              );
            });
          });
        },
        clearKeystore: function () {
          return s(this, void 0, void 0, function () {
            return c(this, function (e) {
              throw (
                ("Crypto interface - clearKeystore() has not been implemented",
                _e.createUnexpectedError("Crypto interface - clearKeystore() has not been implemented"))
              );
            });
          });
        },
        signJwt: function () {
          return s(this, void 0, void 0, function () {
            return c(this, function (e) {
              throw (
                ("Crypto interface - signJwt() has not been implemented",
                _e.createUnexpectedError("Crypto interface - signJwt() has not been implemented"))
              );
            });
          });
        },
      },
      _t = (function (e) {
        function t(r, n, o) {
          var i = e.call(this, r, n, o) || this;
          return (i.name = "ServerError"), Object.setPrototypeOf(i, t.prototype), i;
        }
        return i(t, e), t;
      })(_e),
      wt = ["interaction_required", "consent_required", "login_required"],
      Et = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required"],
      Tt = { code: "no_tokens_found", desc: "No refresh token found in the cache. Please sign-in." },
      Ct = (function (e) {
        function t(r, n, o) {
          var i = e.call(this, r, n, o) || this;
          return (i.name = "InteractionRequiredAuthError"), Object.setPrototypeOf(i, t.prototype), i;
        }
        return (
          i(t, e),
          (t.isInteractionRequiredError = function (e, t, r) {
            var n = !!e && wt.indexOf(e) > -1,
              o = !!r && Et.indexOf(r) > -1,
              i =
                !!t &&
                wt.some(function (e) {
                  return t.indexOf(e) > -1;
                });
            return n || i || o;
          }),
          (t.createNoTokensFoundError = function () {
            return new t(Tt.code, Tt.desc);
          }),
          t
        );
      })(_e);
    function At(e, t) {
      if (ct.isEmpty(e)) throw st.createClientInfoEmptyError();
      try {
        var r = t.base64Decode(e);
        return JSON.parse(r);
      } catch (e) {
        throw st.createClientInfoDecodingError(e);
      }
    }
    function St(e) {
      if (ct.isEmpty(e)) throw st.createClientInfoDecodingError("Home account ID was empty.");
      var t = e.split(C.CLIENT_INFO_SEPARATOR, 2);
      return { uid: t[0], utid: t.length < 2 ? g.EMPTY_STRING : t[1] };
    }
    !(function (e) {
      (e[(e.Default = 0)] = "Default"), (e[(e.Adfs = 1)] = "Adfs");
    })(yt || (yt = {}));
    var bt,
      It = (function () {
        function e() {}
        return (
          (e.prototype.generateAccountId = function () {
            return [this.homeAccountId, this.environment].join(C.CACHE_KEY_SEPARATOR).toLowerCase();
          }),
          (e.prototype.generateAccountKey = function () {
            return e.generateAccountCacheKey({
              homeAccountId: this.homeAccountId,
              environment: this.environment,
              tenantId: this.realm,
              username: this.username,
              localAccountId: this.localAccountId,
            });
          }),
          (e.prototype.generateType = function () {
            switch (this.authorityType) {
              case T.ADFS_ACCOUNT_TYPE:
                return b.ADFS;
              case T.MSAV1_ACCOUNT_TYPE:
                return b.MSA;
              case T.MSSTS_ACCOUNT_TYPE:
                return b.MSSTS;
              case T.GENERIC_ACCOUNT_TYPE:
                return b.GENERIC;
              default:
                throw st.createUnexpectedAccountTypeError();
            }
          }),
          (e.prototype.getAccountInfo = function () {
            return {
              homeAccountId: this.homeAccountId,
              environment: this.environment,
              tenantId: this.realm,
              username: this.username,
              localAccountId: this.localAccountId,
              name: this.name,
              idTokenClaims: this.idTokenClaims,
            };
          }),
          (e.generateAccountCacheKey = function (e) {
            return [e.homeAccountId, e.environment || "", e.tenantId || ""].join(C.CACHE_KEY_SEPARATOR).toLowerCase();
          }),
          (e.createAccount = function (t, r, n, o, i, a, s, c) {
            var u,
              l,
              d,
              h,
              p,
              f,
              g = new e();
            (g.authorityType = T.MSSTS_ACCOUNT_TYPE), (g.clientInfo = t), (g.homeAccountId = r);
            var y = c || (o && o.getPreferredCache());
            if (!y) throw st.createInvalidCacheEnvironmentError();
            return (
              (g.environment = y),
              (g.realm = (null === (u = null == n ? void 0 : n.claims) || void 0 === u ? void 0 : u.tid) || ""),
              (g.oboAssertion = i),
              n &&
                ((g.idTokenClaims = n.claims),
                (g.localAccountId =
                  (null === (l = null == n ? void 0 : n.claims) || void 0 === l ? void 0 : l.oid) ||
                  (null === (d = null == n ? void 0 : n.claims) || void 0 === d ? void 0 : d.sub) ||
                  ""),
                (g.username =
                  (null === (h = null == n ? void 0 : n.claims) || void 0 === h ? void 0 : h.preferred_username) ||
                  ((null === (p = null == n ? void 0 : n.claims) || void 0 === p ? void 0 : p.emails)
                    ? n.claims.emails[0]
                    : "")),
                (g.name = null === (f = null == n ? void 0 : n.claims) || void 0 === f ? void 0 : f.name)),
              (g.cloudGraphHostName = a),
              (g.msGraphHost = s),
              g
            );
          }),
          (e.createGenericAccount = function (t, r, n, o, i, a, s) {
            var c,
              u,
              l,
              d,
              h = new e();
            (h.authorityType = n && n.authorityType === yt.Adfs ? T.ADFS_ACCOUNT_TYPE : T.GENERIC_ACCOUNT_TYPE),
              (h.homeAccountId = t),
              (h.realm = ""),
              (h.oboAssertion = o);
            var p = s || (n && n.getPreferredCache());
            if (!p) throw st.createInvalidCacheEnvironmentError();
            return (
              r &&
                ((h.localAccountId =
                  (null === (c = null == r ? void 0 : r.claims) || void 0 === c ? void 0 : c.oid) ||
                  (null === (u = null == r ? void 0 : r.claims) || void 0 === u ? void 0 : u.sub) ||
                  ""),
                (h.username = (null === (l = null == r ? void 0 : r.claims) || void 0 === l ? void 0 : l.upn) || ""),
                (h.name = (null === (d = null == r ? void 0 : r.claims) || void 0 === d ? void 0 : d.name) || ""),
                (h.idTokenClaims = null == r ? void 0 : r.claims)),
              (h.environment = p),
              (h.cloudGraphHostName = i),
              (h.msGraphHost = a),
              h
            );
          }),
          (e.generateHomeAccountId = function (e, t, r, n, o) {
            var i,
              a = (null === (i = null == o ? void 0 : o.claims) || void 0 === i ? void 0 : i.sub)
                ? o.claims.sub
                : g.EMPTY_STRING;
            if (t === yt.Adfs) return a;
            if (e)
              try {
                var s = At(e, n);
                if (!ct.isEmpty(s.uid) && !ct.isEmpty(s.utid)) return "" + s.uid + C.CLIENT_INFO_SEPARATOR + s.utid;
              } catch (e) {}
            return r.verbose("No client info in response"), a;
          }),
          (e.isAccountEntity = function (e) {
            return (
              !!e &&
              e.hasOwnProperty("homeAccountId") &&
              e.hasOwnProperty("environment") &&
              e.hasOwnProperty("realm") &&
              e.hasOwnProperty("localAccountId") &&
              e.hasOwnProperty("username") &&
              e.hasOwnProperty("authorityType")
            );
          }),
          (e.accountInfoIsEqual = function (e, t, r) {
            if (!e || !t) return !1;
            var n = !0;
            if (r) {
              var o = e.idTokenClaims || {},
                i = t.idTokenClaims || {};
              n = o.iat === i.iat && o.nonce === i.nonce;
            }
            return (
              e.homeAccountId === t.homeAccountId &&
              e.localAccountId === t.localAccountId &&
              e.username === t.username &&
              e.tenantId === t.tenantId &&
              e.environment === t.environment &&
              n
            );
          }),
          e
        );
      })(),
      Rt = (function () {
        function e() {}
        return (
          (e.prototype.generateAccountId = function () {
            return e.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
          }),
          (e.prototype.generateCredentialId = function () {
            return e.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
          }),
          (e.prototype.generateTarget = function () {
            return e.generateTargetForCacheKey(this.target);
          }),
          (e.prototype.generateCredentialKey = function () {
            return e.generateCredentialCacheKey(
              this.homeAccountId,
              this.environment,
              this.credentialType,
              this.clientId,
              this.realm,
              this.target,
              this.familyId,
              this.tokenType
            );
          }),
          (e.prototype.generateType = function () {
            switch (this.credentialType) {
              case A.ID_TOKEN:
                return b.ID_TOKEN;
              case A.ACCESS_TOKEN:
              case A.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                return b.ACCESS_TOKEN;
              case A.REFRESH_TOKEN:
                return b.REFRESH_TOKEN;
              default:
                throw st.createUnexpectedCredentialTypeError();
            }
          }),
          (e.getCredentialType = function (e) {
            return -1 !== e.indexOf(A.ACCESS_TOKEN.toLowerCase())
              ? -1 !== e.indexOf(A.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                ? A.ACCESS_TOKEN_WITH_AUTH_SCHEME
                : A.ACCESS_TOKEN
              : -1 !== e.indexOf(A.ID_TOKEN.toLowerCase())
              ? A.ID_TOKEN
              : -1 !== e.indexOf(A.REFRESH_TOKEN.toLowerCase())
              ? A.REFRESH_TOKEN
              : g.NOT_DEFINED;
          }),
          (e.generateCredentialCacheKey = function (e, t, r, n, o, i, a, s) {
            var c = [
              this.generateAccountIdForCacheKey(e, t),
              this.generateCredentialIdForCacheKey(r, n, o, a),
              this.generateTargetForCacheKey(i),
            ];
            return s && s !== O.BEARER && c.push(s.toLowerCase()), c.join(C.CACHE_KEY_SEPARATOR).toLowerCase();
          }),
          (e.generateAccountIdForCacheKey = function (e, t) {
            return [e, t].join(C.CACHE_KEY_SEPARATOR).toLowerCase();
          }),
          (e.generateCredentialIdForCacheKey = function (e, t, r, n) {
            return [e, (e === A.REFRESH_TOKEN && n) || t, r || ""].join(C.CACHE_KEY_SEPARATOR).toLowerCase();
          }),
          (e.generateTargetForCacheKey = function (e) {
            return (e || "").toLowerCase();
          }),
          e
        );
      })(),
      kt = { code: "redirect_uri_empty", desc: "A redirect URI is required for all calls, and none has been set." },
      Pt = { code: "post_logout_uri_empty", desc: "A post logout redirect has not been set." },
      Ot = { code: "claims_request_parsing_error", desc: "Could not parse the given claims request object." },
      Nt = {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
      },
      Ft = { code: "url_parse_error", desc: "URL could not be parsed into appropriate segments." },
      Mt = { code: "empty_url_error", desc: "URL was empty or null." },
      Ut = {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
      },
      Dt = { code: "clientid_input_scopes_error", desc: "Client ID can only be provided as a single scope." },
      Lt = {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent', 'create' and 'none'.  Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
      },
      xt = { code: "invalid_claims", desc: "Given claims parameter must be a stringified JSON object." },
      qt = { code: "token_request_empty", desc: "Token request was empty and not found in cache." },
      Ht = { code: "logout_request_empty", desc: "The logout request was null or undefined." },
      Bt = {
        code: "invalid_code_challenge_method",
        desc: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
      },
      Wt = {
        code: "pkce_params_missing",
        desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
      },
      Kt = {
        code: "invalid_cloud_discovery_metadata",
        desc: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
      },
      jt = {
        code: "invalid_authority_metadata",
        desc: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
      },
      Gt = {
        code: "untrusted_authority",
        desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
      },
      zt = {
        code: "missing_ssh_jwk",
        desc: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
      },
      Vt = {
        code: "missing_ssh_kid",
        desc: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
      },
      Qt = {
        code: "missing_nonce_authentication_header",
        desc: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
      },
      Jt = { code: "invalid_authentication_header", desc: "Invalid authentication header provided" },
      Yt = (function (e) {
        function t(r, n) {
          var o = e.call(this, r, n) || this;
          return (o.name = "ClientConfigurationError"), Object.setPrototypeOf(o, t.prototype), o;
        }
        return (
          i(t, e),
          (t.createRedirectUriEmptyError = function () {
            return new t(kt.code, kt.desc);
          }),
          (t.createPostLogoutRedirectUriEmptyError = function () {
            return new t(Pt.code, Pt.desc);
          }),
          (t.createClaimsRequestParsingError = function (e) {
            return new t(Ot.code, Ot.desc + " Given value: " + e);
          }),
          (t.createInsecureAuthorityUriError = function (e) {
            return new t(Nt.code, Nt.desc + " Given URI: " + e);
          }),
          (t.createUrlParseError = function (e) {
            return new t(Ft.code, Ft.desc + " Given Error: " + e);
          }),
          (t.createUrlEmptyError = function () {
            return new t(Mt.code, Mt.desc);
          }),
          (t.createEmptyScopesArrayError = function () {
            return new t(Ut.code, "" + Ut.desc);
          }),
          (t.createClientIdSingleScopeError = function (e) {
            return new t(Dt.code, Dt.desc + " Given Scopes: " + e);
          }),
          (t.createInvalidPromptError = function (e) {
            return new t(Lt.code, Lt.desc + " Given value: " + e);
          }),
          (t.createInvalidClaimsRequestError = function () {
            return new t(xt.code, xt.desc);
          }),
          (t.createEmptyLogoutRequestError = function () {
            return new t(Ht.code, Ht.desc);
          }),
          (t.createEmptyTokenRequestError = function () {
            return new t(qt.code, qt.desc);
          }),
          (t.createInvalidCodeChallengeMethodError = function () {
            return new t(Bt.code, Bt.desc);
          }),
          (t.createInvalidCodeChallengeParamsError = function () {
            return new t(Wt.code, Wt.desc);
          }),
          (t.createInvalidCloudDiscoveryMetadataError = function () {
            return new t(Kt.code, Kt.desc);
          }),
          (t.createInvalidAuthorityMetadataError = function () {
            return new t(jt.code, jt.desc);
          }),
          (t.createUntrustedAuthorityError = function () {
            return new t(Gt.code, Gt.desc);
          }),
          (t.createMissingSshJwkError = function () {
            return new t(zt.code, zt.desc);
          }),
          (t.createMissingSshKidError = function () {
            return new t(Vt.code, Vt.desc);
          }),
          (t.createMissingNonceAuthenticationHeadersError = function () {
            return new t(Qt.code, Qt.desc);
          }),
          (t.createInvalidAuthenticationHeaderError = function (e, r) {
            return new t(Jt.code, Jt.desc + ". Invalid header: " + e + ". Details: " + r);
          }),
          t
        );
      })(st),
      Xt = (function () {
        function e(e) {
          var t = this,
            r = e ? ct.trimArrayEntries(u(e)) : [],
            n = r ? ct.removeEmptyStringsFromArray(r) : [];
          this.validateInputScopes(n),
            (this.scopes = new Set()),
            n.forEach(function (e) {
              return t.scopes.add(e);
            });
        }
        return (
          (e.fromString = function (t) {
            return new e((t || "").split(" "));
          }),
          (e.prototype.validateInputScopes = function (e) {
            if (!e || e.length < 1) throw Yt.createEmptyScopesArrayError();
          }),
          (e.prototype.containsScope = function (t) {
            var r = new e(this.printScopesLowerCase().split(" "));
            return !ct.isEmpty(t) && r.scopes.has(t.toLowerCase());
          }),
          (e.prototype.containsScopeSet = function (e) {
            var t = this;
            return (
              !(!e || e.scopes.size <= 0) &&
              this.scopes.size >= e.scopes.size &&
              e.asArray().every(function (e) {
                return t.containsScope(e);
              })
            );
          }),
          (e.prototype.containsOnlyOIDCScopes = function () {
            var e = this,
              t = 0;
            return (
              m.forEach(function (r) {
                e.containsScope(r) && (t += 1);
              }),
              this.scopes.size === t
            );
          }),
          (e.prototype.appendScope = function (e) {
            ct.isEmpty(e) || this.scopes.add(e.trim());
          }),
          (e.prototype.appendScopes = function (e) {
            var t = this;
            try {
              e.forEach(function (e) {
                return t.appendScope(e);
              });
            } catch (e) {
              throw st.createAppendScopeSetError(e);
            }
          }),
          (e.prototype.removeScope = function (e) {
            if (ct.isEmpty(e)) throw st.createRemoveEmptyScopeFromSetError(e);
            this.scopes.delete(e.trim());
          }),
          (e.prototype.removeOIDCScopes = function () {
            var e = this;
            m.forEach(function (t) {
              e.scopes.delete(t);
            });
          }),
          (e.prototype.unionScopeSets = function (e) {
            if (!e) throw st.createEmptyInputScopeSetError();
            var t = new Set();
            return (
              e.scopes.forEach(function (e) {
                return t.add(e.toLowerCase());
              }),
              this.scopes.forEach(function (e) {
                return t.add(e.toLowerCase());
              }),
              t
            );
          }),
          (e.prototype.intersectingScopeSets = function (e) {
            if (!e) throw st.createEmptyInputScopeSetError();
            e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
            var t = this.unionScopeSets(e),
              r = e.getScopeCount(),
              n = this.getScopeCount();
            return t.size < n + r;
          }),
          (e.prototype.getScopeCount = function () {
            return this.scopes.size;
          }),
          (e.prototype.asArray = function () {
            var e = [];
            return (
              this.scopes.forEach(function (t) {
                return e.push(t);
              }),
              e
            );
          }),
          (e.prototype.printScopes = function () {
            return this.scopes ? this.asArray().join(" ") : "";
          }),
          (e.prototype.printScopesLowerCase = function () {
            return this.printScopes().toLowerCase();
          }),
          e
        );
      })(),
      Zt = (function () {
        function e(t, r) {
          if (ct.isEmpty(t)) throw st.createTokenNullOrEmptyError(t);
          (this.rawToken = t), (this.claims = e.extractTokenClaims(t, r));
        }
        return (
          (e.extractTokenClaims = function (e, t) {
            var r = ct.decodeAuthToken(e);
            try {
              var n = r.JWSPayload,
                o = t.base64Decode(n);
              return JSON.parse(o);
            } catch (e) {
              throw st.createTokenParsingError(e);
            }
          }),
          e
        );
      })(),
      $t = (function () {
        function e(e, t) {
          (this.clientId = e), (this.cryptoImpl = t);
        }
        return (
          (e.prototype.getAllAccounts = function () {
            var t = this,
              r = this.getAccountsFilteredBy(),
              n = Object.keys(r).map(function (e) {
                return r[e];
              });
            return n.length < 1
              ? []
              : n.map(function (r) {
                  var n = e.toObject(new It(), r).getAccountInfo(),
                    o = t.readIdTokenFromCache(t.clientId, n);
                  return o && !n.idTokenClaims && (n.idTokenClaims = new Zt(o.secret, t.cryptoImpl).claims), n;
                });
          }),
          (e.prototype.saveCacheRecord = function (e) {
            return s(this, void 0, void 0, function () {
              return c(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!e) throw st.createNullOrUndefinedCacheRecord();
                    return (
                      e.account && this.setAccount(e.account),
                      e.idToken && this.setIdTokenCredential(e.idToken),
                      e.accessToken ? [4, this.saveAccessToken(e.accessToken)] : [3, 2]
                    );
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return (
                      e.refreshToken && this.setRefreshTokenCredential(e.refreshToken),
                      e.appMetadata && this.setAppMetadata(e.appMetadata),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.saveAccessToken = function (e) {
            return s(this, void 0, void 0, function () {
              var t,
                r,
                n,
                o,
                i = this;
              return c(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (t = this.getCredentialsFilteredBy({
                        clientId: e.clientId,
                        credentialType: e.credentialType,
                        environment: e.environment,
                        homeAccountId: e.homeAccountId,
                        realm: e.realm,
                        tokenType: e.tokenType,
                      })),
                      (r = Xt.fromString(e.target)),
                      (n = Object.keys(t.accessTokens).map(function (e) {
                        return t.accessTokens[e];
                      }))
                        ? ((o = []),
                          n.forEach(function (e) {
                            Xt.fromString(e.target).intersectingScopeSets(r) && o.push(i.removeCredential(e));
                          }),
                          [4, Promise.all(o)])
                        : [3, 2]
                    );
                  case 1:
                    a.sent(), (a.label = 2);
                  case 2:
                    return this.setAccessTokenCredential(e), [2];
                }
              });
            });
          }),
          (e.prototype.getAccountsFilteredBy = function (e) {
            return this.getAccountsFilteredByInternal(
              e ? e.homeAccountId : "",
              e ? e.environment : "",
              e ? e.realm : ""
            );
          }),
          (e.prototype.getAccountsFilteredByInternal = function (e, t, r) {
            var n = this,
              o = this.getKeys(),
              i = {};
            return (
              o.forEach(function (o) {
                var a = n.getAccount(o);
                a &&
                  ((e && !n.matchHomeAccountId(a, e)) ||
                    (t && !n.matchEnvironment(a, t)) ||
                    (r && !n.matchRealm(a, r)) ||
                    (i[o] = a));
              }),
              i
            );
          }),
          (e.prototype.getCredentialsFilteredBy = function (e) {
            return this.getCredentialsFilteredByInternal(
              e.homeAccountId,
              e.environment,
              e.credentialType,
              e.clientId,
              e.familyId,
              e.realm,
              e.target,
              e.oboAssertion,
              e.tokenType,
              e.keyId
            );
          }),
          (e.prototype.getCredentialsFilteredByInternal = function (e, t, r, n, o, i, a, s, c, u) {
            var l = this,
              d = this.getKeys(),
              h = { idTokens: {}, accessTokens: {}, refreshTokens: {} };
            return (
              d.forEach(function (d) {
                var p = Rt.getCredentialType(d);
                if (p !== g.NOT_DEFINED) {
                  var f = l.getSpecificCredential(d, p);
                  if (
                    f &&
                    (!s || l.matchOboAssertion(f, s)) &&
                    (!e || l.matchHomeAccountId(f, e)) &&
                    (!t || l.matchEnvironment(f, t)) &&
                    (!i || l.matchRealm(f, i)) &&
                    (!r || l.matchCredentialType(f, r)) &&
                    (!n || l.matchClientId(f, n)) &&
                    (!o || l.matchFamilyId(f, o)) &&
                    (!a || l.matchTarget(f, a))
                  ) {
                    if (r === A.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
                      if (c && !l.matchTokenType(f, c)) return;
                      switch (c) {
                        case O.POP:
                          if (-1 === d.indexOf(O.POP)) return void l.removeItem(d, S.CREDENTIAL);
                          break;
                        case O.SSH:
                          if (u && !l.matchKeyId(f, u)) return;
                      }
                    }
                    switch (p) {
                      case A.ID_TOKEN:
                        h.idTokens[d] = f;
                        break;
                      case A.ACCESS_TOKEN:
                      case A.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                        h.accessTokens[d] = f;
                        break;
                      case A.REFRESH_TOKEN:
                        h.refreshTokens[d] = f;
                    }
                  }
                }
              }),
              h
            );
          }),
          (e.prototype.getAppMetadataFilteredBy = function (e) {
            return this.getAppMetadataFilteredByInternal(e.environment, e.clientId);
          }),
          (e.prototype.getAppMetadataFilteredByInternal = function (e, t) {
            var r = this,
              n = this.getKeys(),
              o = {};
            return (
              n.forEach(function (n) {
                if (r.isAppMetadata(n)) {
                  var i = r.getAppMetadata(n);
                  i && ((e && !r.matchEnvironment(i, e)) || (t && !r.matchClientId(i, t)) || (o[n] = i));
                }
              }),
              o
            );
          }),
          (e.prototype.getAuthorityMetadataByAlias = function (e) {
            var t = this,
              r = this.getAuthorityMetadataKeys(),
              n = null;
            return (
              r.forEach(function (r) {
                if (t.isAuthorityMetadata(r) && -1 !== r.indexOf(t.clientId)) {
                  var o = t.getAuthorityMetadata(r);
                  o && -1 !== o.aliases.indexOf(e) && (n = o);
                }
              }),
              n
            );
          }),
          (e.prototype.removeAllAccounts = function () {
            return s(this, void 0, void 0, function () {
              var e,
                t,
                r = this;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (e = this.getKeys()),
                      (t = []),
                      e.forEach(function (e) {
                        r.getAccount(e) && t.push(r.removeAccount(e));
                      }),
                      [4, Promise.all(t)]
                    );
                  case 1:
                    return n.sent(), [2, !0];
                }
              });
            });
          }),
          (e.prototype.removeAccount = function (e) {
            return s(this, void 0, void 0, function () {
              var t;
              return c(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!(t = this.getAccount(e))) throw st.createNoAccountFoundError();
                    return [4, this.removeAccountContext(t)];
                  case 1:
                    return [2, r.sent() && this.removeItem(e, S.ACCOUNT)];
                }
              });
            });
          }),
          (e.prototype.removeAccountContext = function (e) {
            return s(this, void 0, void 0, function () {
              var t,
                r,
                n,
                o = this;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (t = this.getKeys()),
                      (r = e.generateAccountId()),
                      (n = []),
                      t.forEach(function (e) {
                        var t = Rt.getCredentialType(e);
                        if (t !== g.NOT_DEFINED) {
                          var i = o.getSpecificCredential(e, t);
                          i && r === i.generateAccountId() && n.push(o.removeCredential(i));
                        }
                      }),
                      [4, Promise.all(n)]
                    );
                  case 1:
                    return i.sent(), [2, !0];
                }
              });
            });
          }),
          (e.prototype.removeCredential = function (e) {
            return s(this, void 0, void 0, function () {
              var t, r;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (
                      ((t = e.generateCredentialKey()),
                      e.credentialType.toLowerCase() !== A.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                    )
                      return [3, 4];
                    if (e.tokenType !== O.POP) return [3, 4];
                    if (!(r = e.keyId)) return [3, 4];
                    n.label = 1;
                  case 1:
                    return n.trys.push([1, 3, , 4]), [4, this.cryptoImpl.removeTokenBindingKey(r)];
                  case 2:
                    return n.sent(), [3, 4];
                  case 3:
                    throw (n.sent(), st.createBindingKeyNotRemovedError());
                  case 4:
                    return [2, this.removeItem(t, S.CREDENTIAL)];
                }
              });
            });
          }),
          (e.prototype.removeAppMetadata = function () {
            var e = this;
            return (
              this.getKeys().forEach(function (t) {
                e.isAppMetadata(t) && e.removeItem(t, S.APP_METADATA);
              }),
              !0
            );
          }),
          (e.prototype.readCacheRecord = function (e, t, r, n, o, i) {
            var a = this.readAccountFromCache(e),
              s = this.readIdTokenFromCache(t, e),
              c = this.readAccessTokenFromCache(t, e, r, o, i),
              u = this.readRefreshTokenFromCache(t, e, !1),
              l = this.readAppMetadataFromCache(n, t);
            return (
              a && s && (a.idTokenClaims = new Zt(s.secret, this.cryptoImpl).claims),
              { account: a, idToken: s, accessToken: c, refreshToken: u, appMetadata: l }
            );
          }),
          (e.prototype.readAccountFromCache = function (e) {
            var t = It.generateAccountCacheKey(e);
            return this.getAccount(t);
          }),
          (e.prototype.readIdTokenFromCache = function (e, t) {
            var r = {
                homeAccountId: t.homeAccountId,
                environment: t.environment,
                credentialType: A.ID_TOKEN,
                clientId: e,
                realm: t.tenantId,
              },
              n = this.getCredentialsFilteredBy(r),
              o = Object.keys(n.idTokens).map(function (e) {
                return n.idTokens[e];
              }),
              i = o.length;
            if (i < 1) return null;
            if (i > 1) throw st.createMultipleMatchingTokensInCacheError();
            return o[0];
          }),
          (e.prototype.readAccessTokenFromCache = function (e, t, r, n, o) {
            var i = n && n !== O.BEARER ? A.ACCESS_TOKEN_WITH_AUTH_SCHEME : A.ACCESS_TOKEN,
              a = {
                homeAccountId: t.homeAccountId,
                environment: t.environment,
                credentialType: i,
                clientId: e,
                realm: t.tenantId,
                target: r.printScopesLowerCase(),
                tokenType: n,
                keyId: o,
              },
              s = this.getCredentialsFilteredBy(a),
              c = Object.keys(s.accessTokens).map(function (e) {
                return s.accessTokens[e];
              }),
              u = c.length;
            if (u < 1) return null;
            if (u > 1) throw st.createMultipleMatchingTokensInCacheError();
            return c[0];
          }),
          (e.prototype.readRefreshTokenFromCache = function (e, t, r) {
            var n = r ? "1" : void 0,
              o = {
                homeAccountId: t.homeAccountId,
                environment: t.environment,
                credentialType: A.REFRESH_TOKEN,
                clientId: e,
                familyId: n,
              },
              i = this.getCredentialsFilteredBy(o),
              a = Object.keys(i.refreshTokens).map(function (e) {
                return i.refreshTokens[e];
              });
            return a.length < 1 ? null : a[0];
          }),
          (e.prototype.readAppMetadataFromCache = function (e, t) {
            var r = { environment: e, clientId: t },
              n = this.getAppMetadataFilteredBy(r),
              o = Object.keys(n).map(function (e) {
                return n[e];
              }),
              i = o.length;
            if (i < 1) return null;
            if (i > 1) throw st.createMultipleMatchingAppMetadataInCacheError();
            return o[0];
          }),
          (e.prototype.isAppMetadataFOCI = function (e, t) {
            var r = this.readAppMetadataFromCache(e, t);
            return !(!r || "1" !== r.familyId);
          }),
          (e.prototype.matchHomeAccountId = function (e, t) {
            return !(!e.homeAccountId || t !== e.homeAccountId);
          }),
          (e.prototype.matchOboAssertion = function (e, t) {
            return !(!e.oboAssertion || t !== e.oboAssertion);
          }),
          (e.prototype.matchEnvironment = function (e, t) {
            var r = this.getAuthorityMetadataByAlias(t);
            return !!(r && r.aliases.indexOf(e.environment) > -1);
          }),
          (e.prototype.matchCredentialType = function (e, t) {
            return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
          }),
          (e.prototype.matchClientId = function (e, t) {
            return !(!e.clientId || t !== e.clientId);
          }),
          (e.prototype.matchFamilyId = function (e, t) {
            return !(!e.familyId || t !== e.familyId);
          }),
          (e.prototype.matchRealm = function (e, t) {
            return !(!e.realm || t !== e.realm);
          }),
          (e.prototype.matchTarget = function (e, t) {
            if (
              (e.credentialType !== A.ACCESS_TOKEN && e.credentialType !== A.ACCESS_TOKEN_WITH_AUTH_SCHEME) ||
              !e.target
            )
              return !1;
            var r = Xt.fromString(e.target),
              n = Xt.fromString(t);
            return (
              n.containsOnlyOIDCScopes() ? n.removeScope(g.OFFLINE_ACCESS_SCOPE) : n.removeOIDCScopes(),
              r.containsScopeSet(n)
            );
          }),
          (e.prototype.matchTokenType = function (e, t) {
            return !(!e.tokenType || e.tokenType !== t);
          }),
          (e.prototype.matchKeyId = function (e, t) {
            return !(!e.keyId || e.keyId !== t);
          }),
          (e.prototype.isAppMetadata = function (e) {
            return -1 !== e.indexOf("appmetadata");
          }),
          (e.prototype.isAuthorityMetadata = function (e) {
            return -1 !== e.indexOf(k);
          }),
          (e.prototype.generateAuthorityMetadataCacheKey = function (e) {
            return k + "-" + this.clientId + "-" + e;
          }),
          (e.prototype.getSpecificCredential = function (e, t) {
            switch (t) {
              case A.ID_TOKEN:
                return this.getIdTokenCredential(e);
              case A.ACCESS_TOKEN:
              case A.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                return this.getAccessTokenCredential(e);
              case A.REFRESH_TOKEN:
                return this.getRefreshTokenCredential(e);
              default:
                return null;
            }
          }),
          (e.toObject = function (e, t) {
            for (var r in t) e[r] = t[r];
            return e;
          }),
          e
        );
      })(),
      er = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i(t, e),
          (t.prototype.setAccount = function () {
            throw _e.createUnexpectedError(
              "Storage interface - setAccount() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getAccount = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getAccount() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.setIdTokenCredential = function () {
            throw _e.createUnexpectedError(
              "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getIdTokenCredential = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.setAccessTokenCredential = function () {
            throw _e.createUnexpectedError(
              "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getAccessTokenCredential = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.setRefreshTokenCredential = function () {
            throw _e.createUnexpectedError(
              "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getRefreshTokenCredential = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.setAppMetadata = function () {
            throw _e.createUnexpectedError(
              "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getAppMetadata = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.setServerTelemetry = function () {
            throw _e.createUnexpectedError(
              "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getServerTelemetry = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.setAuthorityMetadata = function () {
            throw _e.createUnexpectedError(
              "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getAuthorityMetadata = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getAuthorityMetadataKeys = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.setThrottlingCache = function () {
            throw _e.createUnexpectedError(
              "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getThrottlingCache = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.removeItem = function () {
            throw _e.createUnexpectedError(
              "Storage interface - removeItem() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.containsKey = function () {
            throw _e.createUnexpectedError(
              "Storage interface - containsKey() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.getKeys = function () {
            throw _e.createUnexpectedError(
              "Storage interface - getKeys() has not been implemented for the cacheStorage interface."
            );
          }),
          (t.prototype.clear = function () {
            return s(this, void 0, void 0, function () {
              return c(this, function (e) {
                throw (
                  ("Storage interface - clear() has not been implemented for the cacheStorage interface.",
                  _e.createUnexpectedError(
                    "Storage interface - clear() has not been implemented for the cacheStorage interface."
                  ))
                );
              });
            });
          }),
          t
        );
      })($t),
      tr = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i(t, e),
          (t.createIdTokenEntity = function (e, r, n, o, i, a) {
            var s = new t();
            return (
              (s.credentialType = A.ID_TOKEN),
              (s.homeAccountId = e),
              (s.environment = r),
              (s.clientId = o),
              (s.secret = n),
              (s.realm = i),
              (s.oboAssertion = a),
              s
            );
          }),
          (t.isIdTokenEntity = function (e) {
            return (
              !!e &&
              e.hasOwnProperty("homeAccountId") &&
              e.hasOwnProperty("environment") &&
              e.hasOwnProperty("credentialType") &&
              e.hasOwnProperty("realm") &&
              e.hasOwnProperty("clientId") &&
              e.hasOwnProperty("secret") &&
              e.credentialType === A.ID_TOKEN
            );
          }),
          t
        );
      })(Rt),
      rr = (function () {
        function e() {}
        return (
          (e.nowSeconds = function () {
            return Math.round(new Date().getTime() / 1e3);
          }),
          (e.isTokenExpired = function (t, r) {
            var n = Number(t) || 0;
            return e.nowSeconds() + r > n;
          }),
          (e.wasClockTurnedBack = function (t) {
            return Number(t) > e.nowSeconds();
          }),
          (e.delay = function (e, t) {
            return new Promise(function (r) {
              return setTimeout(function () {
                return r(t);
              }, e);
            });
          }),
          e
        );
      })(),
      nr = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i(t, e),
          (t.createAccessTokenEntity = function (e, r, n, o, i, a, s, c, u, l, d, h, p) {
            var f,
              g = new t();
            (g.homeAccountId = e), (g.credentialType = A.ACCESS_TOKEN), (g.secret = n);
            var y = rr.nowSeconds();
            if (
              ((g.cachedAt = y.toString()),
              (g.expiresOn = s.toString()),
              (g.extendedExpiresOn = c.toString()),
              l && (g.refreshOn = l.toString()),
              (g.environment = r),
              (g.clientId = o),
              (g.realm = i),
              (g.target = a),
              (g.oboAssertion = h),
              (g.tokenType = ct.isEmpty(d) ? O.BEARER : d),
              g.tokenType !== O.BEARER)
            )
              switch (((g.credentialType = A.ACCESS_TOKEN_WITH_AUTH_SCHEME), g.tokenType)) {
                case O.POP:
                  var m = Zt.extractTokenClaims(n, u);
                  if (!(null === (f = null == m ? void 0 : m.cnf) || void 0 === f ? void 0 : f.kid))
                    throw st.createTokenClaimsRequiredError();
                  g.keyId = m.cnf.kid;
                  break;
                case O.SSH:
                  g.keyId = p;
              }
            return g;
          }),
          (t.isAccessTokenEntity = function (e) {
            return (
              !!e &&
              e.hasOwnProperty("homeAccountId") &&
              e.hasOwnProperty("environment") &&
              e.hasOwnProperty("credentialType") &&
              e.hasOwnProperty("realm") &&
              e.hasOwnProperty("clientId") &&
              e.hasOwnProperty("secret") &&
              e.hasOwnProperty("target") &&
              (e.credentialType === A.ACCESS_TOKEN || e.credentialType === A.ACCESS_TOKEN_WITH_AUTH_SCHEME)
            );
          }),
          t
        );
      })(Rt),
      or = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i(t, e),
          (t.createRefreshTokenEntity = function (e, r, n, o, i, a) {
            var s = new t();
            return (
              (s.clientId = o),
              (s.credentialType = A.REFRESH_TOKEN),
              (s.environment = r),
              (s.homeAccountId = e),
              (s.secret = n),
              (s.oboAssertion = a),
              i && (s.familyId = i),
              s
            );
          }),
          (t.isRefreshTokenEntity = function (e) {
            return (
              !!e &&
              e.hasOwnProperty("homeAccountId") &&
              e.hasOwnProperty("environment") &&
              e.hasOwnProperty("credentialType") &&
              e.hasOwnProperty("clientId") &&
              e.hasOwnProperty("secret") &&
              e.credentialType === A.REFRESH_TOKEN
            );
          }),
          t
        );
      })(Rt),
      ir = (function () {
        function e() {}
        return (
          (e.prototype.generateAppMetadataKey = function () {
            return e.generateAppMetadataCacheKey(this.environment, this.clientId);
          }),
          (e.generateAppMetadataCacheKey = function (e, t) {
            return ["appmetadata", e, t].join(C.CACHE_KEY_SEPARATOR).toLowerCase();
          }),
          (e.createAppMetadataEntity = function (t, r, n) {
            var o = new e();
            return (o.clientId = t), (o.environment = r), n && (o.familyId = n), o;
          }),
          (e.isAppMetadataEntity = function (e, t) {
            return (
              !!t && 0 === e.indexOf("appmetadata") && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment")
            );
          }),
          e
        );
      })(),
      ar = (function () {
        function e() {
          (this.failedRequests = []), (this.errors = []), (this.cacheHits = 0);
        }
        return (
          (e.isServerTelemetryEntity = function (e, t) {
            var r = 0 === e.indexOf(N.CACHE_KEY),
              n = !0;
            return (
              t &&
                (n = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")),
              r && n
            );
          }),
          e
        );
      })(),
      sr = (function () {
        function e() {
          this.expiresAt = rr.nowSeconds() + P;
        }
        return (
          (e.prototype.updateCloudDiscoveryMetadata = function (e, t) {
            (this.aliases = e.aliases),
              (this.preferred_cache = e.preferred_cache),
              (this.preferred_network = e.preferred_network),
              (this.aliasesFromNetwork = t);
          }),
          (e.prototype.updateEndpointMetadata = function (e, t) {
            (this.authorization_endpoint = e.authorization_endpoint),
              (this.token_endpoint = e.token_endpoint),
              (this.end_session_endpoint = e.end_session_endpoint),
              (this.issuer = e.issuer),
              (this.endpointsFromNetwork = t);
          }),
          (e.prototype.updateCanonicalAuthority = function (e) {
            this.canonical_authority = e;
          }),
          (e.prototype.resetExpiresAt = function () {
            this.expiresAt = rr.nowSeconds() + P;
          }),
          (e.prototype.isExpired = function () {
            return this.expiresAt <= rr.nowSeconds();
          }),
          (e.isAuthorityMetadataEntity = function (e, t) {
            return (
              !!t &&
              0 === e.indexOf(k) &&
              t.hasOwnProperty("aliases") &&
              t.hasOwnProperty("preferred_cache") &&
              t.hasOwnProperty("preferred_network") &&
              t.hasOwnProperty("canonical_authority") &&
              t.hasOwnProperty("authorization_endpoint") &&
              t.hasOwnProperty("token_endpoint") &&
              t.hasOwnProperty("issuer") &&
              t.hasOwnProperty("aliasesFromNetwork") &&
              t.hasOwnProperty("endpointsFromNetwork") &&
              t.hasOwnProperty("expiresAt")
            );
          }),
          e
        );
      })(),
      cr = (function () {
        function e() {}
        return (
          (e.isThrottlingEntity = function (e, t) {
            var r = !1;
            e && (r = 0 === e.indexOf(H));
            var n = !0;
            return t && (n = t.hasOwnProperty("throttleTime")), r && n;
          }),
          e
        );
      })(),
      ur = (function () {
        function e() {}
        return (
          (e.setRequestState = function (t, r, n) {
            var o = e.generateLibraryState(t, n);
            return ct.isEmpty(r) ? o : "" + o + g.RESOURCE_DELIM + r;
          }),
          (e.generateLibraryState = function (e, t) {
            if (!e) throw st.createNoCryptoObjectError("generateLibraryState");
            var r = { id: e.createNewGuid() };
            t && (r.meta = t);
            var n = JSON.stringify(r);
            return e.base64Encode(n);
          }),
          (e.parseRequestState = function (e, t) {
            if (!e) throw st.createNoCryptoObjectError("parseRequestState");
            if (ct.isEmpty(t)) throw st.createInvalidStateError(t, "Null, undefined or empty state");
            try {
              var r = t.split(g.RESOURCE_DELIM),
                n = r[0],
                o = r.length > 1 ? r.slice(1).join(g.RESOURCE_DELIM) : "",
                i = e.base64Decode(n),
                a = JSON.parse(i);
              return { userRequestState: ct.isEmpty(o) ? "" : o, libraryState: a };
            } catch (e) {
              throw st.createInvalidStateError(t, e);
            }
          }),
          e
        );
      })();
    !(function (e) {
      (e.HOME_ACCOUNT_ID = "home_account_id"), (e.UPN = "UPN");
    })(bt || (bt = {}));
    var lr,
      dr = { code: "redirect_uri_empty", desc: "A redirect URI is required for all calls, and none has been set." },
      hr = { code: "post_logout_uri_empty", desc: "A post logout redirect has not been set." },
      pr = { code: "storage_not_supported", desc: "Given storage configuration option was not supported." },
      fr = {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics.",
      },
      gr = {
        code: "stubbed_public_client_application_called",
        desc: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors",
      },
      yr = {
        code: "in_mem_redirect_unavailable",
        desc: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true.",
      },
      mr = (function (e) {
        function t(r, n) {
          var o = e.call(this, r, n) || this;
          return (o.name = "BrowserConfigurationAuthError"), Object.setPrototypeOf(o, t.prototype), o;
        }
        return (
          ae(t, e),
          (t.createRedirectUriEmptyError = function () {
            return new t(dr.code, dr.desc);
          }),
          (t.createPostLogoutRedirectUriEmptyError = function () {
            return new t(hr.code, hr.desc);
          }),
          (t.createStorageNotSupportedError = function (e) {
            return new t(pr.code, pr.desc + " Given Location: " + e);
          }),
          (t.createRedirectCallbacksNotSetError = function () {
            return new t(fr.code, fr.desc);
          }),
          (t.createStubPcaInstanceCalledError = function () {
            return new t(gr.code, gr.desc);
          }),
          (t.createInMemoryRedirectUnavailableError = function () {
            return new t(yr.code, yr.desc);
          }),
          t
        );
      })(_e),
      vr = (function () {
        function e(e) {
          this.validateWindowStorage(e), (this.windowStorage = window[e]);
        }
        return (
          (e.prototype.validateWindowStorage = function (e) {
            if (e !== j.LocalStorage && e !== j.SessionStorage) throw mr.createStorageNotSupportedError(e);
            if (!!!window[e]) throw mr.createStorageNotSupportedError(e);
          }),
          (e.prototype.getItem = function (e) {
            return this.windowStorage.getItem(e);
          }),
          (e.prototype.setItem = function (e, t) {
            this.windowStorage.setItem(e, t);
          }),
          (e.prototype.removeItem = function (e) {
            this.windowStorage.removeItem(e);
          }),
          (e.prototype.getKeys = function () {
            return Object.keys(this.windowStorage);
          }),
          (e.prototype.containsKey = function (e) {
            return this.windowStorage.hasOwnProperty(e);
          }),
          e
        );
      })(),
      _r = (function () {
        function e() {
          this.cache = new Map();
        }
        return (
          (e.prototype.getItem = function (e) {
            return this.cache.get(e) || null;
          }),
          (e.prototype.setItem = function (e, t) {
            this.cache.set(e, t);
          }),
          (e.prototype.removeItem = function (e) {
            this.cache.delete(e);
          }),
          (e.prototype.getKeys = function () {
            var e = [];
            return (
              this.cache.forEach(function (t, r) {
                e.push(r);
              }),
              e
            );
          }),
          (e.prototype.containsKey = function (e) {
            return this.cache.has(e);
          }),
          (e.prototype.clear = function () {
            this.cache.clear();
          }),
          e
        );
      })(),
      wr = (function () {
        function e(t) {
          if (((this._urlString = t), ct.isEmpty(this._urlString))) throw Yt.createUrlEmptyError();
          ct.isEmpty(this.getHash()) && (this._urlString = e.canonicalizeUri(t));
        }
        return (
          Object.defineProperty(e.prototype, "urlString", {
            get: function () {
              return this._urlString;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.canonicalizeUri = function (e) {
            if (e) {
              var t = e.toLowerCase();
              return (
                ct.endsWith(t, "?") ? (t = t.slice(0, -1)) : ct.endsWith(t, "?/") && (t = t.slice(0, -2)),
                ct.endsWith(t, "/") || (t += "/"),
                t
              );
            }
            return e;
          }),
          (e.prototype.validateAsUri = function () {
            var e;
            try {
              e = this.getUrlComponents();
            } catch (e) {
              throw Yt.createUrlParseError(e);
            }
            if (!e.HostNameAndPort || !e.PathSegments)
              throw Yt.createUrlParseError("Given url string: " + this.urlString);
            if (!e.Protocol || "https:" !== e.Protocol.toLowerCase())
              throw Yt.createInsecureAuthorityUriError(this.urlString);
          }),
          (e.appendQueryString = function (e, t) {
            return ct.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
          }),
          (e.removeHashFromUrl = function (t) {
            return e.canonicalizeUri(t.split("#")[0]);
          }),
          (e.prototype.replaceTenantPath = function (t) {
            var r = this.getUrlComponents(),
              n = r.PathSegments;
            return (
              !t || 0 === n.length || (n[0] !== h.COMMON && n[0] !== h.ORGANIZATIONS) || (n[0] = t),
              e.constructAuthorityUriFromObject(r)
            );
          }),
          (e.prototype.getHash = function () {
            return e.parseHash(this.urlString);
          }),
          (e.prototype.getUrlComponents = function () {
            var e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
              t = this.urlString.match(e);
            if (!t) throw Yt.createUrlParseError("Given url string: " + this.urlString);
            var r = { Protocol: t[1], HostNameAndPort: t[4], AbsolutePath: t[5], QueryString: t[7] },
              n = r.AbsolutePath.split("/");
            return (
              (n = n.filter(function (e) {
                return e && e.length > 0;
              })),
              (r.PathSegments = n),
              !ct.isEmpty(r.QueryString) &&
                r.QueryString.endsWith("/") &&
                (r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1)),
              r
            );
          }),
          (e.getDomainFromUrl = function (e) {
            var t = RegExp("^([^:/?#]+://)?([^/?#]*)"),
              r = e.match(t);
            if (!r) throw Yt.createUrlParseError("Given url string: " + e);
            return r[2];
          }),
          (e.getAbsoluteUrl = function (t, r) {
            if (t[0] === g.FORWARD_SLASH) {
              var n = new e(r).getUrlComponents();
              return n.Protocol + "//" + n.HostNameAndPort + t;
            }
            return t;
          }),
          (e.parseHash = function (e) {
            var t = e.indexOf("#"),
              r = e.indexOf("#/");
            return r > -1 ? e.substring(r + 2) : t > -1 ? e.substring(t + 1) : "";
          }),
          (e.constructAuthorityUriFromObject = function (t) {
            return new e(t.Protocol + "//" + t.HostNameAndPort + "/" + t.PathSegments.join("/"));
          }),
          (e.getDeserializedHash = function (t) {
            if (ct.isEmpty(t)) return {};
            var r = e.parseHash(t),
              n = ct.queryStringToObject(ct.isEmpty(r) ? t : r);
            if (!n) throw st.createHashNotDeserializedError(JSON.stringify(n));
            return n;
          }),
          (e.hashContainsKnownProperties = function (t) {
            if (ct.isEmpty(t) || t.indexOf("=") < 0) return !1;
            var r = e.getDeserializedHash(t);
            return !!(r.code || r.error_description || r.error || r.state);
          }),
          e
        );
      })(),
      Er = (function () {
        function e() {}
        return (
          (e.extractBrowserRequestState = function (e, t) {
            if (ct.isEmpty(t)) return null;
            try {
              return ur.parseRequestState(e, t).libraryState.meta;
            } catch (e) {
              throw st.createInvalidStateError(t, e);
            }
          }),
          (e.parseServerResponseFromHash = function (e) {
            if (!e) return {};
            var t = new wr(e);
            return wr.getDeserializedHash(t.getHash());
          }),
          e
        );
      })(),
      Tr = (function (e) {
        function t(t, r, n, o) {
          var i = e.call(this, t, n) || this;
          return (
            (i.COOKIE_LIFE_MULTIPLIER = 864e5),
            (i.cacheConfig = r),
            (i.logger = o),
            (i.internalStorage = new _r()),
            (i.browserStorage = i.setupBrowserStorage(i.cacheConfig.cacheLocation)),
            (i.temporaryCacheStorage = i.setupTemporaryCacheStorage(i.cacheConfig.cacheLocation)),
            i.migrateCacheEntries(),
            i
          );
        }
        return (
          ae(t, e),
          (t.prototype.setupBrowserStorage = function (e) {
            switch (e) {
              case j.LocalStorage:
              case j.SessionStorage:
                try {
                  return new vr(e);
                } catch (e) {
                  this.logger.verbose(e);
                  break;
                }
            }
            return (this.cacheConfig.cacheLocation = j.MemoryStorage), new _r();
          }),
          (t.prototype.setupTemporaryCacheStorage = function (e) {
            switch (e) {
              case j.LocalStorage:
              case j.SessionStorage:
                try {
                  return new vr(j.SessionStorage);
                } catch (e) {
                  return this.logger.verbose(e), this.internalStorage;
                }
              case j.MemoryStorage:
              default:
                return this.internalStorage;
            }
          }),
          (t.prototype.migrateCacheEntries = function () {
            var e = this,
              t = g.CACHE_PREFIX + "." + d.ID_TOKEN,
              r = g.CACHE_PREFIX + "." + d.CLIENT_INFO,
              n = g.CACHE_PREFIX + "." + d.ERROR,
              o = g.CACHE_PREFIX + "." + d.ERROR_DESC,
              i = [
                this.browserStorage.getItem(t),
                this.browserStorage.getItem(r),
                this.browserStorage.getItem(n),
                this.browserStorage.getItem(o),
              ];
            [d.ID_TOKEN, d.CLIENT_INFO, d.ERROR, d.ERROR_DESC].forEach(function (t, r) {
              return e.migrateCacheEntry(t, i[r]);
            });
          }),
          (t.prototype.migrateCacheEntry = function (e, t) {
            t && this.setTemporaryCache(e, t, !0);
          }),
          (t.prototype.validateAndParseJson = function (e) {
            try {
              var t = JSON.parse(e);
              return t && "object" == typeof t ? t : null;
            } catch (e) {
              return null;
            }
          }),
          (t.prototype.getItem = function (e) {
            return this.browserStorage.getItem(e);
          }),
          (t.prototype.setItem = function (e, t) {
            this.browserStorage.setItem(e, t);
          }),
          (t.prototype.getAccount = function (e) {
            var t = this.getItem(e);
            if (!t) return null;
            var r = this.validateAndParseJson(t);
            return r && It.isAccountEntity(r) ? $t.toObject(new It(), r) : null;
          }),
          (t.prototype.setAccount = function (e) {
            this.logger.trace("BrowserCacheManager.setAccount called");
            var t = e.generateAccountKey();
            this.setItem(t, JSON.stringify(e));
          }),
          (t.prototype.getIdTokenCredential = function (e) {
            var t = this.getItem(e);
            if (!t) return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), null;
            var r = this.validateAndParseJson(t);
            return r && tr.isIdTokenEntity(r)
              ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), $t.toObject(new tr(), r))
              : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), null);
          }),
          (t.prototype.setIdTokenCredential = function (e) {
            this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
            var t = e.generateCredentialKey();
            this.setItem(t, JSON.stringify(e));
          }),
          (t.prototype.getAccessTokenCredential = function (e) {
            var t = this.getItem(e);
            if (!t)
              return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), null;
            var r = this.validateAndParseJson(t);
            return r && nr.isAccessTokenEntity(r)
              ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), $t.toObject(new nr(), r))
              : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), null);
          }),
          (t.prototype.setAccessTokenCredential = function (e) {
            this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
            var t = e.generateCredentialKey();
            this.setItem(t, JSON.stringify(e));
          }),
          (t.prototype.getRefreshTokenCredential = function (e) {
            var t = this.getItem(e);
            if (!t)
              return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), null;
            var r = this.validateAndParseJson(t);
            return r && or.isRefreshTokenEntity(r)
              ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"),
                $t.toObject(new or(), r))
              : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), null);
          }),
          (t.prototype.setRefreshTokenCredential = function (e) {
            this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
            var t = e.generateCredentialKey();
            this.setItem(t, JSON.stringify(e));
          }),
          (t.prototype.getAppMetadata = function (e) {
            var t = this.getItem(e);
            if (!t) return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
            var r = this.validateAndParseJson(t);
            return r && ir.isAppMetadataEntity(e, r)
              ? (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), $t.toObject(new ir(), r))
              : (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null);
          }),
          (t.prototype.setAppMetadata = function (e) {
            this.logger.trace("BrowserCacheManager.setAppMetadata called");
            var t = e.generateAppMetadataKey();
            this.setItem(t, JSON.stringify(e));
          }),
          (t.prototype.getServerTelemetry = function (e) {
            var t = this.getItem(e);
            if (!t) return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
            var r = this.validateAndParseJson(t);
            return r && ar.isServerTelemetryEntity(e, r)
              ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), $t.toObject(new ar(), r))
              : (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null);
          }),
          (t.prototype.setServerTelemetry = function (e, t) {
            this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(e, JSON.stringify(t));
          }),
          (t.prototype.getAuthorityMetadata = function (e) {
            var t = this.internalStorage.getItem(e);
            if (!t) return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
            var r = this.validateAndParseJson(t);
            return r && sr.isAuthorityMetadataEntity(e, r)
              ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), $t.toObject(new sr(), r))
              : null;
          }),
          (t.prototype.getAuthorityMetadataKeys = function () {
            var e = this;
            return this.internalStorage.getKeys().filter(function (t) {
              return e.isAuthorityMetadata(t);
            });
          }),
          (t.prototype.setWrapperMetadata = function (e, t) {
            this.internalStorage.setItem(V.WRAPPER_SKU, e), this.internalStorage.setItem(V.WRAPPER_VER, t);
          }),
          (t.prototype.getWrapperMetadata = function () {
            return [
              this.internalStorage.getItem(V.WRAPPER_SKU) || "",
              this.internalStorage.getItem(V.WRAPPER_VER) || "",
            ];
          }),
          (t.prototype.setAuthorityMetadata = function (e, t) {
            this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"),
              this.internalStorage.setItem(e, JSON.stringify(t));
          }),
          (t.prototype.getActiveAccount = function () {
            var e = this.generateCacheKey(d.ACTIVE_ACCOUNT),
              t = this.browserStorage.getItem(e);
            return (t && this.getAccountInfoByFilter({ localAccountId: t })[0]) || null;
          }),
          (t.prototype.setActiveAccount = function (e) {
            var t = this.generateCacheKey(d.ACTIVE_ACCOUNT);
            e
              ? (this.logger.verbose("setActiveAccount: Active account set"),
                this.browserStorage.setItem(t, e.localAccountId))
              : (this.logger.verbose("setActiveAccount: No account passed, active account not set"),
                this.browserStorage.removeItem(t));
          }),
          (t.prototype.getAccountInfoByFilter = function (e) {
            return this.getAllAccounts().filter(function (t) {
              return (
                (!e.username || e.username.toLowerCase() === t.username.toLowerCase()) &&
                (!e.homeAccountId || e.homeAccountId === t.homeAccountId) &&
                (!e.localAccountId || e.localAccountId === t.localAccountId) &&
                (!e.tenantId || e.tenantId === t.tenantId) &&
                (!e.environment || e.environment === t.environment)
              );
            });
          }),
          (t.prototype.getThrottlingCache = function (e) {
            var t = this.getItem(e);
            if (!t) return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
            var r = this.validateAndParseJson(t);
            return r && cr.isThrottlingEntity(e, r)
              ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), $t.toObject(new cr(), r))
              : (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null);
          }),
          (t.prototype.setThrottlingCache = function (e, t) {
            this.logger.trace("BrowserCacheManager.setThrottlingCache called"), this.setItem(e, JSON.stringify(t));
          }),
          (t.prototype.getTemporaryCache = function (e, t) {
            var r = t ? this.generateCacheKey(e) : e;
            if (this.cacheConfig.storeAuthStateInCookie) {
              var n = this.getItemCookie(r);
              if (n)
                return (
                  this.logger.trace(
                    "BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies"
                  ),
                  n
                );
            }
            var o = this.temporaryCacheStorage.getItem(r);
            if (!o) {
              if (this.cacheConfig.cacheLocation === j.LocalStorage) {
                var i = this.browserStorage.getItem(r);
                if (i)
                  return (
                    this.logger.trace(
                      "BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage"
                    ),
                    i
                  );
              }
              return (
                this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage"), null
              );
            }
            return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned"), o;
          }),
          (t.prototype.setTemporaryCache = function (e, t, r) {
            var n = r ? this.generateCacheKey(e) : e;
            this.temporaryCacheStorage.setItem(n, t),
              this.cacheConfig.storeAuthStateInCookie &&
                (this.logger.trace(
                  "BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"
                ),
                this.setItemCookie(n, t));
          }),
          (t.prototype.removeItem = function (e) {
            return (
              this.browserStorage.removeItem(e),
              this.temporaryCacheStorage.removeItem(e),
              this.cacheConfig.storeAuthStateInCookie &&
                (this.logger.trace(
                  "BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"
                ),
                this.clearItemCookie(e)),
              !0
            );
          }),
          (t.prototype.containsKey = function (e) {
            return this.browserStorage.containsKey(e) || this.temporaryCacheStorage.containsKey(e);
          }),
          (t.prototype.getKeys = function () {
            return de(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
          }),
          (t.prototype.clear = function () {
            return ce(this, void 0, void 0, function () {
              var e = this;
              return ue(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.removeAllAccounts()];
                  case 1:
                    return (
                      t.sent(),
                      this.removeAppMetadata(),
                      this.getKeys().forEach(function (t) {
                        (!e.browserStorage.containsKey(t) && !e.temporaryCacheStorage.containsKey(t)) ||
                          (-1 === t.indexOf(g.CACHE_PREFIX) && -1 === t.indexOf(e.clientId)) ||
                          e.removeItem(t);
                      }),
                      this.internalStorage.clear(),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype.setItemCookie = function (e, t, r) {
            var n = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=/;";
            r && (n += "expires=" + this.getCookieExpirationTime(r) + ";");
            this.cacheConfig.secureCookies && (n += "Secure;"), (document.cookie = n);
          }),
          (t.prototype.getItemCookie = function (e) {
            for (var t = encodeURIComponent(e) + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
              for (var o = r[n]; " " === o.charAt(0); ) o = o.substring(1);
              if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length));
            }
            return "";
          }),
          (t.prototype.clearMsalCookies = function () {
            var e = this,
              t = g.CACHE_PREFIX + "." + this.clientId;
            document.cookie.split(";").forEach(function (r) {
              for (; " " === r.charAt(0); ) r = r.substring(1);
              if (0 === r.indexOf(t)) {
                var n = r.split("=")[0];
                e.clearItemCookie(n);
              }
            });
          }),
          (t.prototype.clearItemCookie = function (e) {
            this.setItemCookie(e, "", -1);
          }),
          (t.prototype.getCookieExpirationTime = function (e) {
            var t = new Date();
            return new Date(t.getTime() + e * this.COOKIE_LIFE_MULTIPLIER).toUTCString();
          }),
          (t.prototype.getCache = function () {
            return this.browserStorage;
          }),
          (t.prototype.setCache = function () {}),
          (t.prototype.generateCacheKey = function (e) {
            return this.validateAndParseJson(e)
              ? JSON.stringify(e)
              : ct.startsWith(e, g.CACHE_PREFIX) || ct.startsWith(e, d.ADAL_ID_TOKEN)
              ? e
              : g.CACHE_PREFIX + "." + this.clientId + "." + e;
          }),
          (t.prototype.generateAuthorityKey = function (e) {
            var t = ur.parseRequestState(this.cryptoImpl, e).libraryState.id;
            return this.generateCacheKey(z.AUTHORITY + "." + t);
          }),
          (t.prototype.generateNonceKey = function (e) {
            var t = ur.parseRequestState(this.cryptoImpl, e).libraryState.id;
            return this.generateCacheKey(z.NONCE_IDTOKEN + "." + t);
          }),
          (t.prototype.generateStateKey = function (e) {
            var t = ur.parseRequestState(this.cryptoImpl, e).libraryState.id;
            return this.generateCacheKey(z.REQUEST_STATE + "." + t);
          }),
          (t.prototype.getCachedAuthority = function (e) {
            var t = this.generateStateKey(e),
              r = this.getTemporaryCache(t);
            if (!r) return null;
            var n = this.generateAuthorityKey(r);
            return this.getTemporaryCache(n);
          }),
          (t.prototype.updateCacheEntries = function (e, t, r, n, o) {
            this.logger.trace("BrowserCacheManager.updateCacheEntries called");
            var i = this.generateStateKey(e);
            this.setTemporaryCache(i, e, !1);
            var a = this.generateNonceKey(e);
            this.setTemporaryCache(a, t, !1);
            var s = this.generateAuthorityKey(e);
            if ((this.setTemporaryCache(s, r, !1), o)) {
              var c = { credential: o.homeAccountId, type: bt.HOME_ACCOUNT_ID };
              this.setTemporaryCache(z.CCS_CREDENTIAL, JSON.stringify(c), !0);
            } else if (!ct.isEmpty(n)) {
              c = { credential: n, type: bt.UPN };
              this.setTemporaryCache(z.CCS_CREDENTIAL, JSON.stringify(c), !0);
            }
          }),
          (t.prototype.resetRequestCache = function (e) {
            var t = this;
            this.logger.trace("BrowserCacheManager.resetRequestCache called"),
              ct.isEmpty(e) ||
                this.getKeys().forEach(function (r) {
                  -1 !== r.indexOf(e) && t.removeItem(r);
                }),
              e &&
                (this.removeItem(this.generateStateKey(e)),
                this.removeItem(this.generateNonceKey(e)),
                this.removeItem(this.generateAuthorityKey(e))),
              this.removeItem(this.generateCacheKey(z.REQUEST_PARAMS)),
              this.removeItem(this.generateCacheKey(z.ORIGIN_URI)),
              this.removeItem(this.generateCacheKey(z.URL_HASH)),
              this.removeItem(this.generateCacheKey(z.CORRELATION_ID)),
              this.removeItem(this.generateCacheKey(z.CCS_CREDENTIAL)),
              this.setInteractionInProgress(!1);
          }),
          (t.prototype.cleanRequestByState = function (e) {
            if ((this.logger.trace("BrowserCacheManager.cleanRequestByState called"), e)) {
              var t = this.generateStateKey(e),
                r = this.temporaryCacheStorage.getItem(t);
              this.logger.infoPii(
                "BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + r
              ),
                this.resetRequestCache(r || "");
            }
            this.clearMsalCookies();
          }),
          (t.prototype.cleanRequestByInteractionType = function (e) {
            var t = this;
            this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"),
              this.getKeys().forEach(function (r) {
                if (-1 !== r.indexOf(z.REQUEST_STATE)) {
                  var n = t.temporaryCacheStorage.getItem(r);
                  if (n) {
                    var o = Er.extractBrowserRequestState(t.cryptoImpl, n);
                    o &&
                      o.interactionType === e &&
                      (t.logger.infoPii(
                        "BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " +
                          n
                      ),
                      t.resetRequestCache(n));
                  }
                }
              }),
              this.clearMsalCookies();
          }),
          (t.prototype.cacheCodeRequest = function (e, t) {
            this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
            var r = t.base64Encode(JSON.stringify(e));
            this.setTemporaryCache(z.REQUEST_PARAMS, r, !0);
          }),
          (t.prototype.getCachedRequest = function (e, t) {
            this.logger.trace("BrowserCacheManager.getCachedRequest called");
            var r = this.getTemporaryCache(z.REQUEST_PARAMS, !0);
            if (!r) throw lt.createNoTokenRequestCacheError();
            var n = this.validateAndParseJson(t.base64Decode(r));
            if (!n) throw lt.createUnableToParseTokenRequestCacheError();
            if ((this.removeItem(this.generateCacheKey(z.REQUEST_PARAMS)), ct.isEmpty(n.authority))) {
              var o = this.generateAuthorityKey(e),
                i = this.getTemporaryCache(o);
              if (!i) throw lt.createNoCachedAuthorityError();
              n.authority = i;
            }
            return n;
          }),
          (t.prototype.isInteractionInProgress = function (e) {
            var t = this.getInteractionInProgress();
            return e ? t === this.clientId : !!t;
          }),
          (t.prototype.getInteractionInProgress = function () {
            var e = g.CACHE_PREFIX + "." + z.INTERACTION_STATUS_KEY;
            return this.getTemporaryCache(e, !1);
          }),
          (t.prototype.setInteractionInProgress = function (e) {
            var t = this.getInteractionInProgress(),
              r = g.CACHE_PREFIX + "." + z.INTERACTION_STATUS_KEY;
            e && !t ? this.setTemporaryCache(r, this.clientId, !1) : e || t !== this.clientId || this.removeItem(r);
          }),
          (t.prototype.getLegacyLoginHint = function () {
            var e = this.getTemporaryCache(d.ADAL_ID_TOKEN);
            e &&
              (this.browserStorage.removeItem(d.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
            var t = this.getTemporaryCache(d.ID_TOKEN, !0);
            t &&
              (this.removeItem(this.generateCacheKey(d.ID_TOKEN)),
              this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
            var r = t || e;
            if (r) {
              var n = new Zt(r, this.cryptoImpl);
              if (n.claims && n.claims.preferred_username)
                return (
                  this.logger.verbose(
                    "No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint"
                  ),
                  n.claims.preferred_username
                );
              if (n.claims && n.claims.upn)
                return (
                  this.logger.verbose(
                    "No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint"
                  ),
                  n.claims.upn
                );
              this.logger.verbose(
                "No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO."
              );
            }
            return null;
          }),
          t
        );
      })($t);
    !(function (e) {
      (e.AAD = "AAD"), (e.OIDC = "OIDC");
    })(lr || (lr = {}));
    var Cr = { tokenRenewalOffsetSeconds: 300, preventCorsPreflight: !1 },
      Ar = { loggerCallback: function () {}, piiLoggingEnabled: !1, logLevel: he.Info, correlationId: "" },
      Sr = {
        sendGetRequestAsync: function () {
          return s(this, void 0, void 0, function () {
            return c(this, function (e) {
              throw (
                ("Network interface - sendGetRequestAsync() has not been implemented",
                _e.createUnexpectedError("Network interface - sendGetRequestAsync() has not been implemented"))
              );
            });
          });
        },
        sendPostRequestAsync: function () {
          return s(this, void 0, void 0, function () {
            return c(this, function (e) {
              throw (
                ("Network interface - sendPostRequestAsync() has not been implemented",
                _e.createUnexpectedError("Network interface - sendPostRequestAsync() has not been implemented"))
              );
            });
          });
        },
      },
      br = { sku: g.SKU, version: "5.1.0", cpu: "", os: "" },
      Ir = { clientSecret: "", clientAssertion: void 0 };
    function Rr(e) {
      return a({ clientCapabilities: [] }, e);
    }
    var kr = {
        sendGetRequestAsync: function () {
          return Promise.reject(
            _e.createUnexpectedError(
              "Network interface - sendGetRequestAsync() has not been implemented for the Network interface."
            )
          );
        },
        sendPostRequestAsync: function () {
          return Promise.reject(
            _e.createUnexpectedError(
              "Network interface - sendPostRequestAsync() has not been implemented for the Network interface."
            )
          );
        },
      },
      Pr = (function () {
        function e() {}
        return (
          (e.prototype.sendGetRequestAsync = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r, n, o;
              return ue(this, function (i) {
                switch (i.label) {
                  case 0:
                    return i.trys.push([0, 2, , 3]), [4, fetch(e, { method: G.GET, headers: this.getFetchHeaders(t) })];
                  case 1:
                    return (r = i.sent()), [3, 3];
                  case 2:
                    throw (
                      ((n = i.sent()),
                      window.navigator.onLine
                        ? lt.createGetRequestFailedError(n, e)
                        : lt.createNoNetworkConnectivityError())
                    );
                  case 3:
                    return i.trys.push([3, 5, , 6]), (o = { headers: this.getHeaderDict(r.headers) }), [4, r.json()];
                  case 4:
                    return [2, ((o.body = i.sent()), (o.status = r.status), o)];
                  case 5:
                    throw (i.sent(), lt.createFailedToParseNetworkResponseError(e));
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.sendPostRequestAsync = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r, n, o, i;
              return ue(this, function (a) {
                switch (a.label) {
                  case 0:
                    (r = (t && t.body) || ""), (a.label = 1);
                  case 1:
                    return (
                      a.trys.push([1, 3, , 4]),
                      [4, fetch(e, { method: G.POST, headers: this.getFetchHeaders(t), body: r })]
                    );
                  case 2:
                    return (n = a.sent()), [3, 4];
                  case 3:
                    throw (
                      ((o = a.sent()),
                      window.navigator.onLine
                        ? lt.createPostRequestFailedError(o, e)
                        : lt.createNoNetworkConnectivityError())
                    );
                  case 4:
                    return a.trys.push([4, 6, , 7]), (i = { headers: this.getHeaderDict(n.headers) }), [4, n.json()];
                  case 5:
                    return [2, ((i.body = a.sent()), (i.status = n.status), i)];
                  case 6:
                    throw (a.sent(), lt.createFailedToParseNetworkResponseError(e));
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getFetchHeaders = function (e) {
            var t = new Headers();
            if (!e || !e.headers) return t;
            var r = e.headers;
            return (
              Object.keys(r).forEach(function (e) {
                t.append(e, r[e]);
              }),
              t
            );
          }),
          (e.prototype.getHeaderDict = function (e) {
            var t = {};
            return (
              e.forEach(function (e, r) {
                t[r] = e;
              }),
              t
            );
          }),
          e
        );
      })(),
      Or = (function () {
        function e() {}
        return (
          (e.prototype.sendGetRequestAsync = function (e, t) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (r) {
                return [2, this.sendRequestAsync(e, G.GET, t)];
              });
            });
          }),
          (e.prototype.sendPostRequestAsync = function (e, t) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (r) {
                return [2, this.sendRequestAsync(e, G.POST, t)];
              });
            });
          }),
          (e.prototype.sendRequestAsync = function (e, t, r) {
            var n = this;
            return new Promise(function (o, i) {
              var a = new XMLHttpRequest();
              if (
                (a.open(t, e, !0),
                n.setXhrHeaders(a, r),
                (a.onload = function () {
                  (a.status < 200 || a.status >= 300) &&
                    (t === G.POST
                      ? i(lt.createPostRequestFailedError("Failed with status " + a.status, e))
                      : i(lt.createGetRequestFailedError("Failed with status " + a.status, e)));
                  try {
                    var r = JSON.parse(a.responseText),
                      s = { headers: n.getHeaderDict(a), body: r, status: a.status };
                    o(s);
                  } catch (t) {
                    i(lt.createFailedToParseNetworkResponseError(e));
                  }
                }),
                (a.onerror = function () {
                  window.navigator.onLine
                    ? t === G.POST
                      ? i(lt.createPostRequestFailedError("Failed with status " + a.status, e))
                      : i(lt.createGetRequestFailedError("Failed with status " + a.status, e))
                    : i(lt.createNoNetworkConnectivityError());
                }),
                t === G.POST && r && r.body)
              )
                a.send(r.body);
              else {
                if (t !== G.GET) throw lt.createHttpMethodNotImplementedError(t);
                a.send();
              }
            });
          }),
          (e.prototype.setXhrHeaders = function (e, t) {
            if (t && t.headers) {
              var r = t.headers;
              Object.keys(r).forEach(function (t) {
                e.setRequestHeader(t, r[t]);
              });
            }
          }),
          (e.prototype.getHeaderDict = function (e) {
            var t = e
                .getAllResponseHeaders()
                .trim()
                .split(/[\r\n]+/),
              r = {};
            return (
              t.forEach(function (e) {
                var t = e.split(": "),
                  n = t.shift(),
                  o = t.join(": ");
                n && o && (r[n] = o);
              }),
              r
            );
          }),
          e
        );
      })(),
      Nr = (function () {
        function e() {}
        return (
          (e.clearHash = function (e) {
            (e.location.hash = g.EMPTY_STRING),
              "function" == typeof e.history.replaceState &&
                e.history.replaceState(
                  null,
                  g.EMPTY_STRING,
                  "" + e.location.origin + e.location.pathname + e.location.search
                );
          }),
          (e.replaceHash = function (e) {
            var t = e.split("#");
            t.shift(), (window.location.hash = t.length > 0 ? t.join("#") : "");
          }),
          (e.isInIframe = function () {
            return window.parent !== window;
          }),
          (e.isInPopup = function () {
            return (
              "undefined" != typeof window &&
              !!window.opener &&
              window.opener !== window &&
              "string" == typeof window.name &&
              0 === window.name.indexOf(ee + ".")
            );
          }),
          (e.getCurrentUri = function () {
            return window.location.href.split("?")[0].split("#")[0];
          }),
          (e.getHomepage = function () {
            var e = new wr(window.location.href).getUrlComponents();
            return e.Protocol + "//" + e.HostNameAndPort + "/";
          }),
          (e.getBrowserNetworkClient = function () {
            return window.fetch && window.Headers ? new Pr() : new Or();
          }),
          (e.blockReloadInHiddenIframes = function () {
            if (wr.hashContainsKnownProperties(window.location.hash) && e.isInIframe())
              throw lt.createBlockReloadInHiddenIframeError();
          }),
          (e.blockRedirectInIframe = function (t, r) {
            var n = e.isInIframe();
            if (t === J.Redirect && n && !r) throw lt.createRedirectInIframeError(n);
          }),
          (e.blockAcquireTokenInPopups = function () {
            if (e.isInPopup()) throw lt.createBlockAcquireTokenInPopupsError();
          }),
          (e.blockNonBrowserEnvironment = function (e) {
            if (!e) throw lt.createNonBrowserEnvironmentError();
          }),
          (e.detectIEOrEdge = function () {
            var e = window.navigator.userAgent,
              t = e.indexOf("MSIE "),
              r = e.indexOf("Trident/"),
              n = e.indexOf("Edge/");
            return t > 0 || r > 0 || n > 0;
          }),
          e
        );
      })(),
      Fr = (function () {
        function e() {}
        return (
          (e.prototype.navigateInternal = function (t, r) {
            return e.defaultNavigateWindow(t, r);
          }),
          (e.prototype.navigateExternal = function (t, r) {
            return e.defaultNavigateWindow(t, r);
          }),
          (e.defaultNavigateWindow = function (e, t) {
            return (
              t.noHistory ? window.location.replace(e) : window.location.assign(e),
              new Promise(function (e) {
                setTimeout(function () {
                  e(!0);
                }, t.timeout);
              })
            );
          }),
          e
        );
      })();
    var Mr;
    !(function (e) {
      (e.ACCOUNT_ADDED = "msal:accountAdded"),
        (e.ACCOUNT_REMOVED = "msal:accountRemoved"),
        (e.LOGIN_START = "msal:loginStart"),
        (e.LOGIN_SUCCESS = "msal:loginSuccess"),
        (e.LOGIN_FAILURE = "msal:loginFailure"),
        (e.ACQUIRE_TOKEN_START = "msal:acquireTokenStart"),
        (e.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess"),
        (e.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure"),
        (e.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart"),
        (e.SSO_SILENT_START = "msal:ssoSilentStart"),
        (e.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess"),
        (e.SSO_SILENT_FAILURE = "msal:ssoSilentFailure"),
        (e.HANDLE_REDIRECT_START = "msal:handleRedirectStart"),
        (e.HANDLE_REDIRECT_END = "msal:handleRedirectEnd"),
        (e.POPUP_OPENED = "msal:popupOpened"),
        (e.LOGOUT_START = "msal:logoutStart"),
        (e.LOGOUT_SUCCESS = "msal:logoutSuccess"),
        (e.LOGOUT_FAILURE = "msal:logoutFailure"),
        (e.LOGOUT_END = "msal:logoutEnd");
    })(Mr || (Mr = {}));
    var Ur,
      Dr = (function () {
        function e(e, t) {
          (this.eventCallbacks = new Map()),
            (this.logger = e),
            (this.browserCrypto = t),
            (this.listeningToStorageEvents = !1),
            (this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this));
        }
        return (
          (e.prototype.addEventCallback = function (e) {
            if ("undefined" != typeof window) {
              var t = this.browserCrypto.createNewGuid();
              return this.eventCallbacks.set(t, e), this.logger.verbose("Event callback registered with id: " + t), t;
            }
            return null;
          }),
          (e.prototype.removeEventCallback = function (e) {
            this.eventCallbacks.delete(e), this.logger.verbose("Event callback " + e + " removed.");
          }),
          (e.prototype.enableAccountStorageEvents = function () {
            "undefined" != typeof window &&
              (this.listeningToStorageEvents
                ? this.logger.verbose("Account storage listener already registered.")
                : (this.logger.verbose("Adding account storage listener."),
                  (this.listeningToStorageEvents = !0),
                  window.addEventListener("storage", this.handleAccountCacheChange)));
          }),
          (e.prototype.disableAccountStorageEvents = function () {
            "undefined" != typeof window &&
              (this.listeningToStorageEvents
                ? (this.logger.verbose("Removing account storage listener."),
                  window.removeEventListener("storage", this.handleAccountCacheChange),
                  (this.listeningToStorageEvents = !1))
                : this.logger.verbose("No account storage listener registered."));
          }),
          (e.prototype.emitEvent = function (e, t, r, n) {
            var o = this;
            if ("undefined" != typeof window) {
              var i = {
                eventType: e,
                interactionType: t || null,
                payload: r || null,
                error: n || null,
                timestamp: Date.now(),
              };
              this.logger.info("Emitting event: " + e),
                this.eventCallbacks.forEach(function (t, r) {
                  o.logger.verbose("Emitting event to callback " + r + ": " + e), t.apply(null, [i]);
                });
            }
          }),
          (e.prototype.handleAccountCacheChange = function (e) {
            try {
              var t = e.newValue || e.oldValue;
              if (!t) return;
              var r = JSON.parse(t);
              if ("object" != typeof r || !It.isAccountEntity(r)) return;
              var n = $t.toObject(new It(), r).getAccountInfo();
              !e.oldValue && e.newValue
                ? (this.logger.info("Account was added to cache in a different window"),
                  this.emitEvent(Mr.ACCOUNT_ADDED, void 0, n))
                : !e.newValue &&
                  e.oldValue &&
                  (this.logger.info("Account was removed from cache in a different window"),
                  this.emitEvent(Mr.ACCOUNT_REMOVED, void 0, n));
            } catch (e) {
              return;
            }
          }),
          e
        );
      })(),
      Lr = (function () {
        function e() {}
        return (
          (e.generateThrottlingStorageKey = function (e) {
            return H + "." + JSON.stringify(e);
          }),
          (e.preProcess = function (t, r) {
            var n,
              o = e.generateThrottlingStorageKey(r),
              i = t.getThrottlingCache(o);
            if (i) {
              if (i.throttleTime < Date.now()) return void t.removeItem(o, S.THROTTLING);
              throw new _t(
                (null === (n = i.errorCodes) || void 0 === n ? void 0 : n.join(" ")) || g.EMPTY_STRING,
                i.errorMessage,
                i.subError
              );
            }
          }),
          (e.postProcess = function (t, r, n) {
            if (e.checkResponseStatus(n) || e.checkResponseForRetryAfter(n)) {
              var o = {
                throttleTime: e.calculateThrottleTime(parseInt(n.headers[l.RETRY_AFTER])),
                error: n.body.error,
                errorCodes: n.body.error_codes,
                errorMessage: n.body.error_description,
                subError: n.body.suberror,
              };
              t.setThrottlingCache(e.generateThrottlingStorageKey(r), o);
            }
          }),
          (e.checkResponseStatus = function (e) {
            return 429 === e.status || (e.status >= 500 && e.status < 600);
          }),
          (e.checkResponseForRetryAfter = function (e) {
            return !!e.headers && e.headers.hasOwnProperty(l.RETRY_AFTER) && (e.status < 200 || e.status >= 300);
          }),
          (e.calculateThrottleTime = function (e) {
            var t = e <= 0 ? 0 : e,
              r = Date.now() / 1e3;
            return Math.floor(1e3 * Math.min(r + (t || x), r + q));
          }),
          (e.removeThrottle = function (e, t, r, n) {
            var o = {
                clientId: t,
                authority: r.authority,
                scopes: r.scopes,
                homeAccountIdentifier: n,
                authenticationScheme: r.authenticationScheme,
                resourceRequestMethod: r.resourceRequestMethod,
                resourceRequestUri: r.resourceRequestUri,
                shrClaims: r.shrClaims,
                sshJwk: r.sshJwk,
                sshKid: r.sshKid,
              },
              i = this.generateThrottlingStorageKey(o);
            return e.removeItem(i, S.THROTTLING);
          }),
          e
        );
      })(),
      xr = (function () {
        function e(e, t) {
          (this.networkClient = e), (this.cacheManager = t);
        }
        return (
          (e.prototype.sendPostRequest = function (e, t, r) {
            return s(this, void 0, void 0, function () {
              var n, o;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    Lr.preProcess(this.cacheManager, e), (i.label = 1);
                  case 1:
                    return i.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, r)];
                  case 2:
                    return (n = i.sent()), [3, 4];
                  case 3:
                    throw (o = i.sent()) instanceof _e ? o : st.createNetworkError(t, o);
                  case 4:
                    return Lr.postProcess(this.cacheManager, e, n), [2, n];
                }
              });
            });
          }),
          e
        );
      })(),
      qr = (function () {
        function e(e) {
          (this.config = (function (e) {
            var t = e.authOptions,
              r = e.systemOptions,
              n = e.loggerOptions,
              o = e.storageInterface,
              i = e.networkInterface,
              s = e.cryptoInterface,
              c = e.clientCredentials,
              u = e.libraryInfo,
              l = e.serverTelemetryManager,
              d = e.persistencePlugin,
              h = e.serializableCache,
              p = a(a({}, Ar), n);
            return {
              authOptions: Rr(t),
              systemOptions: a(a({}, Cr), r),
              loggerOptions: p,
              storageInterface: o || new er(t.clientId, vt),
              networkInterface: i || Sr,
              cryptoInterface: s || vt,
              clientCredentials: c || Ir,
              libraryInfo: a(a({}, br), u),
              serverTelemetryManager: l || null,
              persistencePlugin: d || null,
              serializableCache: h || null,
            };
          })(e)),
            (this.logger = new mt(this.config.loggerOptions, "@azure/msal-common", "5.1.0")),
            (this.cryptoUtils = this.config.cryptoInterface),
            (this.cacheManager = this.config.storageInterface),
            (this.networkClient = this.config.networkInterface),
            (this.networkManager = new xr(this.networkClient, this.cacheManager)),
            (this.serverTelemetryManager = this.config.serverTelemetryManager),
            (this.authority = this.config.authOptions.authority);
        }
        return (
          (e.prototype.createTokenRequestHeaders = function (e) {
            var t = {};
            if (((t[l.CONTENT_TYPE] = g.URL_FORM_CONTENT_TYPE), !this.config.systemOptions.preventCorsPreflight && e))
              switch (e.type) {
                case bt.HOME_ACCOUNT_ID:
                  try {
                    var r = St(e.credential);
                    t[l.CCS_HEADER] = "Oid:" + r.uid + "@" + r.utid;
                  } catch (e) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                  }
                  break;
                case bt.UPN:
                  t[l.CCS_HEADER] = "UPN: " + e.credential;
              }
            return t;
          }),
          (e.prototype.executePostToTokenEndpoint = function (e, t, r, n) {
            return s(this, void 0, void 0, function () {
              var o;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.networkManager.sendPostRequest(n, e, { body: t, headers: r })];
                  case 1:
                    return (
                      (o = i.sent()),
                      this.config.serverTelemetryManager &&
                        o.status < 500 &&
                        429 !== o.status &&
                        this.config.serverTelemetryManager.clearTelemetryCache(),
                      [2, o]
                    );
                }
              });
            });
          }),
          (e.prototype.updateAuthority = function (e) {
            if (!e.discoveryComplete())
              throw st.createEndpointDiscoveryIncompleteError(
                "Updated authority has not completed endpoint discovery."
              );
            this.authority = e;
          }),
          e
        );
      })(),
      Hr = (function () {
        function e() {}
        return (
          (e.validateRedirectUri = function (e) {
            if (ct.isEmpty(e)) throw Yt.createRedirectUriEmptyError();
          }),
          (e.validatePrompt = function (e) {
            var t = [];
            for (var r in _) t.push(_[r]);
            if (t.indexOf(e) < 0) throw Yt.createInvalidPromptError(e);
          }),
          (e.validateClaims = function (e) {
            try {
              JSON.parse(e);
            } catch (e) {
              throw Yt.createInvalidClaimsRequestError();
            }
          }),
          (e.validateCodeChallengeParams = function (e, t) {
            if (ct.isEmpty(e) || ct.isEmpty(t)) throw Yt.createInvalidCodeChallengeParamsError();
            this.validateCodeChallengeMethod(t);
          }),
          (e.validateCodeChallengeMethod = function (e) {
            if ([I.PLAIN, I.S256].indexOf(e) < 0) throw Yt.createInvalidCodeChallengeMethodError();
          }),
          (e.sanitizeEQParams = function (e, t) {
            return e
              ? (t.forEach(function (t, r) {
                  e[r] && delete e[r];
                }),
                e)
              : {};
          }),
          e
        );
      })(),
      Br = (function () {
        function e() {
          this.parameters = new Map();
        }
        return (
          (e.prototype.addResponseTypeCode = function () {
            this.parameters.set(p.RESPONSE_TYPE, encodeURIComponent(g.CODE_RESPONSE_TYPE));
          }),
          (e.prototype.addResponseMode = function (e) {
            this.parameters.set(p.RESPONSE_MODE, encodeURIComponent(e || w.QUERY));
          }),
          (e.prototype.addScopes = function (e, t) {
            void 0 === t && (t = !0);
            var r = t ? u(e || [], y) : e || [],
              n = new Xt(r);
            this.parameters.set(p.SCOPE, encodeURIComponent(n.printScopes()));
          }),
          (e.prototype.addClientId = function (e) {
            this.parameters.set(p.CLIENT_ID, encodeURIComponent(e));
          }),
          (e.prototype.addRedirectUri = function (e) {
            Hr.validateRedirectUri(e), this.parameters.set(p.REDIRECT_URI, encodeURIComponent(e));
          }),
          (e.prototype.addPostLogoutRedirectUri = function (e) {
            Hr.validateRedirectUri(e), this.parameters.set(p.POST_LOGOUT_URI, encodeURIComponent(e));
          }),
          (e.prototype.addIdTokenHint = function (e) {
            this.parameters.set(p.ID_TOKEN_HINT, encodeURIComponent(e));
          }),
          (e.prototype.addDomainHint = function (e) {
            this.parameters.set(v.DOMAIN_HINT, encodeURIComponent(e));
          }),
          (e.prototype.addLoginHint = function (e) {
            this.parameters.set(v.LOGIN_HINT, encodeURIComponent(e));
          }),
          (e.prototype.addCcsUpn = function (e) {
            this.parameters.set(l.CCS_HEADER, encodeURIComponent("UPN:" + e));
          }),
          (e.prototype.addCcsOid = function (e) {
            this.parameters.set(l.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
          }),
          (e.prototype.addSid = function (e) {
            this.parameters.set(v.SID, encodeURIComponent(e));
          }),
          (e.prototype.addClaims = function (e, t) {
            var r = this.addClientCapabilitiesToClaims(e, t);
            Hr.validateClaims(r), this.parameters.set(p.CLAIMS, encodeURIComponent(r));
          }),
          (e.prototype.addCorrelationId = function (e) {
            this.parameters.set(p.CLIENT_REQUEST_ID, encodeURIComponent(e));
          }),
          (e.prototype.addLibraryInfo = function (e) {
            this.parameters.set(p.X_CLIENT_SKU, e.sku),
              this.parameters.set(p.X_CLIENT_VER, e.version),
              this.parameters.set(p.X_CLIENT_OS, e.os),
              this.parameters.set(p.X_CLIENT_CPU, e.cpu);
          }),
          (e.prototype.addPrompt = function (e) {
            Hr.validatePrompt(e), this.parameters.set("" + p.PROMPT, encodeURIComponent(e));
          }),
          (e.prototype.addState = function (e) {
            ct.isEmpty(e) || this.parameters.set(p.STATE, encodeURIComponent(e));
          }),
          (e.prototype.addNonce = function (e) {
            this.parameters.set(p.NONCE, encodeURIComponent(e));
          }),
          (e.prototype.addCodeChallengeParams = function (e, t) {
            if ((Hr.validateCodeChallengeParams(e, t), !e || !t)) throw Yt.createInvalidCodeChallengeParamsError();
            this.parameters.set(p.CODE_CHALLENGE, encodeURIComponent(e)),
              this.parameters.set(p.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
          }),
          (e.prototype.addAuthorizationCode = function (e) {
            this.parameters.set(p.CODE, encodeURIComponent(e));
          }),
          (e.prototype.addDeviceCode = function (e) {
            this.parameters.set(p.DEVICE_CODE, encodeURIComponent(e));
          }),
          (e.prototype.addRefreshToken = function (e) {
            this.parameters.set(p.REFRESH_TOKEN, encodeURIComponent(e));
          }),
          (e.prototype.addCodeVerifier = function (e) {
            this.parameters.set(p.CODE_VERIFIER, encodeURIComponent(e));
          }),
          (e.prototype.addClientSecret = function (e) {
            this.parameters.set(p.CLIENT_SECRET, encodeURIComponent(e));
          }),
          (e.prototype.addClientAssertion = function (e) {
            this.parameters.set(p.CLIENT_ASSERTION, encodeURIComponent(e));
          }),
          (e.prototype.addClientAssertionType = function (e) {
            this.parameters.set(p.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
          }),
          (e.prototype.addOboAssertion = function (e) {
            this.parameters.set(p.OBO_ASSERTION, encodeURIComponent(e));
          }),
          (e.prototype.addRequestTokenUse = function (e) {
            this.parameters.set(p.REQUESTED_TOKEN_USE, encodeURIComponent(e));
          }),
          (e.prototype.addGrantType = function (e) {
            this.parameters.set(p.GRANT_TYPE, encodeURIComponent(e));
          }),
          (e.prototype.addClientInfo = function () {
            this.parameters.set("client_info", "1");
          }),
          (e.prototype.addExtraQueryParameters = function (e) {
            var t = this;
            Hr.sanitizeEQParams(e, this.parameters),
              Object.keys(e).forEach(function (r) {
                t.parameters.set(r, e[r]);
              });
          }),
          (e.prototype.addClientCapabilitiesToClaims = function (e, t) {
            var r;
            if (e)
              try {
                r = JSON.parse(e);
              } catch (e) {
                throw Yt.createInvalidClaimsRequestError();
              }
            else r = {};
            return (
              t &&
                t.length > 0 &&
                (r.hasOwnProperty(f.ACCESS_TOKEN) || (r[f.ACCESS_TOKEN] = {}),
                (r[f.ACCESS_TOKEN][f.XMS_CC] = { values: t })),
              JSON.stringify(r)
            );
          }),
          (e.prototype.addUsername = function (e) {
            this.parameters.set(F.username, e);
          }),
          (e.prototype.addPassword = function (e) {
            this.parameters.set(F.password, e);
          }),
          (e.prototype.addPopToken = function (e) {
            ct.isEmpty(e) ||
              (this.parameters.set(p.TOKEN_TYPE, O.POP), this.parameters.set(p.REQ_CNF, encodeURIComponent(e)));
          }),
          (e.prototype.addSshJwk = function (e) {
            ct.isEmpty(e) ||
              (this.parameters.set(p.TOKEN_TYPE, O.SSH), this.parameters.set(p.REQ_CNF, encodeURIComponent(e)));
          }),
          (e.prototype.addServerTelemetry = function (e) {
            this.parameters.set(p.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()),
              this.parameters.set(p.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
          }),
          (e.prototype.addThrottling = function () {
            this.parameters.set(p.X_MS_LIB_CAPABILITY, B);
          }),
          (e.prototype.createQueryString = function () {
            var e = new Array();
            return (
              this.parameters.forEach(function (t, r) {
                e.push(r + "=" + t);
              }),
              e.join("&")
            );
          }),
          e
        );
      })(),
      Wr = (function () {
        return function (e, t, r, n, o) {
          (this.account = e || null),
            (this.idToken = t || null),
            (this.accessToken = r || null),
            (this.refreshToken = n || null),
            (this.appMetadata = o || null);
        };
      })();
    !(function (e) {
      (e.SW = "sw"), (e.UHW = "uhw");
    })(Ur || (Ur = {}));
    var Kr = (function () {
        function e(e) {
          this.cryptoUtils = e;
        }
        return (
          (e.prototype.generateCnf = function (e) {
            return s(this, void 0, void 0, function () {
              var t;
              return c(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.generateKid(e)];
                  case 1:
                    return (t = r.sent()), [2, this.cryptoUtils.base64Encode(JSON.stringify(t))];
                }
              });
            });
          }),
          (e.prototype.generateKid = function (e) {
            return s(this, void 0, void 0, function () {
              return c(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
                  case 1:
                    return [2, { kid: t.sent(), xms_ksl: Ur.SW }];
                }
              });
            });
          }),
          (e.prototype.signPopToken = function (e, t) {
            var r;
            return s(this, void 0, void 0, function () {
              var n;
              return c(this, function (o) {
                if (
                  ((n = Zt.extractTokenClaims(e, this.cryptoUtils)),
                  !(null === (r = null == n ? void 0 : n.cnf) || void 0 === r ? void 0 : r.kid))
                )
                  throw st.createTokenClaimsRequiredError();
                return [2, this.signPayload(e, n.cnf.kid, t)];
              });
            });
          }),
          (e.prototype.signPayload = function (e, t, r, n) {
            return s(this, void 0, void 0, function () {
              var o, i, s, u, l, d;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    return (
                      (o = r.resourceRequestMethod),
                      (i = r.resourceRequestUri),
                      (s = r.shrClaims),
                      (u = r.shrNonce),
                      (l = i ? new wr(i) : void 0),
                      (d = null == l ? void 0 : l.getUrlComponents()),
                      [
                        4,
                        this.cryptoUtils.signJwt(
                          a(
                            {
                              at: e,
                              ts: rr.nowSeconds(),
                              m: null == o ? void 0 : o.toUpperCase(),
                              u: null == d ? void 0 : d.HostNameAndPort,
                              nonce: u || this.cryptoUtils.createNewGuid(),
                              p: null == d ? void 0 : d.AbsolutePath,
                              q: (null == d ? void 0 : d.QueryString) ? [[], d.QueryString] : void 0,
                              client_claims: s || void 0,
                            },
                            n
                          ),
                          t
                        ),
                      ]
                    );
                  case 1:
                    return [2, c.sent()];
                }
              });
            });
          }),
          e
        );
      })(),
      jr = (function () {
        function e(e, t) {
          (this.cache = e), (this.hasChanged = t);
        }
        return (
          Object.defineProperty(e.prototype, "cacheHasChanged", {
            get: function () {
              return this.hasChanged;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tokenCache", {
            get: function () {
              return this.cache;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(),
      Gr = (function () {
        function e(e, t, r, n, o, i) {
          (this.clientId = e),
            (this.cacheStorage = t),
            (this.cryptoObj = r),
            (this.logger = n),
            (this.serializableCache = o),
            (this.persistencePlugin = i);
        }
        return (
          (e.prototype.validateServerAuthorizationCodeResponse = function (e, t, r) {
            if (!e.state || !t)
              throw e.state ? st.createStateNotFoundError("Cached State") : st.createStateNotFoundError("Server State");
            if (decodeURIComponent(e.state) !== decodeURIComponent(t)) throw st.createStateMismatchError();
            if (e.error || e.error_description || e.suberror) {
              if (Ct.isInteractionRequiredError(e.error, e.error_description, e.suberror))
                throw new Ct(e.error || g.EMPTY_STRING, e.error_description, e.suberror);
              throw new _t(e.error || g.EMPTY_STRING, e.error_description, e.suberror);
            }
            e.client_info && At(e.client_info, r);
          }),
          (e.prototype.validateTokenResponse = function (e) {
            if (e.error || e.error_description || e.suberror) {
              if (Ct.isInteractionRequiredError(e.error, e.error_description, e.suberror))
                throw new Ct(e.error, e.error_description, e.suberror);
              var t =
                e.error_codes +
                " - [" +
                e.timestamp +
                "]: " +
                e.error_description +
                " - Correlation ID: " +
                e.correlation_id +
                " - Trace ID: " +
                e.trace_id;
              throw new _t(e.error, t, e.suberror);
            }
          }),
          (e.prototype.handleServerTokenResponse = function (t, r, n, o, i, a, u) {
            return s(this, void 0, void 0, function () {
              var s, l, d, h, p;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    if (
                      t.id_token &&
                      ((s = new Zt(t.id_token || g.EMPTY_STRING, this.cryptoObj)),
                      i && !ct.isEmpty(i.nonce) && s.claims.nonce !== i.nonce)
                    )
                      throw st.createNonceMismatchError();
                    (this.homeAccountIdentifier = It.generateHomeAccountId(
                      t.client_info || g.EMPTY_STRING,
                      r.authorityType,
                      this.logger,
                      this.cryptoObj,
                      s
                    )),
                      i && i.state && (l = ur.parseRequestState(this.cryptoObj, i.state)),
                      (t.key_id = t.key_id || o.sshKid || void 0),
                      (d = this.generateCacheRecord(t, r, n, s, o.scopes, a, i)),
                      (c.label = 1);
                  case 1:
                    return (
                      c.trys.push([1, , 5, 8]),
                      this.persistencePlugin && this.serializableCache
                        ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"),
                          (h = new jr(this.serializableCache, !0)),
                          [4, this.persistencePlugin.beforeCacheAccess(h)])
                        : [3, 3]
                    );
                  case 2:
                    c.sent(), (c.label = 3);
                  case 3:
                    return !u || !d.account || ((p = d.account.generateAccountKey()), this.cacheStorage.getAccount(p))
                      ? [4, this.cacheStorage.saveCacheRecord(d)]
                      : (this.logger.warning(
                          "Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"
                        ),
                        [2, e.generateAuthenticationResult(this.cryptoObj, r, d, !1, o, s, l)]);
                  case 4:
                    return c.sent(), [3, 8];
                  case 5:
                    return this.persistencePlugin && this.serializableCache && h
                      ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"),
                        [4, this.persistencePlugin.afterCacheAccess(h)])
                      : [3, 7];
                  case 6:
                    c.sent(), (c.label = 7);
                  case 7:
                    return [7];
                  case 8:
                    return [2, e.generateAuthenticationResult(this.cryptoObj, r, d, !1, o, s, l)];
                }
              });
            });
          }),
          (e.prototype.generateCacheRecord = function (e, t, r, n, o, i, a) {
            var s,
              c,
              u = t.getPreferredCache();
            if (ct.isEmpty(u)) throw st.createInvalidCacheEnvironmentError();
            !ct.isEmpty(e.id_token) &&
              n &&
              ((s = tr.createIdTokenEntity(
                this.homeAccountIdentifier,
                u,
                e.id_token || g.EMPTY_STRING,
                this.clientId,
                n.claims.tid || g.EMPTY_STRING,
                i
              )),
              (c = this.generateAccountEntity(e, n, t, i, a)));
            var l = null;
            if (!ct.isEmpty(e.access_token)) {
              var d = e.scope ? Xt.fromString(e.scope) : new Xt(o || []),
                h = ("string" == typeof e.expires_in ? parseInt(e.expires_in, 10) : e.expires_in) || 0,
                p = ("string" == typeof e.ext_expires_in ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0,
                f = ("string" == typeof e.refresh_in ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0,
                y = r + h,
                m = y + p,
                v = f && f > 0 ? r + f : void 0;
              l = nr.createAccessTokenEntity(
                this.homeAccountIdentifier,
                u,
                e.access_token || g.EMPTY_STRING,
                this.clientId,
                n ? n.claims.tid || g.EMPTY_STRING : t.tenant,
                d.printScopes(),
                y,
                m,
                this.cryptoObj,
                v,
                e.token_type,
                i,
                e.key_id
              );
            }
            var _ = null;
            ct.isEmpty(e.refresh_token) ||
              (_ = or.createRefreshTokenEntity(
                this.homeAccountIdentifier,
                u,
                e.refresh_token || g.EMPTY_STRING,
                this.clientId,
                e.foci,
                i
              ));
            var w = null;
            return (
              ct.isEmpty(e.foci) || (w = ir.createAppMetadataEntity(this.clientId, u, e.foci)), new Wr(c, s, l, _, w)
            );
          }),
          (e.prototype.generateAccountEntity = function (e, t, r, n, o) {
            var i = r.authorityType,
              a = o ? o.cloud_graph_host_name : "",
              s = o ? o.msgraph_host : "";
            if (i === yt.Adfs)
              return (
                this.logger.verbose("Authority type is ADFS, creating ADFS account"),
                It.createGenericAccount(this.homeAccountIdentifier, t, r, n, a, s)
              );
            if (ct.isEmpty(e.client_info) && "AAD" === r.protocolMode) throw st.createClientInfoEmptyError();
            return e.client_info
              ? It.createAccount(e.client_info, this.homeAccountIdentifier, t, r, n, a, s)
              : It.createGenericAccount(this.homeAccountIdentifier, t, r, n, a, s);
          }),
          (e.generateAuthenticationResult = function (e, t, r, n, o, i, a) {
            var u, l, d;
            return s(this, void 0, void 0, function () {
              var s, h, p, f, y, m, v;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    return (
                      (s = ""),
                      (h = []),
                      (p = null),
                      (y = g.EMPTY_STRING),
                      r.accessToken
                        ? r.accessToken.tokenType !== O.POP
                          ? [3, 2]
                          : [4, new Kr(e).signPopToken(r.accessToken.secret, o)]
                        : [3, 4]
                    );
                  case 1:
                    return (s = c.sent()), [3, 3];
                  case 2:
                    (s = r.accessToken.secret), (c.label = 3);
                  case 3:
                    (h = Xt.fromString(r.accessToken.target).asArray()),
                      (p = new Date(1e3 * Number(r.accessToken.expiresOn))),
                      (f = new Date(1e3 * Number(r.accessToken.extendedExpiresOn))),
                      (c.label = 4);
                  case 4:
                    return (
                      r.appMetadata && (y = "1" === r.appMetadata.familyId ? "1" : g.EMPTY_STRING),
                      (m =
                        (null == i ? void 0 : i.claims.oid) || (null == i ? void 0 : i.claims.sub) || g.EMPTY_STRING),
                      (v = (null == i ? void 0 : i.claims.tid) || g.EMPTY_STRING),
                      [
                        2,
                        {
                          authority: t.canonicalAuthority,
                          uniqueId: m,
                          tenantId: v,
                          scopes: h,
                          account: r.account ? r.account.getAccountInfo() : null,
                          idToken: i ? i.rawToken : g.EMPTY_STRING,
                          idTokenClaims: i ? i.claims : {},
                          accessToken: s,
                          fromCache: n,
                          expiresOn: p,
                          correlationId: o.correlationId,
                          extExpiresOn: f,
                          familyId: y,
                          tokenType:
                            (null === (u = r.accessToken) || void 0 === u ? void 0 : u.tokenType) || g.EMPTY_STRING,
                          state: a ? a.userRequestState : g.EMPTY_STRING,
                          cloudGraphHostName:
                            (null === (l = r.account) || void 0 === l ? void 0 : l.cloudGraphHostName) ||
                            g.EMPTY_STRING,
                          msGraphHost:
                            (null === (d = r.account) || void 0 === d ? void 0 : d.msGraphHost) || g.EMPTY_STRING,
                        },
                      ]
                    );
                }
              });
            });
          }),
          e
        );
      })(),
      zr = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          i(t, e),
          (t.prototype.getAuthCodeUrl = function (e) {
            return s(this, void 0, void 0, function () {
              var t;
              return c(this, function (r) {
                return (
                  (t = this.createAuthCodeUrlQueryString(e)),
                  [2, wr.appendQueryString(this.authority.authorizationEndpoint, t)]
                );
              });
            });
          }),
          (t.prototype.acquireToken = function (e, t) {
            return s(this, void 0, void 0, function () {
              var r, n, o;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    if ((this.logger.info("in acquireToken call"), !e || ct.isEmpty(e.code)))
                      throw st.createTokenRequestCannotBeMadeError();
                    return (r = rr.nowSeconds()), [4, this.executeTokenRequest(this.authority, e)];
                  case 1:
                    return (
                      (n = i.sent()),
                      (o = new Gr(
                        this.config.authOptions.clientId,
                        this.cacheManager,
                        this.cryptoUtils,
                        this.logger,
                        this.config.serializableCache,
                        this.config.persistencePlugin
                      )).validateTokenResponse(n.body),
                      [4, o.handleServerTokenResponse(n.body, this.authority, r, e, t)]
                    );
                  case 2:
                    return [2, i.sent()];
                }
              });
            });
          }),
          (t.prototype.handleFragmentResponse = function (e, t) {
            var r = new Gr(
                this.config.authOptions.clientId,
                this.cacheManager,
                this.cryptoUtils,
                this.logger,
                null,
                null
              ),
              n = new wr(e),
              o = wr.getDeserializedHash(n.getHash());
            if ((r.validateServerAuthorizationCodeResponse(o, t, this.cryptoUtils), !o.code))
              throw st.createNoAuthCodeInServerResponseError();
            return a(a({}, o), { code: o.code });
          }),
          (t.prototype.getLogoutUri = function (e) {
            if (!e) throw Yt.createEmptyLogoutRequestError();
            var t = this.createLogoutUrlQueryString(e);
            return wr.appendQueryString(this.authority.endSessionEndpoint, t);
          }),
          (t.prototype.executeTokenRequest = function (e, t) {
            return s(this, void 0, void 0, function () {
              var r, n, o, i, a, s, u;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    return (
                      (r = {
                        clientId: this.config.authOptions.clientId,
                        authority: e.canonicalAuthority,
                        scopes: t.scopes,
                        authenticationScheme: t.authenticationScheme,
                        resourceRequestMethod: t.resourceRequestMethod,
                        resourceRequestUri: t.resourceRequestUri,
                        shrClaims: t.shrClaims,
                        sshJwk: t.sshJwk,
                        sshKid: t.sshKid,
                      }),
                      [4, this.createTokenRequestBody(t)]
                    );
                  case 1:
                    if (((n = c.sent()), (o = this.createTokenQueryParameters(t)), (i = void 0), t.clientInfo))
                      try {
                        (a = At(t.clientInfo, this.cryptoUtils)),
                          (i = { credential: "" + a.uid + C.CLIENT_INFO_SEPARATOR + a.utid, type: bt.HOME_ACCOUNT_ID });
                      } catch (e) {
                        this.logger.verbose("Could not parse client info for CCS Header: " + e);
                      }
                    return (
                      (s = this.createTokenRequestHeaders(i || t.ccsCredential)),
                      (u = ct.isEmpty(o) ? e.tokenEndpoint : e.tokenEndpoint + "?" + o),
                      [2, this.executePostToTokenEndpoint(u, n, s, r)]
                    );
                }
              });
            });
          }),
          (t.prototype.createTokenQueryParameters = function (e) {
            var t = new Br();
            return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
          }),
          (t.prototype.createTokenRequestBody = function (e) {
            return s(this, void 0, void 0, function () {
              var t, r, n, o, i, a;
              return c(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (t = new Br()).addClientId(this.config.authOptions.clientId),
                      t.addRedirectUri(e.redirectUri),
                      t.addScopes(e.scopes),
                      t.addAuthorizationCode(e.code),
                      t.addLibraryInfo(this.config.libraryInfo),
                      t.addThrottling(),
                      this.serverTelemetryManager && t.addServerTelemetry(this.serverTelemetryManager),
                      e.codeVerifier && t.addCodeVerifier(e.codeVerifier),
                      this.config.clientCredentials.clientSecret &&
                        t.addClientSecret(this.config.clientCredentials.clientSecret),
                      this.config.clientCredentials.clientAssertion &&
                        ((r = this.config.clientCredentials.clientAssertion),
                        t.addClientAssertion(r.assertion),
                        t.addClientAssertionType(r.assertionType)),
                      t.addGrantType(E.AUTHORIZATION_CODE_GRANT),
                      t.addClientInfo(),
                      e.authenticationScheme !== O.POP ? [3, 2] : [4, new Kr(this.cryptoUtils).generateCnf(e)]
                    );
                  case 1:
                    return (n = s.sent()), t.addPopToken(n), [3, 3];
                  case 2:
                    if (e.authenticationScheme === O.SSH) {
                      if (!e.sshJwk) throw Yt.createMissingSshJwkError();
                      t.addSshJwk(e.sshJwk);
                    }
                    s.label = 3;
                  case 3:
                    if (
                      ((o = e.correlationId || this.config.cryptoInterface.createNewGuid()),
                      t.addCorrelationId(o),
                      (!ct.isEmptyObj(e.claims) ||
                        (this.config.authOptions.clientCapabilities &&
                          this.config.authOptions.clientCapabilities.length > 0)) &&
                        t.addClaims(e.claims, this.config.authOptions.clientCapabilities),
                      (i = void 0),
                      e.clientInfo)
                    )
                      try {
                        (a = At(e.clientInfo, this.cryptoUtils)),
                          (i = { credential: "" + a.uid + C.CLIENT_INFO_SEPARATOR + a.utid, type: bt.HOME_ACCOUNT_ID });
                      } catch (e) {
                        this.logger.verbose("Could not parse client info for CCS Header: " + e);
                      }
                    else i = e.ccsCredential;
                    if (this.config.systemOptions.preventCorsPreflight && i)
                      switch (i.type) {
                        case bt.HOME_ACCOUNT_ID:
                          try {
                            (a = St(i.credential)), t.addCcsOid(a);
                          } catch (e) {
                            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                          }
                          break;
                        case bt.UPN:
                          t.addCcsUpn(i.credential);
                      }
                    return [2, t.createQueryString()];
                }
              });
            });
          }),
          (t.prototype.createAuthCodeUrlQueryString = function (e) {
            var t = new Br();
            t.addClientId(this.config.authOptions.clientId);
            var r = u(e.scopes || [], e.extraScopesToConsent || []);
            t.addScopes(r), t.addRedirectUri(e.redirectUri);
            var n = e.correlationId || this.config.cryptoInterface.createNewGuid();
            if (
              (t.addCorrelationId(n),
              t.addResponseMode(e.responseMode),
              t.addResponseTypeCode(),
              t.addLibraryInfo(this.config.libraryInfo),
              t.addClientInfo(),
              e.codeChallenge &&
                e.codeChallengeMethod &&
                t.addCodeChallengeParams(e.codeChallenge, e.codeChallengeMethod),
              e.prompt && t.addPrompt(e.prompt),
              e.domainHint && t.addDomainHint(e.domainHint),
              e.prompt !== _.SELECT_ACCOUNT)
            )
              if (e.sid && e.prompt === _.NONE)
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"),
                  t.addSid(e.sid);
              else if (e.account) {
                var o = this.extractAccountSid(e.account);
                if (o && e.prompt === _.NONE) {
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"),
                    t.addSid(o);
                  try {
                    var i = St(e.account.homeAccountId);
                    t.addCcsOid(i);
                  } catch (e) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                  }
                } else if (e.loginHint)
                  this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"),
                    t.addLoginHint(e.loginHint),
                    t.addCcsUpn(e.loginHint);
                else if (e.account.username) {
                  this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"),
                    t.addLoginHint(e.account.username);
                  try {
                    i = St(e.account.homeAccountId);
                    t.addCcsOid(i);
                  } catch (e) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                  }
                }
              } else
                e.loginHint &&
                  (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"),
                  t.addLoginHint(e.loginHint),
                  t.addCcsUpn(e.loginHint));
            else this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
            return (
              e.nonce && t.addNonce(e.nonce),
              e.state && t.addState(e.state),
              (!ct.isEmpty(e.claims) ||
                (this.config.authOptions.clientCapabilities &&
                  this.config.authOptions.clientCapabilities.length > 0)) &&
                t.addClaims(e.claims, this.config.authOptions.clientCapabilities),
              e.extraQueryParameters && t.addExtraQueryParameters(e.extraQueryParameters),
              t.createQueryString()
            );
          }),
          (t.prototype.createLogoutUrlQueryString = function (e) {
            var t = new Br();
            return (
              e.postLogoutRedirectUri && t.addPostLogoutRedirectUri(e.postLogoutRedirectUri),
              e.correlationId && t.addCorrelationId(e.correlationId),
              e.idTokenHint && t.addIdTokenHint(e.idTokenHint),
              e.state && t.addState(e.state),
              e.extraQueryParameters && t.addExtraQueryParameters(e.extraQueryParameters),
              t.createQueryString()
            );
          }),
          (t.prototype.extractAccountSid = function (e) {
            return (e.idTokenClaims && e.idTokenClaims.sid) || null;
          }),
          t
        );
      })(qr);
    function Vr(e) {
      return (
        e.hasOwnProperty("authorization_endpoint") && e.hasOwnProperty("token_endpoint") && e.hasOwnProperty("issuer")
      );
    }
    var Qr = (function () {
        function e(e) {
          this.networkInterface = e;
        }
        return (
          (e.prototype.detectRegion = function (e, t) {
            return s(this, void 0, void 0, function () {
              var r, n, o, i;
              return c(this, function (a) {
                switch (a.label) {
                  case 0:
                    if ((r = e)) return [3, 8];
                    a.label = 1;
                  case 1:
                    return a.trys.push([1, 6, , 7]), [4, this.getRegionFromIMDS(g.IMDS_VERSION)];
                  case 2:
                    return (
                      (n = a.sent()).status === M.httpSuccess && ((r = n.body), (t.region_source = U.IMDS)),
                      n.status !== M.httpBadRequest ? [3, 5] : [4, this.getCurrentVersion()]
                    );
                  case 3:
                    return (o = a.sent())
                      ? [4, this.getRegionFromIMDS(o)]
                      : ((t.region_source = U.FAILED_AUTO_DETECTION), [2, null]);
                  case 4:
                    (i = a.sent()).status === M.httpSuccess && ((r = i.body), (t.region_source = U.IMDS)),
                      (a.label = 5);
                  case 5:
                    return [3, 7];
                  case 6:
                    return a.sent(), (t.region_source = U.FAILED_AUTO_DETECTION), [2, null];
                  case 7:
                    return [3, 9];
                  case 8:
                    (t.region_source = U.ENVIRONMENT_VARIABLE), (a.label = 9);
                  case 9:
                    return r || (t.region_source = U.FAILED_AUTO_DETECTION), [2, r || null];
                }
              });
            });
          }),
          (e.prototype.getRegionFromIMDS = function (t) {
            return s(this, void 0, void 0, function () {
              return c(this, function (r) {
                return [
                  2,
                  this.networkInterface.sendGetRequestAsync(
                    g.IMDS_ENDPOINT + "?api-version=" + t + "&format=text",
                    e.IMDS_OPTIONS,
                    g.IMDS_TIMEOUT
                  ),
                ];
              });
            });
          }),
          (e.prototype.getCurrentVersion = function () {
            return s(this, void 0, void 0, function () {
              var t;
              return c(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      [4, this.networkInterface.sendGetRequestAsync(g.IMDS_ENDPOINT + "?format=json", e.IMDS_OPTIONS)]
                    );
                  case 1:
                    return (t = r.sent()).status === M.httpBadRequest &&
                      t.body &&
                      t.body["newest-versions"] &&
                      t.body["newest-versions"].length > 0
                      ? [2, t.body["newest-versions"][0]]
                      : [2, null];
                  case 2:
                    return r.sent(), [2, null];
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.IMDS_OPTIONS = { headers: { Metadata: "true" } }),
          e
        );
      })(),
      Jr = (function () {
        function e(e, t, r, n) {
          (this.canonicalAuthority = e),
            this._canonicalAuthority.validateAsUri(),
            (this.networkInterface = t),
            (this.cacheManager = r),
            (this.authorityOptions = n),
            (this.regionDiscovery = new Qr(t)),
            (this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 });
        }
        return (
          Object.defineProperty(e.prototype, "authorityType", {
            get: function () {
              var e = this.canonicalAuthorityUrlComponents.PathSegments;
              return e.length && e[0].toLowerCase() === g.ADFS ? yt.Adfs : yt.Default;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "protocolMode", {
            get: function () {
              return this.authorityOptions.protocolMode;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "options", {
            get: function () {
              return this.authorityOptions;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "canonicalAuthority", {
            get: function () {
              return this._canonicalAuthority.urlString;
            },
            set: function (e) {
              (this._canonicalAuthority = new wr(e)),
                this._canonicalAuthority.validateAsUri(),
                (this._canonicalAuthorityUrlComponents = null);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "canonicalAuthorityUrlComponents", {
            get: function () {
              return (
                this._canonicalAuthorityUrlComponents ||
                  (this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents()),
                this._canonicalAuthorityUrlComponents
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "hostnameAndPort", {
            get: function () {
              return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tenant", {
            get: function () {
              return this.canonicalAuthorityUrlComponents.PathSegments[0];
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "authorizationEndpoint", {
            get: function () {
              if (this.discoveryComplete()) {
                var e = this.replacePath(this.metadata.authorization_endpoint);
                return this.replaceTenant(e);
              }
              throw st.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tokenEndpoint", {
            get: function () {
              if (this.discoveryComplete()) {
                var e = this.replacePath(this.metadata.token_endpoint);
                return this.replaceTenant(e);
              }
              throw st.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "deviceCodeEndpoint", {
            get: function () {
              if (this.discoveryComplete()) {
                var e = this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
                return this.replaceTenant(e);
              }
              throw st.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "endSessionEndpoint", {
            get: function () {
              if (this.discoveryComplete()) {
                if (!this.metadata.end_session_endpoint) throw st.createLogoutNotSupportedError();
                var e = this.replacePath(this.metadata.end_session_endpoint);
                return this.replaceTenant(e);
              }
              throw st.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "selfSignedJwtAudience", {
            get: function () {
              if (this.discoveryComplete()) {
                var e = this.replacePath(this.metadata.issuer);
                return this.replaceTenant(e);
              }
              throw st.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.replaceTenant = function (e) {
            return e.replace(/{tenant}|{tenantid}/g, this.tenant);
          }),
          (e.prototype.replacePath = function (e) {
            var t = e,
              r = new wr(this.metadata.canonical_authority).getUrlComponents().PathSegments;
            return (
              this.canonicalAuthorityUrlComponents.PathSegments.forEach(function (e, n) {
                var o = r[n];
                e !== o && (t = t.replace("/" + o + "/", "/" + e + "/"));
              }),
              t
            );
          }),
          Object.defineProperty(e.prototype, "defaultOpenIdConfigurationEndpoint", {
            get: function () {
              return this.authorityType === yt.Adfs || this.protocolMode === lr.OIDC
                ? this.canonicalAuthority + ".well-known/openid-configuration"
                : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.discoveryComplete = function () {
            return !!this.metadata;
          }),
          (e.prototype.resolveEndpointsAsync = function () {
            return s(this, void 0, void 0, function () {
              var e, t, r, n;
              return c(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort)) ||
                        (e = new sr()).updateCanonicalAuthority(this.canonicalAuthority),
                      [4, this.updateCloudDiscoveryMetadata(e)]
                    );
                  case 1:
                    return (
                      (t = o.sent()),
                      (this.canonicalAuthority = this.canonicalAuthority.replace(
                        this.hostnameAndPort,
                        e.preferred_network
                      )),
                      [4, this.updateEndpointMetadata(e)]
                    );
                  case 2:
                    return (
                      (r = o.sent()),
                      t !== R.CACHE &&
                        r !== R.CACHE &&
                        (e.resetExpiresAt(), e.updateCanonicalAuthority(this.canonicalAuthority)),
                      (n = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache)),
                      this.cacheManager.setAuthorityMetadata(n, e),
                      (this.metadata = e),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.updateEndpointMetadata = function (t) {
            var r;
            return s(this, void 0, void 0, function () {
              var n, o, i;
              return c(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (n = this.getEndpointMetadataFromConfig())
                      ? (t.updateEndpointMetadata(n, !1), [2, R.CONFIG])
                      : this.isAuthoritySameType(t) && t.endpointsFromNetwork && !t.isExpired()
                      ? [2, R.CACHE]
                      : [4, this.getEndpointMetadataFromNetwork()];
                  case 1:
                    return (n = a.sent())
                      ? (
                          null === (r = this.authorityOptions.azureRegionConfiguration) || void 0 === r
                            ? void 0
                            : r.azureRegion
                        )
                        ? [
                            4,
                            this.regionDiscovery.detectRegion(
                              this.authorityOptions.azureRegionConfiguration.environmentRegion,
                              this.regionDiscoveryMetadata
                            ),
                          ]
                        : [3, 3]
                      : [3, 4];
                  case 2:
                    (o = a.sent()),
                      (i =
                        this.authorityOptions.azureRegionConfiguration.azureRegion === g.AZURE_REGION_AUTO_DISCOVER_FLAG
                          ? o
                          : this.authorityOptions.azureRegionConfiguration.azureRegion),
                      this.authorityOptions.azureRegionConfiguration.azureRegion === g.AZURE_REGION_AUTO_DISCOVER_FLAG
                        ? (this.regionDiscoveryMetadata.region_outcome = o
                            ? D.AUTO_DETECTION_REQUESTED_SUCCESSFUL
                            : D.AUTO_DETECTION_REQUESTED_FAILED)
                        : (this.regionDiscoveryMetadata.region_outcome = o
                            ? this.authorityOptions.azureRegionConfiguration.azureRegion === o
                              ? D.CONFIGURED_MATCHES_DETECTED
                              : D.CONFIGURED_NOT_DETECTED
                            : D.CONFIGURED_NO_AUTO_DETECTION),
                      i &&
                        ((this.regionDiscoveryMetadata.region_used = i), (n = e.replaceWithRegionalInformation(n, i))),
                      (a.label = 3);
                  case 3:
                    return t.updateEndpointMetadata(n, !0), [2, R.NETWORK];
                  case 4:
                    throw st.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
                }
              });
            });
          }),
          (e.prototype.isAuthoritySameType = function (e) {
            return (
              new wr(e.canonical_authority).getUrlComponents().PathSegments.length ===
              this.canonicalAuthorityUrlComponents.PathSegments.length
            );
          }),
          (e.prototype.getEndpointMetadataFromConfig = function () {
            if (this.authorityOptions.authorityMetadata)
              try {
                return JSON.parse(this.authorityOptions.authorityMetadata);
              } catch (e) {
                throw Yt.createInvalidAuthorityMetadataError();
              }
            return null;
          }),
          (e.prototype.getEndpointMetadataFromNetwork = function () {
            return s(this, void 0, void 0, function () {
              var e;
              return c(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      t.trys.push([0, 2, , 3]),
                      [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint)]
                    );
                  case 1:
                    return [2, Vr((e = t.sent()).body) ? e.body : null];
                  case 2:
                    return t.sent(), [2, null];
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.updateCloudDiscoveryMetadata = function (e) {
            return s(this, void 0, void 0, function () {
              var t;
              return c(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (t = this.getCloudDiscoveryMetadataFromConfig())
                      ? (e.updateCloudDiscoveryMetadata(t, !1), [2, R.CONFIG])
                      : this.isAuthoritySameType(e) && e.aliasesFromNetwork && !e.isExpired()
                      ? [2, R.CACHE]
                      : [4, this.getCloudDiscoveryMetadataFromNetwork()];
                  case 1:
                    if ((t = r.sent())) return e.updateCloudDiscoveryMetadata(t, !0), [2, R.NETWORK];
                    throw Yt.createUntrustedAuthorityError();
                }
              });
            });
          }),
          (e.prototype.getCloudDiscoveryMetadataFromConfig = function () {
            if (this.authorityOptions.cloudDiscoveryMetadata)
              try {
                var t = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata),
                  r = e.getCloudDiscoveryMetadataFromNetworkResponse(t.metadata, this.hostnameAndPort);
                if (r) return r;
              } catch (e) {
                throw Yt.createInvalidCloudDiscoveryMetadataError();
              }
            return this.isInKnownAuthorities() ? e.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort) : null;
          }),
          (e.prototype.getCloudDiscoveryMetadataFromNetwork = function () {
            return s(this, void 0, void 0, function () {
              var t, r, n, o;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    (t = "" + g.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize"),
                      (r = null),
                      (i.label = 1);
                  case 1:
                    return i.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t)];
                  case 2:
                    return (
                      (n = i.sent()),
                      0 ===
                      (o = (function (e) {
                        return e.hasOwnProperty("tenant_discovery_endpoint") && e.hasOwnProperty("metadata");
                      })(n.body)
                        ? n.body.metadata
                        : []).length
                        ? [2, null]
                        : ((r = e.getCloudDiscoveryMetadataFromNetworkResponse(o, this.hostnameAndPort)), [3, 4])
                    );
                  case 3:
                    return i.sent(), [2, null];
                  case 4:
                    return r || (r = e.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)), [2, r];
                }
              });
            });
          }),
          (e.prototype.isInKnownAuthorities = function () {
            var e = this;
            return (
              this.authorityOptions.knownAuthorities.filter(function (t) {
                return wr.getDomainFromUrl(t).toLowerCase() === e.hostnameAndPort;
              }).length > 0
            );
          }),
          (e.createCloudDiscoveryMetadataFromHost = function (e) {
            return { preferred_network: e, preferred_cache: e, aliases: [e] };
          }),
          (e.getCloudDiscoveryMetadataFromNetworkResponse = function (e, t) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              if (n.aliases.indexOf(t) > -1) return n;
            }
            return null;
          }),
          (e.prototype.getPreferredCache = function () {
            if (this.discoveryComplete()) return this.metadata.preferred_cache;
            throw st.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
          }),
          (e.prototype.isAlias = function (e) {
            return this.metadata.aliases.indexOf(e) > -1;
          }),
          (e.isPublicCloudAuthority = function (e) {
            return g.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
          }),
          (e.buildRegionalAuthorityString = function (e, t, r) {
            var n = new wr(e);
            n.validateAsUri();
            var o = n.getUrlComponents(),
              i = t + "." + o.HostNameAndPort;
            this.isPublicCloudAuthority(o.HostNameAndPort) && (i = t + "." + g.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
            var s = wr.constructAuthorityUriFromObject(
              a(a({}, n.getUrlComponents()), { HostNameAndPort: i })
            ).urlString;
            return r ? s + "?" + r : s;
          }),
          (e.replaceWithRegionalInformation = function (t, r) {
            return (
              (t.authorization_endpoint = e.buildRegionalAuthorityString(t.authorization_endpoint, r)),
              (t.token_endpoint = e.buildRegionalAuthorityString(t.token_endpoint, r, "allowestsrnonmsi=true")),
              t.end_session_endpoint &&
                (t.end_session_endpoint = e.buildRegionalAuthorityString(t.end_session_endpoint, r)),
              t
            );
          }),
          e
        );
      })(),
      Yr = (function () {
        function e() {}
        return (
          (e.createDiscoveredInstance = function (t, r, n, o) {
            return s(this, void 0, void 0, function () {
              var i, a;
              return c(this, function (s) {
                switch (s.label) {
                  case 0:
                    (i = e.createInstance(t, r, n, o)), (s.label = 1);
                  case 1:
                    return s.trys.push([1, 3, , 4]), [4, i.resolveEndpointsAsync()];
                  case 2:
                    return s.sent(), [2, i];
                  case 3:
                    throw ((a = s.sent()), st.createEndpointDiscoveryIncompleteError(a));
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.createInstance = function (e, t, r, n) {
            if (ct.isEmpty(e)) throw Yt.createUrlEmptyError();
            return new Jr(e, t, r, n);
          }),
          e
        );
      })(),
      Xr = (function () {
        function e(e, t) {
          (this.cacheOutcome = L.NO_CACHE_HIT),
            (this.cacheManager = t),
            (this.apiId = e.apiId),
            (this.correlationId = e.correlationId),
            (this.wrapperSKU = e.wrapperSKU || g.EMPTY_STRING),
            (this.wrapperVer = e.wrapperVer || g.EMPTY_STRING),
            (this.telemetryCacheKey = N.CACHE_KEY + C.CACHE_KEY_SEPARATOR + e.clientId);
        }
        return (
          (e.prototype.generateCurrentRequestHeaderValue = function () {
            var e = "" + this.apiId + N.VALUE_SEPARATOR + this.cacheOutcome,
              t = [this.wrapperSKU, this.wrapperVer].join(N.VALUE_SEPARATOR),
              r = [e, this.getRegionDiscoveryFields()].join(N.VALUE_SEPARATOR);
            return [N.SCHEMA_VERSION, r, t].join(N.CATEGORY_SEPARATOR);
          }),
          (e.prototype.generateLastRequestHeaderValue = function () {
            var t = this.getLastRequests(),
              r = e.maxErrorsToSend(t),
              n = t.failedRequests.slice(0, 2 * r).join(N.VALUE_SEPARATOR),
              o = t.errors.slice(0, r).join(N.VALUE_SEPARATOR),
              i = t.errors.length,
              a = [i, r < i ? N.OVERFLOW_TRUE : N.OVERFLOW_FALSE].join(N.VALUE_SEPARATOR);
            return [N.SCHEMA_VERSION, t.cacheHits, n, o, a].join(N.CATEGORY_SEPARATOR);
          }),
          (e.prototype.cacheFailedRequest = function (e) {
            var t = this.getLastRequests();
            t.errors.length >= N.MAX_CACHED_ERRORS &&
              (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()),
              t.failedRequests.push(this.apiId, this.correlationId),
              ct.isEmpty(e.subError)
                ? ct.isEmpty(e.errorCode)
                  ? e && e.toString()
                    ? t.errors.push(e.toString())
                    : t.errors.push(N.UNKNOWN_ERROR)
                  : t.errors.push(e.errorCode)
                : t.errors.push(e.subError),
              this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
          }),
          (e.prototype.incrementCacheHits = function () {
            var e = this.getLastRequests();
            return (e.cacheHits += 1), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
          }),
          (e.prototype.getLastRequests = function () {
            var e = new ar();
            return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
          }),
          (e.prototype.clearTelemetryCache = function () {
            var t = this.getLastRequests(),
              r = e.maxErrorsToSend(t);
            if (r === t.errors.length) this.cacheManager.removeItem(this.telemetryCacheKey);
            else {
              var n = new ar();
              (n.failedRequests = t.failedRequests.slice(2 * r)),
                (n.errors = t.errors.slice(r)),
                this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n);
            }
          }),
          (e.maxErrorsToSend = function (e) {
            var t,
              r = 0,
              n = 0,
              o = e.errors.length;
            for (t = 0; t < o; t++) {
              var i = e.failedRequests[2 * t] || g.EMPTY_STRING,
                a = e.failedRequests[2 * t + 1] || g.EMPTY_STRING,
                s = e.errors[t] || g.EMPTY_STRING;
              if (!((n += i.toString().length + a.toString().length + s.length + 3) < N.MAX_LAST_HEADER_BYTES)) break;
              r += 1;
            }
            return r;
          }),
          (e.prototype.getRegionDiscoveryFields = function () {
            var e = [];
            return (
              e.push(this.regionUsed || ""),
              e.push(this.regionSource || ""),
              e.push(this.regionOutcome || ""),
              e.join(",")
            );
          }),
          (e.prototype.updateRegionDiscoveryMetadata = function (e) {
            (this.regionUsed = e.region_used),
              (this.regionSource = e.region_source),
              (this.regionOutcome = e.region_outcome);
          }),
          (e.prototype.setCacheOutcome = function (e) {
            this.cacheOutcome = e;
          }),
          e
        );
      })(),
      Zr = (function (e) {
        function t(t, r, n, o, i, a, s) {
          var c = e.call(this, t, r, n, o, i, s) || this;
          return (c.navigationClient = a), c;
        }
        return (
          ae(t, e),
          (t.prototype.initializeAuthorizationCodeRequest = function (e) {
            return ce(this, void 0, void 0, function () {
              var t, r;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      this.logger.verbose("initializeAuthorizationRequest called", e.correlationId),
                      [4, this.browserCrypto.generatePkceCodes()]
                    );
                  case 1:
                    return (
                      (t = n.sent()),
                      (r = se(se({}, e), { redirectUri: e.redirectUri, code: "", codeVerifier: t.verifier })),
                      (e.codeChallenge = t.challenge),
                      (e.codeChallengeMethod = g.S256_CODE_CHALLENGE_METHOD),
                      [2, r]
                    );
                }
              });
            });
          }),
          (t.prototype.initializeLogoutRequest = function (e) {
            if (
              (this.logger.verbose("initializeLogoutRequest called", null == e ? void 0 : e.correlationId),
              this.browserStorage.isInteractionInProgress())
            )
              throw lt.createInteractionInProgressError();
            var t = se({ correlationId: this.browserCrypto.createNewGuid() }, e);
            return (
              e && null === e.postLogoutRedirectUri
                ? this.logger.verbose(
                    "postLogoutRedirectUri passed as null, not setting post logout redirect uri",
                    t.correlationId
                  )
                : e && e.postLogoutRedirectUri
                ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", t.correlationId),
                  (t.postLogoutRedirectUri = wr.getAbsoluteUrl(e.postLogoutRedirectUri, Nr.getCurrentUri())))
                : null === this.config.auth.postLogoutRedirectUri
                ? this.logger.verbose(
                    "postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect",
                    t.correlationId
                  )
                : this.config.auth.postLogoutRedirectUri
                ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", t.correlationId),
                  (t.postLogoutRedirectUri = wr.getAbsoluteUrl(
                    this.config.auth.postLogoutRedirectUri,
                    Nr.getCurrentUri()
                  )))
                : (this.logger.verbose("Setting postLogoutRedirectUri to current page", t.correlationId),
                  (t.postLogoutRedirectUri = wr.getAbsoluteUrl(Nr.getCurrentUri(), Nr.getCurrentUri()))),
              t
            );
          }),
          (t.prototype.createAuthCodeClient = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.getClientConfiguration(e, t)];
                  case 1:
                    return (r = n.sent()), [2, new zr(r)];
                }
              });
            });
          }),
          (t.prototype.getClientConfiguration = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this.logger.verbose("getClientConfiguration called"), [4, this.getDiscoveredAuthority(t)];
                  case 1:
                    return (
                      (r = n.sent()),
                      [
                        2,
                        {
                          authOptions: {
                            clientId: this.config.auth.clientId,
                            authority: r,
                            clientCapabilities: this.config.auth.clientCapabilities,
                          },
                          systemOptions: {
                            tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                            preventCorsPreflight: !0,
                          },
                          loggerOptions: {
                            loggerCallback: this.config.system.loggerOptions.loggerCallback,
                            piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
                            logLevel: this.config.system.loggerOptions.logLevel,
                            correlationId: this.correlationId,
                          },
                          cryptoInterface: this.browserCrypto,
                          networkInterface: this.networkClient,
                          storageInterface: this.browserStorage,
                          serverTelemetryManager: e,
                          libraryInfo: { sku: re, version: "2.18.0", cpu: "", os: "" },
                        },
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.validateAndExtractStateFromHash = function (e, t, r) {
            this.logger.verbose("validateAndExtractStateFromHash called", r);
            var n = wr.getDeserializedHash(e);
            if (!n.state) throw lt.createHashDoesNotContainStateError();
            var o = Er.extractBrowserRequestState(this.browserCrypto, n.state);
            if (!o) throw lt.createUnableToParseStateError();
            if (o.interactionType !== t) throw lt.createStateInteractionTypeMismatchError();
            return this.logger.verbose("Returning state from hash", r), n.state;
          }),
          (t.prototype.getDiscoveredAuthority = function (e) {
            return ce(this, void 0, void 0, function () {
              var t;
              return ue(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      this.logger.verbose("getDiscoveredAuthority called"),
                      (t = {
                        protocolMode: this.config.auth.protocolMode,
                        knownAuthorities: this.config.auth.knownAuthorities,
                        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                        authorityMetadata: this.config.auth.authorityMetadata,
                      }),
                      e
                        ? (this.logger.verbose("Creating discovered authority with request authority"),
                          [4, Yr.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t)])
                        : [3, 2]
                    );
                  case 1:
                    return [2, r.sent()];
                  case 2:
                    return (
                      this.logger.verbose("Creating discovered authority with configured authority"),
                      [
                        4,
                        Yr.createDiscoveredInstance(
                          this.config.auth.authority,
                          this.config.system.networkClient,
                          this.browserStorage,
                          t
                        ),
                      ]
                    );
                  case 3:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.preflightInteractiveRequest = function (e, t) {
            if (
              (this.logger.verbose(
                "preflightInteractiveRequest called, validating app environment",
                null == e ? void 0 : e.correlationId
              ),
              Nr.blockReloadInHiddenIframes(),
              this.browserStorage.isInteractionInProgress(!1))
            )
              throw lt.createInteractionInProgressError();
            return this.initializeAuthorizationRequest(e, t);
          }),
          (t.prototype.initializeAuthorizationRequest = function (e, t) {
            this.logger.verbose("initializeAuthorizationRequest called");
            var r = this.getRedirectUri(e.redirectUri),
              n = { interactionType: t },
              o = ur.setRequestState(this.browserCrypto, (e && e.state) || "", n),
              i = se(se({}, this.initializeBaseRequest(e)), {
                redirectUri: r,
                state: o,
                nonce: e.nonce || this.browserCrypto.createNewGuid(),
                responseMode: w.FRAGMENT,
              }),
              a = e.account || this.browserStorage.getActiveAccount();
            if (
              (a &&
                (this.logger.verbose("Setting validated request account"),
                this.logger.verbosePii("Setting validated request account: " + a),
                (i.account = a)),
              ct.isEmpty(i.loginHint) && !a)
            ) {
              var s = this.browserStorage.getLegacyLoginHint();
              s && (i.loginHint = s);
            }
            return (
              this.browserStorage.updateCacheEntries(
                i.state,
                i.nonce,
                i.authority,
                i.loginHint || "",
                i.account || null
              ),
              i
            );
          }),
          t
        );
      })(
        (function () {
          function e(e, t, r, n, o, i) {
            (this.config = e),
              (this.browserStorage = t),
              (this.browserCrypto = r),
              (this.networkClient = this.config.system.networkClient),
              (this.eventHandler = o),
              (this.correlationId = i || this.browserCrypto.createNewGuid()),
              (this.logger = n.clone(re, "2.18.0", this.correlationId));
          }
          return (
            (e.prototype.clearCacheOnLogout = function (e) {
              return ce(this, void 0, void 0, function () {
                return ue(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (!e) return [3, 5];
                      It.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) &&
                        (this.logger.verbose("Setting active account to null"),
                        this.browserStorage.setActiveAccount(null)),
                        (t.label = 1);
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]), [4, this.browserStorage.removeAccount(It.generateAccountCacheKey(e))]
                      );
                    case 2:
                      return (
                        t.sent(),
                        this.logger.verbose(
                          "Cleared cache items belonging to the account provided in the logout request."
                        ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        t.sent(),
                        this.logger.error("Account provided in logout request was not found. Local cache unchanged."),
                        [3, 4]
                      );
                    case 4:
                      return [3, 9];
                    case 5:
                      return t.trys.push([5, 8, , 9]), [4, this.browserStorage.clear()];
                    case 6:
                      return t.sent(), [4, this.browserCrypto.clearKeystore()];
                    case 7:
                      return (
                        t.sent(),
                        this.logger.verbose("No account provided in logout request, clearing all cache items."),
                        [3, 9]
                      );
                    case 8:
                      return (
                        t.sent(),
                        this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged."),
                        [3, 9]
                      );
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.initializeBaseRequest = function (e) {
              this.logger.verbose("Initializing BaseAuthRequest");
              var t = e.authority || this.config.auth.authority,
                r = de((e && e.scopes) || []);
              return (
                e.authenticationScheme
                  ? this.logger.verbose(
                      'Authentication Scheme set to "' + e.authenticationScheme + '" as configured in Auth request'
                    )
                  : ((e.authenticationScheme = O.BEARER),
                    this.logger.verbose(
                      'Authentication Scheme wasn\'t explicitly set in request, defaulting to "Bearer" request'
                    )),
                se(se({}, e), { correlationId: this.correlationId, authority: t, scopes: r })
              );
            }),
            (e.prototype.getRedirectUri = function (e) {
              this.logger.verbose("getRedirectUri called");
              var t = e || this.config.auth.redirectUri || Nr.getCurrentUri();
              return wr.getAbsoluteUrl(t, Nr.getCurrentUri());
            }),
            (e.prototype.initializeServerTelemetryManager = function (e, t) {
              this.logger.verbose("initializeServerTelemetryManager called");
              var r = {
                clientId: this.config.auth.clientId,
                correlationId: this.correlationId,
                apiId: e,
                forceRefresh: t || !1,
                wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
                wrapperVer: this.browserStorage.getWrapperMetadata()[1],
              };
              return new Xr(r, this.browserStorage);
            }),
            e
          );
        })()
      ),
      $r = (function () {
        function e(e, t) {
          (this.browserStorage = e), (this.logger = t), (this.unloadWindow = this.unloadWindow.bind(this));
        }
        return (
          (e.prototype.openPopup = function (t, r) {
            try {
              var n = void 0;
              if (
                (r.popup
                  ? ((n = r.popup), this.logger.verbosePii("Navigating popup window to: " + t), n.location.assign(t))
                  : void 0 === r.popup &&
                    (this.logger.verbosePii("Opening popup window to: " + t),
                    (n = e.openSizedPopup(t, r.popupName, r.popupWindowAttributes, this.logger))),
                !n)
              )
                throw lt.createEmptyWindowCreatedError();
              return (
                n.focus && n.focus(),
                (this.currentWindow = n),
                window.addEventListener("beforeunload", this.unloadWindow),
                n
              );
            } catch (e) {
              throw (
                (this.logger.error("error opening popup " + e.message),
                this.browserStorage.setInteractionInProgress(!1),
                lt.createPopupWindowError(e.toString()))
              );
            }
          }),
          (e.openSizedPopup = function (e, t, r, n) {
            var o,
              i,
              a,
              s,
              c = window.screenLeft ? window.screenLeft : window.screenX,
              u = window.screenTop ? window.screenTop : window.screenY,
              l = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
              d = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
              h = null === (o = r.popupSize) || void 0 === o ? void 0 : o.width,
              p = null === (i = r.popupSize) || void 0 === i ? void 0 : i.height,
              f = null === (a = r.popupPosition) || void 0 === a ? void 0 : a.top,
              g = null === (s = r.popupPosition) || void 0 === s ? void 0 : s.left;
            return (
              (!h || h < 0 || h > l) &&
                (n.verbose("Default popup window width used. Window width not configured or invalid."), (h = Z)),
              (!p || p < 0 || p > d) &&
                (n.verbose("Default popup window height used. Window height not configured or invalid."), (p = $)),
              (!f || f < 0 || f > d) &&
                (n.verbose("Default popup window top position used. Window top not configured or invalid."),
                (f = Math.max(0, d / 2 - $ / 2 + u))),
              (!g || g < 0 || g > l) &&
                (n.verbose("Default popup window left position used. Window left not configured or invalid."),
                (g = Math.max(0, l / 2 - Z / 2 + c))),
              window.open(e, t, "width=" + h + ", height=" + p + ", top=" + f + ", left=" + g + ", scrollbars=yes")
            );
          }),
          (e.prototype.unloadWindow = function (e) {
            this.browserStorage.cleanRequestByInteractionType(J.Popup),
              this.currentWindow && this.currentWindow.close(),
              e.preventDefault();
          }),
          (e.prototype.cleanPopup = function (e) {
            e && e.close(),
              window.removeEventListener("beforeunload", this.unloadWindow),
              this.browserStorage.setInteractionInProgress(!1);
          }),
          (e.prototype.monitorPopupForSameOrigin = function (e) {
            var t = this;
            return new Promise(function (r, n) {
              var o = setInterval(function () {
                if (e.closed) return t.cleanPopup(), clearInterval(o), void n(lt.createUserCancelledError());
                var i = g.EMPTY_STRING;
                try {
                  i = e.location.href;
                } catch (e) {}
                ct.isEmpty(i) || "about:blank" === i || (clearInterval(o), r());
              }, te);
            });
          }),
          (e.generatePopupName = function (e, t) {
            return ee + "." + e + "." + t.scopes.join("-") + "." + t.authority + "." + t.correlationId;
          }),
          (e.generateLogoutPopupName = function (e, t) {
            var r = t.account && t.account.homeAccountId;
            return ee + "." + e + "." + r + "." + t.correlationId;
          }),
          e
        );
      })(),
      en = (function () {
        function e(e, t, r, n) {
          (this.authModule = e), (this.browserStorage = t), (this.authCodeRequest = r), (this.browserRequestLogger = n);
        }
        return (
          (e.prototype.handleCodeResponse = function (e, t, r, n) {
            return ce(this, void 0, void 0, function () {
              var o, i, a, s, c, u, l;
              return ue(this, function (d) {
                switch (d.label) {
                  case 0:
                    if (
                      (this.browserRequestLogger.verbose("InteractionHandler.handleCodeResponse called"), ct.isEmpty(e))
                    )
                      throw lt.createEmptyHashError(e);
                    if (
                      ((o = this.browserStorage.generateStateKey(t)), !(i = this.browserStorage.getTemporaryCache(o)))
                    )
                      throw st.createStateNotFoundError("Cached State");
                    return (
                      (a = this.authModule.handleFragmentResponse(e, i)),
                      (s = this.browserStorage.generateNonceKey(i)),
                      (c = this.browserStorage.getTemporaryCache(s)),
                      (this.authCodeRequest.code = a.code),
                      a.cloud_instance_host_name
                        ? [4, this.updateTokenEndpointAuthority(a.cloud_instance_host_name, r, n)]
                        : [3, 2]
                    );
                  case 1:
                    d.sent(), (d.label = 2);
                  case 2:
                    return (
                      (a.nonce = c || void 0),
                      (a.state = i),
                      a.client_info
                        ? (this.authCodeRequest.clientInfo = a.client_info)
                        : (u = this.checkCcsCredentials()) && (this.authCodeRequest.ccsCredential = u),
                      [4, this.authModule.acquireToken(this.authCodeRequest, a)]
                    );
                  case 3:
                    return (l = d.sent()), this.browserStorage.cleanRequestByState(t), [2, l];
                }
              });
            });
          }),
          (e.prototype.updateTokenEndpointAuthority = function (e, t, r) {
            return ce(this, void 0, void 0, function () {
              var n, o;
              return ue(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = "https://" + e + "/" + t.tenant + "/"),
                      [4, Yr.createDiscoveredInstance(n, r, this.browserStorage, t.options)]
                    );
                  case 1:
                    return (o = i.sent()), this.authModule.updateAuthority(o), [2];
                }
              });
            });
          }),
          (e.prototype.checkCcsCredentials = function () {
            var e = this.browserStorage.getTemporaryCache(z.CCS_CREDENTIAL, !0);
            if (e)
              try {
                return JSON.parse(e);
              } catch (t) {
                this.authModule.logger.error("Cache credential could not be parsed"),
                  this.authModule.logger.errorPii("Cache credential could not be parsed: " + e);
              }
            return null;
          }),
          e
        );
      })(),
      tn = (function (e) {
        function t(t, r, n, o) {
          var i = e.call(this, t, r, n, o) || this;
          return (i.popupUtils = new $r(r, o)), i;
        }
        return (
          ae(t, e),
          (t.prototype.initiateAuthRequest = function (e, t) {
            if (ct.isEmpty(e))
              throw (this.browserRequestLogger.error("Navigate url is empty"), lt.createEmptyNavigationUriError());
            return (
              this.browserStorage.setInteractionInProgress(!0),
              this.browserRequestLogger.infoPii("Navigate to: " + e),
              this.popupUtils.openPopup(e, t)
            );
          }),
          (t.prototype.monitorPopupForHash = function (e) {
            var t = this;
            return this.popupUtils.monitorPopupForSameOrigin(e).then(function () {
              var r = e.location.hash;
              if ((Nr.clearHash(e), t.popupUtils.cleanPopup(e), !r)) throw lt.createEmptyHashError(e.location.href);
              if (wr.hashContainsKnownProperties(r)) return r;
              throw lt.createHashDoesNotContainKnownPropertiesError();
            });
          }),
          t
        );
      })(en),
      rn = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          ae(t, e),
          (t.prototype.acquireToken = function (e) {
            try {
              var t = this.preflightInteractiveRequest(e, J.Popup),
                r = $r.generatePopupName(this.config.auth.clientId, t),
                n = e.popupWindowAttributes || {};
              if (this.config.system.asyncPopups)
                return (
                  this.logger.verbose("asyncPopups set to true, acquiring token"), this.acquireTokenPopupAsync(t, r, n)
                );
              this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
              var o = $r.openSizedPopup("about:blank", r, n, this.logger);
              return this.acquireTokenPopupAsync(t, r, n, o);
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (t.prototype.logout = function (e) {
            try {
              this.logger.verbose("logoutPopup called");
              var t = this.initializeLogoutRequest(e),
                r = $r.generateLogoutPopupName(this.config.auth.clientId, t),
                n = e && e.authority,
                o = e && e.mainWindowRedirectUri,
                i = (null == e ? void 0 : e.popupWindowAttributes) || {};
              if (this.config.system.asyncPopups)
                return this.logger.verbose("asyncPopups set to true"), this.logoutPopupAsync(t, r, i, n, void 0, o);
              this.logger.verbose("asyncPopup set to false, opening popup");
              var a = $r.openSizedPopup("about:blank", r, i, this.logger);
              return this.logoutPopupAsync(t, r, i, n, a, o);
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (t.prototype.acquireTokenPopupAsync = function (e, t, r, n) {
            return ce(this, void 0, void 0, function () {
              var o, i, a, s, c, u, l, d, h, p;
              return ue(this, function (f) {
                switch (f.label) {
                  case 0:
                    this.logger.verbose("acquireTokenPopupAsync called"),
                      (o = this.initializeServerTelemetryManager(Q.acquireTokenPopup)),
                      (f.label = 1);
                  case 1:
                    return f.trys.push([1, 7, , 8]), [4, this.initializeAuthorizationCodeRequest(e)];
                  case 2:
                    return (i = f.sent()), [4, this.createAuthCodeClient(o, e.authority)];
                  case 3:
                    return (a = f.sent()), this.logger.verbose("Auth code client created"), [4, a.getAuthCodeUrl(e)];
                  case 4:
                    return (
                      (s = f.sent()),
                      (c = new tn(a, this.browserStorage, i, this.logger)),
                      (u = { popup: n, popupName: t, popupWindowAttributes: r }),
                      (l = c.initiateAuthRequest(s, u)),
                      this.eventHandler.emitEvent(Mr.POPUP_OPENED, J.Popup, { popupWindow: l }, null),
                      [4, c.monitorPopupForHash(l)]
                    );
                  case 5:
                    return (
                      (d = f.sent()),
                      (h = this.validateAndExtractStateFromHash(d, J.Popup, e.correlationId)),
                      Lr.removeThrottle(this.browserStorage, this.config.auth.clientId, i),
                      [4, c.handleCodeResponse(d, h, a.authority, this.networkClient)]
                    );
                  case 6:
                    return [2, f.sent()];
                  case 7:
                    throw (
                      ((p = f.sent()),
                      n && n.close(),
                      p instanceof _e && p.setCorrelationId(this.correlationId),
                      o.cacheFailedRequest(p),
                      this.browserStorage.cleanRequestByState(e.state),
                      p)
                    );
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.logoutPopupAsync = function (e, t, r, n, o, i) {
            return ce(this, void 0, void 0, function () {
              var a, s, c, u, l, d, h, p, f;
              return ue(this, function (g) {
                switch (g.label) {
                  case 0:
                    this.logger.verbose("logoutPopupAsync called"),
                      this.eventHandler.emitEvent(Mr.LOGOUT_START, J.Popup, e),
                      (a = this.initializeServerTelemetryManager(Q.logoutPopup)),
                      (g.label = 1);
                  case 1:
                    return g.trys.push([1, 8, , 9]), [4, this.clearCacheOnLogout(e.account)];
                  case 2:
                    return (
                      g.sent(), this.browserStorage.setInteractionInProgress(!0), [4, this.createAuthCodeClient(a, n)]
                    );
                  case 3:
                    (s = g.sent()),
                      this.logger.verbose("Auth code client created"),
                      (c = s.getLogoutUri(e)),
                      this.eventHandler.emitEvent(Mr.LOGOUT_SUCCESS, J.Popup, e),
                      (u = new $r(this.browserStorage, this.logger)),
                      (l = u.openPopup(c, { popupName: t, popupWindowAttributes: r, popup: o })),
                      this.eventHandler.emitEvent(Mr.POPUP_OPENED, J.Popup, { popupWindow: l }, null),
                      (g.label = 4);
                  case 4:
                    return g.trys.push([4, 6, , 7]), [4, u.monitorPopupForSameOrigin(l)];
                  case 5:
                    return (
                      g.sent(), this.logger.verbose("Popup successfully redirected to postLogoutRedirectUri"), [3, 7]
                    );
                  case 6:
                    return (
                      (d = g.sent()),
                      this.logger.verbose(
                        "Error occurred while monitoring popup for same origin. Session on server may remain active. Error: " +
                          d
                      ),
                      [3, 7]
                    );
                  case 7:
                    return (
                      u.cleanPopup(l),
                      i
                        ? ((h = {
                            apiId: Q.logoutPopup,
                            timeout: this.config.system.redirectNavigationTimeout,
                            noHistory: !1,
                          }),
                          (p = wr.getAbsoluteUrl(i, Nr.getCurrentUri())),
                          this.logger.verbose("Redirecting main window to url specified in the request"),
                          this.logger.verbosePii("Redirecing main window to: " + p),
                          this.navigationClient.navigateInternal(p, h))
                        : this.logger.verbose("No main window navigation requested"),
                      [3, 9]
                    );
                  case 8:
                    throw (
                      ((f = g.sent()),
                      o && o.close(),
                      f instanceof _e && f.setCorrelationId(this.correlationId),
                      this.browserStorage.setInteractionInProgress(!1),
                      this.eventHandler.emitEvent(Mr.LOGOUT_FAILURE, J.Popup, null, f),
                      this.eventHandler.emitEvent(Mr.LOGOUT_END, J.Popup),
                      a.cacheFailedRequest(f),
                      f)
                    );
                  case 9:
                    return this.eventHandler.emitEvent(Mr.LOGOUT_END, J.Popup), [2];
                }
              });
            });
          }),
          t
        );
      })(Zr),
      nn = (function (e) {
        function t(t, r, n, o, i) {
          var a = e.call(this, t, r, n, o) || this;
          return (a.browserCrypto = i), a;
        }
        return (
          ae(t, e),
          (t.prototype.initiateAuthRequest = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      this.browserRequestLogger.verbose("RedirectHandler.initiateAuthRequest called"),
                      ct.isEmpty(e)
                        ? [3, 7]
                        : (t.redirectStartPage &&
                            (this.browserRequestLogger.verbose(
                              "RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"
                            ),
                            this.browserStorage.setTemporaryCache(z.ORIGIN_URI, t.redirectStartPage, !0)),
                          this.browserStorage.setInteractionInProgress(!0),
                          this.browserStorage.setTemporaryCache(
                            z.CORRELATION_ID,
                            this.authCodeRequest.correlationId,
                            !0
                          ),
                          this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto),
                          this.browserRequestLogger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + e),
                          (r = { apiId: Q.acquireTokenRedirect, timeout: t.redirectTimeout, noHistory: !1 }),
                          "function" != typeof t.onRedirectNavigate
                            ? [3, 4]
                            : (this.browserRequestLogger.verbose(
                                "RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"
                              ),
                              !1 === t.onRedirectNavigate(e)
                                ? [3, 2]
                                : (this.browserRequestLogger.verbose(
                                    "RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"
                                  ),
                                  [4, t.navigationClient.navigateExternal(e, r)])))
                    );
                  case 1:
                    return n.sent(), [2];
                  case 2:
                    return (
                      this.browserRequestLogger.verbose(
                        "RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation"
                      ),
                      [2]
                    );
                  case 3:
                    return [3, 6];
                  case 4:
                    return (
                      this.browserRequestLogger.verbose(
                        "RedirectHandler.initiateAuthRequest: Navigating window to navigate url"
                      ),
                      [4, t.navigationClient.navigateExternal(e, r)]
                    );
                  case 5:
                    return n.sent(), [2];
                  case 6:
                    return [3, 8];
                  case 7:
                    throw (
                      (this.browserRequestLogger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"),
                      lt.createEmptyNavigationUriError())
                    );
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.handleCodeResponse = function (e, t, r, n, o) {
            return ce(this, void 0, void 0, function () {
              var i, a, s, c, u, l, d;
              return ue(this, function (h) {
                switch (h.label) {
                  case 0:
                    if ((this.browserRequestLogger.verbose("RedirectHandler.handleCodeResponse called"), ct.isEmpty(e)))
                      throw lt.createEmptyHashError(e);
                    if (
                      (this.browserStorage.setInteractionInProgress(!1),
                      (i = this.browserStorage.generateStateKey(t)),
                      !(a = this.browserStorage.getTemporaryCache(i)))
                    )
                      throw st.createStateNotFoundError("Cached State");
                    return (
                      (s = this.authModule.handleFragmentResponse(e, a)),
                      (c = this.browserStorage.generateNonceKey(a)),
                      (u = this.browserStorage.getTemporaryCache(c)),
                      (this.authCodeRequest.code = s.code),
                      s.cloud_instance_host_name
                        ? [4, this.updateTokenEndpointAuthority(s.cloud_instance_host_name, r, n)]
                        : [3, 2]
                    );
                  case 1:
                    h.sent(), (h.label = 2);
                  case 2:
                    return (
                      (s.nonce = u || void 0),
                      (s.state = a),
                      s.client_info
                        ? (this.authCodeRequest.clientInfo = s.client_info)
                        : (l = this.checkCcsCredentials()) && (this.authCodeRequest.ccsCredential = l),
                      o && Lr.removeThrottle(this.browserStorage, o, this.authCodeRequest),
                      [4, this.authModule.acquireToken(this.authCodeRequest, s)]
                    );
                  case 3:
                    return (d = h.sent()), this.browserStorage.cleanRequestByState(t), [2, d];
                }
              });
            });
          }),
          t
        );
      })(en),
      on = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          ae(t, e),
          (t.prototype.acquireToken = function (e) {
            return ce(this, void 0, void 0, function () {
              var t, r, n, o, i, a, s, c;
              return ue(this, function (u) {
                switch (u.label) {
                  case 0:
                    (t = this.preflightInteractiveRequest(e, J.Redirect)),
                      (r = this.initializeServerTelemetryManager(Q.acquireTokenRedirect)),
                      (u.label = 1);
                  case 1:
                    return u.trys.push([1, 6, , 7]), [4, this.initializeAuthorizationCodeRequest(t)];
                  case 2:
                    return (n = u.sent()), [4, this.createAuthCodeClient(r, t.authority)];
                  case 3:
                    return (
                      (o = u.sent()),
                      this.logger.verbose("Auth code client created"),
                      (i = new nn(o, this.browserStorage, n, this.logger, this.browserCrypto)),
                      [4, o.getAuthCodeUrl(t)]
                    );
                  case 4:
                    return (
                      (a = u.sent()),
                      (s = this.getRedirectStartPage(e.redirectStartPage)),
                      this.logger.verbosePii("Redirect start page: " + s),
                      [
                        4,
                        i.initiateAuthRequest(a, {
                          navigationClient: this.navigationClient,
                          redirectTimeout: this.config.system.redirectNavigationTimeout,
                          redirectStartPage: s,
                          onRedirectNavigate: e.onRedirectNavigate,
                        }),
                      ]
                    );
                  case 5:
                    return [2, u.sent()];
                  case 6:
                    throw (
                      ((c = u.sent()) instanceof _e && c.setCorrelationId(this.correlationId),
                      r.cacheFailedRequest(c),
                      this.browserStorage.cleanRequestByState(t.state),
                      c)
                    );
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.handleRedirectPromise = function (e) {
            return ce(this, void 0, void 0, function () {
              var t, r, n, o, i, a, s, c, u, l, d;
              return ue(this, function (h) {
                switch (h.label) {
                  case 0:
                    (t = this.initializeServerTelemetryManager(Q.handleRedirectPromise)), (h.label = 1);
                  case 1:
                    if ((h.trys.push([1, 10, , 11]), !this.browserStorage.isInteractionInProgress(!0)))
                      return (
                        this.logger.info(
                          "handleRedirectPromise called but there is no interaction in progress, returning null."
                        ),
                        [2, null]
                      );
                    if (!(r = this.getRedirectResponseHash(e || window.location.hash)))
                      return (
                        this.logger.info(
                          "handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."
                        ),
                        this.browserStorage.cleanRequestByInteractionType(J.Redirect),
                        [2, null]
                      );
                    n = void 0;
                    try {
                      (n = this.validateAndExtractStateFromHash(r, J.Redirect)),
                        Nr.clearHash(window),
                        this.logger.verbose("State extracted from hash");
                    } catch (e) {
                      return (
                        this.logger.info("handleRedirectPromise was unable to extract state due to: " + e),
                        this.browserStorage.cleanRequestByInteractionType(J.Redirect),
                        [2, null]
                      );
                    }
                    return (
                      (o = this.browserStorage.getTemporaryCache(z.ORIGIN_URI, !0) || ""),
                      (i = wr.removeHashFromUrl(o)),
                      (a = wr.removeHashFromUrl(window.location.href)),
                      i === a && this.config.auth.navigateToLoginRequestUrl
                        ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"),
                          [4, this.handleHash(r, n, t)])
                        : [3, 3]
                    );
                  case 2:
                    return (s = h.sent()), o.indexOf("#") > -1 && Nr.replaceHash(o), [2, s];
                  case 3:
                    return this.config.auth.navigateToLoginRequestUrl
                      ? [3, 4]
                      : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"),
                        [2, this.handleHash(r, n, t)]);
                  case 4:
                    return Nr.isInIframe()
                      ? [3, 9]
                      : (this.browserStorage.setTemporaryCache(z.URL_HASH, r, !0),
                        (c = {
                          apiId: Q.handleRedirectPromise,
                          timeout: this.config.system.redirectNavigationTimeout,
                          noHistory: !0,
                        }),
                        (u = !0),
                        o && "null" !== o
                          ? [3, 6]
                          : ((l = Nr.getHomepage()),
                            this.browserStorage.setTemporaryCache(z.ORIGIN_URI, l, !0),
                            this.logger.warning(
                              "Unable to get valid login request url from cache, redirecting to home page"
                            ),
                            [4, this.navigationClient.navigateInternal(l, c)]));
                  case 5:
                    return (u = h.sent()), [3, 8];
                  case 6:
                    return (
                      this.logger.verbose("Navigating to loginRequestUrl: " + o),
                      [4, this.navigationClient.navigateInternal(o, c)]
                    );
                  case 7:
                    (u = h.sent()), (h.label = 8);
                  case 8:
                    if (!u) return [2, this.handleHash(r, n, t)];
                    h.label = 9;
                  case 9:
                    return [2, null];
                  case 10:
                    throw (
                      ((d = h.sent()) instanceof _e && d.setCorrelationId(this.correlationId),
                      t.cacheFailedRequest(d),
                      this.browserStorage.cleanRequestByInteractionType(J.Redirect),
                      d)
                    );
                  case 11:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.getRedirectResponseHash = function (e) {
            this.logger.verbose("getRedirectResponseHash called");
            var t = wr.hashContainsKnownProperties(e),
              r = this.browserStorage.getTemporaryCache(z.URL_HASH, !0);
            return (
              this.browserStorage.removeItem(this.browserStorage.generateCacheKey(z.URL_HASH)),
              t
                ? (this.logger.verbose("Hash contains known properties, returning response hash"), e)
                : (this.logger.verbose("Hash does not contain known properties, returning cached hash"), r)
            );
          }),
          (t.prototype.handleHash = function (e, t, r) {
            return ce(this, void 0, void 0, function () {
              var n, o, i;
              return ue(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (
                      ((n = this.browserStorage.getCachedRequest(t, this.browserCrypto)),
                      this.logger.verbose("handleHash called, retrieved cached request"),
                      !(o = this.browserStorage.getCachedAuthority(t)))
                    )
                      throw lt.createNoCachedAuthorityError();
                    return [4, this.createAuthCodeClient(r, o)];
                  case 1:
                    return (
                      (i = a.sent()),
                      this.logger.verbose("Auth code client created"),
                      [
                        4,
                        new nn(i, this.browserStorage, n, this.logger, this.browserCrypto).handleCodeResponse(
                          e,
                          t,
                          i.authority,
                          this.networkClient,
                          this.config.auth.clientId
                        ),
                      ]
                    );
                  case 2:
                    return [2, a.sent()];
                }
              });
            });
          }),
          (t.prototype.logout = function (e) {
            return ce(this, void 0, void 0, function () {
              var t, r, n, o, i, a;
              return ue(this, function (s) {
                switch (s.label) {
                  case 0:
                    this.logger.verbose("logoutRedirect called"),
                      (t = this.initializeLogoutRequest(e)),
                      (r = this.initializeServerTelemetryManager(Q.logout)),
                      (s.label = 1);
                  case 1:
                    return (
                      s.trys.push([1, 10, , 11]),
                      this.eventHandler.emitEvent(Mr.LOGOUT_START, J.Redirect, e),
                      [4, this.clearCacheOnLogout(t.account)]
                    );
                  case 2:
                    return (
                      s.sent(),
                      (n = { apiId: Q.logout, timeout: this.config.system.redirectNavigationTimeout, noHistory: !1 }),
                      [4, this.createAuthCodeClient(r, e && e.authority)]
                    );
                  case 3:
                    return (
                      (o = s.sent()),
                      this.logger.verbose("Auth code client created"),
                      (i = o.getLogoutUri(t)),
                      this.eventHandler.emitEvent(Mr.LOGOUT_SUCCESS, J.Redirect, t),
                      e && "function" == typeof e.onRedirectNavigate
                        ? !1 === e.onRedirectNavigate(i)
                          ? [3, 5]
                          : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"),
                            [4, this.navigationClient.navigateExternal(i, n)])
                        : [3, 7]
                    );
                  case 4:
                    return s.sent(), [2];
                  case 5:
                    this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation"), (s.label = 6);
                  case 6:
                    return [3, 9];
                  case 7:
                    return [4, this.navigationClient.navigateExternal(i, n)];
                  case 8:
                    return s.sent(), [2];
                  case 9:
                    return [3, 11];
                  case 10:
                    throw (
                      ((a = s.sent()) instanceof _e && a.setCorrelationId(this.correlationId),
                      r.cacheFailedRequest(a),
                      this.eventHandler.emitEvent(Mr.LOGOUT_FAILURE, J.Redirect, null, a),
                      this.eventHandler.emitEvent(Mr.LOGOUT_END, J.Redirect),
                      a)
                    );
                  case 11:
                    return this.eventHandler.emitEvent(Mr.LOGOUT_END, J.Redirect), [2];
                }
              });
            });
          }),
          (t.prototype.getRedirectStartPage = function (e) {
            var t = e || window.location.href;
            return wr.getAbsoluteUrl(t, Nr.getCurrentUri());
          }),
          t
        );
      })(Zr),
      an = (function (e) {
        function t(t, r, n, o, i) {
          var a = e.call(this, t, r, n, o) || this;
          return (a.navigateFrameWait = i), a;
        }
        return (
          ae(t, e),
          (t.prototype.initiateAuthRequest = function (e) {
            return ce(this, void 0, void 0, function () {
              var t;
              return ue(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (ct.isEmpty(e))
                      throw (
                        (this.browserRequestLogger.info("Navigate url is empty"), lt.createEmptyNavigationUriError())
                      );
                    return this.navigateFrameWait ? [4, this.loadFrame(e)] : [3, 2];
                  case 1:
                    return (t = r.sent()), [3, 3];
                  case 2:
                    (t = this.loadFrameSync(e)), (r.label = 3);
                  case 3:
                    return [2, t];
                }
              });
            });
          }),
          (t.prototype.monitorIframeForHash = function (e, t) {
            var r = this;
            return new Promise(function (n, o) {
              t < 6e3 &&
                r.browserRequestLogger.warning(
                  "system.loadFrameTimeout or system.iframeHashTimeout set to lower (" +
                    t +
                    "ms) than the default (6000ms). This may result in timeouts."
                );
              var i = window.performance.now() + t,
                a = setInterval(function () {
                  if (window.performance.now() > i)
                    return r.removeHiddenIframe(e), clearInterval(a), void o(lt.createMonitorIframeTimeoutError());
                  var t = g.EMPTY_STRING,
                    s = e.contentWindow;
                  try {
                    t = s ? s.location.href : g.EMPTY_STRING;
                  } catch (e) {}
                  if (!ct.isEmpty(t)) {
                    var c = s ? s.location.hash : g.EMPTY_STRING;
                    return wr.hashContainsKnownProperties(c)
                      ? (r.removeHiddenIframe(e), clearInterval(a), void n(c))
                      : void 0;
                  }
                }, te);
            });
          }),
          (t.prototype.loadFrame = function (e) {
            var t = this;
            return new Promise(function (r, n) {
              var o = t.createHiddenIframe();
              setTimeout(function () {
                o ? ((o.src = e), r(o)) : n("Unable to load iframe");
              }, t.navigateFrameWait);
            });
          }),
          (t.prototype.loadFrameSync = function (e) {
            var t = this.createHiddenIframe();
            return (t.src = e), t;
          }),
          (t.prototype.createHiddenIframe = function () {
            var e = document.createElement("iframe");
            return (
              (e.style.visibility = "hidden"),
              (e.style.position = "absolute"),
              (e.style.width = e.style.height = "0"),
              (e.style.border = "0"),
              e.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
              document.getElementsByTagName("body")[0].appendChild(e),
              e
            );
          }),
          (t.prototype.removeHiddenIframe = function (e) {
            document.body === e.parentNode && document.body.removeChild(e);
          }),
          t
        );
      })(en),
      sn = (function (e) {
        function t(t, r, n, o, i, a, s, c) {
          var u = e.call(this, t, r, n, o, i, a, c) || this;
          return (u.apiId = s), u;
        }
        return (
          ae(t, e),
          (t.prototype.acquireToken = function (e) {
            return ce(this, void 0, void 0, function () {
              var t, r, n, o, i, a;
              return ue(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (
                      (this.logger.verbose("acquireTokenByIframe called"),
                      ct.isEmpty(e.loginHint) &&
                        ct.isEmpty(e.sid) &&
                        (!e.account || ct.isEmpty(e.account.username)) &&
                        this.logger.warning(
                          "No user hint provided. The authorization server may need more information to complete this request."
                        ),
                      e.prompt && e.prompt !== _.NONE)
                    )
                      throw lt.createSilentPromptValueError(e.prompt);
                    (t = this.initializeAuthorizationRequest(se(se({}, e), { prompt: _.NONE }), J.Silent)),
                      (r = this.initializeServerTelemetryManager(this.apiId)),
                      (s.label = 1);
                  case 1:
                    return s.trys.push([1, 6, , 7]), [4, this.initializeAuthorizationCodeRequest(t)];
                  case 2:
                    return (n = s.sent()), [4, this.createAuthCodeClient(r, t.authority)];
                  case 3:
                    return (o = s.sent()), this.logger.verbose("Auth code client created"), [4, o.getAuthCodeUrl(t)];
                  case 4:
                    return (i = s.sent()), [4, this.silentTokenHelper(i, n, o, this.logger)];
                  case 5:
                    return [2, s.sent()];
                  case 6:
                    throw (
                      ((a = s.sent()) instanceof _e && a.setCorrelationId(this.correlationId),
                      r.cacheFailedRequest(a),
                      this.browserStorage.cleanRequestByState(t.state),
                      a)
                    );
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.logout = function () {
            return Promise.reject(lt.createSilentLogoutUnsupportedError());
          }),
          (t.prototype.silentTokenHelper = function (e, t, r, n) {
            return ce(this, void 0, void 0, function () {
              var o, i, a, s;
              return ue(this, function (c) {
                switch (c.label) {
                  case 0:
                    return [
                      4,
                      (o = new an(
                        r,
                        this.browserStorage,
                        t,
                        n,
                        this.config.system.navigateFrameWait
                      )).initiateAuthRequest(e),
                    ];
                  case 1:
                    return (i = c.sent()), [4, o.monitorIframeForHash(i, this.config.system.iframeHashTimeout)];
                  case 2:
                    return (
                      (a = c.sent()),
                      (s = this.validateAndExtractStateFromHash(a, J.Silent, t.correlationId)),
                      [2, o.handleCodeResponse(a, s, r.authority, this.networkClient)]
                    );
                }
              });
            });
          }),
          t
        );
      })(Zr),
      cn = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          i(t, e),
          (t.prototype.acquireToken = function (e) {
            return s(this, void 0, void 0, function () {
              var t, r, n;
              return c(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (t = rr.nowSeconds()), [4, this.executeTokenRequest(e, this.authority)];
                  case 1:
                    return (
                      (r = o.sent()),
                      (n = new Gr(
                        this.config.authOptions.clientId,
                        this.cacheManager,
                        this.cryptoUtils,
                        this.logger,
                        this.config.serializableCache,
                        this.config.persistencePlugin
                      )).validateTokenResponse(r.body),
                      [2, n.handleServerTokenResponse(r.body, this.authority, t, e, void 0, void 0, !0)]
                    );
                }
              });
            });
          }),
          (t.prototype.acquireTokenByRefreshToken = function (e) {
            return s(this, void 0, void 0, function () {
              var t, r;
              return c(this, function (n) {
                if (!e) throw Yt.createEmptyTokenRequestError();
                if (!e.account) throw st.createNoAccountInSilentRequestError();
                if (this.cacheManager.isAppMetadataFOCI(e.account.environment, this.config.authOptions.clientId))
                  try {
                    return [2, this.acquireTokenWithCachedRefreshToken(e, !0)];
                  } catch (n) {
                    if (
                      ((t = n instanceof Ct && n.errorCode === Tt.code),
                      (r = n instanceof _t && n.errorCode === W && n.subError === K),
                      t || r)
                    )
                      return [2, this.acquireTokenWithCachedRefreshToken(e, !1)];
                    throw n;
                  }
                return [2, this.acquireTokenWithCachedRefreshToken(e, !1)];
              });
            });
          }),
          (t.prototype.acquireTokenWithCachedRefreshToken = function (e, t) {
            return s(this, void 0, void 0, function () {
              var r, n;
              return c(this, function (o) {
                if (!(r = this.cacheManager.readRefreshTokenFromCache(this.config.authOptions.clientId, e.account, t)))
                  throw Ct.createNoTokensFoundError();
                return (
                  (n = a(a({}, e), {
                    refreshToken: r.secret,
                    authenticationScheme: e.authenticationScheme || O.BEARER,
                    ccsCredential: { credential: e.account.homeAccountId, type: bt.HOME_ACCOUNT_ID },
                  })),
                  [2, this.acquireToken(n)]
                );
              });
            });
          }),
          (t.prototype.executeTokenRequest = function (e, t) {
            return s(this, void 0, void 0, function () {
              var r, n, o, i, a;
              return c(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [4, this.createTokenRequestBody(e)];
                  case 1:
                    return (
                      (r = s.sent()),
                      (n = this.createTokenQueryParameters(e)),
                      (o = this.createTokenRequestHeaders(e.ccsCredential)),
                      (i = {
                        clientId: this.config.authOptions.clientId,
                        authority: t.canonicalAuthority,
                        scopes: e.scopes,
                        authenticationScheme: e.authenticationScheme,
                        resourceRequestMethod: e.resourceRequestMethod,
                        resourceRequestUri: e.resourceRequestUri,
                        shrClaims: e.shrClaims,
                        sshJwk: e.sshJwk,
                        sshKid: e.sshKid,
                      }),
                      (a = wr.appendQueryString(t.tokenEndpoint, n)),
                      [2, this.executePostToTokenEndpoint(a, r, o, i)]
                    );
                }
              });
            });
          }),
          (t.prototype.createTokenQueryParameters = function (e) {
            var t = new Br();
            return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
          }),
          (t.prototype.createTokenRequestBody = function (e) {
            return s(this, void 0, void 0, function () {
              var t, r, n, o, i;
              return c(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (t = new Br()).addClientId(this.config.authOptions.clientId),
                      t.addScopes(e.scopes),
                      t.addGrantType(E.REFRESH_TOKEN_GRANT),
                      t.addClientInfo(),
                      t.addLibraryInfo(this.config.libraryInfo),
                      t.addThrottling(),
                      this.serverTelemetryManager && t.addServerTelemetry(this.serverTelemetryManager),
                      (r = e.correlationId || this.config.cryptoInterface.createNewGuid()),
                      t.addCorrelationId(r),
                      t.addRefreshToken(e.refreshToken),
                      this.config.clientCredentials.clientSecret &&
                        t.addClientSecret(this.config.clientCredentials.clientSecret),
                      this.config.clientCredentials.clientAssertion &&
                        ((n = this.config.clientCredentials.clientAssertion),
                        t.addClientAssertion(n.assertion),
                        t.addClientAssertionType(n.assertionType)),
                      e.authenticationScheme !== O.POP ? [3, 2] : [4, new Kr(this.cryptoUtils).generateCnf(e)]
                    );
                  case 1:
                    return (o = a.sent()), t.addPopToken(o), [3, 3];
                  case 2:
                    if (e.authenticationScheme === O.SSH) {
                      if (!e.sshJwk) throw Yt.createMissingSshJwkError();
                      t.addSshJwk(e.sshJwk);
                    }
                    a.label = 3;
                  case 3:
                    if (
                      ((!ct.isEmptyObj(e.claims) ||
                        (this.config.authOptions.clientCapabilities &&
                          this.config.authOptions.clientCapabilities.length > 0)) &&
                        t.addClaims(e.claims, this.config.authOptions.clientCapabilities),
                      this.config.systemOptions.preventCorsPreflight && e.ccsCredential)
                    )
                      switch (e.ccsCredential.type) {
                        case bt.HOME_ACCOUNT_ID:
                          try {
                            (i = St(e.ccsCredential.credential)), t.addCcsOid(i);
                          } catch (e) {
                            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                          }
                          break;
                        case bt.UPN:
                          t.addCcsUpn(e.ccsCredential.credential);
                      }
                    return [2, t.createQueryString()];
                }
              });
            });
          }),
          t
        );
      })(qr),
      un = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          ae(t, e),
          (t.prototype.acquireToken = function (e) {
            return ce(this, void 0, void 0, function () {
              var t,
                r,
                n,
                o = this;
              return ue(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (t = se(se({}, e), this.initializeBaseRequest(e))),
                      (r = this.initializeServerTelemetryManager(Q.acquireTokenSilent_silentFlow)),
                      [4, this.createRefreshTokenClient(r, t.authority)]
                    );
                  case 1:
                    return (
                      (n = i.sent()),
                      this.logger.verbose("Refresh token client created"),
                      [
                        2,
                        n.acquireTokenByRefreshToken(t).catch(function (e) {
                          throw (e instanceof _e && e.setCorrelationId(o.correlationId), r.cacheFailedRequest(e), e);
                        }),
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.logout = function () {
            return Promise.reject(lt.createSilentLogoutUnsupportedError());
          }),
          (t.prototype.createRefreshTokenClient = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.getClientConfiguration(e, t)];
                  case 1:
                    return (r = n.sent()), [2, new cn(r)];
                }
              });
            });
          }),
          t
        );
      })(Zr),
      ln = (function () {
        function e(e, t, r, n) {
          (this.isBrowserEnvironment = "undefined" != typeof window),
            (this.config = e),
            (this.storage = t),
            (this.logger = r),
            (this.cryptoObj = n);
        }
        return (
          (e.prototype.loadExternalTokens = function (e, t, r) {
            if ((this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token))
              throw lt.createUnableToLoadTokenError("Please ensure server response includes id token.");
            if (e.account)
              this.loadIdToken(t.id_token, e.account.homeAccountId, e.account.environment, e.account.tenantId, r),
                this.loadAccessToken(e, t, e.account.homeAccountId, e.account.environment, e.account.tenantId, r);
            else {
              if (!e.authority)
                throw lt.createUnableToLoadTokenError(
                  "Please provide a request with an account or a request with authority."
                );
              var n = {
                  protocolMode: this.config.auth.protocolMode,
                  knownAuthorities: this.config.auth.knownAuthorities,
                  cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                  authorityMetadata: this.config.auth.authorityMetadata,
                },
                o = new Jr(e.authority, this.config.system.networkClient, this.storage, n);
              if (r.clientInfo)
                this.logger.trace("TokenCache - homeAccountId from options"),
                  this.loadIdToken(t.id_token, r.clientInfo, o.hostnameAndPort, o.tenant, r),
                  this.loadAccessToken(e, t, r.clientInfo, o.hostnameAndPort, o.tenant, r);
              else {
                if (!t.client_info)
                  throw lt.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
                this.logger.trace("TokenCache - homeAccountId from response"),
                  this.loadIdToken(t.id_token, t.client_info, o.hostnameAndPort, o.tenant, r),
                  this.loadAccessToken(e, t, t.client_info, o.hostnameAndPort, o.tenant, r);
              }
            }
          }),
          (e.prototype.loadIdToken = function (e, t, r, n, o) {
            var i = tr.createIdTokenEntity(t, r, e, this.config.auth.clientId, n),
              a = new Zt(e, this.cryptoObj),
              s = o.clientInfo
                ? It.createAccount(o.clientInfo, t, a, void 0, void 0, void 0, void 0, r)
                : It.createGenericAccount(t, a, void 0, void 0, void 0, void 0, r);
            if (!this.isBrowserEnvironment)
              throw lt.createUnableToLoadTokenError(
                "loadExternalTokens is designed to work in browser environments only."
              );
            this.logger.verbose("TokenCache - loading id token"),
              this.storage.setAccount(s),
              this.storage.setIdTokenCredential(i);
          }),
          (e.prototype.loadAccessToken = function (e, t, r, n, o, i) {
            if (t.access_token) {
              if (!t.expires_in)
                throw lt.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
              if (!i.extendedExpiresOn)
                throw lt.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
              var a = new Xt(e.scopes).printScopes(),
                s = t.expires_in,
                c = i.extendedExpiresOn,
                u = nr.createAccessTokenEntity(
                  r,
                  n,
                  t.access_token,
                  this.config.auth.clientId,
                  o,
                  a,
                  s,
                  c,
                  this.cryptoObj
                );
              if (!this.isBrowserEnvironment)
                throw lt.createUnableToLoadTokenError(
                  "loadExternalTokens is designed to work in browser environments only."
                );
              this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(u);
            } else this.logger.verbose("TokenCache - No access token provided for caching");
          }),
          e
        );
      })(),
      dn = (function () {
        function e(e) {
          (this.isBrowserEnvironment = "undefined" != typeof window),
            (this.config = (function (e, t) {
              var r = e.auth,
                n = e.cache,
                o = e.system,
                i = {
                  clientId: "",
                  authority: "" + g.DEFAULT_AUTHORITY,
                  knownAuthorities: [],
                  cloudDiscoveryMetadata: "",
                  authorityMetadata: "",
                  redirectUri: "",
                  postLogoutRedirectUri: "",
                  navigateToLoginRequestUrl: !0,
                  clientCapabilities: [],
                  protocolMode: lr.AAD,
                },
                a = { cacheLocation: j.SessionStorage, storeAuthStateInCookie: !1, secureCookies: !1 },
                s = { loggerCallback: function () {}, logLevel: he.Info, piiLoggingEnabled: !1 },
                c = se(se({}, Cr), {
                  loggerOptions: s,
                  networkClient: t ? Nr.getBrowserNetworkClient() : kr,
                  navigationClient: new Fr(),
                  loadFrameTimeout: 0,
                  windowHashTimeout: (o && o.loadFrameTimeout) || 6e4,
                  iframeHashTimeout: (o && o.loadFrameTimeout) || 6e3,
                  navigateFrameWait: t && Nr.detectIEOrEdge() ? 500 : 0,
                  redirectNavigationTimeout: 3e4,
                  asyncPopups: !1,
                  allowRedirectInIframe: !1,
                });
              return { auth: se(se({}, i), r), cache: se(se({}, a), n), system: se(se({}, c), o) };
            })(e, this.isBrowserEnvironment)),
            (this.logger = new mt(this.config.system.loggerOptions, "@azure/msal-browser", "2.18.0")),
            (this.networkClient = this.config.system.networkClient),
            (this.navigationClient = this.config.system.navigationClient),
            (this.redirectResponse = new Map()),
            (this.browserCrypto = this.isBrowserEnvironment ? new gt() : vt),
            (this.eventHandler = new Dr(this.logger, this.browserCrypto)),
            (this.browserStorage = this.isBrowserEnvironment
              ? new Tr(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger)
              : (function (e, t) {
                  var r = { cacheLocation: j.MemoryStorage, storeAuthStateInCookie: !1, secureCookies: !1 };
                  return new Tr(e, r, vt, t);
                })(this.config.auth.clientId, this.logger)),
            (this.tokenCache = new ln(this.config, this.browserStorage, this.logger, this.browserCrypto));
        }
        return (
          (e.prototype.handleRedirectPromise = function (e) {
            return ce(this, void 0, void 0, function () {
              var t,
                r,
                n,
                o,
                i,
                a = this;
              return ue(this, function (s) {
                return (
                  this.logger.verbose("handleRedirectPromise called"),
                  (t = this.getAllAccounts()),
                  this.isBrowserEnvironment
                    ? ((r = e || g.EMPTY_STRING),
                      void 0 === (n = this.redirectResponse.get(r))
                        ? (this.eventHandler.emitEvent(Mr.HANDLE_REDIRECT_START, J.Redirect),
                          this.logger.verbose(
                            "handleRedirectPromise has been called for the first time, storing the promise"
                          ),
                          (o = this.browserStorage.getTemporaryCache(z.CORRELATION_ID, !0) || ""),
                          (i = new on(
                            this.config,
                            this.browserStorage,
                            this.browserCrypto,
                            this.logger,
                            this.eventHandler,
                            this.navigationClient,
                            o
                          )),
                          (n = i
                            .handleRedirectPromise(e)
                            .then(function (e) {
                              e &&
                                (t.length < a.getAllAccounts().length
                                  ? (a.eventHandler.emitEvent(Mr.LOGIN_SUCCESS, J.Redirect, e),
                                    a.logger.verbose("handleRedirectResponse returned result, login success"))
                                  : (a.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_SUCCESS, J.Redirect, e),
                                    a.logger.verbose("handleRedirectResponse returned result, acquire token success")));
                              return a.eventHandler.emitEvent(Mr.HANDLE_REDIRECT_END, J.Redirect), e;
                            })
                            .catch(function (e) {
                              throw (
                                (t.length > 0
                                  ? a.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_FAILURE, J.Redirect, null, e)
                                  : a.eventHandler.emitEvent(Mr.LOGIN_FAILURE, J.Redirect, null, e),
                                a.eventHandler.emitEvent(Mr.HANDLE_REDIRECT_END, J.Redirect),
                                e)
                              );
                            })),
                          this.redirectResponse.set(r, n))
                        : this.logger.verbose(
                            "handleRedirectPromise has been called previously, returning the result from the first call"
                          ),
                      [2, n])
                    : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null])
                );
              });
            });
          }),
          (e.prototype.acquireTokenRedirect = function (e) {
            return ce(this, void 0, void 0, function () {
              var t,
                r = this;
              return ue(this, function (n) {
                return (
                  this.preflightBrowserEnvironmentCheck(J.Redirect),
                  this.logger.verbose("acquireTokenRedirect called"),
                  (t = this.getAllAccounts().length > 0)
                    ? this.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_START, J.Redirect, e)
                    : this.eventHandler.emitEvent(Mr.LOGIN_START, J.Redirect, e),
                  [
                    2,
                    new on(
                      this.config,
                      this.browserStorage,
                      this.browserCrypto,
                      this.logger,
                      this.eventHandler,
                      this.navigationClient,
                      e.correlationId
                    )
                      .acquireToken(e)
                      .catch(function (e) {
                        throw (
                          (t
                            ? r.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_FAILURE, J.Redirect, null, e)
                            : r.eventHandler.emitEvent(Mr.LOGIN_FAILURE, J.Redirect, null, e),
                          e)
                        );
                      }),
                  ]
                );
              });
            });
          }),
          (e.prototype.acquireTokenPopup = function (e) {
            var t = this;
            try {
              this.preflightBrowserEnvironmentCheck(J.Popup),
                this.logger.verbose("acquireTokenPopup called", e.correlationId);
            } catch (e) {
              return Promise.reject(e);
            }
            var r = this.getAllAccounts();
            return (
              r.length > 0
                ? this.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_START, J.Popup, e)
                : this.eventHandler.emitEvent(Mr.LOGIN_START, J.Popup, e),
              new rn(
                this.config,
                this.browserStorage,
                this.browserCrypto,
                this.logger,
                this.eventHandler,
                this.navigationClient,
                e.correlationId
              )
                .acquireToken(e)
                .then(function (e) {
                  return (
                    r.length < t.getAllAccounts().length
                      ? t.eventHandler.emitEvent(Mr.LOGIN_SUCCESS, J.Popup, e)
                      : t.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_SUCCESS, J.Popup, e),
                    e
                  );
                })
                .catch(function (e) {
                  return (
                    r.length > 0
                      ? t.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_FAILURE, J.Popup, null, e)
                      : t.eventHandler.emitEvent(Mr.LOGIN_FAILURE, J.Popup, null, e),
                    Promise.reject(e)
                  );
                })
            );
          }),
          (e.prototype.ssoSilent = function (e) {
            return ce(this, void 0, void 0, function () {
              var t, r;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    this.preflightBrowserEnvironmentCheck(J.Silent),
                      this.logger.verbose("ssoSilent called", e.correlationId),
                      this.eventHandler.emitEvent(Mr.SSO_SILENT_START, J.Silent, e),
                      (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, , 4]),
                      [
                        4,
                        new sn(
                          this.config,
                          this.browserStorage,
                          this.browserCrypto,
                          this.logger,
                          this.eventHandler,
                          this.navigationClient,
                          Q.ssoSilent,
                          e.correlationId
                        ).acquireToken(e),
                      ]
                    );
                  case 2:
                    return (t = n.sent()), this.eventHandler.emitEvent(Mr.SSO_SILENT_SUCCESS, J.Silent, t), [2, t];
                  case 3:
                    throw ((r = n.sent()), this.eventHandler.emitEvent(Mr.SSO_SILENT_FAILURE, J.Silent, null, r), r);
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.acquireTokenByRefreshToken = function (e) {
            return ce(this, void 0, void 0, function () {
              var t = this;
              return ue(this, function (r) {
                return (
                  this.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_NETWORK_START, J.Silent, e),
                  Nr.blockReloadInHiddenIframes(),
                  [
                    2,
                    new un(
                      this.config,
                      this.browserStorage,
                      this.browserCrypto,
                      this.logger,
                      this.eventHandler,
                      this.navigationClient,
                      e.correlationId
                    )
                      .acquireToken(e)
                      .catch(function (r) {
                        var n = r instanceof _t,
                          o = r instanceof Ct,
                          i = r.errorCode === X;
                        if (n && i && !o)
                          return (
                            t.logger.verbose(
                              "Refresh token expired or invalid, attempting acquire token by iframe",
                              e.correlationId
                            ),
                            new sn(
                              t.config,
                              t.browserStorage,
                              t.browserCrypto,
                              t.logger,
                              t.eventHandler,
                              t.navigationClient,
                              Q.acquireTokenSilent_authCode
                            ).acquireToken(e)
                          );
                        throw r;
                      }),
                  ]
                );
              });
            });
          }),
          (e.prototype.logout = function (e) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (t) {
                return (
                  this.logger.warning(
                    "logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead."
                  ),
                  [2, this.logoutRedirect(e)]
                );
              });
            });
          }),
          (e.prototype.logoutRedirect = function (e) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (t) {
                return (
                  this.preflightBrowserEnvironmentCheck(J.Redirect),
                  [
                    2,
                    new on(
                      this.config,
                      this.browserStorage,
                      this.browserCrypto,
                      this.logger,
                      this.eventHandler,
                      this.navigationClient,
                      null == e ? void 0 : e.correlationId
                    ).logout(e),
                  ]
                );
              });
            });
          }),
          (e.prototype.logoutPopup = function (e) {
            try {
              return (
                this.preflightBrowserEnvironmentCheck(J.Popup),
                new rn(
                  this.config,
                  this.browserStorage,
                  this.browserCrypto,
                  this.logger,
                  this.eventHandler,
                  this.navigationClient,
                  null == e ? void 0 : e.correlationId
                ).logout(e)
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (e.prototype.getAllAccounts = function () {
            return (
              this.logger.verbose("getAllAccounts called"),
              this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : []
            );
          }),
          (e.prototype.getAccountByUsername = function (e) {
            var t = this.getAllAccounts();
            return !ct.isEmpty(e) && t && t.length
              ? (this.logger.verbose("Account matching username found, returning"),
                this.logger.verbosePii("Returning signed-in accounts matching username: " + e),
                t.filter(function (t) {
                  return t.username.toLowerCase() === e.toLowerCase();
                })[0] || null)
              : (this.logger.verbose("getAccountByUsername: No matching account found, returning null"), null);
          }),
          (e.prototype.getAccountByHomeId = function (e) {
            var t = this.getAllAccounts();
            return !ct.isEmpty(e) && t && t.length
              ? (this.logger.verbose("Account matching homeAccountId found, returning"),
                this.logger.verbosePii("Returning signed-in accounts matching homeAccountId: " + e),
                t.filter(function (t) {
                  return t.homeAccountId === e;
                })[0] || null)
              : (this.logger.verbose("getAccountByHomeId: No matching account found, returning null"), null);
          }),
          (e.prototype.getAccountByLocalId = function (e) {
            var t = this.getAllAccounts();
            return !ct.isEmpty(e) && t && t.length
              ? (this.logger.verbose("Account matching localAccountId found, returning"),
                this.logger.verbosePii("Returning signed-in accounts matching localAccountId: " + e),
                t.filter(function (t) {
                  return t.localAccountId === e;
                })[0] || null)
              : (this.logger.verbose("getAccountByLocalId: No matching account found, returning null"), null);
          }),
          (e.prototype.setActiveAccount = function (e) {
            this.browserStorage.setActiveAccount(e);
          }),
          (e.prototype.getActiveAccount = function () {
            return this.browserStorage.getActiveAccount();
          }),
          (e.prototype.preflightBrowserEnvironmentCheck = function (e) {
            if (
              (this.logger.verbose("preflightBrowserEnvironmentCheck started"),
              Nr.blockNonBrowserEnvironment(this.isBrowserEnvironment),
              Nr.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe),
              Nr.blockReloadInHiddenIframes(),
              Nr.blockAcquireTokenInPopups(),
              e === J.Redirect &&
                this.config.cache.cacheLocation === j.MemoryStorage &&
                !this.config.cache.storeAuthStateInCookie)
            )
              throw mr.createInMemoryRedirectUnavailableError();
          }),
          (e.prototype.addEventCallback = function (e) {
            return this.eventHandler.addEventCallback(e);
          }),
          (e.prototype.removeEventCallback = function (e) {
            this.eventHandler.removeEventCallback(e);
          }),
          (e.prototype.enableAccountStorageEvents = function () {
            this.eventHandler.enableAccountStorageEvents();
          }),
          (e.prototype.disableAccountStorageEvents = function () {
            this.eventHandler.disableAccountStorageEvents();
          }),
          (e.prototype.getTokenCache = function () {
            return this.tokenCache;
          }),
          (e.prototype.getLogger = function () {
            return this.logger;
          }),
          (e.prototype.setLogger = function (e) {
            this.logger = e;
          }),
          (e.prototype.initializeWrapperLibrary = function (e, t) {
            this.browserStorage.setWrapperMetadata(e, t);
          }),
          (e.prototype.setNavigationClient = function (e) {
            this.navigationClient = e;
          }),
          e
        );
      })(),
      hn = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          i(t, e),
          (t.prototype.acquireToken = function (e) {
            return s(this, void 0, void 0, function () {
              var t;
              return c(this, function (r) {
                switch (r.label) {
                  case 0:
                    return r.trys.push([0, 2, , 3]), [4, this.acquireCachedToken(e)];
                  case 1:
                    return [2, r.sent()];
                  case 2:
                    if ((t = r.sent()) instanceof st && t.errorCode === tt.code)
                      return [2, new cn(this.config).acquireTokenByRefreshToken(e)];
                    throw t;
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.acquireCachedToken = function (e) {
            var t, r, n, o;
            return s(this, void 0, void 0, function () {
              var i, a, s, u;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    if (!e) throw Yt.createEmptyTokenRequestError();
                    if (e.forceRefresh)
                      throw (
                        (null === (t = this.serverTelemetryManager) ||
                          void 0 === t ||
                          t.setCacheOutcome(L.FORCE_REFRESH),
                        this.logger.info(
                          "SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."
                        ),
                        st.createRefreshRequiredError())
                      );
                    if (!ct.isEmptyObj(e.claims))
                      throw (
                        (this.logger.info(
                          "SilentFlowClient:acquireCachedToken - Skipping cache because claims are requested."
                        ),
                        st.createRefreshRequiredError())
                      );
                    if (!e.account) throw st.createNoAccountInSilentRequestError();
                    if (
                      ((i = new Xt(e.scopes || [])),
                      (a = e.authority || this.authority.getPreferredCache()),
                      (s = e.authenticationScheme || O.BEARER),
                      !(u = this.cacheManager.readCacheRecord(
                        e.account,
                        this.config.authOptions.clientId,
                        i,
                        a,
                        s,
                        e.sshKid
                      )).accessToken)
                    )
                      throw (
                        (null === (r = this.serverTelemetryManager) ||
                          void 0 === r ||
                          r.setCacheOutcome(L.NO_CACHED_ACCESS_TOKEN),
                        this.logger.info(
                          "SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."
                        ),
                        st.createRefreshRequiredError())
                      );
                    if (
                      rr.wasClockTurnedBack(u.accessToken.cachedAt) ||
                      rr.isTokenExpired(u.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)
                    )
                      throw (
                        (null === (n = this.serverTelemetryManager) ||
                          void 0 === n ||
                          n.setCacheOutcome(L.CACHED_ACCESS_TOKEN_EXPIRED),
                        this.logger.info(
                          "SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " +
                            this.config.systemOptions.tokenRenewalOffsetSeconds +
                            " seconds."
                        ),
                        st.createRefreshRequiredError())
                      );
                    if (u.accessToken.refreshOn && rr.isTokenExpired(u.accessToken.refreshOn, 0))
                      throw (
                        (null === (o = this.serverTelemetryManager) ||
                          void 0 === o ||
                          o.setCacheOutcome(L.REFRESH_CACHED_ACCESS_TOKEN),
                        this.logger.info(
                          "SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."
                        ),
                        st.createRefreshRequiredError())
                      );
                    return (
                      this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(),
                      [4, this.generateResultFromCacheRecord(u, e)]
                    );
                  case 1:
                    return [2, c.sent()];
                }
              });
            });
          }),
          (t.prototype.generateResultFromCacheRecord = function (e, t) {
            return s(this, void 0, void 0, function () {
              var r;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      e.idToken && (r = new Zt(e.idToken.secret, this.config.cryptoInterface)),
                      [4, Gr.generateAuthenticationResult(this.cryptoUtils, this.authority, e, !0, t, r)]
                    );
                  case 1:
                    return [2, n.sent()];
                }
              });
            });
          }),
          t
        );
      })(qr),
      pn = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          ae(t, e),
          (t.prototype.acquireToken = function (e) {
            return ce(this, void 0, void 0, function () {
              var t, r, n, o;
              return ue(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (t = this.initializeServerTelemetryManager(Q.acquireTokenSilent_silentFlow)),
                      [4, this.createSilentFlowClient(t, e.authority)]
                    );
                  case 1:
                    (r = i.sent()), this.logger.verbose("Silent auth client created"), (i.label = 2);
                  case 2:
                    return i.trys.push([2, 4, , 5]), [4, r.acquireCachedToken(e)];
                  case 3:
                    return (n = i.sent()), this.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_SUCCESS, J.Silent, n), [2, n];
                  case 4:
                    throw (
                      ((o = i.sent()) instanceof lt &&
                        o.errorCode === ut.signingKeyNotFoundInStorage.code &&
                        this.logger.verbose(
                          "Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."
                        ),
                      o)
                    );
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.logout = function () {
            return Promise.reject(lt.createSilentLogoutUnsupportedError());
          }),
          (t.prototype.createSilentFlowClient = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r;
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.getClientConfiguration(e, t)];
                  case 1:
                    return (r = n.sent()), [2, new hn(r)];
                }
              });
            });
          }),
          (t.prototype.initializeSilentRequest = function (e, t) {
            return se(se(se({}, e), this.initializeBaseRequest(e)), { account: t, forceRefresh: e.forceRefresh || !1 });
          }),
          t
        );
      })(Zr),
      fn = (function (e) {
        function t(t) {
          var r = e.call(this, t) || this;
          return (r.activeSilentTokenRequests = new Map()), r;
        }
        return (
          ae(t, e),
          (t.prototype.loginRedirect = function (e) {
            return ce(this, void 0, void 0, function () {
              return ue(this, function (t) {
                return this.logger.verbose("loginRedirect called"), [2, this.acquireTokenRedirect(e || oe)];
              });
            });
          }),
          (t.prototype.loginPopup = function (e) {
            return this.logger.verbose("loginPopup called"), this.acquireTokenPopup(e || oe);
          }),
          (t.prototype.acquireTokenSilent = function (e) {
            return ce(this, void 0, void 0, function () {
              var t,
                r,
                n,
                o,
                i,
                a = this;
              return ue(this, function (s) {
                if (
                  (this.preflightBrowserEnvironmentCheck(J.Silent),
                  this.logger.verbose("acquireTokenSilent called", e.correlationId),
                  !(t = e.account || this.getActiveAccount()))
                )
                  throw lt.createNoAccountError();
                return (
                  (r = {
                    clientId: this.config.auth.clientId,
                    authority: e.authority || "",
                    scopes: e.scopes,
                    homeAccountIdentifier: t.homeAccountId,
                    authenticationScheme: e.authenticationScheme,
                    resourceRequestMethod: e.resourceRequestMethod,
                    resourceRequestUri: e.resourceRequestUri,
                    shrClaims: e.shrClaims,
                  }),
                  (n = JSON.stringify(r)),
                  void 0 === (o = this.activeSilentTokenRequests.get(n))
                    ? (this.logger.verbose(
                        "acquireTokenSilent called for the first time, storing active request",
                        e.correlationId
                      ),
                      (i = this.acquireTokenSilentAsync(e, t)
                        .then(function (e) {
                          return a.activeSilentTokenRequests.delete(n), e;
                        })
                        .catch(function (e) {
                          throw (a.activeSilentTokenRequests.delete(n), e);
                        })),
                      this.activeSilentTokenRequests.set(n, i),
                      [2, i])
                    : (this.logger.verbose(
                        "acquireTokenSilent has been called previously, returning the result from the first call",
                        e.correlationId
                      ),
                      [2, o])
                );
              });
            });
          }),
          (t.prototype.acquireTokenSilentAsync = function (e, t) {
            return ce(this, void 0, void 0, function () {
              var r,
                n,
                o = this;
              return ue(this, function (i) {
                return (
                  (r = new pn(
                    this.config,
                    this.browserStorage,
                    this.browserCrypto,
                    this.logger,
                    this.eventHandler,
                    this.navigationClient
                  )),
                  (n = r.initializeSilentRequest(e, t)),
                  this.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_START, J.Silent, e),
                  [
                    2,
                    r.acquireToken(n).catch(function () {
                      return ce(o, void 0, void 0, function () {
                        var e, t;
                        return ue(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return r.trys.push([0, 2, , 3]), [4, this.acquireTokenByRefreshToken(n)];
                            case 1:
                              return (
                                (e = r.sent()),
                                this.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_SUCCESS, J.Silent, e),
                                [2, e]
                              );
                            case 2:
                              throw (
                                ((t = r.sent()),
                                this.eventHandler.emitEvent(Mr.ACQUIRE_TOKEN_FAILURE, J.Silent, null, t),
                                t)
                              );
                            case 3:
                              return [2];
                          }
                        });
                      });
                    }),
                  ]
                );
              });
            });
          }),
          t
        );
      })(dn),
      gn = (function () {
        var e = function (t, r) {
          return (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(t, r);
        };
        return function (t, r) {
          function n() {
            this.constructor = t;
          }
          e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
        };
      })();
    function yn(e) {
      var t = !1;
      try {
        return (
          window[e].setItem("__storageTest", "__storageTest"),
          (t = "__storageTest" === window[e].getItem("__storageTest")),
          window[e].removeItem("__storageTest"),
          t
        );
      } catch (e) {
        return !1;
      }
    }
    function mn() {
      return yn("localStorage");
    }
    function vn() {
      return yn("sessionStorage");
    }
    function _n() {
      var e = (function () {
        var e = window.navigator.userAgent;
        if (!e) return !1;
        return (
          Object.getOwnPropertyNames(Cn).forEach(function (t) {
            if (-1 !== e.indexOf(Cn[t])) return !1;
          }),
          !0
        );
      })()
        ? "SameSite=None; Secure"
        : "";
      try {
        document.cookie = "value=1; " + e;
        var t = -1 !== document.cookie.indexOf("value=");
        return (document.cookie = "value=1; " + e + "; expires=" + new Date(0).toUTCString()), t;
      } catch (e) {
        return !1;
      }
    }
    function wn() {
      return /MSIE|Trident/.test(window.navigator.userAgent);
    }
    var En = (function (e) {
        function t() {
          return (
            e.call(
              this,
              "Unable to access session/local storage. Please ensure your browser is configured to allow storage of local data."
            ) || this
          );
        }
        return gn(t, e), t;
      })(Error),
      Tn = (function (e) {
        function t() {
          return (
            e.call(this, "Unable to access cookies. Please ensure that you have cookies enabled in your browser.") ||
            this
          );
        }
        return gn(t, e), t;
      })(Error);
    var Cn = {
        Safari12iOS12iPhone:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1",
        Safari12iOs12iPad:
          "Mozilla/5.0 (iPad; CPU OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1",
        Safari12iOS12iPodTouch:
          "Mozilla/5.0 (iPod touch; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1",
        Safari12MacOs10_14:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Safari/605.1.15", "Safari", "MacOS',
        Safari13MacOs10_14:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15",
        WebkitWebviewiOs12iPhone:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
        WebkitWebviewMacOs10_14:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        Chrome77iOs12:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/77.0.3865.69 Mobile/15E148 Safari/605.1",
        Chrome66ElectronSkypeWindows10:
          "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Skype/8.50.0.38 Chrome/66.0.3359.181 Electron/3.1.8 Safari/537.36",
        Edge18Windows10:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763",
        PingdomTMS:
          "Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) PingdomTMS/0.8.5 Safari/534.34",
        GearGame:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) GearGame UnrealEngine/4.11.2-0   depot UE4-Releases 4.9 Safari/537.36",
        Chrome73Win7:
          "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36",
        Chrome49Win7:
          "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36",
        UCBrowserAndroid12_11:
          "Mozilla/5.0 (Linux; U; Android 6.0; pt-BR; U FEEL Build/MRA58K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/12.11.5.1185 (SpeedMode) U4/1.0 UCWEB/2.0 Mobile Safari/534.30",
        UCBrowserAndroid11_4:
          "Mozilla/5.0 (Linux; U; Android 5.0; en-US; ASUS_Z00AD Build/LRX21V) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.4.5.1005 U3/0.8.0 Mobile Safari/534.30",
        MsnGamesManager:
          "Mozilla/5.0 (Windows NT 10.0; Win32; x86) Version/3.6.6.540 GamesManager/3.6.6.540 20000009 WinVer/10.0 [x64] CEF/3.3163.1651.gf229796 UAPI",
      },
      An = "MsalPkceAuthenticationService/";
    function Sn(e, t) {
      var r = An + e;
      On.traceInfo(r, t);
    }
    function bn(e, t) {
      var r = An + e;
      On.traceError(r, t);
    }
    var In = function () {
        return (In =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      Rn = "MSAL has not been initialized yet. Please ensure you call initializeMsalService first.";
    function kn(e) {
      var t = e.homeAccountId + "-",
        r = Object.keys(localStorage);
      try {
        r.forEach(function (e) {
          e.startsWith(t) && localStorage.removeItem(e);
        });
      } catch (e) {
        bn("UnableToClearMsalCache", In({}, e));
      }
    }
    var Pn,
      On,
      Nn = function () {
        return (Nn =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    function Fn() {
      if (!Pn) throw new Error(Rn);
      return Pn;
    }
    function Mn(e, t) {
      Pn ||
        ((Pn = new fn(
          (function (e, t) {
            var r = (function (e, t) {
              return {
                cache: { cacheLocation: Un(!!t.skipCookiesAndStorageCheck) },
                system: { loggerOptions: { loggerCallback: Dn(e) }, loadFrameTimeout: 15e3 },
              };
            })(t, e);
            return Nn(Nn({}, r), e);
          })(e, (On = t))
        )),
        e);
    }
    function Un(e) {
      if (e) return wn() ? j.SessionStorage : j.LocalStorage;
      if (!_n()) throw new Tn();
      if (wn() && vn()) return j.SessionStorage;
      if (!wn() && mn()) return j.LocalStorage;
      throw new En();
    }
    function Dn(e) {
      return function (t, r, n) {
        if (!n) {
          switch (t) {
            case he.Error:
              return e.traceError("MSAL-PKCE Log", { message: r });
            case he.Warning:
              return e.traceWarning("MSAL-PKCE Log", { message: r });
            case he.Info:
              return e.traceInfo("MSAL-PKCE Log", { message: r });
            case he.Verbose:
              return e.traceVerbose("MSAL-PKCE Log", { message: r });
          }
        }
      };
    }
    function Ln() {
      var e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        return (function (e, t) {
          var r = (e + 16 * Math.random()) % 16 | 0;
          return ("x" === t ? r : (3 & r) | 8).toString(16);
        })(e, t);
      });
    }
    var xn = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      });
                })(e.value).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      },
      qn = function (e, t) {
        var r,
          n,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                      !(o = o.call(n, i[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (n = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      };
    Promise.resolve(), new Map();
    function Hn() {
      return xn(this, void 0, void 0, function () {
        var e;
        return qn(this, function (t) {
          return Sn("LoggingOut", { correlationId: (e = Ln()) }), [2, Fn().logoutRedirect({ correlationId: e })];
        });
      });
    }
    var Bn,
      Wn = null;
    function Kn(e, t, r) {
      void 0 === e && (e = "msal.authentication"), Wn && Wn.trackErrorTrace(e + "." + t, r);
    }
    function jn(e, t, r) {
      void 0 === e && (e = "msal.authentication"), Wn && Wn.trackEventTrace(e + "." + t, r);
    }
    !(function (e) {
      (e[(e.BadConfig = 0)] = "BadConfig"),
        (e[(e.MainAppInIframe = 1)] = "MainAppInIframe"),
        (e[(e.InfiniteLoop = 2)] = "InfiniteLoop"),
        (e[(e.AadError = 3)] = "AadError"),
        (e[(e.UnhandledException = 4)] = "UnhandledException"),
        (e[(e.Assertion = 5)] = "Assertion"),
        (e[(e.Unknown = 6)] = "Unknown"),
        (e[(e.UserInterventionNeeded_StorageBlocked = 7)] = "UserInterventionNeeded_StorageBlocked"),
        (e[(e.UserInterventionNeeded_CookiesBlocked = 8)] = "UserInterventionNeeded_CookiesBlocked"),
        (e[(e.UserInterventionNeeded_NavigateToAadDenied = 9)] = "UserInterventionNeeded_NavigateToAadDenied"),
        (e[(e.UserInterventionNeeded_NavigateToAadTimeout = 10)] = "UserInterventionNeeded_NavigateToAadTimeout"),
        (e[(e.UserInterventionNeeded_StorageLost = 11)] = "UserInterventionNeeded_StorageLost");
    })(Bn || (Bn = {}));
    var Gn = ["login_required", "login required", "interaction_required", "Token Renewal Failed"],
      zn = ["Request is ambiguous"],
      Vn = ["failed due to timeout"];
    (function () {
      function e(e, t) {
        (this.error = e),
          (this.description = t),
          Kn("msal.authentication", "authErrorCreated", {
            errorKind: Bn[e],
            description: t,
            tokenRetryable: this.tokenRetryable,
            loginRetryable: this.loginRetryable,
          });
      }
      Object.defineProperty(e.prototype, "loginRetryable", {
        get: function () {
          var e = this;
          return Gn.some(function (t) {
            return e.description.indexOf(t) > -1;
          });
        },
        enumerable: !1,
        configurable: !0,
      }),
        Object.defineProperty(e.prototype, "tokenRetryable", {
          get: function () {
            var e = this;
            return zn.some(function (t) {
              return e.description.indexOf(t) > -1;
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "timeoutRetryable", {
          get: function () {
            var e = this;
            return Vn.some(function (t) {
              return e.description.indexOf(t) > -1;
            });
          },
          enumerable: !1,
          configurable: !0,
        });
    })(),
      r(39);
    function Qn(e) {
      var t = Jn(e),
        r = t.resource,
        n = t.scopes;
      return (
        n ||
        (function (e) {
          return [e + "/.default"];
        })(r)
      );
    }
    function Jn(e) {
      var t = (null == e ? void 0 : e.split("|scopes|")) || [],
        r = t[0],
        n = t[1],
        o = null == n ? void 0 : n.split(",");
      return { resource: r || e, scopes: (null == o ? void 0 : o.length) > 0 ? o : void 0 };
    }
    r(24);
    var Yn = function () {
        return (Yn =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      Xn = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      });
                })(e.value).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      },
      Zn = function (e, t) {
        var r,
          n,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                      !(o = o.call(n, i[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (n = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      },
      $n =
        (window.location.protocol,
        window.location.host,
        decodeURIComponent(ao("login_hint")),
        decodeURIComponent(ao("domain_hint")),
        {
          traceError: function (e, t) {
            Kn("msal.authentication", e, t), oo(e, t);
          },
          traceWarning: function (e, t) {
            jn("msal.authentication", e, t), oo(e, t);
          },
          traceInfo: function (e, t) {
            jn("msal.authentication", e, t), oo(e, t);
          },
          traceVerbose: function (e, t) {
            oo(e, t);
          },
        });
    function eo(e, t, r, n, o) {
      void 0 === n && (n = "");
      try {
        var i = (function (e, t) {
          void 0 === e && (e = "https://login.microsoftonline.com/");
          return (e = e.endsWith("/") ? e : e + "/"), t ? "" + e + t : e + "common";
        })(t, r);
        $n.traceInfo("Initializing MSAL-PKCE", { authority: i }),
          "" === n && (n = window.location.protocol + "//" + window.location.host + "/auth/v2");
        var a = (function () {
            return mn() ? j.LocalStorage : vn() ? j.SessionStorage : j.MemoryStorage;
          })(),
          s = {
            auth: { clientId: e, redirectUri: n, authority: i, postLogoutRedirectUri: null },
            errorHandling: { enableDefaultFatalErrorHandling: !0 },
            cache: { cacheLocation: a, storeAuthStateInCookie: a === j.MemoryStorage },
            skipCookiesAndStorageCheck: !0,
          };
        o && (s.system = Yn({ loggerOptions: { loggerCallback: Dn($n) }, loadFrameTimeout: 15e3 }, o)), Mn(s, $n);
      } catch (e) {
        to(e);
      }
    }
    function to(e) {
      return e instanceof En
        ? ro({ errorCode: Bn[Bn.UserInterventionNeeded_StorageBlocked], errorMessage: e.message })
        : e instanceof Tn
        ? ro({ errorCode: Bn[Bn.UserInterventionNeeded_CookiesBlocked], errorMessage: e.message })
        : void ro({ errorCode: "MSAL-PKCE Login Error", errorMessage: e.message });
    }
    function ro(e, t, r) {
      var n = e.errorCode,
        o = e.errorMessage;
      Kn("msal.authentication", "MsalPkceAuthAdapter/LoginFailed", { errorCode: n, errorMessage: o });
      var i = encodeURIComponent(n),
        a = 200 - " [truncated]".length,
        s = o.length <= a ? o : o.substr(0, a) + " [truncated]",
        c = encodeURIComponent(s),
        u = encodeURIComponent(t || ""),
        l = encodeURIComponent(r || ""),
        d =
          window.location.protocol +
          "//" +
          window.location.host +
          "/autherror?errorKind=" +
          i +
          "&errorDescription=" +
          c +
          "&oid=" +
          u +
          "&tid=" +
          l;
      window.location.assign(d);
    }
    var no = !1;
    function oo(e, t) {
      no && console.log(e + "\n" + JSON.stringify(t));
    }
    function io() {
      try {
        kn(
          (function () {
            var e = Fn().getActiveAccount();
            if (e) return e;
            var t = Fn().getAllAccounts();
            t.length > 1 &&
              jn("msal.authentication", "getCurrentAccount.MultipleAccountsFound", { numOfAccounts: t.length });
            return t[0];
          })()
        );
      } catch (e) {}
    }
    function ao(e) {
      var t = window.location.href;
      return new URL(t.toLocaleLowerCase()).searchParams.get(e);
    }
    function so() {
      return co("localStorage");
    }
    function co(e) {
      var t = !1;
      try {
        var r = e in window && window[e];
        if (r) {
          r.setItem("__storageTest", "__storageTest"),
            (t = "__storageTest" === r.getItem("__storageTest")),
            r.removeItem("__storageTest");
        }
      } catch (e) {}
      return t;
    }
    var uo,
      lo,
      ho = r(0);
    r(6);
    !(function (e) {
      (e.AuthFrame = "AuthFrame"),
        (e.AuthFrameWithCookie = "AuthFrameWithCookie"),
        (e.Host = "Host"),
        (e.Proxy = "Proxy");
    })(uo || (uo = {})),
      (function (e) {
        (e.AdalError = "AdalError"),
          (e.CookiesBlocked = "CookiesBlocked"),
          (e.Error = "Error"),
          (e.PopupError = "PopupError"),
          (e.StorageBlocked = "StorageBlocked"),
          (e.TokenRequestError = "TokenRequestError"),
          (e.UserCancelled = "UserCancelled");
      })(lo || (lo = {}));
    var po,
      fo = function () {
        return (fo =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      go = {},
      yo = {},
      mo = 0,
      vo = window.parent;
    function _o(e) {
      po = e;
    }
    function wo(e, t) {
      yo[e] = t;
    }
    function Eo(e, t) {
      To(vo, e, t);
    }
    function To(e, t, r) {
      if (e) {
        var n = bo(t)
          ? t
          : (function (e) {
              return fo({ id: mo++, protocol: "PAAF" }, e);
            })(t);
        e.postMessage(n, "*"), r && (go[n.id] = r);
      } else Io("Failed to send " + t.action + " request. No targetWindow");
    }
    function Co(e, t, r) {
      Ao(e.source, e.origin, t, r);
    }
    function Ao(e, t, r, n) {
      if (e) {
        var o = (function (e, t) {
          return fo({ id: e, protocol: "PAAF" }, t);
        })(r, n);
        e.postMessage(o, t);
      } else Io("Failed to send response. No targetWindow");
    }
    function So(e) {
      if (e.data && "PAAF" === e.data.protocol) {
        var t = e.data;
        bo(t)
          ? (function (e, t) {
              var r = yo[e.action];
              r ? r(e, t) : Io("Received a " + e.action + " request without a handler");
            })(t, e)
          : (function (e) {
              var t = go[e.id];
              t ? (t(e), delete go[e.id]) : Io("Received a response without a callback");
            })(t);
      }
    }
    function bo(e) {
      return "id" in e && "action" in e;
    }
    function Io(e) {
      null == po || po(e);
    }
    r(9);
    function Ro(e, t) {
      return { errorCode: lo.AdalError, errorMessage: e + " " + t };
    }
    function ko(e) {
      var t = "Unknown error occurred";
      try {
        e && (t = e instanceof Error ? JSON.stringify(e, Object.getOwnPropertyNames(e)) : JSON.stringify(e));
      } catch (e) {}
      return { errorCode: lo.Error, errorMessage: t };
    }
    function Po(e) {
      return { errorCode: lo.PopupError, errorMessage: e };
    }
    function Oo(e) {
      return { errorCode: lo.TokenRequestError, errorMessage: e };
    }
    function No(e) {
      return !(!e || "string" != typeof e.errorCode || "string" != typeof e.errorMessage);
    }
    function Fo(e) {
      return No(e) ? e : ko(e);
    }
    var Mo = {
        local: "https://apps.local.powerapps.com:44329",
        dev: "https://apps.dev.powerapps.com",
        test: "https://apps.test.powerapps.com",
        int: "https://apps.int.powerapps.com",
        preprod: "https://apps.preprod.powerapps.com",
        preview: "https://apps.preview.powerapps.com",
        prod: "https://apps.powerapps.com",
        gccmoderate: "https://apps.gov.powerapps.us",
        gcchigh: "https://apps.high.powerapps.us",
        dod: "https://play.apps.appsplatform.us",
        mooncake: "https://apps.powerapps.cn",
        ex: "https://apps.powerapps.eaglex.ic.gov",
        rx: "https://apps.powerapps.microsoft.scloud",
      },
      Uo = null;
    function Do(e, t, r) {
      Uo && Uo.trackError(e + "." + t, r);
    }
    function Lo(e, t, r) {
      Uo && Uo.trackEvent(e + "." + t, r);
    }
    var xo = (function () {
      function e(e) {
        (this._anchor = document.createElement("a")), (this._anchor.href = e);
      }
      return (
        Object.defineProperty(e.prototype, "host", {
          get: function () {
            return this._anchor.host;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "hostname", {
          get: function () {
            return this._anchor.hostname;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "href", {
          get: function () {
            return this._anchor.href;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "port", {
          get: function () {
            return this._anchor.port;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "origin", {
          get: function () {
            return this.protocol + "//" + this.host;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "protocol", {
          get: function () {
            return this._anchor.protocol;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })();
    function qo(e, t, r) {
      var n = document.createElement("iframe");
      return (
        n.setAttribute("id", t),
        n.setAttribute("name", t),
        (n.height = "0px"),
        (n.width = "0px"),
        (n.style.display = "none"),
        r && n.addEventListener("load", r),
        (n.src = e),
        document.body.appendChild(n),
        n
      );
    }
    function Ho() {
      var e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        return (function (e, t) {
          var r = (e + 16 * Math.random()) % 16 | 0;
          return ("x" === t ? r : (3 & r) | 8).toString(16);
        })(e, t);
      });
    }
    var Bo, Wo;
    !(function (e) {
      (e[(e.NotStarted = 0)] = "NotStarted"),
        (e[(e.Started = 1)] = "Started"),
        (e[(e.Completed = 2)] = "Completed"),
        (e[(e.Failed = 3)] = "Failed");
    })(Bo || (Bo = {}));
    var Ko,
      jo = Bo.NotStarted,
      Go = [];
    function zo(e) {
      return e === uo.AuthFrame || e === uo.AuthFrameWithCookie || e === uo.Host;
    }
    function Vo() {
      if (jo === Bo.NotStarted) {
        var e = ai(),
          t = e.loadFrameTimeout,
          r = e.region;
        jo = Bo.Started;
        var n = (function (e) {
          return new xo(Mo[e] + "/authflow/authframe");
        })(r).href;
        Lo("AuthenticationFrame", "loadAuthFrame", { region: r, url: n }),
          (Ko = setTimeout(function () {
            !(function () {
              (jo = Bo.Failed),
                Do("AuthenticationFrame", "loadAuthFrameFailure"),
                Xo(function (e) {
                  return Zo(e);
                });
            })();
          }, t)),
          (Wo = qo(n, "powerAppsAuthFlowFrame"));
      }
    }
    function Qo() {
      clearTimeout(Ko),
        (function () {
          if (jo !== Bo.Started) return;
          (jo = Bo.Completed),
            Lo("AuthenticationFrame", "loadAuthFrameSuccess"),
            Xo(function (e, t) {
              return Yo(e, t);
            });
        })();
    }
    function Jo(e, t) {
      switch ((ai(), jo === Bo.NotStarted && Vo(), jo)) {
        case Bo.Completed:
          Yo(e, t);
          break;
        case Bo.Failed:
          Zo(e);
          break;
        default:
          Go.push([e, t]);
      }
    }
    function Yo(e, t) {
      var r = Wo && Wo.contentWindow;
      r ? To(r, e, t) : Do("AuthenticationFrame", "sendMessageRequestToAuthFrame", { message: "No frame window" });
    }
    function Xo(e) {
      for (var t = 0, r = Go; t < r.length; t++) {
        var n = r[t];
        e(n[0], n[1]);
      }
      Go = [];
    }
    function Zo(e) {
      ("getAccessToken" !== e.action && "getAccessTokenCookie" !== e.action) ||
        ci(e, { error: ko("Failed to load the auth frame"), token: void 0 });
    }
    var $o,
      ei = function () {
        return (ei =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      ti = function () {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
        return n;
      },
      ri = !1;
    function ni(e) {
      void 0 === e && (e = {}),
        ($o = (function (e) {
          var t = ei({ frameId: window.name, hostFunctions: {}, hostWindow: window, loadFrameTimeout: 15e3 }, e),
            r = t.authenticationMode;
          switch (r) {
            case uo.AuthFrame:
              oi(t, "openPopup");
              break;
            case uo.AuthFrameWithCookie:
              oi(t, "getAccessTokenCookie");
              break;
            case uo.Host:
              oi(t, "getAccessToken");
              break;
            case uo.Proxy:
              if (!window.name) throw new Error("Proxy frames must have a name.");
          }
          if (zo(r) && !t.region) throw new Error("Region must be set when using " + r + " mode.");
          return t;
        })(e)),
        (ri = !0);
      var t = $o.authenticationMode,
        r = $o.logger;
      r &&
        (function (e) {
          Uo = e;
        })(r),
        wo("frameInitialized", ui),
        t &&
          (wo("getAccessToken", li),
          t === uo.Host && wo("getAccessTokenFromHost", hi),
          t === uo.AuthFrameWithCookie && wo("getAccessTokenCookie", di)),
        zo(t) && wo("openPopup", pi),
        _o(function (e) {
          Do("PowerAppsAuthFlow", "messageError", { message: e });
        }),
        window.addEventListener("message", So);
    }
    function oi(e, t) {
      if (!e.hostFunctions[t])
        throw new Error("The host must implement " + t + " when using " + e.authenticationMode + " mode.");
    }
    function ii(e) {
      var t = new xo(e);
      for (var r in Mo) if (Mo[r] === t.origin) return !0;
      return !1;
    }
    function ai() {
      if (!ri) throw new Error("Auth flow has not been initialized.");
      return $o;
    }
    function si(e, t) {
      ai(),
        Eo({ action: "openPopup", url: e }, function (e) {
          var r = e.error;
          t(r);
        });
    }
    function ci(e, t) {
      var r = ai().hostWindow;
      Ao(
        (function (e, t) {
          for (var r = t, n = e.length; n > 0; n--) r = r.frames[e[n - 1]];
          return r;
        })(e.frameIds, r),
        e.origin,
        e.id,
        t
      );
    }
    function ui(e, t) {
      var r = ai(),
        n = r.sessionId,
        o = r.tenantId,
        i = r.authenticationMode,
        a = r.hostType,
        s = r.loginHint;
      Co(t, e.id, { sessionId: n, tenantId: o, authenticationMode: i, hostType: a, loginHint: s }),
        "powerAppsAuthFlowFrame" === e.frameId && Qo();
    }
    function li(e) {
      var t,
        r = ai(),
        n = r.authenticationMode,
        o = r.frameId,
        i = e.options;
      switch (
        ((i.correlationId = null !== (t = i.correlationId) && void 0 !== t ? t : Ho()),
        Lo("PowerAppsAuthFlow", "handleGetAccessToken", {
          authenticationMode: n,
          correlationId: i.correlationId,
          resource: i.resource,
        }),
        n)
      ) {
        case uo.Host:
        case uo.AuthFrame:
        case uo.AuthFrameWithCookie:
          Jo(e);
          break;
        case uo.Proxy:
          Eo(ei(ei({}, e), { frameIds: ti(e.frameIds, [o]) }));
      }
    }
    function di(e, t) {
      if (ii(t.origin)) {
        var r = ai().hostFunctions,
          n = e.options,
          o = e.origin,
          i = e.cookieDetails;
        r.getAccessTokenCookie(n, o, i.name, i.domain, function (r) {
          Co(t, e.id, { error: r && Fo(r) });
        });
      } else Co(t, e.id, { error: Oo("Invalid request.") });
    }
    function hi(e, t) {
      ii(t.origin)
        ? ai().hostFunctions.getAccessToken(e.options, function (r, n) {
            Co(t, e.id, { error: r && Fo(r), token: n });
          })
        : Co(t, e.id, { error: Oo("Invalid request.") });
    }
    function pi(e, t) {
      if (ii(t.origin)) {
        var r,
          n = ai().hostFunctions,
          o = function (o) {
            clearInterval(r), Co(t, e.id, { error: o }), o && n.handlePopupError && n.handlePopupError(o);
          };
        wo("popupComplete", function (e) {
          var t = e.error;
          o(t), wo("popupComplete", null);
        }),
          n.openPopup(e.url, function (e, t) {
            !e && t
              ? (t.focus && t.focus(),
                (r = window.setInterval(function () {
                  (t && !t.closed) ||
                    o(
                      (function () {
                        return { errorCode: lo.UserCancelled, errorMessage: "User cancelled the auth flow" };
                      })()
                    );
                }, 500)))
              : o(e ? Fo(e) : Po("Failed to open the popup"));
          });
      } else Co(t, e.id, { error: Po("Invalid request.") });
    }
    r(13);
    function fi(e) {
      return "PowerAppsAuthFlow.accessToken." + e;
    }
    var gi,
      yi = function () {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
        return n;
      },
      mi = {
        AllowListPowerPlatformApps: [
          "apps.powerapps.com",
          "apps.*.powerapps.com",
          "apps.*.powerapps.us",
          "play.apps.appsplatform.us",
          "apps.powerapps.cn",
          "apps.powerapps.eaglex.ic.gov",
          "apps.powerapps.microsoft.scloud",
          "localhost",
        ],
        AllowListOtherApps: [],
        ResourceAllowDomain: {},
        DynamicsDomains: [
          "*.dynamics.com",
          "*.dynamics-int.com",
          "*.(api.)?crm.dynamics.com",
          "*.(api.)?crm1[0-9].dynamics.com",
          "*.(api.)?crm[2-9].dynamics.com",
          "*.crm.microsoftdynamics.us",
          "*.crm.appsplatform.us",
          "*.crm.dynamics.cn",
          "*.crm.dynamics.eaglex.ic.gov",
          "*.crm.dynamics.microsoft.scloud",
        ],
      };
    !(function (e) {
      var t = {},
        r = [];
      e.forEach(function (e) {
        var n = e.Domains,
          o = e.Resources;
        (null == n ? void 0 : n.length) > 0 &&
          (null == o ? void 0 : o.length) > 0 &&
          n.forEach(function (e) {
            var n;
            r.push(e), t[e] ? (n = t[e]).push.apply(n, o) : (t[e] = yi(o));
          });
      }),
        (mi.ResourceAllowDomain = t),
        (mi.AllowListOtherApps = r);
    })([
      { Domains: yi(mi.DynamicsDomains), Resources: ["394866fc-eedb-4f01-8536-3ff84b16be2a"] },
      {
        Domains: ["*.d365ccafpi.com", "*.d365ccafpi-dev.com"],
        Resources: yi(mi.DynamicsDomains, [
          "www.d365ccafpi-dev.com",
          "www.d365ccafpi.com",
          "c8b3e0dd-990b-4882-b119-acddfcaa7ace",
        ]),
      },
      {
        Domains: [
          "ccafpitokenservice.*.gateway.test.island.powerapps.com",
          "ccafpitokenservice.*.gateway.prod.island.powerapps.com",
          "ccafpitokenservice.*.gateway.gov.island.powerapps.us",
          "ccafpitokenservice.*.gateway.gov.island.appsplatform.us",
          "ccafpitokenservice.*.gateway.mooncake.island.powerapps.cn",
          "ccafpitokenservice.*.gateway.ex.island.powerapps.eaglex.ic.gov",
          "ccafpitokenservice.*.gateway.rx.island.powerapps.microsoft.scloud",
        ],
        Resources: yi(mi.DynamicsDomains, [
          "www.d365ccafpi-dev.com",
          "www.d365ccafpi.com",
          "7b0b21dd-2525-47ce-a525-fff16dd327de",
          "499f8b85-91f7-4d3d-b9c4-f7bf2a4bf93c",
          "c8b3e0dd-990b-4882-b119-acddfcaa7ace",
        ]),
      },
      {
        Domains: ["*.sustainability.dev.powerapps.com", "*.sustainability.prod.powerapps.com"],
        Resources: ["pq-df.microsoft.com", "powerquery.microsoft.com"],
      },
      {
        Domains: ["*.iom.dev-d365.dynamics.com", "*.iom.d365.dynamics.com"],
        Resources: ["pq-df.microsoft.com", "powerquery.microsoft.com"],
      },
      {
        Domains: [
          "industrytoolkit-services-int.teams.microsoft.com",
          "industrytoolkit-services-ppe.teams.microsoft.com",
          "industrytoolkit-services.teams.microsoft.com",
        ],
        Resources: ["industrytoolkit.teams.microsoft.com"],
      },
      {
        Domains: [
          "approvalsint.teams.microsoft.com",
          "approvalsppe.teams.microsoft.com",
          "approvals.teams.microsoft.com",
        ],
        Resources: ["3e050dd7-7815-46a0-8263-b73168a42c10"],
      },
      {
        Domains: [
          "tip1.flow.microsoft.com",
          "flow.microsoft.com",
          "dev.flows.azure-test.net",
          "gov.flow.microsoft.us",
          "high.flow.microsoft.us",
          "flow.appsplatform.us",
          "www.powerautomate.cn",
        ],
        Resources: [
          "service.flow.microsoft.com/",
          "gov.service.flow.microsoft.us/",
          "high.service.flow.microsoft.us/",
          "service.flow.appsplatform.us/",
          "service.powerautomate.cn/",
        ],
      },
    ]);
    var vi = "AuthFlowServerConfig" in window ? window.AuthFlowServerConfig : {};
    if (("local" === vi.region || "dev" === vi.region || "test" === vi.region) && so()) {
      var _i = localStorage.getItem("AuthFlowDevAllowList");
      _i && (gi = mi.AllowListOtherApps).push.apply(gi, _i.split(",")),
        (function (e) {
          if (e) {
            var t = e.split("|");
            if (2 !== (null == t ? void 0 : t.length) || !t[0] || "" === t[0] || !t[1] || "" === t[1]) return;
            var r = t[0].split(","),
              n = t[1].split(",");
            r.forEach(function (e) {
              var t;
              mi.ResourceAllowDomain[e]
                ? (t = mi.ResourceAllowDomain[e]).push.apply(t, n.slice())
                : (mi.ResourceAllowDomain[e] = n.slice());
            });
          }
        })(localStorage.getItem("AuthFlowResourceAllowDomain"));
    }
    var wi = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      });
                })(e.value).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      },
      Ei = function (e, t) {
        var r,
          n,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                      !(o = o.call(n, i[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (n = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      };
    function Ti(e, t) {
      try {
        for (var r = 0; r < t.length; r++) {
          var n =
            "^" +
            t[r]
              .split(".")
              .map(function (e, t) {
                return "*" === e ? "[a-z0-9-]+" : e;
              })
              .join("\\.") +
            "$";
          if (new RegExp(n, "i").test(e)) return r;
        }
        return -1;
      } catch (e) {
        return -1;
      }
    }
    function Ci(e, t) {
      return wi(this, void 0, Promise, function () {
        var r, o, i, a, s, c, u, l, d, h, p, f, g, y, m, v, _, w;
        return Ei(this, function (E) {
          (r = e.frameIds),
            (o = e.options),
            (i = e.origin),
            (a = ra(e)),
            (s = ho.trackCreateScenario("validateAccessTokenRequestAsyncScenario", { correlationId: a }));
          try {
            if (
              t !== uo.AuthFrame &&
              t !== uo.AuthFrameWithCookie &&
              (0 === (null == r ? void 0 : r.length) ||
                r.some(function (e) {
                  return !e;
                }))
            )
              throw Oo("One of the frames 'name' attribute is not set.");
            if (!(null == o ? void 0 : o.resource)) throw Oo("Resource is missing.");
            if (!i) throw Oo("Origin is missing.");
            if (
              ((c = (function (e) {
                var t;
                try {
                  if (e) {
                    var r = document.createElement("a");
                    r.href = e.toLowerCase();
                    var n = r.port ? ":" + r.port : "",
                      o = r.protocol + "//" + r.hostname + n;
                    return o !== e.toLocaleLowerCase() &&
                      (ho.trackEvent("Reconstructing Origin doesn't match", { origin: e, reconstructedOrigin: o }),
                      null === (t = window.AuthFlowServerConfig) || void 0 === t ? void 0 : t.enableExtraValidation)
                      ? { protocol: "", domain: "", port: "" }
                      : { protocol: r.protocol, domain: r.hostname, port: r.port };
                  }
                } catch (e) {}
                return { protocol: "", domain: "", port: "" };
              })(i)),
              (u = c.protocol),
              (l = c.domain),
              (d = c.port),
              "https:" !== u)
            )
              throw Oo("Origin protocol '" + u + "' is not HTTPS.");
            if (
              ((h = Ti(l, mi.DynamicsDomains)),
              (p = -1 !== Ti(l, mi.AllowListPowerPlatformApps)),
              (f = Ti(l, mi.AllowListOtherApps)),
              !(p || -1 !== f))
            )
              throw Oo("The domain '" + l + "' is not allowed to request a token.");
            if (
              ((g = !1),
              (y = void 0),
              (m = (function (e) {
                var t = null == e ? void 0 : e.split("https://");
                if ((null == t ? void 0 : t.length) > 1) return t[1];
                return e;
              })(o.resource)),
              -1 !== h ? ((y = mi.DynamicsDomains[h]), (g = Ai(m, y))) : (g = p || Ai(m, l)),
              g ||
                ((g = -1 !== Ti(m, mi.ResourceAllowDomain[mi.AllowListOtherApps[f]])) &&
                  ho.trackEvent("AllowWildCardResourceRequest", { resource: o.resource, domain: l })),
              "localhost" === l)
            ) {
              if (((v = new n.CookieManager()), !(_ = v.getCookie("AuthFlowAllowedPort"))))
                throw Oo("The localhost is not allowed to request a token.");
              if (_ !== d) throw Oo("The port '" + d + "' is not allowed to request a token.");
            }
            if (!g) throw Oo("The requested resource '" + o.resource + "' is not allowed for this domain '" + l + "'.");
            null == s || s.complete({ correlationId: a });
          } catch (e) {
            throw ((w = Fo(e)), null == s || s.failure({ correlationId: a, error: w }), Oo(w.errorMessage));
          }
          return [2];
        });
      });
    }
    function Ai(e, t) {
      var r = mi.ResourceAllowDomain[t];
      return !!r && -1 !== r.indexOf(e);
    }
    function Si(e) {
      console && console.log && console.log(e);
    }
    function bi(e, t) {
      "function" != typeof e && Si(t);
    }
    function Ii(e, t) {
      return (
        (function (e, t) {
          "function" != typeof (null == e ? void 0 : e.then) && Si(t);
        })(e),
        bi(t),
        e.then(
          function (e) {
            return t(), e;
          },
          function (e) {
            return t(), Promise.reject(e);
          }
        )
      );
    }
    var Ri = (function () {
        function e() {
          (this._jobs = []), (this._currentRunningJob = null);
        }
        return (
          (e.prototype.getJobsCount = function () {
            return (null === this._currentRunningJob ? 0 : 1) + this._jobs.length;
          }),
          (e.prototype.pushJob = function (e) {
            bi(e);
            var t = { start: null, promise: null },
              r = new Promise(function (e) {
                t.start = e;
              });
            return (
              this._jobs.push(t),
              (t.promise = Ii(r.then(e), this._createFinallyFn(t))),
              null === this._currentRunningJob && this._shiftJobsAndStartNextJobIfExists(),
              t.promise
            );
          }),
          (e.prototype._createFinallyFn = function (e) {
            var t = this;
            return function () {
              t._currentRunningJob === e && t._shiftJobsAndStartNextJobIfExists();
            };
          }),
          (e.prototype._shiftJobsAndStartNextJobIfExists = function () {
            var e;
            0 !== this._jobs.length
              ? ((this._currentRunningJob = this._jobs.shift()),
                null === (e = this._currentRunningJob) || void 0 === e || e.start())
              : (this._currentRunningJob = null);
          }),
          e
        );
      })(),
      ki = function () {
        return (ki =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      Pi = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      });
                })(e.value).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      },
      Oi = function (e, t) {
        var r,
          n,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                      !(o = o.call(n, i[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (n = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      },
      Ni = ["login_required", "login required", "interaction_required", "Token Renewal Failed"],
      Fi = (function () {
        function e(e, t, r) {
          (this._loginResource = t),
            (this._cookieManager = r),
            (this._queue = new Ri()),
            (this._authContext = new AuthenticationContext(
              ki(
                {
                  redirectUri: window.location.protocol + "//" + window.location.host + "/authflow/redirect",
                  cacheLocation: "localStorage",
                },
                e
              )
            ));
        }
        return (
          Object.defineProperty(e.prototype, "authContext", {
            get: function () {
              return this._authContext;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.acquireTokenAsync = function (e) {
            return Pi(this, void 0, Promise, function () {
              var t = this;
              return Oi(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      this._queue.pushJob(function () {
                        return t._acquireTokenAsync(e);
                      }),
                    ];
                  case 1:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (e.prototype._acquireTokenAsync = function (e) {
            return Pi(this, void 0, Promise, function () {
              var t, r, n, o, i, a;
              return Oi(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (t = e.resource),
                      (r = e.claims),
                      (n = e.correlationId),
                      (o = e.isSilentRequest),
                      [4, this._loginAsync(n, o)]
                    );
                  case 1:
                    s.sent(), (s.label = 2);
                  case 2:
                    return s.trys.push([2, 7, , 11]), !r || o ? [3, 4] : [4, this._acquireTokenWithLoginAsync(t, r)];
                  case 3:
                    return (i = s.sent()), [3, 6];
                  case 4:
                    return [4, this._acquireTokenSilentAsync(t)];
                  case 5:
                    (i = s.sent()), (s.label = 6);
                  case 6:
                    return [3, 11];
                  case 7:
                    return (
                      (a = s.sent()),
                      !this._isInteractionRequired(a) || o ? [3, 9] : [4, this._acquireTokenWithLoginAsync(t)]
                    );
                  case 8:
                    return (i = s.sent()), [3, 10];
                  case 9:
                    throw a;
                  case 10:
                    return [3, 11];
                  case 11:
                    return [2, i];
                }
              });
            });
          }),
          (e.prototype.clearCache = function () {
            this._authContext.clearCache();
          }),
          (e.prototype.logout = function () {
            this._authContext.logOut();
          }),
          (e.prototype._acquireTokenSilentAsync = function (e) {
            var t = this;
            return new Promise(function (r, n) {
              t._authContext.acquireToken(e, function (e, t, o) {
                o || e ? n(Ro(o, e)) : r(t);
              });
            });
          }),
          (e.prototype._acquireTokenWithLoginAsync = function (e, t) {
            return Pi(this, void 0, Promise, function () {
              return Oi(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this._loginWithPopupAsync(e, t)];
                  case 1:
                    return r.sent(), [2, this._acquireTokenSilentAsync(e)];
                }
              });
            });
          }),
          (e.prototype._loginAsync = function (e, t) {
            return (
              void 0 === t && (t = !1),
              Pi(this, void 0, Promise, function () {
                return Oi(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (this._authContext.getCachedUser())
                        return (
                          ho.trackEvent("AuthFlowAuthFrame.AdalAuthenticationClient._loginAsync", {
                            message: "User is already logged in",
                            correlationId: e,
                          }),
                          [2]
                        );
                      if (!this._cookieManager.areCookiesEnabled())
                        throw (function () {
                          return {
                            errorCode: lo.CookiesBlocked,
                            errorMessage: "PowerApps Auth Flow requires cookies to login.",
                          };
                        })();
                      if (!so())
                        throw (function (e) {
                          return {
                            errorCode: lo.StorageBlocked,
                            errorMessage: "PowerApps Auth Flow requires " + e + " to login.",
                          };
                        })("localStorage");
                      r.label = 1;
                    case 1:
                      return (
                        r.trys.push([1, 3, , 7]),
                        ho.trackEvent("AuthFlowAuthFrame.AdalAuthenticationClient._loginAsync", {
                          message: "Attempting silent login",
                          correlationId: e,
                        }),
                        [4, this._loginSilentAsync(this._loginResource)]
                      );
                    case 2:
                      return (
                        r.sent(),
                        ho.trackEvent("AuthFlowAuthFrame.AdalAuthenticationClient._loginAsync", {
                          message: "Silent login succeeded",
                        }),
                        [3, 7]
                      );
                    case 3:
                      return (
                        r.sent(),
                        t
                          ? [3, 5]
                          : (ho.trackEvent("AuthFlowAuthFrame.AdalAuthenticationClient._loginAsync", {
                              message: "Silent login failed. Attempting login with popup",
                              correlationId: e,
                            }),
                            [4, this._loginWithPopupAsync(this._loginResource)])
                      );
                    case 4:
                      return (
                        r.sent(),
                        ho.trackEvent("AuthFlowAuthFrame.AdalAuthenticationClient._loginAsync", {
                          message: "Login with popup succeeded",
                          correlationId: e,
                        }),
                        [3, 6]
                      );
                    case 5:
                      ho.trackEvent("AuthFlowAuthFrame.AdalAuthenticationClient._loginAsync", {
                        message: "Silent login failed. Skipping login with popup due to silent request.",
                        correlationId: e,
                      }),
                        (r.label = 6);
                    case 6:
                      return [3, 7];
                    case 7:
                      return [2];
                  }
                });
              })
            );
          }),
          (e.prototype._loginSilentAsync = function (e) {
            return Pi(this, void 0, Promise, function () {
              var t,
                r,
                n,
                o = this;
              return Oi(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 3, 4, 5]),
                      [
                        4,
                        new Promise(function (r) {
                          (o._authContext.config.displayCall = function (e) {
                            t = qo(e, "authFlowLoginFrame", r);
                          }),
                            (o._authContext.popUp = !1),
                            o._authContext.login(e);
                        }),
                      ]
                    );
                  case 1:
                    return i.sent(), (r = t.contentWindow.location.hash), [4, this._handleLoginHashAsync(r)];
                  case 2:
                    return i.sent(), [3, 5];
                  case 3:
                    throw ((n = i.sent()), this._handleLoginFailure("Silent iframe login failed"), n);
                  case 4:
                    return t && document.body.removeChild(t), [7];
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._loginWithPopupAsync = function (e, t) {
            return Pi(this, void 0, Promise, function () {
              var r,
                n = this;
              return Oi(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (r, o) {
                        (n._authContext.config.displayCall = function (e) {
                          si(e, function (e) {
                            if (e) return n._handleLoginFailure("Login with popup failed"), void o(e);
                            var t = localStorage.getItem("PowerAppsAuthFlow.AadHash");
                            localStorage.removeItem("PowerAppsAuthFlow.AadHash"), r(t);
                          });
                        }),
                          (n._authContext.popUp = !1),
                          n._authContext.login(e, void 0, t);
                      }),
                    ];
                  case 1:
                    return (r = o.sent()), [4, this._handleLoginHashAsync(r)];
                  case 2:
                    return o.sent(), [2];
                }
              });
            });
          }),
          (e.prototype._handleLoginFailure = function (e) {
            this._authContext.saveTokenFromHash({
              valid: !0,
              parameters: { error: "Login failed", error_description: e },
              stateMatch: !0,
              stateResponse: "",
              requestType: this._authContext.REQUEST_TYPE.LOGIN,
            });
          }),
          (e.prototype._handleLoginHashAsync = function (e) {
            var t = this;
            return new Promise(function (r, n) {
              e && t._authContext.isCallback(e)
                ? ((t._authContext.callback = function (e, o, i) {
                    (t._authContext.callback = null), i || e ? n(Ro(i, e)) : r();
                  }),
                  (t._authContext.popUp = !0),
                  t._authContext.handleWindowCallback(e))
                : n(ko("Invalid hash received"));
            });
          }),
          (e.prototype._isInteractionRequired = function (e) {
            return (
              !!No(e) &&
              Ni.some(function (t) {
                return e.errorMessage.indexOf(t) > -1;
              })
            );
          }),
          e
        );
      })(),
      Mi = r(2),
      Ui = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      });
                })(e.value).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      },
      Di = function (e, t) {
        var r,
          n,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                      !(o = o.call(n, i[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (n = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      },
      Li = (function () {
        function e() {}
        return (
          (e.prototype.trackErrorTrace = function (e, t) {
            Mi.d(e, t);
          }),
          (e.prototype.trackEventTrace = function (e, t) {
            Mi.e(e, t);
          }),
          e
        );
      })(),
      xi = (function () {
        function e(e, t, r, n, o) {
          void 0 === o && (o = ""),
            (this._loginResource = n),
            (this._loginHint = o),
            (this._isInteractiveFlowInProgress = !1),
            (this._interactiveFlowProgressPromise = Promise.resolve()),
            (this._redirectUri = window.location.protocol + "//" + window.location.host + "/auth-redirect.html"),
            (this._maxRetryCount = 3),
            (this._inFlightTokenRequestPromiseMap = new Map()),
            (this._queue = new Ri());
          var i = this._redirectUri;
          !(function (e) {
            Wn = e;
          })(new Li()),
            eo(e, t, r, i, { allowRedirectInIframe: !0 }),
            (this._msalInstance = Fn()),
            (this._thirdPartyCookiesEnabled = _n()),
            (window.thirdPartyCookiesEnabled = this._thirdPartyCookiesEnabled),
            Mi.e("MsalAuthenticationClient", {
              message: "3rd Party Cookies Enabled: " + this._thirdPartyCookiesEnabled,
            });
        }
        return (
          (e.prototype.acquireTokenAsync = function (e) {
            return Ui(this, void 0, Promise, function () {
              var t,
                r,
                n = this;
              return Di(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (t = e.resource),
                      this._thirdPartyCookiesEnabled
                        ? [3, 2]
                        : [
                            4,
                            this._queue.pushJob(function () {
                              return n._acquireTokenAsyncInternal(e);
                            }),
                          ]
                    );
                  case 1:
                    return [2, o.sent()];
                  case 2:
                    return (
                      o.trys.push([2, , 4, 5]),
                      (r = void 0),
                      this._inFlightTokenRequestPromiseMap.has(t)
                        ? (r = this._inFlightTokenRequestPromiseMap.get(t))
                        : ((r = this._acquireTokenAsyncInternal(e)), this._inFlightTokenRequestPromiseMap.set(t, r)),
                      [4, r]
                    );
                  case 3:
                    return [2, o.sent()];
                  case 4:
                    return this._inFlightTokenRequestPromiseMap.delete(t), [7];
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._acquireTokenAsyncInternal = function (e) {
            return Ui(this, void 0, Promise, function () {
              var t, r, n, o, i, a, s;
              return Di(this, function (c) {
                switch (c.label) {
                  case 0:
                    (t = e.resource), (r = e.claims), (n = e.correlationId), (o = e.isSilentRequest), (c.label = 1);
                  case 1:
                    return c.trys.push([1, 15, , 16]), r ? [3, 3] : [4, this._loginAsync(t, n, o)];
                  case 2:
                    c.sent(), (c.label = 3);
                  case 3:
                    if (r && o) throw ko("Can't acquire token silently with claims");
                    (i = 0), (c.label = 4);
                  case 4:
                    0, (c.label = 5);
                  case 5:
                    return (
                      c.trys.push([5, 10, , 13]), i++, !r || o ? [3, 7] : [4, this._acquireTokenWithLoginAsync(t, n, r)]
                    );
                  case 6:
                    return [2, c.sent()];
                  case 7:
                    return [4, this._acquireTokenSilentAsync(t, n)];
                  case 8:
                    return [2, c.sent()];
                  case 9:
                    return [3, 13];
                  case 10:
                    if (((a = c.sent()), i >= this._maxRetryCount))
                      throw (
                        (Mi.d("_acquireTokenAsyncInternalFailed", { error: a, resource: t, isSilentRequest: o }), a)
                      );
                    return !this._isInteractionRequired(a) || o
                      ? [3, 12]
                      : [4, this._acquireTokenWithLoginAsync(t, n, r)];
                  case 11:
                    return [2, c.sent()];
                  case 12:
                    return [3, 13];
                  case 13:
                    return [3, 4];
                  case 14:
                    return [3, 16];
                  case 15:
                    throw (
                      ((s = c.sent()),
                      void 0,
                      s instanceof _e
                        ? Ro(null == s ? void 0 : s.errorCode, null == s ? void 0 : s.errorMessage)
                        : No(s)
                        ? s
                        : Ro(s, null == s ? void 0 : s.message))
                    );
                  case 16:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.clearCache = function () {
            try {
              io();
            } catch (e) {}
          }),
          (e.prototype.logout = function () {
            !(function () {
              Xn(this, void 0, void 0, function () {
                return Zn(this, function (e) {
                  return (
                    $n.traceInfo("Logging out."),
                    window !== window.top ? ($n.traceInfo("UnableToLogOutInsideIframe"), [2]) : [2, Hn()]
                  );
                });
              });
            })();
          }),
          (e.prototype._acquireTokenSilentAsync = function (e, t) {
            return Ui(this, void 0, Promise, function () {
              var r, n;
              return Di(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, , 3]),
                      (r = Qn(e)),
                      (n = this._getCurrentAccount()),
                      [4, this._msalInstance.acquireTokenSilent({ scopes: r, account: n, correlationId: t })]
                    );
                  case 1:
                    return [2, o.sent().accessToken];
                  case 2:
                    throw o.sent();
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._acquireTokenWithLoginAsync = function (e, t, r) {
            return Ui(this, void 0, Promise, function () {
              return Di(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this._isInteractiveFlowInProgress ? [4, this._interactiveFlowProgressPromise] : [3, 2];
                  case 1:
                    return n.sent(), [3, 4];
                  case 2:
                    return [4, this._loginWithPopupAsync(e, t, r)];
                  case 3:
                    n.sent(), (n.label = 4);
                  case 4:
                    return [2, this._acquireTokenSilentAsync(e, t)];
                }
              });
            });
          }),
          (e.prototype._loginAsync = function (e, t, r) {
            return (
              void 0 === r && (r = !1),
              Ui(this, void 0, Promise, function () {
                return Di(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (this._getCurrentAccount())
                        return (
                          Mi.e("AuthFlowAuthFrame.MsalAuthenticationClient._loginAsync", {
                            message: "User is already logged in",
                            correlationId: t,
                          }),
                          [2]
                        );
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 3, , 10]),
                        Mi.e("AuthFlowAuthFrame.MsalAuthenticationClient._loginAsync", {
                          message: "Attempting silent login",
                          correlationId: t,
                        }),
                        [4, this._loginSilentAsync(e, t)]
                      );
                    case 2:
                      return (
                        n.sent(),
                        Mi.e("AuthFlowAuthFrame.MsalAuthenticationClient._loginAsync", {
                          message: "Silent login succeeded",
                        }),
                        [3, 10]
                      );
                    case 3:
                      return (
                        n.sent(),
                        r
                          ? [3, 8]
                          : (Mi.e("AuthFlowAuthFrame.MsalAuthenticationClient._loginAsync", {
                              message: "Silent login failed. Attempting login with popup",
                              correlationId: t,
                            }),
                            this._isInteractiveFlowInProgress ? [4, this._interactiveFlowProgressPromise] : [3, 5])
                      );
                    case 4:
                      return n.sent(), [3, 7];
                    case 5:
                      return [4, this._loginWithPopupAsync(e, t)];
                    case 6:
                      n.sent(), (n.label = 7);
                    case 7:
                      return (
                        Mi.e("AuthFlowAuthFrame.MsalAuthenticationClient._loginAsync", {
                          message: "Login with popup succeeded",
                          correlationId: t,
                        }),
                        [3, 9]
                      );
                    case 8:
                      Mi.e("AuthFlowAuthFrame.MsalAuthenticationClient._loginAsync", {
                        message: "Silent login failed. Skipping login with popup due to silent request.",
                        correlationId: t,
                      }),
                        (n.label = 9);
                    case 9:
                      return [3, 10];
                    case 10:
                      return [2];
                  }
                });
              })
            );
          }),
          (e.prototype._loginSilentAsync = function (e, t) {
            return Ui(this, void 0, Promise, function () {
              var r, n, o;
              return Di(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (r = this._loginHint) ||
                        Mi.e("AuthFlowFrame.MsalAuthenticationClient._loginSilentAsync", {
                          message: "Login Hint missing for silent login",
                          correlationId: t,
                        }),
                      (n = Qn(e)),
                      [4, this._msalInstance.ssoSilent({ scopes: n, loginHint: r, correlationId: t })]
                    );
                  case 1:
                    return (o = i.sent()), this._updateCurrentAccount(o.account, "_loginSilentAsync"), [2];
                }
              });
            });
          }),
          (e.prototype._loginWithPopupAsync = function (e, t, r) {
            var n;
            return Ui(this, void 0, Promise, function () {
              var o, i, a, s, c, u, l, d, h, p, f;
              return Di(this, function (g) {
                switch (g.label) {
                  case 0:
                    (a = new Promise(function (e, t) {
                      (o = e), (i = t);
                    })),
                      (s = new URL(window.location.protocol + "//" + window.location.host + "/authflow/authv2/start")),
                      this._loginHint && s.searchParams.append("login_hint", this._loginHint),
                      r && ((c = encodeURIComponent(r)), s.searchParams.append("claims", c)),
                      (u = []),
                      e &&
                        ((u = Qn(e)),
                        (l = JSON.stringify(u)),
                        (d = encodeURIComponent(l)),
                        s.searchParams.append("scopes", d),
                        Mi.e("AuthFlowAuthFrame.MsalAuthenticationClient._loginWithPopupAsync.scopes", {
                          correlationId: t,
                          resourceUrl: e,
                          scopes: l,
                        })),
                      (g.label = 1);
                  case 1:
                    return (
                      g.trys.push([1, 7, 8, 9]),
                      (this._isInteractiveFlowInProgress = !0),
                      (this._interactiveFlowProgressPromise = a),
                      Mi.e("AuthFlowAuthFrame.MsalAuthenticationClient._loginWithPopupAsync", {
                        message: "Opening popup",
                        correlationId: t,
                      }),
                      (window.popupPayload = null),
                      (window.popupHash = null),
                      this._thirdPartyCookiesEnabled
                        ? [3, 3]
                        : [
                            4,
                            this._msalInstance.loginRedirect({
                              scopes: u,
                              redirectUri:
                                window.location.protocol + "//" + window.location.host + "/authflow/authv2/end",
                              onRedirectNavigate: function (e) {
                                return (window.onRedirectNavigateUrl = e), !1;
                              },
                              claims: r,
                            }),
                          ]
                    );
                  case 2:
                    g.sent(), (g.label = 3);
                  case 3:
                    return [
                      4,
                      new Promise(function (e, t) {
                        si(s.toString(), function (r) {
                          r ? t(r) : e();
                        });
                      }),
                    ];
                  case 4:
                    return (
                      g.sent(),
                      (h = null === (n = window.popupPayload) || void 0 === n ? void 0 : n.account),
                      this._thirdPartyCookiesEnabled
                        ? [3, 6]
                        : [4, this._msalInstance.handleRedirectPromise(window.popupHash)]
                    );
                  case 5:
                    (p = g.sent()), (h = null == p ? void 0 : p.account), (g.label = 6);
                  case 6:
                    return this._updateCurrentAccount(h, "_loginWithPopupAsync"), o(), [3, 9];
                  case 7:
                    throw ((f = g.sent()), i(f), f);
                  case 8:
                    return (this._isInteractiveFlowInProgress = !1), [7];
                  case 9:
                    return [2];
                }
              });
            });
          }),
          (e.prototype._isInteractionRequired = function (e) {
            return (
              e instanceof Ct ||
              (e instanceof _e &&
                [ut.noAccountError].some(function (t) {
                  return e.errorCode === t.code;
                }))
            );
          }),
          (e.prototype._getCurrentAccount = function () {
            if (this._currentAccount) return this._currentAccount;
            var e = null;
            if (this._loginHint)
              return (
                (e = this._msalInstance.getAccountByUsername(this._loginHint)),
                Mi.e("MsalAuthenticationClient._getCurrentAccount", {
                  message: "Login hint provided",
                  hasAccount: !!e,
                }),
                e
              );
            var t = this._msalInstance.getAllAccounts();
            return (
              t &&
                t.length > 0 &&
                ((e = t[0]),
                Mi.e("MsalAuthenticationClient._getCurrentAccount", {
                  message: "Defaulting to first account",
                  numOfAccounts: t.length,
                })),
              e
            );
          }),
          (e.prototype._updateCurrentAccount = function (e, t) {
            var r, n;
            e
              ? (Mi.e("MsalAuthenticationClient._updateCurrentAccount", {
                  accountChanged: !0,
                  prevHomeAccountId: null === (r = this._currentAccount) || void 0 === r ? void 0 : r.homeAccountId,
                  newHomeAccountId: e.homeAccountId,
                  source: t,
                }),
                (this._currentAccount = e))
              : Mi.d("MsalAuthenticationClient._updateCurrentAccount.NoAccount", {
                  accountChanged: !1,
                  currentHomeAccountId: null === (n = this._currentAccount) || void 0 === n ? void 0 : n.homeAccountId,
                  source: t,
                });
          }),
          e
        );
      })();
    var qi,
      Hi,
      Bi,
      Wi,
      Ki,
      ji = function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              c(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            e.done
              ? o(e.value)
              : (function (e) {
                  return e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      });
                })(e.value).then(a, s);
          }
          c((n = n.apply(e, t || [])).next());
        });
      },
      Gi = function (e, t) {
        var r,
          n,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                      !(o = o.call(n, i[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (n = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      },
      zi = new n.CookieManager(),
      Vi = new Promise(function (e, t) {
        (Wi = e), (Ki = t);
      });
    function Qi(e, t) {
      var r = this;
      wo(e, function (e, n) {
        return ji(r, void 0, void 0, function () {
          var r, o;
          return Gi(this, function (i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, 2, , 3]), [4, Vi];
              case 1:
                return i.sent(), t(e, n), [3, 3];
              case 2:
                return (
                  (r = i.sent()),
                  ho.trackError("AuthFlowAuthFrame.registerHandler", {
                    message: "AuthFlowPromise was rejected.",
                    error: JSON.stringify(r),
                  }),
                  (o = ko("Failed to initialize AuthFrame")),
                  ("getAccessToken" !== e.action && "getAccessTokenCookie" !== e.action) ||
                    ci(e, { token: void 0, error: o }),
                  [3, 3]
                );
              case 3:
                return [2];
            }
          });
        });
      });
    }
    function Ji(e) {
      return new Promise(function (t) {
        To(window.parent, e, t);
      });
    }
    function Yi(e) {
      var t, r;
      return ji(this, void 0, Promise, function () {
        var n, o, i, a, s, c, u;
        return Gi(this, function (l) {
          switch (l.label) {
            case 0:
              (n = ra(e)),
                (o = ho.trackCreateScenario("getAccessTokenRequestScenario", {
                  correlationId: n,
                  authenticationMode: Bi,
                  isSilentRequest:
                    null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.isSilentRequest,
                  resource: null === (r = null == e ? void 0 : e.options) || void 0 === r ? void 0 : r.resource,
                })),
                (l.label = 1);
            case 1:
              return (
                l.trys.push([1, 10, , 11]),
                (i = e.options.resource),
                (a = (function (e, t) {
                  return t ? e : Jn(e).resource;
                })(i, qi)),
                i !== a &&
                  (ho.trackEvent("AuthFlowAuthFrame.updateResource", {
                    customScopesSupported: qi,
                    prevResource: i,
                    newResource: a,
                  }),
                  (e.options.resource = a)),
                [4, Ci(e, Bi)]
              );
            case 2:
              switch ((l.sent(), (s = void 0), Bi)) {
                case uo.AuthFrameWithCookie:
                  return [3, 3];
                case uo.Host:
                  return [3, 5];
              }
              return [3, 7];
            case 3:
              return [4, Xi(e)];
            case 4:
              return (s = l.sent()), [3, 9];
            case 5:
              return [4, Zi(e)];
            case 6:
              return (s = l.sent()), [3, 9];
            case 7:
              return [4, Hi.acquireTokenAsync(e.options)];
            case 8:
              return (s = l.sent()), [3, 9];
            case 9:
              if (!s) throw Oo("Invalid token received by host.");
              return ci(e, { token: s }), o.complete({ correlationId: n, authenticationMode: Bi }), [3, 11];
            case 10:
              return (
                (c = l.sent()),
                (u = Fo(c)),
                ci(e, { error: u, token: void 0 }),
                o.failure({ correlationId: n, error: u }),
                [3, 11]
              );
            case 11:
              return [2];
          }
        });
      });
    }
    function Xi(e) {
      return ji(this, void 0, Promise, function () {
        var t, r, n;
        return Gi(this, function (o) {
          switch (o.label) {
            case 0:
              return [
                4,
                Ji({
                  action: "getAccessTokenCookie",
                  cookieDetails: { name: (t = fi(e.options.resource)), domain: window.location.hostname },
                  frameIds: e.frameIds,
                  options: e.options,
                  origin: e.origin,
                }),
              ];
            case 1:
              if ((r = o.sent().error)) throw r;
              return (n = zi.getCookie(t)), zi.deleteCookie(t), [2, n];
          }
        });
      });
    }
    function Zi(e) {
      return ji(this, void 0, Promise, function () {
        var t, r, n;
        return Gi(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, Ji({ action: "getAccessTokenFromHost", options: e.options })];
            case 1:
              if (((t = o.sent()), (r = t.error), (n = t.token), r)) throw r;
              return [2, n];
          }
        });
      });
    }
    function $i(e) {
      var t,
        r,
        n = ra(e);
      ho.trackEvent("AuthFlowAuthFrame.getAccessTokenCookieRequest", { correlationId: n });
      var o = e.options,
        i =
          null !== (r = null === (t = null == e ? void 0 : e.cookieDetails) || void 0 === t ? void 0 : t.name) &&
          void 0 !== r
            ? r
            : fi(o.resource),
        a = zi.getCookie(i);
      zi.deleteCookie(i),
        ho.trackEvent("AuthFlowAuthFrame.getAccessTokenCookieSuccess", { correlationId: n }),
        ci(e, { token: a });
    }
    function ea(e, t) {
      ho.trackEvent("AuthFlowAuthFrame.clearCache"),
        so() &&
          (localStorage.removeItem("PowerAppsAuthFlow.AadHash"),
          localStorage.removeItem("PowerAppsAuthFlow.SessionId")),
        Hi.clearCache(),
        Co(t, e.id, {});
    }
    function ta(e) {
      ho.setSessionId(e);
      try {
        localStorage.setItem("PowerAppsAuthFlow.SessionId", e);
      } catch (e) {
        ho.trackError("AuthFlowAuthFrame.initializeAuthFlow", { message: "Unable to set sessionId in localStorage" });
      }
    }
    function ra(e) {
      var t, r;
      return null !== (r = null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.correlationId) &&
        void 0 !== r
        ? r
        : "Error retrieving correlation ID";
    }
    var na = "AuthFlowServerConfig" in window ? window.AuthFlowServerConfig : {},
      oa = na.region;
    Object(ho.initializeLogger)(oa, "PowerAppsAuthFlow"),
      (function (e) {
        ni({ hostWindow: window.parent, logger: { trackError: ho.trackError, trackEvent: ho.trackEvent } }),
          Qi("getAccessToken", Yi),
          Qi("getAccessTokenCookie", $i),
          Qi("clearCache", ea),
          (function (e) {
            Eo({ action: "frameInitialized", frameId: ai().frameId }, e);
          })(function (t) {
            try {
              var r = t.sessionId,
                n = t.tenantId,
                o = t.hostType,
                i = t.loginHint;
              if (((Bi = t.authenticationMode), r)) ta(r);
              else {
                var a = Ho();
                ta(a), ho.trackEvent("AuthFlowAuthFrame.generateSessionId", { generatedSessionId: a });
              }
              ho.trackEvent("AuthFlowAuthFrame.frameInitialized", { authenticationMode: Bi, hostType: o });
              var s = e.aadClientId,
                c = e.aadInstance,
                u = e.aadLoginResource,
                l = e.authLibrary;
              if (!s)
                return void ho.trackError("AuthFlowAuthFrame.initializeAuthFlow", { message: "Missing AAD client ID" });
              if (!c)
                return void ho.trackError("AuthFlowAuthFrame.initializeAuthFlow", { message: "Missing AAD instance" });
              if (!u)
                return void ho.trackError("AuthFlowAuthFrame.initializeAuthFlow", {
                  message: "Missing AAD login resource",
                });
              var d = "msal" === l.toLocaleLowerCase();
              (qi = window.AuthFlowServerConfig.enableMicrosoftGraphCustomScopes && Bi === uo.AuthFrame && d),
                ho.trackEvent("AuthFlowAuthFrame.initializeAuthFlow.authentication", {
                  authLibrary: l,
                  customScopesSupported: qi,
                  useMsalAuthLibrary: d,
                }),
                (Hi = (function (e, t, r, n, o, i, a) {
                  return e ? new xi(t, r, n, o, a) : new Fi({ clientId: t, instance: r, tenant: n }, o, i);
                })(d, s, c, n, u, zi, i)),
                Wi();
            } catch (e) {
              ho.trackError("AuthFlowAuthFrame.initializeAuthFlow", {
                message: "An Exception was thrown while initializing AuthFrame",
                error: JSON.stringify(e),
              }),
                Ki();
            }
          });
      })(na);
  },
]);
