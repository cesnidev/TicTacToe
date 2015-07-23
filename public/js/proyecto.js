! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = se.type(t);
        return "function" === i || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (se.isFunction(e)) return se.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return se.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (he.test(e)) return se.filter(e, t, i);
            e = se.filter(e, t)
        }
        return se.grep(t, function(t) {
            return se.inArray(t, e) >= 0 !== i
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function a(t) {
        var e = _e[t] = {};
        return se.each(t.match(be) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (fe.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
    }

    function r() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (o(), se.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Fe, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ce.test(i) ? se.parseJSON(i) : i
                } catch (s) {}
                se.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function d(t) {
        var e;
        for (e in t)
            if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, i, n) {
        if (se.acceptData(t)) {
            var s, a, o = se.expando,
                r = t.nodeType,
                l = r ? se.cache : t,
                d = r ? t[o] : t[o] && o;
            if (d && l[d] && (n || l[d].data) || void 0 !== i || "string" != typeof e) return d || (d = r ? t[o] = Y.pop() || se.guid++ : o), l[d] || (l[d] = r ? {} : {
                toJSON: se.noop
            }), ("object" == typeof e || "function" == typeof e) && (n ? l[d] = se.extend(l[d], e) : l[d].data = se.extend(l[d].data, e)), a = l[d], n || (a.data || (a.data = {}), a = a.data), void 0 !== i && (a[se.camelCase(e)] = i), "string" == typeof e ? (s = a[e], null == s && (s = a[se.camelCase(e)])) : s = a, s
        }
    }

    function u(t, e, i) {
        if (se.acceptData(t)) {
            var n, s, a = t.nodeType,
                o = a ? se.cache : t,
                r = a ? t[se.expando] : se.expando;
            if (o[r]) {
                if (e && (n = i ? o[r] : o[r].data)) {
                    se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in n ? e = [e] : (e = se.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !d(n) : !se.isEmptyObject(n)) return
                }(i || (delete o[r].data, d(o[r]))) && (a ? se.cleanData([t], !0) : ie.deleteExpando || o != o.window ? delete o[r] : o[r] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = Le.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function m(t, e) {
        var i, n, s = 0,
            a = typeof t.getElementsByTagName !== ke ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== ke ? t.querySelectorAll(e || "*") : void 0;
        if (!a)
            for (a = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || se.nodeName(n, e) ? a.push(n) : se.merge(a, m(n, e));
        return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], a) : a
    }

    function v(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type, t
    }

    function _(t) {
        var e = Ve.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) se._data(i, "globalEval", !e || se._data(e[n], "globalEval"))
    }

    function w(t, e) {
        if (1 === e.nodeType && se.hasData(t)) {
            var i, n, s, a = se._data(t),
                o = se._data(e, a),
                r = a.events;
            if (r) {
                delete o.handle, o.events = {};
                for (i in r)
                    for (n = 0, s = r[i].length; s > n; n++) se.event.add(e, i, r[i][n])
            }
            o.data && (o.data = se.extend({}, o.data))
        }
    }

    function k(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[se.expando]) {
                s = se._data(e);
                for (n in s.events) se.removeEvent(e, n, s.handle);
                e.removeAttribute(se.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, i) {
        var n, s = se(i.createElement(e)).appendTo(i.body),
            a = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : se.css(s[0], "display");
        return s.detach(), a
    }

    function F(t) {
        var e = fe,
            i = Ke[t];
        return i || (i = C(t, e), "none" !== i && i || (Je = (Je || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Je.detach()), Ke[t] = i), i
    }

    function S(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = hi.length; s--;)
            if (e = hi[s] + i, e in t) return e;
        return n
    }

    function $(t, e) {
        for (var i, n, s, a = [], o = 0, r = t.length; r > o; o++) n = t[o], n.style && (a[o] = se._data(n, "olddisplay"), i = n.style.display, e ? (a[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && $e(n) && (a[o] = se._data(n, "olddisplay", F(n.nodeName)))) : (s = $e(n), (i && "none" !== i || !s) && se._data(n, "olddisplay", s ? i : se.css(n, "display"))));
        for (o = 0; r > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? a[o] || "" : "none"));
        return t
    }

    function D(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function A(t, e, i, n, s) {
        for (var a = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === i && (o += se.css(t, i + Te[a], !0, s)), n ? ("content" === i && (o -= se.css(t, "padding" + Te[a], !0, s)), "margin" !== i && (o -= se.css(t, "border" + Te[a] + "Width", !0, s))) : (o += se.css(t, "padding" + Te[a], !0, s), "padding" !== i && (o += se.css(t, "border" + Te[a] + "Width", !0, s)));
        return o
    }

    function E(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            a = ti(t),
            o = ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, a);
        if (0 >= s || null == s) {
            if (s = ei(t, e, a), (0 > s || null == s) && (s = t.style[e]), ni.test(s)) return s;
            n = o && (ie.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + A(t, e, i || (o ? "border" : "content"), n, a) + "px"
    }

    function j(t, e, i, n, s) {
        return new j.prototype.init(t, e, i, n, s)
    }

    function N() {
        return setTimeout(function() {
            pi = void 0
        }), pi = se.now()
    }

    function q(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Te[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function H(t, e, i) {
        for (var n, s = (bi[e] || []).concat(bi["*"]), a = 0, o = s.length; o > a; a++)
            if (n = s[a].call(i, e, t)) return n
    }

    function L(t, e, i) {
        var n, s, a, o, r, l, d, c, u = this,
            h = {},
            p = t.style,
            f = t.nodeType && $e(t),
            g = se._data(t, "fxshow");
        i.queue || (r = se._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
            r.unqueued || l()
        }), r.unqueued++, u.always(function() {
            u.always(function() {
                r.unqueued--, se.queue(t, "fx").length || r.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], d = se.css(t, "display"), c = "none" === d ? se._data(t, "olddisplay") || F(t.nodeName) : d, "inline" === c && "none" === se.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== F(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], gi.exec(s)) {
                if (delete e[n], a = a || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    f = !0
                }
                h[n] = g && g[n] || se.style(t, n)
            } else d = void 0;
        if (se.isEmptyObject(h)) "inline" === ("none" === d ? F(t.nodeName) : d) && (p.display = d);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = se._data(t, "fxshow", {}), a && (g.hidden = !f), f ? se(t).show() : u.done(function() {
                se(t).hide()
            }), u.done(function() {
                var e;
                se._removeData(t, "fxshow");
                for (e in h) se.style(t, e, h[e])
            });
            for (n in h) o = H(f ? g[n] : 0, n, u), n in g || (g[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function M(t, e) {
        var i, n, s, a, o;
        for (i in t)
            if (n = se.camelCase(i), s = e[n], a = t[i], se.isArray(a) && (s = a[1], a = t[i] = a[0]), i !== n && (t[n] = a, delete t[i]), o = se.cssHooks[n], o && "expand" in o) {
                a = o.expand(a), delete t[n];
                for (i in a) i in t || (t[i] = a[i], e[i] = s)
            } else e[n] = s
    }

    function z(t, e, i) {
        var n, s, a = 0,
            o = yi.length,
            r = se.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = pi || N(), i = Math.max(0, d.startTime + d.duration - e), n = i / d.duration || 0, a = 1 - n, o = 0, l = d.tweens.length; l > o; o++) d.tweens[o].run(a);
                return r.notifyWith(t, [d, a, i]), 1 > a && l ? i : (r.resolveWith(t, [d]), !1)
            },
            d = r.promise({
                elem: t,
                props: se.extend({}, e),
                opts: se.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: pi || N(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = se.Tween(t, d.opts, e, i, d.opts.specialEasing[e] || d.opts.easing);
                    return d.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? d.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) d.tweens[i].run(1);
                    return e ? r.resolveWith(t, [d, e]) : r.rejectWith(t, [d, e]), this
                }
            }),
            c = d.props;
        for (M(c, d.opts.specialEasing); o > a; a++)
            if (n = yi[a].call(d, t, c, d.opts)) return n;
        return se.map(c, H, d), se.isFunction(d.opts.start) && d.opts.start.call(t, d), se.fx.timer(se.extend(l, {
            elem: t,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function P(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                a = e.toLowerCase().match(be) || [];
            if (se.isFunction(i))
                for (; n = a[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function O(t, e, i, n) {
        function s(r) {
            var l;
            return a[r] = !0, se.each(t[r] || [], function(t, r) {
                var d = r(e, i, n);
                return "string" != typeof d || o || a[d] ? o ? !(l = d) : void 0 : (e.dataTypes.unshift(d), s(d), !1)
            }), l
        }
        var a = {},
            o = t === Wi;
        return s(e.dataTypes[0]) || !a["*"] && s("*")
    }

    function I(t, e) {
        var i, n, s = se.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && se.extend(!0, t, i), t
    }

    function R(t, e, i) {
        for (var n, s, a, o, r = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (o in r)
                if (r[o] && r[o].test(s)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) a = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                n || (n = o)
            }
            a = a || n
        }
        return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0
    }

    function W(t, e, i, n) {
        var s, a, o, r, l, d = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) d[o.toLowerCase()] = t.converters[o];
        for (a = c.shift(); a;)
            if (t.responseFields[a] && (i[t.responseFields[a]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = c.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (o = d[l + " " + a] || d["* " + a], !o)
                for (s in d)
                    if (r = s.split(" "), r[1] === a && (o = d[l + " " + r[0]] || d["* " + r[0]])) {
                        o === !0 ? o = d[s] : d[s] !== !0 && (a = r[0], c.unshift(r[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: o ? u : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function B(t, e, i, n) {
        var s;
        if (se.isArray(e)) se.each(e, function(e, s) {
            i || Vi.test(t) ? n(t, s) : B(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== se.type(e)) n(t, e);
        else
            for (s in e) B(t + "[" + s + "]", e[s], i, n)
    }

    function X() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function Q() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function V(t) {
        return se.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var Y = [],
        U = Y.slice,
        Z = Y.concat,
        G = Y.push,
        J = Y.indexOf,
        K = {},
        te = K.toString,
        ee = K.hasOwnProperty,
        ie = {},
        ne = "1.11.1",
        se = function(t, e) {
            return new se.fn.init(t, e)
        },
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oe = /^-ms-/,
        re = /-([\da-z])/gi,
        le = function(t, e) {
            return e.toUpperCase()
        };
    se.fn = se.prototype = {
        jquery: ne,
        constructor: se,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : U.call(this)
        },
        pushStack: function(t) {
            var e = se.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return se.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(se.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: Y.sort,
        splice: Y.splice
    }, se.extend = se.fn.extend = function() {
        var t, e, i, n, s, a, o = arguments[0] || {},
            r = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof o && (d = o, o = arguments[r] || {}, r++), "object" == typeof o || se.isFunction(o) || (o = {}), r === l && (o = this, r--); l > r; r++)
            if (null != (s = arguments[r]))
                for (n in s) t = o[n], i = s[n], o !== i && (d && i && (se.isPlainObject(i) || (e = se.isArray(i))) ? (e ? (e = !1, a = t && se.isArray(t) ? t : []) : a = t && se.isPlainObject(t) ? t : {}, o[n] = se.extend(d, a, i)) : void 0 !== i && (o[n] = i));
        return o
    }, se.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === se.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === se.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !se.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && se.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(oe, "ms-").replace(re, le)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var s, a = 0,
                o = t.length,
                r = i(t);
            if (n) {
                if (r)
                    for (; o > a && (s = e.apply(t[a], n), s !== !1); a++);
                else
                    for (a in t)
                        if (s = e.apply(t[a], n), s === !1) break
            } else if (r)
                for (; o > a && (s = e.call(t[a], a, t[a]), s !== !1); a++);
            else
                for (a in t)
                    if (s = e.call(t[a], a, t[a]), s === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ae, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? se.merge(n, "string" == typeof t ? [t] : t) : G.call(n, t)), n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (J) return J.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n, s = [], a = 0, o = t.length, r = !i; o > a; a++) n = !e(t[a], a), n !== r && s.push(t[a]);
            return s
        },
        map: function(t, e, n) {
            var s, a = 0,
                o = t.length,
                r = i(t),
                l = [];
            if (r)
                for (; o > a; a++) s = e(t[a], a, n), null != s && l.push(s);
            else
                for (a in t) s = e(t[a], a, n), null != s && l.push(s);
            return Z.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), se.isFunction(t) ? (i = U.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(U.call(arguments)))
            }, n.guid = t.guid = t.guid || se.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        K["[object " + e + "]"] = e.toLowerCase()
    });
    var de = function(t) {
        function e(t, e, i, n) {
            var s, a, o, r, l, d, u, p, f, g;
            if ((e ? e.ownerDocument || e : O) !== j && E(e), e = e || j, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (r = e.nodeType) && 9 !== r) return [];
            if (q && !n) {
                if (s = ye.exec(t))
                    if (o = s[1]) {
                        if (9 === r) {
                            if (a = e.getElementById(o), !a || !a.parentNode) return i;
                            if (a.id === o) return i.push(a), i
                        } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(o)) && z(e, a) && a.id === o) return i.push(a), i
                    } else {
                        if (s[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = s[3]) && x.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(o)), i
                    }
                if (x.qsa && (!H || !H.test(t))) {
                    if (p = u = P, f = e, g = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                        for (d = F(t), (u = e.getAttribute("id")) ? p = u.replace(_e, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = d.length; l--;) d[l] = p + h(d[l]);
                        f = be.test(t) && c(e.parentNode) || e, g = d.join(",")
                    }
                    if (g) try {
                        return K.apply(i, f.querySelectorAll(g)), i
                    } catch (m) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[P] = !0, t
        }

        function s(t) {
            var e = j.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function a(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
        }

        function o(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function r(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function d(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, a = t([], i.length, e), o = a.length; o--;) i[s = a[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== V && t
        }

        function u() {}

        function h(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                a = R++;
            return e.first ? function(e, i, a) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, a)
            } : function(e, i, o) {
                var r, l, d = [I, a];
                if (o) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, o)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) {
                            if (l = e[P] || (e[P] = {}), (r = l[n]) && r[0] === I && r[1] === a) return d[2] = r[2];
                            if (l[n] = d, d[2] = t(e, i, o)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var s = 0, a = i.length; a > s; s++) e(t, i[s], n);
            return n
        }

        function m(t, e, i, n, s) {
            for (var a, o = [], r = 0, l = t.length, d = null != e; l > r; r++)(a = t[r]) && (!i || i(a, n, s)) && (o.push(a), d && e.push(r));
            return o
        }

        function v(t, e, i, s, a, o) {
            return s && !s[P] && (s = v(s)), a && !a[P] && (a = v(a, o)), n(function(n, o, r, l) {
                var d, c, u, h = [],
                    p = [],
                    f = o.length,
                    v = n || g(e || "*", r.nodeType ? [r] : r, []),
                    y = !t || !n && e ? v : m(v, h, t, r, l),
                    b = i ? a || (n ? t : f || s) ? [] : o : y;
                if (i && i(y, b, r, l), s)
                    for (d = m(b, p), s(d, [], r, l), c = d.length; c--;)(u = d[c]) && (b[p[c]] = !(y[p[c]] = u));
                if (n) {
                    if (a || t) {
                        if (a) {
                            for (d = [], c = b.length; c--;)(u = b[c]) && d.push(y[c] = u);
                            a(null, b = [], d, l)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (d = a ? ee.call(n, u) : h[c]) > -1 && (n[d] = !(o[d] = u))
                    }
                } else b = m(b === o ? b.splice(f, b.length) : b), a ? a(null, o, b, l) : K.apply(o, b)
            })
        }

        function y(t) {
            for (var e, i, n, s = t.length, a = w.relative[t[0].type], o = a || w.relative[" "], r = a ? 1 : 0, l = p(function(t) {
                    return t === e
                }, o, !0), d = p(function(t) {
                    return ee.call(e, t) > -1
                }, o, !0), c = [function(t, i, n) {
                    return !a && (n || i !== $) || ((e = i).nodeType ? l(t, i, n) : d(t, i, n))
                }]; s > r; r++)
                if (i = w.relative[t[r].type]) c = [p(f(c), i)];
                else {
                    if (i = w.filter[t[r].type].apply(null, t[r].matches), i[P]) {
                        for (n = ++r; s > n && !w.relative[t[n].type]; n++);
                        return v(r > 1 && f(c), r > 1 && h(t.slice(0, r - 1).concat({
                            value: " " === t[r - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > r && y(t.slice(r, n)), s > n && y(t = t.slice(n)), s > n && h(t))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function b(t, i) {
            var s = i.length > 0,
                a = t.length > 0,
                o = function(n, o, r, l, d) {
                    var c, u, h, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = $,
                        b = n || a && w.find.TAG("*", d),
                        _ = I += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (d && ($ = o !== j && o); f !== x && null != (c = b[f]); f++) {
                        if (a && c) {
                            for (u = 0; h = t[u++];)
                                if (h(c, o, r)) {
                                    l.push(c);
                                    break
                                }
                            d && (I = _)
                        }
                        s && ((c = !h && c) && p--, n && g.push(c))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; h = i[u++];) h(g, v, o, r);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = G.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), d && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return d && (I = _, $ = y), g
                };
            return s ? n(o) : o
        }
        var _, x, w, k, C, F, S, T, $, D, A, E, j, N, q, H, L, M, z, P = "sizzle" + -new Date,
            O = t.document,
            I = 0,
            R = 0,
            W = i(),
            B = i(),
            X = i(),
            Q = function(t, e) {
                return t === e && (A = !0), 0
            },
            V = "undefined",
            Y = 1 << 31,
            U = {}.hasOwnProperty,
            Z = [],
            G = Z.pop,
            J = Z.push,
            K = Z.push,
            te = Z.slice,
            ee = Z.indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ae = se.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + se + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ne + "*\\]",
            re = ":(" + se + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            de = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(re),
            pe = new RegExp("^" + ae + "$"),
            fe = {
                ID: new RegExp("^#(" + se + ")"),
                CLASS: new RegExp("^\\.(" + se + ")"),
                TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ie + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            _e = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            K.apply(Z = te.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
        } catch (ke) {
            K = {
                apply: Z.length ? function(t, e) {
                    J.apply(t, te.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        x = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, E = e.setDocument = function(t) {
            var e, i = t ? t.ownerDocument || t : O,
                n = i.defaultView;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, N = i.documentElement, q = !C(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                E()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                E()
            })), x.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = s(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), x.getById = s(function(t) {
                return N.appendChild(t).id = P, !i.getElementsByName || !i.getElementsByName(P).length
            }), x.getById ? (w.find.ID = function(t, e) {
                if (typeof e.getElementById !== V && q) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(xe, we);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(xe, we);
                return function(t) {
                    var i = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), w.find.TAG = x.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    s = 0,
                    a = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = a[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return a
            }, w.find.CLASS = x.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== V && q ? e.getElementsByClassName(t) : void 0
            }, L = [], H = [], (x.qsa = ve.test(i.querySelectorAll)) && (s(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
            }), s(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (x.matchesSelector = ve.test(M = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(t) {
                x.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), L.push("!=", re)
            }), H = H.length && new RegExp(H.join("|")), L = L.length && new RegExp(L.join("|")), e = ve.test(N.compareDocumentPosition), z = e || ve.test(N.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Q = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === O && z(O, t) ? -1 : e === i || e.ownerDocument === O && z(O, e) ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var n, s = 0,
                    a = t.parentNode,
                    r = e.parentNode,
                    l = [t],
                    d = [e];
                if (!a || !r) return t === i ? -1 : e === i ? 1 : a ? -1 : r ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0;
                if (a === r) return o(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) d.unshift(n);
                for (; l[s] === d[s];) s++;
                return s ? o(l[s], d[s]) : l[s] === O ? -1 : d[s] === O ? 1 : 0
            }, i) : j
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== j && E(t), i = i.replace(ue, "='$1']"), !(!x.matchesSelector || !q || L && L.test(i) || H && H.test(i))) try {
                var n = M.call(t, i);
                if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (s) {}
            return e(i, j, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== j && E(t), z(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== j && E(t);
            var i = w.attrHandle[e.toLowerCase()],
                n = i && U.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !q) : void 0;
            return void 0 !== n ? n : x.attributes || !q ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (A = !x.detectDuplicates, D = !x.sortStable && t.slice(0), t.sort(Q), A) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return D = null, t
        }, k = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += k(e);
            return i
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xe, we), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && he.test(i) && (e = F(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xe, we).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var a = e.attr(s, t);
                        return null == a ? "!=" === i : i ? (a += "", "=" === i ? a === n : "!=" === i ? a !== n : "^=" === i ? n && 0 === a.indexOf(n) : "*=" === i ? n && a.indexOf(n) > -1 : "$=" === i ? n && a.slice(-n.length) === n : "~=" === i ? (" " + a + " ").indexOf(n) > -1 : "|=" === i ? a === n || a.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var a = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        r = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var d, c, u, h, p, f, g = a !== o ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = r && e.nodeName.toLowerCase(),
                            y = !l && !r;
                        if (m) {
                            if (a) {
                                for (; g;) {
                                    for (u = e; u = u[g];)
                                        if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                for (c = m[P] || (m[P] = {}), d = c[t] || [], p = d[0] === I && d[1], h = d[0] === I && d[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (h = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++h && u === e) {
                                        c[t] = [I, p, h];
                                        break
                                    }
                            } else if (y && (d = (e[P] || (e[P] = {}))[t]) && d[0] === I) h = d[1];
                            else
                                for (;
                                    (u = ++p && u && u[g] || (h = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[P] || (u[P] = {}))[t] = [I, h]), u !== e)););
                            return h -= s, h === n || h % n === 0 && h / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return a[P] ? a(i) : a.length > 1 ? (s = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = a(t, i), o = s.length; o--;) n = ee.call(t, s[o]), t[n] = !(e[n] = s[o])
                    }) : function(t) {
                        return a(t, 0, s)
                    }) : a
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = S(t.replace(le, "$1"));
                    return s[P] ? n(function(t, e, i, n) {
                        for (var a, o = s(t, null, n, []), r = t.length; r--;)(a = o[r]) && (t[r] = !(e[r] = a))
                    }) : function(t, n, a) {
                        return e[0] = t, s(e, null, a, i), !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, we).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = q ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === N
                },
                focus: function(t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(t, e) {
                    return [e - 1]
                }),
                eq: d(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: d(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: d(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: d(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: d(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[_] = r(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) w.pseudos[_] = l(_);
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u, F = e.tokenize = function(t, i) {
            var n, s, a, o, r, l, d, c = B[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (r = t, l = [], d = w.preFilter; r;) {
                (!n || (s = de.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(a = [])), n = !1, (s = ce.exec(r)) && (n = s.shift(), a.push({
                    value: n,
                    type: s[0].replace(le, " ")
                }), r = r.slice(n.length));
                for (o in w.filter) !(s = fe[o].exec(r)) || d[o] && !(s = d[o](s)) || (n = s.shift(), a.push({
                    value: n,
                    type: o,
                    matches: s
                }), r = r.slice(n.length));
                if (!n) break
            }
            return i ? r.length : r ? e.error(t) : B(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                a = X[t + " "];
            if (!a) {
                for (e || (e = F(t)), i = e.length; i--;) a = y(e[i]), a[P] ? n.push(a) : s.push(a);
                a = X(t, b(s, n)), a.selector = t
            }
            return a
        }, T = e.select = function(t, e, i, n) {
            var s, a, o, r, l, d = "function" == typeof t && t,
                u = !n && F(t = d.selector || t);
            if (i = i || [], 1 === u.length) {
                if (a = u[0] = u[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && x.getById && 9 === e.nodeType && q && w.relative[a[1].type]) {
                    if (e = (w.find.ID(o.matches[0].replace(xe, we), e) || [])[0], !e) return i;
                    d && (e = e.parentNode), t = t.slice(a.shift().value.length)
                }
                for (s = fe.needsContext.test(t) ? 0 : a.length; s-- && (o = a[s], !w.relative[r = o.type]);)
                    if ((l = w.find[r]) && (n = l(o.matches[0].replace(xe, we), be.test(a[0].type) && c(e.parentNode) || e))) {
                        if (a.splice(s, 1), t = n.length && h(a), !t) return K.apply(i, n), i;
                        break
                    }
            }
            return (d || S(t, u))(n, e, !q, i, be.test(t) && c(e.parentNode) || e), i
        }, x.sortStable = P.split("").sort(Q).join("") === P, x.detectDuplicates = !!A, E(), x.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(j.createElement("div"))
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || a("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function(t) {
            return null == t.getAttribute("disabled")
        }) || a(ie, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    se.find = de, se.expr = de.selectors, se.expr[":"] = se.expr.pseudos, se.unique = de.uniqueSort, se.text = de.getText, se.isXMLDoc = de.isXML, se.contains = de.contains;
    var ce = se.expr.match.needsContext,
        ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    se.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? se.find.matchesSelector(n, t) ? [n] : [] : se.find.matches(t, se.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, se.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                s = n.length;
            if ("string" != typeof t) return this.pushStack(se(t).filter(function() {
                for (e = 0; s > e; e++)
                    if (se.contains(n[e], this)) return !0
            }));
            for (e = 0; s > e; e++) se.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? se.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && ce.test(t) ? se(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = se.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), ue.test(i[1]) && se.isPlainObject(e))
                        for (i in e) se.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pe.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = fe, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
        };
    me.prototype = se.fn, pe = se(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    se.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !se(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), se.fn.extend({
        has: function(t) {
            var e, i = se(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (se.contains(this, i[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, a = [], o = ce.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, t))) {
                        a.push(i);
                        break
                    }
            return this.pushStack(a.length > 1 ? se.unique(a) : a)
        },
        index: function(t) {
            return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), se.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return se.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return se.dir(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return se.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return se.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return se.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return se.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return se.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return se.sibling(t.firstChild)
        },
        contents: function(t) {
            return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : se.merge([], t.childNodes)
        }
    }, function(t, e) {
        se.fn[t] = function(i, n) {
            var s = se.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = se.filter(n, s)), this.length > 1 && (ye[t] || (s = se.unique(s)), ve.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var be = /\S+/g,
        _e = {};
    se.Callbacks = function(t) {
        t = "string" == typeof t ? _e[t] || a(t) : se.extend({}, t);
        var e, i, n, s, o, r, l = [],
            d = !t.once && [],
            c = function(a) {
                for (i = t.memory && a, n = !0, o = r || 0, r = 0, s = l.length, e = !0; l && s > o; o++)
                    if (l[o].apply(a[0], a[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                e = !1, l && (d ? d.length && c(d.shift()) : i ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function a(e) {
                            se.each(e, function(e, i) {
                                var n = se.type(i);
                                "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && a(i)
                            })
                        }(arguments), e ? s = l.length : i && (r = n, c(i))
                    }
                    return this
                },
                remove: function() {
                    return l && se.each(arguments, function(t, i) {
                        for (var n;
                            (n = se.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (s >= n && s--, o >= n && o--)
                    }), this
                },
                has: function(t) {
                    return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = d = i = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return d = void 0, i || u.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(t, i) {
                    return !l || n && !d || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? d.push(i) : c(i)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, se.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", se.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", se.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", se.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return se.Deferred(function(i) {
                            se.each(e, function(e, a) {
                                var o = se.isFunction(t[e]) && t[e];
                                s[a[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && se.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? se.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, se.each(e, function(t, a) {
                var o = a[2],
                    r = a[3];
                n[a[1]] = o.add, r && o.add(function() {
                    i = r
                }, e[1 ^ t][2].disable, e[2][2].lock), s[a[0]] = function() {
                    return s[a[0] + "With"](this === s ? n : this, arguments), this
                }, s[a[0] + "With"] = o.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                a = U.call(arguments),
                o = a.length,
                r = 1 !== o || t && se.isFunction(t.promise) ? o : 0,
                l = 1 === r ? t : se.Deferred(),
                d = function(t, i, n) {
                    return function(s) {
                        i[t] = this, n[t] = arguments.length > 1 ? U.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); o > s; s++) a[s] && se.isFunction(a[s].promise) ? a[s].promise().done(d(s, n, a)).fail(l.reject).progress(d(s, i, e)) : --r;
            return r || l.resolveWith(n, a), l.promise()
        }
    });
    var xe;
    se.fn.ready = function(t) {
        return se.ready.promise().done(t), this
    }, se.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? se.readyWait++ : se.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--se.readyWait : !se.isReady) {
                if (!fe.body) return setTimeout(se.ready);
                se.isReady = !0, t !== !0 && --se.readyWait > 0 || (xe.resolveWith(fe, [se]), se.fn.triggerHandler && (se(fe).triggerHandler("ready"), se(fe).off("ready")))
            }
        }
    }), se.ready.promise = function(e) {
        if (!xe)
            if (xe = se.Deferred(), "complete" === fe.readyState) setTimeout(se.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1);
        else {
            fe.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
            var i = !1;
            try {
                i = null == t.frameElement && fe.documentElement
            } catch (n) {}
            i && i.doScroll && ! function s() {
                if (!se.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(s, 50)
                    }
                    o(), se.ready()
                }
            }()
        }
        return xe.promise(e)
    };
    var we, ke = "undefined";
    for (we in se(ie)) break;
    ie.ownLast = "0" !== we, ie.inlineBlockNeedsLayout = !1, se(function() {
            var t, e, i, n;
            i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var t = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ie.deleteExpando = !1
                }
            }
            t = null
        }(), se.acceptData = function(t) {
            var e = se.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fe = /([A-Z])/g;
    se.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando], !!t && !d(t)
        },
        data: function(t, e, i) {
            return c(t, e, i)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }), se.fn.extend({
        data: function(t, e) {
            var i, n, s, a = this[0],
                o = a && a.attributes;
            if (void 0 === t) {
                if (this.length && (s = se.data(a), 1 === a.nodeType && !se._data(a, "parsedAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = se.camelCase(n.slice(5)), l(a, n, s[n])));
                    se._data(a, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                se.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                se.data(this, t, e)
            }) : a ? l(a, t, se.data(a, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                se.removeData(this, t)
            })
        }
    }), se.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = se._data(t, e), i && (!n || se.isArray(i) ? n = se._data(t, e, se.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = se.queue(t, e),
                n = i.length,
                s = i.shift(),
                a = se._queueHooks(t, e),
                o = function() {
                    se.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete a.stop, s.call(t, o, a)), !n && a && a.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return se._data(t, i) || se._data(t, i, {
                empty: se.Callbacks("once memory").add(function() {
                    se._removeData(t, e + "queue"), se._removeData(t, i)
                })
            })
        }
    }), se.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? se.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = se.queue(this, t, e);
                se._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && se.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                se.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = se.Deferred(),
                a = this,
                o = this.length,
                r = function() {
                    --n || s.resolveWith(a, [a])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = se._data(a[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
            return r(), s.promise(e)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Te = ["Top", "Right", "Bottom", "Left"],
        $e = function(t, e) {
            return t = e || t, "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
        },
        De = se.access = function(t, e, i, n, s, a, o) {
            var r = 0,
                l = t.length,
                d = null == i;
            if ("object" === se.type(i)) {
                s = !0;
                for (r in i) se.access(t, e, r, i[r], !0, a, o)
            } else if (void 0 !== n && (s = !0, se.isFunction(n) || (o = !0), d && (o ? (e.call(t, n), e = null) : (d = e, e = function(t, e, i) {
                    return d.call(se(t), i)
                })), e))
                for (; l > r; r++) e(t[r], i, o ? n : n.call(t[r], r, e(t[r], i)));
            return s ? t : d ? e.call(t) : l ? e(t[0], i) : a
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = fe.createElement("input"),
            e = fe.createElement("div"),
            i = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, i, n = fe.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Ee = /^(?:input|select|textarea)$/i,
        je = /^key/,
        Ne = /^(?:mouse|pointer|contextmenu)|click/,
        qe = /^(?:focusinfocus|focusoutblur)$/,
        He = /^([^.]*)(?:\.(.+)|)$/;
    se.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var a, o, r, l, d, c, u, h, p, f, g, m = se._data(t);
            if (m) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = se.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                        return typeof se === ke || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(be) || [""], r = e.length; r--;) a = He.exec(e[r]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (d = se.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, d = se.event.special[p] || {}, u = se.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && se.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, d.setup && d.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), se.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var a, o, r, l, d, c, u, h, p, f, g, m = se.hasData(t) && se._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(be) || [""], d = e.length; d--;)
                    if (r = He.exec(e[d]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p) {
                        for (u = se.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, h = c[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = h.length; a--;) o = h[a], !s && g !== o.origType || i && i.guid !== o.guid || r && !r.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (h.splice(a, 1), o.selector && h.delegateCount--, u.remove && u.remove.call(t, o));
                        l && !h.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || se.removeEvent(t, p, m.handle), delete c[p])
                    } else
                        for (p in c) se.event.remove(t, p + e[d], i, n, !0);
                se.isEmptyObject(c) && (delete m.handle, se._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var a, o, r, l, d, c, u, h = [n || fe],
                p = ee.call(e, "type") ? e.type : e,
                f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !qe.test(p + se.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[se.expando] ? e : new se.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : se.makeArray(i, [e]), d = se.event.special[p] || {}, s || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                if (!s && !d.noBubble && !se.isWindow(n)) {
                    for (l = d.delegateType || p, qe.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), c = r;
                    c === (n.ownerDocument || fe) && h.push(c.defaultView || c.parentWindow || t)
                }
                for (u = 0;
                    (r = h[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : d.bindType || p, a = (se._data(r, "events") || {})[e.type] && se._data(r, "handle"), a && a.apply(r, i), a = o && r[o], a && a.apply && se.acceptData(r) && (e.result = a.apply(r, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!d._default || d._default.apply(h.pop(), i) === !1) && se.acceptData(n) && o && n[p] && !se.isWindow(n)) {
                    c = n[o], c && (n[o] = null), se.event.triggered = p;
                    try {
                        n[p]()
                    } catch (g) {}
                    se.event.triggered = void 0, c && (n[o] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = se.event.fix(t);
            var e, i, n, s, a, o = [],
                r = U.call(arguments),
                l = (se._data(this, "events") || {})[t.type] || [],
                d = se.event.special[t.type] || {};
            if (r[0] = t, t.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, t) !== !1) {
                for (o = se.event.handlers.call(this, t, l), e = 0;
                    (s = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, a = 0;
                        (n = s.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((se.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, a, o = [],
                r = e.delegateCount,
                l = t.target;
            if (r && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], a = 0; r > a; a++) n = e[a], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? se(i, this).index(l) >= 0 : se.find(i, this, null, [l]).length), s[i] && s.push(n);
                        s.length && o.push({
                            elem: l,
                            handlers: s
                        })
                    }
            return r < e.length && o.push({
                elem: this,
                handlers: e.slice(r)
            }), o
        },
        fix: function(t) {
            if (t[se.expando]) return t;
            var e, i, n, s = t.type,
                a = t,
                o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = Ne.test(s) ? this.mouseHooks : je.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new se.Event(a), e = n.length; e--;) i = n[e], t[i] = a[i];
            return t.target || (t.target = a.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, a) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, a = e.button,
                    o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === a || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return se.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = se.extend(new se.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? se.event.trigger(s, null, e) : se.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, se.removeEvent = fe.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === ke && (t[n] = null), t.detachEvent(n, i))
    }, se.Event = function(t, e) {
        return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(t, e)
    }, se.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, se.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        se.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    a = t.handleObj;
                return (!s || s !== n && !se.contains(n, s)) && (t.type = a.origType, i = a.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ie.submitBubbles || (se.event.special.submit = {
        setup: function() {
            return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    i = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form : void 0;
                i && !se._data(i, "submitBubbles") && (se.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), se._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (se.event.special.change = {
        setup: function() {
            return Ee.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), se.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), se.event.simulate("change", this, t, !0)
            })), !1) : void se.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ee.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
                }), se._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return se.event.remove(this, "._change"), !Ee.test(this.nodeName)
        }
    }), ie.focusinBubbles || se.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            se.event.simulate(e, t.target, se.event.fix(t), !0)
        };
        se.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = se._data(n, e);
                s || n.addEventListener(t, i, !0), se._data(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = se._data(n, e) - 1;
                s ? se._data(n, e, s) : (n.removeEventListener(t, i, !0), se._removeData(n, e))
            }
        }
    }), se.fn.extend({
        on: function(t, e, i, n, s) {
            var a, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (a in t) this.on(a, e, i, t[a], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === s && (o = n, n = function(t) {
                return se().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = se.guid++)), this.each(function() {
                se.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, se(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                se.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                se.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? se.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Me = / jQuery\d+="(?:null|\d+)"/g,
        ze = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
        Pe = /^\s+/,
        Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        Re = /<tbody/i,
        We = /<|&#?\w+;/,
        Be = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ze = g(fe),
        Ge = Ze.appendChild(fe.createElement("div"));
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td, se.extend({
        clone: function(t, e, i) {
            var n, s, a, o, r, l = se.contains(t.ownerDocument, t);
            if (ie.html5Clone || se.isXMLDoc(t) || !ze.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (Ge.innerHTML = t.outerHTML, Ge.removeChild(a = Ge.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t)))
                for (n = m(a), r = m(t), o = 0; null != (s = r[o]); ++o) n[o] && k(s, n[o]);
            if (e)
                if (i)
                    for (r = r || m(t), n = n || m(a), o = 0; null != (s = r[o]); o++) w(s, n[o]);
                else w(t, a);
            return n = m(a, "script"), n.length > 0 && x(n, !l && m(t, "script")), n = r = s = null, a
        },
        buildFragment: function(t, e, i, n) {
            for (var s, a, o, r, l, d, c, u = t.length, h = g(e), p = [], f = 0; u > f; f++)
                if (a = t[f], a || 0 === a)
                    if ("object" === se.type(a)) se.merge(p, a.nodeType ? [a] : a);
                    else if (We.test(a)) {
                for (r = r || h.appendChild(e.createElement("div")), l = (Ie.exec(a) || ["", ""])[1].toLowerCase(), c = Ue[l] || Ue._default, r.innerHTML = c[1] + a.replace(Oe, "<$1></$2>") + c[2], s = c[0]; s--;) r = r.lastChild;
                if (!ie.leadingWhitespace && Pe.test(a) && p.push(e.createTextNode(Pe.exec(a)[0])), !ie.tbody)
                    for (a = "table" !== l || Re.test(a) ? "<table>" !== c[1] || Re.test(a) ? 0 : r : r.firstChild, s = a && a.childNodes.length; s--;) se.nodeName(d = a.childNodes[s], "tbody") && !d.childNodes.length && a.removeChild(d);
                for (se.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                r = h.lastChild
            } else p.push(e.createTextNode(a));
            for (r && h.removeChild(r), ie.appendChecked || se.grep(m(p, "input"), v), f = 0; a = p[f++];)
                if ((!n || -1 === se.inArray(a, n)) && (o = se.contains(a.ownerDocument, a), r = m(h.appendChild(a), "script"), o && x(r), i))
                    for (s = 0; a = r[s++];) Qe.test(a.type || "") && i.push(a);
            return r = null, h
        },
        cleanData: function(t, e) {
            for (var i, n, s, a, o = 0, r = se.expando, l = se.cache, d = ie.deleteExpando, c = se.event.special; null != (i = t[o]); o++)
                if ((e || se.acceptData(i)) && (s = i[r], a = s && l[s])) {
                    if (a.events)
                        for (n in a.events) c[n] ? se.event.remove(i, n) : se.removeEvent(i, n, a.handle);
                    l[s] && (delete l[s], d ? delete i[r] : typeof i.removeAttribute !== ke ? i.removeAttribute(r) : i[r] = null, Y.push(s))
                }
        }
    }), se.fn.extend({
        text: function(t) {
            return De(this, function(t) {
                return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? se.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || se.cleanData(m(i)), i.parentNode && (e && se.contains(i.ownerDocument, i) && x(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && se.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && se.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return se.clone(this, t, e)
            })
        },
        html: function(t) {
            return De(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Me, "") : void 0;
                if (!("string" != typeof t || Be.test(t) || !ie.htmlSerialize && ze.test(t) || !ie.leadingWhitespace && Pe.test(t) || Ue[(Ie.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Oe, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (se.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, se.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Z.apply([], t);
            var i, n, s, a, o, r, l = 0,
                d = this.length,
                c = this,
                u = d - 1,
                h = t[0],
                p = se.isFunction(h);
            if (p || d > 1 && "string" == typeof h && !ie.checkClone && Xe.test(h)) return this.each(function(i) {
                var n = c.eq(i);
                p && (t[0] = h.call(this, i, n.html())), n.domManip(t, e)
            });
            if (d && (r = se.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                for (a = se.map(m(r, "script"), b), s = a.length; d > l; l++) n = r, l !== u && (n = se.clone(n, !0, !0), s && se.merge(a, m(n, "script"))), e.call(this[l], n, l);
                if (s)
                    for (o = a[a.length - 1].ownerDocument, se.map(a, _), l = 0; s > l; l++) n = a[l], Qe.test(n.type || "") && !se._data(n, "globalEval") && se.contains(o, n) && (n.src ? se._evalUrl && se._evalUrl(n.src) : se.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ye, "")));
                r = i = null
            }
            return this
        }
    }), se.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        se.fn[t] = function(t) {
            for (var i, n = 0, s = [], a = se(t), o = a.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), se(a[n])[e](i), G.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Je, Ke = {};
    ! function() {
        var t;
        ie.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var ti, ei, ii = /^margin/,
        ni = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        si = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ei = function(t, e, i) {
            var n, s, a, o, r = t.style;
            return i = i || ti(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || se.contains(t.ownerDocument, t) || (o = se.style(t, e)), ni.test(o) && ii.test(e) && (n = r.width, s = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = i.width, r.width = n, r.minWidth = s, r.maxWidth = a)), void 0 === o ? o : o + ""
        }) : fe.documentElement.currentStyle && (ti = function(t) {
            return t.currentStyle
        }, ei = function(t, e, i) {
            var n, s, a, o, r = t.style;
            return i = i || ti(t), o = i ? i[e] : void 0, null == o && r && r[e] && (o = r[e]), ni.test(o) && !si.test(e) && (n = r.left, s = t.runtimeStyle, a = s && s.left, a && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : o, o = r.pixelLeft + "px", r.left = n, a && (s.left = a)), void 0 === o ? o : o + "" || "auto"
        }),
        function() {
            function e() {
                var e, i, n, s;
                i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = o = !1, l = !0, t.getComputedStyle && (a = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, s = e.appendChild(fe.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === s[0].offsetHeight, r && (s[0].style.display = "", s[1].style.display = "none", r = 0 === s[0].offsetHeight), i.removeChild(n))
            }
            var i, n, s, a, o, r, l;
            i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], n = s && s.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, se.extend(ie, {
                reliableHiddenOffsets: function() {
                    return null == r && e(), r
                },
                boxSizingReliable: function() {
                    return null == o && e(), o
                },
                pixelPosition: function() {
                    return null == a && e(), a
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), se.swap = function(t, e, i, n) {
            var s, a, o = {};
            for (a in e) o[a] = t.style[a], t.style[a] = e[a];
            s = i.apply(t, n || []);
            for (a in e) t.style[a] = o[a];
            return s
        };
    var ai = /alpha\([^)]*\)/i,
        oi = /opacity\s*=\s*([^)]*)/,
        ri = /^(none|table(?!-c[ea]).+)/,
        li = new RegExp("^(" + Se + ")(.*)$", "i"),
        di = new RegExp("^([+-])=(" + Se + ")", "i"),
        ci = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ui = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        hi = ["Webkit", "O", "Moz", "ms"];
    se.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, a, o, r = se.camelCase(e),
                    l = t.style;
                if (e = se.cssProps[r] || (se.cssProps[r] = T(l, r)), o = se.cssHooks[e] || se.cssHooks[r], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(t, !1, n)) ? s : l[e];
                if (a = typeof i, "string" === a && (s = di.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(se.css(t, e)), a = "number"), null != i && i === i && ("number" !== a || se.cssNumber[r] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n))))) try {
                    l[e] = i
                } catch (d) {}
            }
        },
        css: function(t, e, i, n) {
            var s, a, o, r = se.camelCase(e);
            return e = se.cssProps[r] || (se.cssProps[r] = T(t.style, r)), o = se.cssHooks[e] || se.cssHooks[r], o && "get" in o && (a = o.get(t, !0, i)), void 0 === a && (a = ei(t, e, n)), "normal" === a && e in ui && (a = ui[e]), "" === i || i ? (s = parseFloat(a), i === !0 || se.isNumeric(s) ? s || 0 : a) : a
        }
    }), se.each(["height", "width"], function(t, e) {
        se.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? ri.test(se.css(t, "display")) && 0 === t.offsetWidth ? se.swap(t, ci, function() {
                    return E(t, e, n)
                }) : E(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var s = n && ti(t);
                return D(t, i, n ? A(t, e, n, ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), ie.opacity || (se.cssHooks.opacity = {
        get: function(t, e) {
            return oi.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                a = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === se.trim(a.replace(ai, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ai.test(a) ? a.replace(ai, s) : a + " " + s)
        }
    }), se.cssHooks.marginRight = S(ie.reliableMarginRight, function(t, e) {
        return e ? se.swap(t, {
            display: "inline-block"
        }, ei, [t, "marginRight"]) : void 0
    }), se.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        se.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Te[n] + e] = a[n] || a[n - 2] || a[0];
                return s
            }
        }, ii.test(t) || (se.cssHooks[t + e].set = D)
    }), se.fn.extend({
        css: function(t, e) {
            return De(this, function(t, e, i) {
                var n, s, a = {},
                    o = 0;
                if (se.isArray(e)) {
                    for (n = ti(t), s = e.length; s > o; o++) a[e[o]] = se.css(t, e[o], !1, n);
                    return a
                }
                return void 0 !== i ? se.style(t, e, i) : se.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                $e(this) ? se(this).show() : se(this).hide()
            })
        }
    }), se.Tween = j, j.prototype = {
        constructor: j,
        init: function(t, e, i, n, s, a) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = a || (se.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = j.propHooks[this.prop];
            return t && t.get ? t.get(this) : j.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = j.propHooks[this.prop];
            return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, se.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, se.fx = j.prototype.init, se.fx.step = {};
    var pi, fi, gi = /^(?:toggle|show|hide)$/,
        mi = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        vi = /queueHooks$/,
        yi = [L],
        bi = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    s = mi.exec(e),
                    a = s && s[3] || (se.cssNumber[t] ? "" : "px"),
                    o = (se.cssNumber[t] || "px" !== a && +n) && mi.exec(se.css(i.elem, t)),
                    r = 1,
                    l = 20;
                if (o && o[3] !== a) {
                    a = a || o[3], s = s || [], o = +n || 1;
                    do r = r || ".5", o /= r, se.style(i.elem, t, o + a); while (r !== (r = i.cur() / n) && 1 !== r && --l)
                }
                return s && (o = i.start = +o || +n || 0, i.unit = a, i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]), i
            }]
        };
    se.Animation = se.extend(z, {
            tweener: function(t, e) {
                se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, s = t.length; s > n; n++) i = t[n], bi[i] = bi[i] || [], bi[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? yi.unshift(t) : yi.push(t)
            }
        }), se.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? se.extend({}, t) : {
                complete: i || !i && e || se.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !se.isFunction(e) && e
            };
            return n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                se.isFunction(n.old) && n.old.call(this), n.queue && se.dequeue(this, n.queue)
            }, n
        }, se.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter($e).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = se.isEmptyObject(t),
                    a = se.speed(e, i, n),
                    o = function() {
                        var e = z(this, se.extend({}, t), a);
                        (s || se._data(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, s || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        a = se.timers,
                        o = se._data(this);
                    if (s) o[s] && o[s].stop && n(o[s]);
                    else
                        for (s in o) o[s] && o[s].stop && vi.test(s) && n(o[s]);
                    for (s = a.length; s--;) a[s].elem !== this || null != t && a[s].queue !== t || (a[s].anim.stop(i), e = !1, a.splice(s, 1));
                    (e || !i) && se.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = se._data(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        a = se.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, se.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
                    for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), se.each(["toggle", "show", "hide"], function(t, e) {
            var i = se.fn[e];
            se.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(q(e, !0), t, n, s)
            }
        }), se.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            se.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), se.timers = [], se.fx.tick = function() {
            var t, e = se.timers,
                i = 0;
            for (pi = se.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || se.fx.stop(), pi = void 0
        }, se.fx.timer = function(t) {
            se.timers.push(t), t() ? se.fx.start() : se.timers.pop()
        }, se.fx.interval = 13, se.fx.start = function() {
            fi || (fi = setInterval(se.fx.tick, se.fx.interval))
        }, se.fx.stop = function() {
            clearInterval(fi), fi = null
        }, se.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, se.fn.delay = function(t, e) {
            return t = se.fx ? se.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t, e, i, n, s;
            e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), s = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = s.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !s.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
        }();
    var _i = /\r/g;
    se.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = se.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, se(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : se.isArray(s) && (s = se.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(_i, "") : null == i ? "" : i)
            }
        }
    }), se.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = se.find.attr(t, "value");
                    return null != e ? e : se.trim(se.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, a = "select-one" === t.type || 0 > s, o = a ? null : [], r = a ? s + 1 : n.length, l = 0 > s ? r : a ? s : 0; r > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && se.nodeName(i.parentNode, "optgroup"))) {
                            if (e = se(i).val(), a) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, a = se.makeArray(e), o = s.length; o--;)
                        if (n = s[o], se.inArray(se.valHooks.option.get(n), a) >= 0) try {
                            n.selected = i = !0
                        } catch (r) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), se.each(["radio", "checkbox"], function() {
        se.valHooks[this] = {
            set: function(t, e) {
                return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (se.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xi, wi, ki = se.expr.attrHandle,
        Ci = /^(?:checked|selected)$/i,
        Fi = ie.getSetAttribute,
        Si = ie.input;
    se.fn.extend({
        attr: function(t, e) {
            return De(this, se.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                se.removeAttr(this, t)
            })
        }
    }), se.extend({
        attr: function(t, e, i) {
            var n, s, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === ke ? se.prop(t, e, i) : (1 === a && se.isXMLDoc(t) || (e = e.toLowerCase(), n = se.attrHooks[e] || (se.expr.match.bool.test(e) ? wi : xi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = se.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void se.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                a = e && e.match(be);
            if (a && 1 === t.nodeType)
                for (; i = a[s++];) n = se.propFix[i] || i, se.expr.match.bool.test(i) ? Si && Fi || !Ci.test(i) ? t[n] = !1 : t[se.camelCase("default-" + i)] = t[n] = !1 : se.attr(t, i, ""), t.removeAttribute(Fi ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && se.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), wi = {
        set: function(t, e, i) {
            return e === !1 ? se.removeAttr(t, i) : Si && Fi || !Ci.test(i) ? t.setAttribute(!Fi && se.propFix[i] || i, i) : t[se.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, se.each(se.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ki[e] || se.find.attr;
        ki[e] = Si && Fi || !Ci.test(e) ? function(t, e, n) {
            var s, a;
            return n || (a = ki[e], ki[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ki[e] = a), s
        } : function(t, e, i) {
            return i ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Si && Fi || (se.attrHooks.value = {
        set: function(t, e, i) {
            return se.nodeName(t, "input") ? void(t.defaultValue = e) : xi && xi.set(t, e, i)
        }
    }), Fi || (xi = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, ki.id = ki.name = ki.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, se.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: xi.set
    }, se.attrHooks.contenteditable = {
        set: function(t, e, i) {
            xi.set(t, "" === e ? !1 : e, i)
        }
    }, se.each(["width", "height"], function(t, e) {
        se.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ie.style || (se.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ti = /^(?:input|select|textarea|button|object)$/i,
        $i = /^(?:a|area)$/i;
    se.fn.extend({
        prop: function(t, e) {
            return De(this, se.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = se.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), se.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, s, a, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !se.isXMLDoc(t), a && (e = se.propFix[e] || e, s = se.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = se.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ti.test(t.nodeName) || $i.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || se.each(["href", "src"], function(t, e) {
        se.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (se.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        se.propFix[this.toLowerCase()] = this
    }), ie.enctype || (se.propFix.enctype = "encoding");
    var Di = /[\t\r\n\f]/g;
    se.fn.extend({
        addClass: function(t) {
            var e, i, n, s, a, o, r = 0,
                l = this.length,
                d = "string" == typeof t && t;
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).addClass(t.call(this, e, this.className))
            });
            if (d)
                for (e = (t || "").match(be) || []; l > r; r++)
                    if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Di, " ") : " ")) {
                        for (a = 0; s = e[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o = se.trim(n), i.className !== o && (i.className = o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, a, o, r = 0,
                l = this.length,
                d = 0 === arguments.length || "string" == typeof t && t;
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).removeClass(t.call(this, e, this.className))
            });
            if (d)
                for (e = (t || "").match(be) || []; l > r; r++)
                    if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Di, " ") : "")) {
                        for (a = 0; s = e[a++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        o = t ? se.trim(n) : "", i.className !== o && (i.className = o)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(se.isFunction(t) ? function(i) {
                se(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, s = se(this), a = t.match(be) || []; e = a[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === ke || "boolean" === i) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : se._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Di, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        se.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), se.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Ai = se.now(),
        Ei = /\?/,
        ji = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    se.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            s = se.trim(e + "");
        return s && !se.trim(s.replace(ji, function(t, e, s, a) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !a - !s, "")
        })) ? Function("return " + s)() : se.error("Invalid JSON: " + e)
    }, se.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e), i
    };
    var Ni, qi, Hi = /#.*$/,
        Li = /([?&])_=[^&]*/,
        Mi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        zi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pi = /^(?:GET|HEAD)$/,
        Oi = /^\/\//,
        Ii = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ri = {},
        Wi = {},
        Bi = "*/".concat("*");
    try {
        qi = location.href
    } catch (Xi) {
        qi = fe.createElement("a"), qi.href = "", qi = qi.href
    }
    Ni = Ii.exec(qi.toLowerCase()) || [], se.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qi,
            type: "GET",
            isLocal: zi.test(Ni[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": se.parseJSON,
                "text xml": se.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? I(I(t, se.ajaxSettings), e) : I(se.ajaxSettings, t)
        },
        ajaxPrefilter: P(Ri),
        ajaxTransport: P(Wi),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var s, c, v, y, _, w = e;
                2 !== b && (b = 2, r && clearTimeout(r), d = void 0, o = n || "", x.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = R(u, x, i)), y = W(u, y, x, s), s ? (u.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (se.lastModified[a] = _), _ = x.getResponseHeader("etag"), _ && (se.etag[a] = _)), 204 === t || "HEAD" === u.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, s = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || w) + "", s ? f.resolveWith(h, [c, w, x]) : f.rejectWith(h, [x, w, v]), x.statusCode(m), m = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [x, u, s ? c : v]), g.fireWith(h, [x, w]), l && (p.trigger("ajaxComplete", [x, u]), --se.active || se.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, a, o, r, l, d, c, u = se.ajaxSetup({}, e),
                h = u.context || u,
                p = u.context && (h.nodeType || h.jquery) ? se(h) : se.event,
                f = se.Deferred(),
                g = se.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                _ = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = Mi.exec(o);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return d && d.abort(e), i(0, e), this
                    }
                };
            if (f.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || qi) + "").replace(Hi, "").replace(Oi, Ni[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = se.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (n = Ii.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Ni[1] && n[2] === Ni[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ni[3] || ("http:" === Ni[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = se.param(u.data, u.traditional)), O(Ri, u, e, x), 2 === b) return x;
            l = u.global, l && 0 === se.active++ && se.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Pi.test(u.type), a = u.url, u.hasContent || (u.data && (a = u.url += (Ei.test(a) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Li.test(a) ? a.replace(Li, "$1_=" + Ai++) : a + (Ei.test(a) ? "&" : "?") + "_=" + Ai++)), u.ifModified && (se.lastModified[a] && x.setRequestHeader("If-Modified-Since", se.lastModified[a]), se.etag[a] && x.setRequestHeader("If-None-Match", se.etag[a])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Bi + "; q=0.01" : "") : u.accepts["*"]);
            for (s in u.headers) x.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (u.beforeSend.call(h, x, u) === !1 || 2 === b)) return x.abort();
            _ = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[s](u[s]);
            if (d = O(Wi, u, e, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (r = setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, d.send(v, i)
                } catch (w) {
                    if (!(2 > b)) throw w;
                    i(-1, w)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, i) {
            return se.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return se.get(t, void 0, e, "script")
        }
    }), se.each(["get", "post"], function(t, e) {
        se[e] = function(t, i, n, s) {
            return se.isFunction(i) && (s = s || n, n = i, i = void 0), se.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }), se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        se.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), se._evalUrl = function(t) {
        return se.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, se.fn.extend({
        wrapAll: function(t) {
            if (se.isFunction(t)) return this.each(function(e) {
                se(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(se.isFunction(t) ? function(e) {
                se(this).wrapInner(t.call(this, e))
            } : function() {
                var e = se(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = se.isFunction(t);
            return this.each(function(i) {
                se(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
            }).end()
        }
    }), se.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
    }, se.expr.filters.visible = function(t) {
        return !se.expr.filters.hidden(t)
    };
    var Qi = /%20/g,
        Vi = /\[\]$/,
        Yi = /\r?\n/g,
        Ui = /^(?:submit|button|image|reset|file)$/i,
        Zi = /^(?:input|select|textarea|keygen)/i;
    se.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = se.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t)) se.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) B(i, t[i], e, s);
        return n.join("&").replace(Qi, "+")
    }, se.fn.extend({
        serialize: function() {
            return se.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = se.prop(this, "elements");
                return t ? se.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !se(this).is(":disabled") && Zi.test(this.nodeName) && !Ui.test(t) && (this.checked || !Ae.test(t))
            }).map(function(t, e) {
                var i = se(this).val();
                return null == i ? null : se.isArray(i) ? se.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Yi, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Yi, "\r\n")
                }
            }).get()
        }
    }), se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || Q()
    } : X;
    var Gi = 0,
        Ji = {},
        Ki = se.ajaxSettings.xhr();
    t.ActiveXObject && se(t).on("unload", function() {
        for (var t in Ji) Ji[t](void 0, !0)
    }), ie.cors = !!Ki && "withCredentials" in Ki, Ki = ie.ajax = !!Ki, Ki && se.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function(i, n) {
                    var s, a = t.xhr(),
                        o = ++Gi;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && a.setRequestHeader(s, i[s] + "");
                    a.send(t.hasContent && t.data || null), e = function(i, s) {
                        var r, l, d;
                        if (e && (s || 4 === a.readyState))
                            if (delete Ji[o], e = void 0, a.onreadystatechange = se.noop, s) 4 !== a.readyState && a.abort();
                            else {
                                d = {}, r = a.status, "string" == typeof a.responseText && (d.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (c) {
                                    l = ""
                                }
                                r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = d.text ? 200 : 404
                            }
                        d && n(r, l, d, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? setTimeout(e) : a.onreadystatechange = Ji[o] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), se.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return se.globalEval(t), t
            }
        }
    }), se.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), se.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = fe.head || se("head")[0] || fe.documentElement;
            return {
                send: function(n, s) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
    se.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || se.expando + "_" + Ai++;
            return this[t] = !0, t
        }
    }), se.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, a, o, r = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += (Ei.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return o || se.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", a = t[s], t[s] = function() {
            o = arguments
        }, n.always(function() {
            t[s] = a, e[s] && (e.jsonpCallback = i.jsonpCallback, tn.push(s)), o && se.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), se.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || fe;
        var n = ue.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = se.buildFragment([t], e, s), s && s.length && se(s).remove(), se.merge([], n.childNodes))
    };
    var nn = se.fn.load;
    se.fn.load = function(t, e, i) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var n, s, a, o = this,
            r = t.indexOf(" ");
        return r >= 0 && (n = se.trim(t.slice(r, t.length)), t = t.slice(0, r)), se.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (a = "POST"), o.length > 0 && se.ajax({
            url: t,
            type: a,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(n ? se("<div>").append(se.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            o.each(i, s || [t.responseText, e, t])
        }), this
    }, se.expr.filters.animated = function(t) {
        return se.grep(se.timers, function(e) {
            return t === e.elem
        }).length
    };
    var sn = t.document.documentElement;
    se.offset = {
        setOffset: function(t, e, i) {
            var n, s, a, o, r, l, d, c = se.css(t, "position"),
                u = se(t),
                h = {};
            "static" === c && (t.style.position = "relative"), r = u.offset(), a = se.css(t, "top"), l = se.css(t, "left"), d = ("absolute" === c || "fixed" === c) && se.inArray("auto", [a, l]) > -1, d ? (n = u.position(), o = n.top, s = n.left) : (o = parseFloat(a) || 0, s = parseFloat(l) || 0), se.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (h.top = e.top - r.top + o), null != e.left && (h.left = e.left - r.left + s), "using" in e ? e.using.call(t, h) : u.css(h)
        }
    }, se.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                se.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                a = s && s.ownerDocument;
            if (a) return e = a.documentElement, se.contains(e, s) ? (typeof s.getBoundingClientRect !== ke && (n = s.getBoundingClientRect()), i = V(a), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === se.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (i = t.offset()), i.top += se.css(t[0], "borderTopWidth", !0), i.left += se.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - se.css(n, "marginTop", !0),
                    left: e.left - i.left - se.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || sn; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");) t = t.offsetParent;
                return t || sn
            })
        }
    }), se.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        se.fn[t] = function(n) {
            return De(this, function(t, n, s) {
                var a = V(t);
                return void 0 === s ? a ? e in a ? a[e] : a.document.documentElement[n] : t[n] : void(a ? a.scrollTo(i ? se(a).scrollLeft() : s, i ? s : se(a).scrollTop()) : t[n] = s)
            }, t, n, arguments.length, null)
        }
    }), se.each(["top", "left"], function(t, e) {
        se.cssHooks[e] = S(ie.pixelPosition, function(t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? se(t).position()[e] + "px" : i) : void 0
        })
    }), se.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        se.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            se.fn[n] = function(n, s) {
                var a = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || s === !0 ? "margin" : "border");
                return De(this, function(e, i, n) {
                    var s;
                    return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? se.css(e, i, o) : se.style(e, i, n, o)
                }, e, a ? n : void 0, a, null)
            }
        })
    }), se.fn.size = function() {
        return this.length
    }, se.fn.andSelf = se.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return se
    });
    var an = t.jQuery,
        on = t.$;
    return se.noConflict = function(e) {
        return t.$ === se && (t.$ = on), e && t.jQuery === se && (t.jQuery = an), se
    }, typeof e === ke && (t.jQuery = t.$ = se), se
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote], button[data-confirm]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"),
                i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function(e, i, n) {
            var s = t.Event(i);
            return e.trigger(s, n), s.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(n) {
            var s, a, o, r, l, d, c, u;
            if (i.fire(n, "ajax:before")) {
                if (r = n.data("cross-domain"), l = r === e ? null : r, d = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    s = n.attr("method"), a = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), a = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", a = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (s = n.data("method"), a = i.href(n), o = n.data("params") || null);
                return u = {
                    type: s || "GET",
                    data: o,
                    dataType: c,
                    beforeSend: function(t, s) {
                        return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s]) ? void n.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function(t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                }, d && (u.xhrFields = {
                    withCredentials: d
                }), a && (u.url = a), i.ajax(u)
            }
            return !1
        },
        handleMethod: function(n) {
            var s = i.href(n),
                a = n.data("method"),
                o = n.attr("target"),
                r = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                d = t('<form method="post" action="' + s + '"></form>'),
                c = '<input name="_method" value="' + a + '" type="hidden" />';
            l !== e && r !== e && (c += '<input name="' + l + '" value="' + r + '" type="hidden" />'), o && d.attr("target", o), d.hide().append(c).appendTo("body"), d.submit()
        },
        formElements: function(e, i) {
            return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
        },
        disableFormElements: function(e) {
            i.formElements(e, i.disableSelector).each(function() {
                i.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var i, n;
            i = t.is("button") ? "html" : "val", n = t.data("disable-with"), t.data("ujs:enable-with", t[i]()), n !== e && t[i](n), t.prop("disabled", !0)
        },
        enableFormElements: function(e) {
            i.formElements(e, i.enableSelector).each(function() {
                i.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"),
                s = !1;
            return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
        },
        blankInputs: function(e, i, n) {
            var s, a, o = t(),
                r = i || "input,textarea",
                l = e.find(r);
            return l.each(function() {
                if (s = t(this), a = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !a == !n) {
                    if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    o = o.add(s)
                }
            }), o.length ? o : !1
        },
        nonBlankInputs: function(t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var n = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), n !== e && t.html(n), t.bind("click.railsDisable", function(t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function() {
        i.enableElement(t(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete", function() {
        i.enableFormElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function(n) {
        var s = t(this),
            a = s.data("method"),
            o = s.data("params"),
            r = n.metaKey || n.ctrlKey;
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (!r && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
            if (r && (!a || "GET" === a) && !o) return !0;
            var l = i.handleRemote(s);
            return l === !1 ? i.enableElement(s) : l.error(function() {
                i.enableElement(s)
            }), !1
        }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function(e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var s = i.handleRemote(n);
        return s === !1 ? i.enableFormElement(n) : s.error(function() {
            i.enableFormElement(n)
        }), !1
    }), n.delegate(i.inputChangeSelector, "change.rails", function(e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function(n) {
        var s, a, o = t(this),
            r = o.data("remote") !== e;
        if (!i.allowAction(o)) return i.stopEverything(n);
        if (o.attr("novalidate") == e && (s = i.blankInputs(o, i.requiredInputSelector), s && i.fire(o, "ajax:aborted:required", [s]))) return i.stopEverything(n);
        if (r) {
            if (a = i.nonBlankInputs(o, i.fileInputSelector)) {
                setTimeout(function() {
                    i.disableFormElements(o)
                }, 13);
                var l = i.fire(o, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    i.enableFormElements(o)
                }, 13), l
            }
            return i.handleRemote(o), !1
        }
        setTimeout(function() {
            i.disableFormElements(o)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function(e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var s = n.attr("name"),
            a = s ? {
                name: s,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", a)
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function(e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function() {
        i.refreshCSRFTokens()
    }))
}(jQuery),
function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (!this.length) return void(e && e.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"));
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0)
            }), this.submit(function(e) {
                function n() {
                    var n;
                    return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1) : !0
                }
                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0,
                i = t(this[0].form).validate();
            return this.each(function() {
                e &= i.element(this)
            }), e
        },
        removeAttrs: function(e) {
            var i = {},
                n = this;
            return t.each(e.split(/\s/), function(t, e) {
                i[e] = n.attr(e), n.removeAttr(e)
            }), i
        },
        rules: function(e, i) {
            var n = this[0];
            if (e) {
                var s = t.data(n.form, "validator").settings,
                    a = s.rules,
                    o = t.validator.staticRules(n);
                switch (e) {
                    case "add":
                        t.extend(o, t.validator.normalizeRule(i)), a[n.name] = o, i.messages && (s.messages[n.name] = t.extend(s.messages[n.name], i.messages));
                        break;
                    case "remove":
                        if (!i) return delete a[n.name], o;
                        var r = {};
                        return t.each(i.split(/\s/), function(t, e) {
                            r[e] = o[e], delete o[e]
                        }), r
                }
            }
            var l = t.validator.normalizeRules(t.extend({}, t.validator.metadataRules(n), t.validator.classRules(n), t.validator.attributeRules(n), t.validator.staticRules(n)), n);
            if (l.required) {
                var d = l.required;
                delete l.required, l = t.extend({
                    required: d
                }, l)
            }
            return l
        }
    }), t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + e.value)
        },
        filled: function(e) {
            return !!t.trim("" + e.value)
        },
        unchecked: function(t) {
            return !t.checked
        }
    }), t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), i)
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function(t) {
                !this.checkable(t) && (t.name in this.submitted || !this.optional(t)) && this.element(t)
            },
            onkeyup: function(t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastActive) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
            },
            unhighlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this[0].form, "validator"),
                        n = "on" + e.type.replace(/^validate/, "");
                    i.settings[n] && i.settings[n].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups, function(e, n) {
                    t.each(n.split(/\s/), function(t, n) {
                        i[n] = e
                    })
                });
                var n = this.settings.rules;
                t.each(n, function(e, i) {
                    n[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                var i = this.check(e) !== !1;
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e) this.errorList.push({
                        message: e[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t) e++;
                return e
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i = t(e).attr("type"),
                    n = t(e).val();
                return "radio" === i || "checkbox" === i ? t('input[name="' + t(e).attr("name") + '"]:checked').val() : "string" == typeof n ? n.replace(/\r/g, "") : n
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, n = t(e).rules(),
                    s = !1,
                    a = this.elementValue(e);
                for (var o in n) {
                    var r = {
                        method: o,
                        parameters: n[o]
                    };
                    try {
                        if (i = t.validator.methods[o].call(this, a, e, r.parameters), "dependency-mismatch" === i) {
                            s = !0;
                            continue
                        }
                        if (s = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i) return this.formatAndAdd(e, r), !1
                    } catch (l) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + e.id + ", check the '" + r.method + "' method", l), l
                    }
                }
                if (!s) return this.objectLength(n) && this.successList.push(e), !0
            },
            customMetaMessage: function(e, i) {
                if (t.metadata) {
                    var n = this.settings.meta ? t(e).metadata()[this.settings.meta] : t(e).metadata();
                    return n && n.messages && n.messages[i]
                }
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t];
                return void 0
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), this.customMetaMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var n = this.defaultMessage(e, i.method),
                    s = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, i.parameters, e) : s.test(n) && (n = t.validator.format(n.replace(s, "{$1}"), i.parameters)), this.errorList.push({
                    message: n,
                    element: e
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var n = this.errorsFor(e);
                n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.attr("generated") && n.html(i)) : (n = t("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(e),
                    generated: !0
                }).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e))), !i && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e);
                return this.errors().filter(function() {
                    return t(this).attr("for") === i
                })
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find('[name="' + e + '"]')
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function(t) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {},
                n = t(e).attr("class");
            return n && t.each(n.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function(e) {
            var i = {},
                n = t(e);
            for (var s in t.validator.methods) {
                var a;
                "required" === s ? (a = n.get(0).getAttribute(s), "" === a && (a = !0), a = !!a) : a = n.attr(s), a ? i[s] = a : n[0].getAttribute("type") === s && (i[s] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        metadataRules: function(e) {
            if (!t.metadata) return {};
            var i = t.data(e.form, "validator").settings.meta;
            return i ? t(e).metadata()[i] : t(e).metadata()
        },
        staticRules: function(e) {
            var i = {},
                n = t.data(e.form, "validator");
            return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(n, s) {
                if (s === !1) return void delete e[n];
                if (s.param || s.depends) {
                    var a = !0;
                    switch (typeof s.depends) {
                        case "string":
                            a = !!t(s.depends, i.form).length;
                            break;
                        case "function":
                            a = s.depends.call(i, i)
                    }
                    a ? e[n] = void 0 !== s.param ? s.param : !0 : delete e[n]
                }
            }), t.each(e, function(n, s) {
                e[n] = t.isFunction(s) ? s(i) : s
            }), t.each(["minlength", "maxlength", "min", "max"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function() {
                e[this] && (e[this] = [Number(e[this][0]), Number(e[this][1])])
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e.messages && delete e.messages, e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function(e, i, n) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, n) {
                if (!this.depend(n, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var s = t(i).val();
                    return s && s.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            remote: function(e, i, n) {
                if (this.optional(i)) return "dependency-mismatch";
                var s = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), s.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = s.message, n = "string" == typeof n && {
                        url: n
                    } || n, this.pending[i.name]) return "pending";
                if (s.old === e) return s.valid;
                s.old = e;
                var a = this;
                this.startRequest(i);
                var o = {};
                return o[i.name] = e, t.ajax(t.extend(!0, {
                    url: n,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: o,
                    success: function(n) {
                        a.settings.messages[i.name].remote = s.originalMessage;
                        var o = n === !0 || "true" === n;
                        if (o) {
                            var r = a.formSubmitted;
                            a.prepareElement(i), a.formSubmitted = r, a.successList.push(i), delete a.invalid[i.name], a.showErrors()
                        } else {
                            var l = {},
                                d = n || a.defaultMessage(i, "remote");
                            l[i.name] = s.message = t.isFunction(d) ? d(e) : d, a.invalid[i.name] = !0, a.showErrors(l)
                        }
                        s.valid = o, a.stopRequest(i, o)
                    }
                }, n)), "pending"
            },
            minlength: function(e, i, n) {
                var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= n
            },
            maxlength: function(e, i, n) {
                var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || n >= s
            },
            rangelength: function(e, i, n) {
                var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= n[0] && s <= n[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t))
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                var i = 0,
                    n = 0,
                    s = !1;
                t = t.replace(/\D/g, "");
                for (var a = t.length - 1; a >= 0; a--) {
                    var o = t.charAt(a);
                    n = parseInt(o, 10), s && (n *= 2) > 9 && (n -= 9), i += n, s = !s
                }
                return i % 10 === 0
            },
            equalTo: function(e, i, n) {
                var s = t(n);
                return this.settings.onfocusout && s.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    t(i).valid()
                }), e === s.val()
            }
        }
    }), t.format = t.validator.format
}(jQuery),
function(t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, n) {
        var s = t.port;
        "abort" === t.mode && (e[s] && e[s].abort(), e[s] = n)
    });
    else {
        var i = t.ajax;
        t.ajax = function(n) {
            var s = ("mode" in n ? n : t.ajaxSettings).mode,
                a = ("port" in n ? n : t.ajaxSettings).port;
            return "abort" === s ? (e[a] && e[a].abort(), e[a] = i.apply(this, arguments)) : i.apply(this, arguments)
        }
    }
}(jQuery),
function(t) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && t.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, i) {
        function n(e) {
            return e = t.event.fix(e), e.type = i, t.event.handle.call(this, e)
        }
        t.event.special[i] = {
            setup: function() {
                this.addEventListener(e, n, !0)
            },
            teardown: function() {
                this.removeEventListener(e, n, !0)
            },
            handler: function(e) {
                var n = arguments;
                return n[0] = t.event.fix(e), n[0].type = i, t.event.handle.apply(this, n)
            }
        }
    }), t.extend(t.fn, {
        validateDelegate: function(e, i, n) {
            return this.bind(i, function(i) {
                var s = t(i.target);
                return s.is(e) ? n.apply(s, arguments) : void 0
            })
        }
    })
}(jQuery),
function() {
    $.fn.isInViewport = function(t) {
        var e, i, n;
        return null == t && (t = 0), i = this.get(0), n = i.getBoundingClientRect(), e = {
            top: Math.min(1, ($(window).height() - n.top) / this.outerHeight()),
            bottom: Math.min(1, n.bottom / this.outerHeight())
        }, e.top * e.bottom >= t
    }
}.call(this), $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = $(this.hash);
                if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html, body").animate({
                    scrollTop: t.offset().top,
                    duration: 5050,
                    easing: "ease-in"
                }), !1
            }
        })
    }), eval(function(t, e, i, n, s, a) {
        if (s = function(t) {
                return (e > t ? "" : s(parseInt(t / e))) + ((t %= e) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
            }, !"".replace(/^/, String)) {
            for (; i--;) a[s(i)] = n[i] || s(i);
            n = [function(t) {
                return a[t]
            }], s = function() {
                return "\\w+"
            }, i = 1
        }
        for (; i--;) n[i] && (t = t.replace(new RegExp("\\b" + s(i) + "\\b", "g"), n[i]));
        return t
    }('7 1G(b,a){7 1u(){};1u.v=a.v;b.2B=a.v;b.v=1b 1u();b.v.3h=b}7 u(c,b,a){2.3=c;2.1L=c.2y;2.6=K.1A("2k");2.6.4.S="Z: 1p; 15: 1P;";2.q=K.1A("2k");2.q.4.S=2.6.4.S;2.q.1M("2A","1d A;");2.q.1M("2w","1d A;");2.U=u.P(b)}1G(u,8.5.3g);u.P=7(b){t a;9(C u.P.1j==="B"){a=K.1A("30");a.4.S="Z: 1p; z-2Y: 2W; M: 13;";a.4.1l="-2P";a.4.1x="-2M";a.2I=b;u.P.1j=a}1d u.P.1j};u.v.2D=7(){t g=2;t m=A;t c=A;t f;t j,1e;t p;t d;t h;t o;t n=20;t i="3p("+2.1L+")";t k=7(e){9(e.2q){e.2q()}e.3l=G;9(e.2n){e.2n()}};t l=7(){g.3.2m(3c)};2.1E().1J.X(2.6);2.1E().36.X(2.q);9(C u.P.2e==="B"){2.1E().1J.X(2.U);u.P.2e=G}2.1t=[8.5.r.O(2.q,"2c",7(e){9(g.3.R()||g.3.W()){2.4.19="25";8.5.r.D(g.3,"2c",e)}}),8.5.r.O(2.q,"21",7(e){9((g.3.R()||g.3.W())&&!c){2.4.19=g.3.2V();8.5.r.D(g.3,"21",e)}}),8.5.r.O(2.q,"1X",7(e){c=A;9(g.3.R()){m=G;2.4.19=i}9(g.3.R()||g.3.W()){8.5.r.D(g.3,"1X",e);k(e)}}),8.5.r.O(K,"1s",7(a){t b;9(m){m=A;g.q.4.19="25";8.5.r.D(g.3,"1s",a)}9(c){9(d){b=g.Y().1v(g.3.Q());b.y+=n;g.3.J(g.Y().1S(b));2O{g.3.2m(8.5.2N.2L);2J(l,2H)}2E(e){}}g.U.4.M="13";g.3.11(f);p=G;c=A;a.L=g.3.Q();8.5.r.D(g.3,"1N",a)}}),8.5.r.w(g.3.1g(),"2C",7(a){t b;9(m){9(c){a.L=1b 8.5.2z(a.L.1f()-j,a.L.1i()-1e);b=g.Y().1v(a.L);9(d){g.U.4.14=b.x+"H";g.U.4.T=b.y+"H";g.U.4.M="";b.y-=n}g.3.J(g.Y().1S(b));9(d){g.q.4.T=(b.y+n)+"H"}8.5.r.D(g.3,"1K",a)}V{j=a.L.1f()-g.3.Q().1f();1e=a.L.1i()-g.3.Q().1i();f=g.3.1c();h=g.3.Q();o=g.3.1g().2x();d=g.3.F("16");c=G;g.3.11(1I);a.L=g.3.Q();8.5.r.D(g.3,"1H",a)}}}),8.5.r.O(K,"2v",7(e){9(c){9(e.3r===27){d=A;g.3.J(h);g.3.1g().3q(o);8.5.r.D(K,"1s",e)}}}),8.5.r.O(2.q,"2u",7(e){9(g.3.R()||g.3.W()){9(p){p=A}V{8.5.r.D(g.3,"2u",e);k(e)}}}),8.5.r.O(2.q,"2s",7(e){9(g.3.R()||g.3.W()){8.5.r.D(g.3,"2s",e);k(e)}}),8.5.r.w(2.3,"1H",7(a){9(!c){d=2.F("16")}}),8.5.r.w(2.3,"1K",7(a){9(!c){9(d){g.J(n);g.6.4.N=1I+(2.F("17")?-1:+1)}}}),8.5.r.w(2.3,"1N",7(a){9(!c){9(d){g.J(0)}}}),8.5.r.w(2.3,"3o",7(){g.J()}),8.5.r.w(2.3,"3n",7(){g.11()}),8.5.r.w(2.3,"3m",7(){g.18()}),8.5.r.w(2.3,"3j",7(){g.18()}),8.5.r.w(2.3,"3i",7(){g.1C()}),8.5.r.w(2.3,"3f",7(){g.1y()}),8.5.r.w(2.3,"3e",7(){g.1z()}),8.5.r.w(2.3,"3d",7(){g.1a()}),8.5.r.w(2.3,"3b",7(){g.1a()})]};u.v.3a=7(){t i;2.6.2j.2i(2.6);2.q.2j.2i(2.q);2h(i=0;i<2.1t.39;i++){8.5.r.38(2.1t[i])}};u.v.37=7(){2.1y();2.1C();2.1a()};u.v.1y=7(){t a=2.3.F("1w");9(C a.35==="B"){2.6.12=a;2.q.12=2.6.12}V{2.6.12="";2.6.X(a);a=a.34(G);2.q.X(a)}};u.v.1C=7(){2.q.33=2.3.32()||""};u.v.1a=7(){t i,E;2.6.1r=2.3.F("1q");2.q.1r=2.6.1r;2.6.4.S="";2.q.4.S="";E=2.3.F("E");2h(i 31 E){9(E.2Z(i)){2.6.4[i]=E[i];2.q.4[i]=E[i]}}2.2b()};u.v.2b=7(){2.6.4.Z="1p";2.6.4.15="1P";9(C 2.6.4.I!=="B"&&2.6.4.I!==""){2.6.4.2a="\\"29:28.26.2f(I="+(2.6.4.I*24)+")\\"";2.6.4.23="22(I="+(2.6.4.I*24)+")"}2.q.4.Z=2.6.4.Z;2.q.4.15=2.6.4.15;2.q.4.I=0.2X;2.q.4.2a="\\"29:28.26.2f(I=1)\\"";2.q.4.23="22(I=1)";2.1z();2.J();2.18()};u.v.1z=7(){t a=2.3.F("1o");2.6.4.1l=-a.x+"H";2.6.4.1x=-a.y+"H";2.q.4.1l=-a.x+"H";2.q.4.1x=-a.y+"H"};u.v.J=7(a){t b=2.Y().1v(2.3.Q());9(C a==="B"){a=0}2.6.4.14=1Z.1Y(b.x)+"H";2.6.4.T=1Z.1Y(b.y-a)+"H";2.q.4.14=2.6.4.14;2.q.4.T=2.6.4.T;2.11()};u.v.11=7(){t a=(2.3.F("17")?-1:+1);9(C 2.3.1c()==="B"){2.6.4.N=2U(2.6.4.T,10)+a;2.q.4.N=2.6.4.N}V{2.6.4.N=2.3.1c()+a;2.q.4.N=2.6.4.N}};u.v.18=7(){9(2.3.F("1n")){2.6.4.M=2.3.2T()?"2S":"13"}V{2.6.4.M="13"}2.q.4.M=2.6.4.M};7 1m(a){a=a||{};a.1w=a.1w||"";a.1o=a.1o||1b 8.5.2R(0,0);a.1q=a.1q||"2Q";a.E=a.E||{};a.17=a.17||A;9(C a.1n==="B"){a.1n=G}9(C a.16==="B"){a.16=G}9(C a.2d==="B"){a.2d=G}9(C a.1W==="B"){a.1W=A}9(C a.1B==="B"){a.1B=A}a.1k=a.1k||"1V"+(K.1U.1T==="2g:"?"s":"")+"://5.1R.1Q/2t/2l/2o/2K.3k";a.1F=a.1F||"1V"+(K.1U.1T==="2g:"?"s":"")+"://5.1R.1Q/2t/2l/2o/2G.2F";a.1B=A;2.2p=1b u(2,a.1k,a.1F);8.5.1D.1O(2,2r)}1G(1m,8.5.1D);1m.v.1h=7(a){8.5.1D.v.1h.1O(2,2r);2.2p.1h(a)};', 62, 214, "||this|marker_|style|maps|labelDiv_|function|google|if|||||||||||||||||eventDiv_|event||var|MarkerLabel_|prototype|addListener||||false|undefined|typeof|trigger|labelStyle|get|true|px|opacity|setPosition|document|latLng|display|zIndex|addDomListener|getSharedCross|getPosition|getDraggable|cssText|top|crossDiv_|else|getClickable|appendChild|getProjection|position||setZIndex|innerHTML|none|left|overflow|raiseOnDrag|labelInBackground|setVisible|cursor|setStyles|new|getZIndex|return|cLngOffset|lat|getMap|setMap|lng|crossDiv|crossImage|marginLeft|MarkerWithLabel|labelVisible|labelAnchor|absolute|labelClass|className|mouseup|listeners_|tempCtor|fromLatLngToDivPixel|labelContent|marginTop|setContent|setAnchor|createElement|optimized|setTitle|Marker|getPanes|handCursor|inherits|dragstart|1000000|overlayImage|drag|handCursorURL_|setAttribute|dragend|apply|hidden|com|gstatic|fromDivPixelToLatLng|protocol|location|http|draggable|mousedown|round|Math||mouseout|alpha|filter|100|pointer|Microsoft||DXImageTransform|progid|MsFilter|setMandatoryStyles|mouseover|clickable|processed|Alpha|https|for|removeChild|parentNode|div|en_us|setAnimation|stopPropagation|mapfiles|label|preventDefault|arguments|dblclick|intl|click|keydown|ondragstart|getCenter|handCursorURL|LatLng|onselectstart|superClass_|mousemove|onAdd|catch|cur|closedhand_8_8|1406|src|setTimeout|drag_cross_67_16|BOUNCE|9px|Animation|try|8px|markerLabels|Point|block|getVisible|parseInt|getCursor|1000002|01|index|hasOwnProperty|img|in|getTitle|title|cloneNode|nodeType|overlayMouseTarget|draw|removeListener|length|onRemove|labelstyle_changed|null|labelclass_changed|labelanchor_changed|labelcontent_changed|OverlayView|constructor|title_changed|labelvisible_changed|png|cancelBubble|visible_changed|zindex_changed|position_changed|url|setCenter|keyCode".split("|"), 0, {})),
    function(t, e, i, n) {
        "use strict";

        function s(t) {
            return ("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
        }
        var a = function(e) {
            for (var i = e.length, n = t("head"); i--;) 0 === n.has("." + e[i]).length && n.append('<meta class="' + e[i] + '" />')
        };
        a(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function() {
            "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body)
        });
        var o = function(e, n) {
                if ("string" == typeof e) {
                    if (n) {
                        var s;
                        if (n.jquery) {
                            if (s = n[0], !s) return n
                        } else s = n;
                        return t(s.querySelectorAll(e))
                    }
                    return t(i.querySelectorAll(e))
                }
                return t(e, n)
            },
            r = function(t) {
                var e = [];
                return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
            },
            l = function(t) {
                for (var e = t.split("-"), i = e.length, n = []; i--;) 0 !== i ? n.push(e[i]) : this.namespace.length > 0 ? n.push(this.namespace, e[i]) : n.push(e[i]);
                return n.reverse().join("-")
            },
            d = function(e, i) {
                var n = this,
                    s = !o(this).data(this.attr_name(!0));
                return o(this.scope).is("[" + this.attr_name() + "]") ? (o(this.scope).data(this.attr_name(!0) + "-init", t.extend({}, this.settings, i || e, this.data_options(o(this.scope)))), s && this.events(this.scope)) : o("[" + this.attr_name() + "]", this.scope).each(function() {
                    var s = !o(this).data(n.attr_name(!0) + "-init");
                    o(this).data(n.attr_name(!0) + "-init", t.extend({}, n.settings, i || e, n.data_options(o(this)))), s && n.events(this)
                }), "string" == typeof e ? this[e].call(this, i) : void 0
            },
            c = function(t, e) {
                function i() {
                    e(t[0])
                }

                function n() {
                    if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                        var t = this.attr("src"),
                            e = t.match(/\?/) ? "&" : "?";
                        e += "random=" + (new Date).getTime(), this.attr("src", t + e)
                    }
                }
                return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i()
            };
        e.matchMedia = e.matchMedia || function(t) {
                var e, i = t.documentElement,
                    n = i.firstElementChild || i.firstChild,
                    s = t.createElement("body"),
                    a = t.createElement("div");
                return a.id = "mq-test-1", a.style.cssText = "position:absolute;top:-100em", s.style.background = "none", s.appendChild(a),
                    function(t) {
                        return a.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(s, n), e = 42 === a.offsetWidth, i.removeChild(s), {
                            matches: e,
                            media: t
                        }
                    }
            }(i),
            function() {
                function t() {
                    i && (a(t), r && jQuery.fx.tick())
                }
                for (var i, n = 0, s = ["webkit", "moz"], a = e.requestAnimationFrame, o = e.cancelAnimationFrame, r = "undefined" != typeof jQuery.fx; n < s.length && !a; n++) a = e[s[n] + "RequestAnimationFrame"], o = o || e[s[n] + "CancelAnimationFrame"] || e[s[n] + "CancelRequestAnimationFrame"];
                a ? (e.requestAnimationFrame = a, e.cancelAnimationFrame = o, r && (jQuery.fx.timer = function(e) {
                    e() && jQuery.timers.push(e) && !i && (i = !0, t())
                }, jQuery.fx.stop = function() {
                    i = !1
                })) : (e.requestAnimationFrame = function(t) {
                    var i = (new Date).getTime(),
                        s = Math.max(0, 16 - (i - n)),
                        a = e.setTimeout(function() {
                            t(i + s)
                        }, s);
                    return n = i + s, a
                }, e.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }(jQuery), e.Foundation = {
                name: "Foundation",
                version: "5.3.1",
                media_queries: {
                    small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
                },
                stylesheet: t("<style></style>").appendTo("head")[0].sheet,
                global: {
                    namespace: n
                },
                init: function(t, e, i, n, s) {
                    var a = [t, i, n, s],
                        r = [];
                    if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), e && "string" == typeof e && !/reflow/i.test(e)) this.libs.hasOwnProperty(e) && r.push(this.init_lib(e, a));
                    else
                        for (var l in this.libs) r.push(this.init_lib(l, e));
                    return t
                },
                init_lib: function(e, i) {
                    return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), i && i.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, i[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, i[e]), this.libs[e].init.apply(this.libs[e], [this.scope, i[e]])) : (i = i instanceof Array ? i : new Array(i), this.libs[e].init.apply(this.libs[e], i))) : function() {}
                },
                patch: function(t) {
                    t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = r, t.add_namespace = l, t.bindings = d, t.S = this.utils.S
                },
                inherit: function(t, e) {
                    for (var i = e.split(" "), n = i.length; n--;) this.utils.hasOwnProperty(i[n]) && (t[i[n]] = this.utils[i[n]])
                },
                set_namespace: function() {
                    var e = this.global.namespace === n ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                    this.global.namespace = e === n || /false/i.test(e) ? "" : e
                },
                libs: {},
                utils: {
                    S: o,
                    throttle: function(t, e) {
                        var i = null;
                        return function() {
                            var n = this,
                                s = arguments;
                            null == i && (i = setTimeout(function() {
                                t.apply(n, s), i = null
                            }, e))
                        }
                    },
                    debounce: function(t, e, i) {
                        var n, s;
                        return function() {
                            var a = this,
                                o = arguments,
                                r = function() {
                                    n = null, i || (s = t.apply(a, o))
                                },
                                l = i && !n;
                            return clearTimeout(n), n = setTimeout(r, e), l && (s = t.apply(a, o)), s
                        }
                    },
                    data_options: function(e, i) {
                        function n(t) {
                            return !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
                        }

                        function s(e) {
                            return "string" == typeof e ? t.trim(e) : e
                        }
                        i = i || "options";
                        var a, o, r, l = {},
                            d = function(t) {
                                var e = Foundation.global.namespace;
                                return t.data(e.length > 0 ? e + "-" + i : i)
                            },
                            c = d(e);
                        if ("object" == typeof c) return c;
                        for (r = (c || ":").split(";"), a = r.length; a--;) o = r[a].split(":"), o = [o[0], o.slice(1).join(":")], /true/i.test(o[1]) && (o[1] = !0), /false/i.test(o[1]) && (o[1] = !1), n(o[1]) && (o[1] = -1 === o[1].indexOf(".") ? parseInt(o[1], 10) : parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (l[s(o[0])] = s(o[1]));
                        return l
                    },
                    register_media: function(e, i) {
                        Foundation.media_queries[e] === n && (t("head").append('<meta class="' + i + '"/>'), Foundation.media_queries[e] = s(t("." + i).css("font-family")))
                    },
                    add_custom_rule: function(t, e) {
                        if (e === n && Foundation.stylesheet) Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                        else {
                            var i = Foundation.media_queries[e];
                            i !== n && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
                        }
                    },
                    image_loaded: function(t, e) {
                        var i = this,
                            n = t.length;
                        0 === n && e(t), t.each(function() {
                            c(i.S(this), function() {
                                n -= 1, 0 === n && e(t)
                            })
                        })
                    },
                    random_str: function() {
                        return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                    }
                }
            }, t.fn.foundation = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return this.each(function() {
                    return Foundation.init.apply(Foundation, [this].concat(t)), this
                })
            }
    }(jQuery, window, window.document),
    function(t, e, i) {
        "use strict";
        Foundation.libs.abide = {
            name: "abide",
            version: "5.3.3",
            settings: {
                live_validate: !0,
                focus_on_invalid: !0,
                error_labels: !0,
                timeout: 1e3,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^[-+]?\d+$/,
                    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                },
                validators: {
                    equalTo: function(t) {
                        var e = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                            n = t.value,
                            s = e === n;
                        return s
                    }
                }
            },
            timer: null,
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function(e) {
                var i = this,
                    n = i.S(e).attr("novalidate", "novalidate"),
                    s = n.data(this.attr_name(!0) + "-init") || {};
                this.invalid_attr = this.add_namespace("data-invalid"), n.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(t) {
                    var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
                    return i.validate(i.S(this).find("input, textarea, select").get(), t, e)
                }).on("reset", function() {
                    return i.reset(t(this))
                }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(t) {
                    i.validate([this], t)
                }).on("keydown.fndtn.abide", function(t) {
                    s.live_validate === !0 && (clearTimeout(i.timer), i.timer = setTimeout(function() {
                        i.validate([this], t)
                    }.bind(this), s.timeout))
                })
            },
            reset: function(e) {
                e.removeAttr(this.invalid_attr), t(this.invalid_attr, e).removeAttr(this.invalid_attr), t(".error", e).not("small").removeClass("error")
            },
            validate: function(t, e, i) {
                for (var n = this.parse_patterns(t), s = n.length, a = this.S(t[0]).closest("form"), o = /submit/.test(e.type), r = 0; s > r; r++)
                    if (!n[r] && (o || i)) return this.settings.focus_on_invalid && t[r].focus(), a.trigger("invalid"), this.S(t[r]).closest("form").attr(this.invalid_attr, ""), !1;
                return (o || i) && a.trigger("valid"), a.removeAttr(this.invalid_attr), i ? !1 : !0
            },
            parse_patterns: function(t) {
                for (var e = t.length, i = []; e--;) i.push(this.pattern(t[e]));
                return this.check_validation_and_apply_styles(i)
            },
            pattern: function(t) {
                var e = t.getAttribute("type"),
                    i = "string" == typeof t.getAttribute("required"),
                    n = t.getAttribute("pattern") || "";
                return this.settings.patterns.hasOwnProperty(n) && n.length > 0 ? [t, this.settings.patterns[n], i] : n.length > 0 ? [t, new RegExp(n), i] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], i] : (n = /.*/, [t, n, i])
            },
            check_validation_and_apply_styles: function(e) {
                var i = e.length,
                    n = [],
                    s = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]");
                for (s.data(this.attr_name(!0) + "-init") || {}; i--;) {
                    var a, o, r = e[i][0],
                        l = e[i][2],
                        d = r.value.trim(),
                        c = this.S(r).parent(),
                        u = r.getAttribute(this.add_namespace("data-abide-validator")),
                        h = "radio" === r.type,
                        p = "checkbox" === r.type,
                        f = this.S('label[for="' + r.getAttribute("id") + '"]'),
                        g = l ? r.value.length > 0 : !0;
                    r.getAttribute(this.add_namespace("data-equalto")) && (u = "equalTo"), a = c.is("label") ? c.parent() : c, h && l ? n.push(this.valid_radio(r, l)) : p && l ? n.push(this.valid_checkbox(r, l)) : (u && (o = this.settings.validators[u].apply(this, [r, l, a]), n.push(o)), n.push(e[i][1].test(d) && g || !l && r.value.length < 1 || t(r).attr("disabled") ? !0 : !1), n = [n.every(function(t) {
                        return t
                    })], n[0] ? (this.S(r).removeAttr(this.invalid_attr), a.removeClass("error"), f.length > 0 && this.settings.error_labels && f.removeClass("error"), t(r).triggerHandler("valid")) : (a.addClass("error"), this.S(r).attr(this.invalid_attr, ""), f.length > 0 && this.settings.error_labels && f.addClass("error"), t(r).triggerHandler("invalid")))
                }
                return n
            },
            valid_checkbox: function(t, e) {
                var t = this.S(t),
                    i = t.is(":checked") || !e;
                return i ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), i
            },
            valid_radio: function(t) {
                for (var e = t.getAttribute("name"), i = this.S(t).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + e + "']"), n = i.length, s = !1, a = 0; n > a; a++) i[a].checked && (s = !0);
                for (var a = 0; n > a; a++) s ? this.S(i[a]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(i[a]).attr(this.invalid_attr, "").parent().addClass("error");
                return s
            },
            valid_equal: function(t, e, n) {
                var s = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                    a = t.value,
                    o = s === a;
                return o ? (this.S(t).removeAttr(this.invalid_attr), n.removeClass("error")) : (this.S(t).attr(this.invalid_attr, ""), n.addClass("error")), o
            },
            valid_oneof: function(t, e, i, n) {
                var t = this.S(t),
                    s = this.S("[" + this.add_namespace("data-oneof") + "]"),
                    a = s.filter(":checked").length > 0;
                if (a ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), !n) {
                    var o = this;
                    s.each(function() {
                        o.valid_oneof.call(o, this, null, null, !0)
                    })
                }
                return a
            }
        }
    }(jQuery, window, window.document),
    function(t) {
        "use strict";
        Foundation.libs.accordion = {
            name: "accordion",
            version: "5.3.3",
            settings: {
                active_class: "active",
                multi_expand: !1,
                toggleable: !0,
                callback: function() {}
            },
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function() {
                var e = this,
                    i = this.S;
                i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function(n) {
                    var s = i(this).closest("[" + e.attr_name() + "]"),
                        a = e.attr_name() + "=" + s.attr(e.attr_name()),
                        o = s.data(e.attr_name(!0) + "-init"),
                        r = i("#" + this.href.split("#")[1]),
                        l = t("> dd", s),
                        d = l.children(".content"),
                        c = d.filter("." + o.active_class);
                    return n.preventDefault(), s.attr(e.attr_name()) && (d = d.add("[" + a + "] dd > .content"), l = l.add("[" + a + "] dd")), o.toggleable && r.is(c) ? (r.parent("dd").toggleClass(o.active_class, !1), r.toggleClass(o.active_class, !1), o.callback(r), r.triggerHandler("toggled", [s]), void s.triggerHandler("toggled", [r])) : (o.multi_expand || (d.removeClass(o.active_class), l.removeClass(o.active_class)), r.addClass(o.active_class).parent().addClass(o.active_class), o.callback(r), r.triggerHandler("toggled", [s]), void s.triggerHandler("toggled", [r]))
                })
            },
            off: function() {},
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t) {
        "use strict";
        Foundation.libs.alert = {
            name: "alert",
            version: "5.3.3",
            settings: {
                callback: function() {}
            },
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function() {
                var e = this,
                    i = this.S;
                t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function(t) {
                    var n = i(this).closest("[" + e.attr_name() + "]"),
                        s = n.data(e.attr_name(!0) + "-init") || e.settings;
                    t.preventDefault(), Modernizr.csstransitions ? (n.addClass("alert-close"), n.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        i(this).trigger("close").trigger("close.fndtn.alert").remove(), s.callback()
                    })) : n.fadeOut(300, function() {
                        i(this).trigger("close").trigger("close.fndtn.alert").remove(), s.callback()
                    })
                })
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";
        Foundation.libs.clearing = {
            name: "clearing",
            version: "5.3.3",
            settings: {
                templates: {
                    viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
                },
                close_selectors: ".clearing-close, div.clearing-blackout",
                open_selectors: "",
                skip_selector: "",
                touch_label: "",
                init: !1,
                locked: !1
            },
            init: function(t, e, i) {
                var n = this;
                Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, i), n.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(n.S("li", this.scope)) : n.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    n.assemble(n.S("li", this))
                })
            },
            events: function(n) {
                var s = this,
                    a = s.S,
                    o = t(".scroll-container");
                o.length > 0 && (this.scope = o), a(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(t, e, i) {
                    var e = e || a(this),
                        i = i || e,
                        n = e.next("li"),
                        o = e.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init"),
                        r = a(t.target);
                    t.preventDefault(), o || (s.init(), o = e.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init")), i.hasClass("visible") && e[0] === i[0] && n.length > 0 && s.is_open(e) && (i = n, r = a("img", i)), s.open(r, e, i), s.update_paddles(i)
                }).on("click.fndtn.clearing", ".clearing-main-next", function(t) {
                    s.nav(t, "next")
                }).on("click.fndtn.clearing", ".clearing-main-prev", function(t) {
                    s.nav(t, "prev")
                }).on("click.fndtn.clearing", this.settings.close_selectors, function(t) {
                    Foundation.libs.clearing.close(t, this)
                }), t(i).on("keydown.fndtn.clearing", function(t) {
                    s.keydown(t)
                }), a(e).off(".clearing").on("resize.fndtn.clearing", function() {
                    s.resize()
                }), this.swipe_events(n)
            },
            swipe_events: function() {
                var t = this,
                    e = t.S;
                e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(t) {
                    t.touches || (t = t.originalEvent);
                    var i = {
                        start_page_x: t.touches[0].pageX,
                        start_page_y: t.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: n
                    };
                    e(this).data("swipe-transition", i), t.stopPropagation()
                }).on("touchmove.fndtn.clearing", ".visible-img", function(i) {
                    if (i.touches || (i = i.originalEvent), !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                        var n = e(this).data("swipe-transition");
                        if ("undefined" == typeof n && (n = {}), n.delta_x = i.touches[0].pageX - n.start_page_x, Foundation.rtl && (n.delta_x = -n.delta_x), "undefined" == typeof n.is_scrolling && (n.is_scrolling = !!(n.is_scrolling || Math.abs(n.delta_x) < Math.abs(i.touches[0].pageY - n.start_page_y))), !n.is_scrolling && !n.active) {
                            i.preventDefault();
                            var s = n.delta_x < 0 ? "next" : "prev";
                            n.active = !0, t.nav(i, s)
                        }
                    }
                }).on("touchend.fndtn.clearing", ".visible-img", function(t) {
                    e(this).data("swipe-transition", {}), t.stopPropagation()
                })
            },
            assemble: function(e) {
                var i = e.parent();
                if (!i.parent().hasClass("carousel")) {
                    i.after('<div id="foundationClearingHolder"></div>');
                    var n = i.detach(),
                        s = "";
                    if (null != n[0]) {
                        s = n[0].outerHTML;
                        var a = this.S("#foundationClearingHolder"),
                            o = i.data(this.attr_name(!0) + "-init"),
                            r = {
                                grid: '<div class="carousel">' + s + "</div>",
                                viewing: o.templates.viewing
                            },
                            l = '<div class="clearing-assembled"><div>' + r.viewing + r.grid + "</div></div>",
                            d = this.settings.touch_label;
                        Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(d).end()), a.after(l).remove()
                    }
                }
            },
            open: function(e, n, s) {
                function a() {
                    setTimeout(function() {
                        this.image_loaded(h, function() {
                            1 !== h.outerWidth() || f ? o.call(this, h) : a.call(this)
                        }.bind(this))
                    }.bind(this), 100)
                }

                function o(e) {
                    var i = t(e);
                    i.css("visibility", "visible"), l.css("overflow", "hidden"), d.addClass("clearing-blackout"), c.addClass("clearing-container"), u.show(), this.fix_height(s).caption(r.S(".clearing-caption", u), r.S("img", s)).center_and_label(e, p).shift(n, s, function() {
                        s.closest("li").siblings().removeClass("visible"), s.closest("li").addClass("visible")
                    }), u.trigger("opened.fndtn.clearing")
                }
                var r = this,
                    l = t(i.body),
                    d = s.closest(".clearing-assembled"),
                    c = r.S("div", d).first(),
                    u = r.S(".visible-img", c),
                    h = r.S("img", u).not(e),
                    p = r.S(".clearing-touch-label", c),
                    f = !1;
                t("body").on("touchmove", function(t) {
                    t.preventDefault()
                }), h.error(function() {
                    f = !0
                }), this.locked() || (u.trigger("open.fndtn.clearing"), h.attr("src", this.load(e)).css("visibility", "hidden"), a.call(this))
            },
            close: function(e, n) {
                e.preventDefault();
                var s, a, o = function(t) {
                        return /blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
                    }(t(n)),
                    r = t(i.body);
                return n === e.target && o && (r.css("overflow", ""), s = t("div", o).first(), a = t(".visible-img", s), a.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", o).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), s.removeClass("clearing-container"), a.hide(), a.trigger("closed.fndtn.clearing")), t("body").off("touchmove"), !1
            },
            is_open: function(t) {
                return t.parent().prop("style").length > 0
            },
            keydown: function(e) {
                var i = t(".clearing-blackout ul[" + this.attr_name() + "]"),
                    n = this.rtl ? 37 : 39,
                    s = this.rtl ? 39 : 37,
                    a = 27;
                e.which === n && this.go(i, "next"), e.which === s && this.go(i, "prev"), e.which === a && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
            },
            nav: function(e, i) {
                var n = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
                e.preventDefault(), this.go(n, i)
            },
            resize: function() {
                var e = t("img", ".clearing-blackout .visible-img"),
                    i = t(".clearing-touch-label", ".clearing-blackout");
                e.length && (this.center_and_label(e, i), e.trigger("resized.fndtn.clearing"))
            },
            fix_height: function(t) {
                var e = t.parent().children(),
                    i = this;
                return e.each(function() {
                    var t = i.S(this),
                        e = t.find("img");
                    t.height() > e.outerHeight() && t.addClass("fix-height")
                }).closest("ul").width(100 * e.length + "%"), this
            },
            update_paddles: function(t) {
                t = t.closest("li");
                var e = t.closest(".carousel").siblings(".visible-img");
                t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
            },
            center_and_label: function(t, e) {
                return this.rtl ? (t.css({
                    marginRight: -(t.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2),
                    left: "auto",
                    right: "50%"
                }), e.length > 0 && e.css({
                    marginRight: -(e.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10,
                    left: "auto",
                    right: "50%"
                })) : (t.css({
                    marginLeft: -(t.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2)
                }), e.length > 0 && e.css({
                    marginLeft: -(e.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10
                })), this
            },
            load: function(t) {
                var e;
                return e = "A" === t[0].nodeName ? t.attr("href") : t.parent().attr("href"), this.preload(t), e ? e : t.attr("src")
            },
            preload: function(t) {
                this.img(t.closest("li").next()).img(t.closest("li").prev())
            },
            img: function(t) {
                if (t.length) {
                    var e = new Image,
                        i = this.S("a", t);
                    e.src = i.length ? i.attr("href") : this.S("img", t).attr("src")
                }
                return this
            },
            caption: function(t, e) {
                var i = e.attr("data-caption");
                return i ? t.html(i).show() : t.text("").hide(), this
            },
            go: function(t, e) {
                var i = this.S(".visible", t),
                    n = i[e]();
                this.settings.skip_selector && 0 != n.find(this.settings.skip_selector).length && (n = n[e]()), n.length && this.S("img", n).trigger("click", [i, n]).trigger("click.fndtn.clearing", [i, n]).trigger("change.fndtn.clearing")
            },
            shift: function(t, e, i) {
                var n, s = e.parent(),
                    a = this.settings.prev_index || e.index(),
                    o = this.direction(s, t, e),
                    r = this.rtl ? "right" : "left",
                    l = parseInt(s.css("left"), 10),
                    d = e.outerWidth(),
                    c = {};
                e.index() === a || /skip/.test(o) ? /skip/.test(o) && (n = e.index() - this.settings.up_count, this.lock(), n > 0 ? (c[r] = -(n * d), s.animate(c, 300, this.unlock())) : (c[r] = 0, s.animate(c, 300, this.unlock()))) : /left/.test(o) ? (this.lock(), c[r] = l + d, s.animate(c, 300, this.unlock())) : /right/.test(o) && (this.lock(), c[r] = l - d, s.animate(c, 300, this.unlock())), i()
            },
            direction: function(t, e, i) {
                var n, s = this.S("li", t),
                    a = s.outerWidth() + s.outerWidth() / 4,
                    o = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1,
                    r = s.index(i);
                return this.settings.up_count = o, n = this.adjacent(this.settings.prev_index, r) ? r > o && r > this.settings.prev_index ? "right" : r > o - 1 && r <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = r, n
            },
            adjacent: function(t, e) {
                for (var i = e + 1; i >= e - 1; i--)
                    if (i === t) return !0;
                return !1
            },
            lock: function() {
                this.settings.locked = !0
            },
            unlock: function() {
                this.settings.locked = !1
            },
            locked: function() {
                return this.settings.locked
            },
            off: function() {
                this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
            },
            reflow: function() {
                this.init()
            }
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.dropdown = {
            name: "dropdown",
            version: "5.3.3",
            settings: {
                active_class: "open",
                align: "bottom",
                is_hover: !1,
                opened: function() {},
                closed: function() {}
            },
            init: function(t, e, i) {
                Foundation.inherit(this, "throttle"), this.bindings(e, i)
            },
            events: function() {
                var i = this,
                    n = i.S;
                n(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(e) {
                    var s = n(this).data(i.attr_name(!0) + "-init") || i.settings;
                    (!s.is_hover || Modernizr.touch) && (e.preventDefault(), i.toggle(t(this)))
                }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(t) {
                    var e, s, a = n(this);
                    clearTimeout(i.timeout), a.data(i.data_attr()) ? (e = n("#" + a.data(i.data_attr())), s = a) : (e = a, s = n("[" + i.attr_name() + "='" + e.attr("id") + "']"));
                    var o = s.data(i.attr_name(!0) + "-init") || i.settings;
                    n(t.target).data(i.data_attr()) && o.is_hover && i.closeall.call(i), o.is_hover && i.open.apply(i, [e, s])
                }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                    var t = n(this);
                    i.timeout = setTimeout(function() {
                        if (t.data(i.data_attr())) {
                            var e = t.data(i.data_attr(!0) + "-init") || i.settings;
                            e.is_hover && i.close.call(i, n("#" + t.data(i.data_attr())))
                        } else {
                            var s = n("[" + i.attr_name() + '="' + n(this).attr("id") + '"]'),
                                e = s.data(i.attr_name(!0) + "-init") || i.settings;
                            e.is_hover && i.close.call(i, t)
                        }
                    }.bind(this), 150)
                }).on("click.fndtn.dropdown", function(e) {
                    var s = n(e.target).closest("[" + i.attr_name() + "-content]");
                    if (!(n(e.target).closest("[" + i.attr_name() + "]").length > 0)) return !n(e.target).data("revealId") && s.length > 0 && (n(e.target).is("[" + i.attr_name() + "-content]") || t.contains(s.first()[0], e.target)) ? void e.stopPropagation() : void i.close.call(i, n("[" + i.attr_name() + "-content]"))
                }).on("opened.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                    i.settings.opened.call(this)
                }).on("closed.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                    i.settings.closed.call(this)
                }), n(e).off(".dropdown").on("resize.fndtn.dropdown", i.throttle(function() {
                    i.resize.call(i)
                }, 50)), this.resize()
            },
            close: function(t) {
                var e = this;
                t.each(function() {
                    e.S(this).hasClass(e.settings.active_class) && (e.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(e.settings.active_class).prev("[" + e.attr_name() + "]").removeClass(e.settings.active_class).removeData("target"), e.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [t]))
                })
            },
            closeall: function() {
                var e = this;
                t.each(e.S("[" + this.attr_name() + "-content]"), function() {
                    e.close.call(e, e.S(this))
                })
            },
            open: function(t, e) {
                this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [t, e])
            },
            data_attr: function() {
                return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
            },
            toggle: function(t) {
                var e = this.S("#" + t.data(this.data_attr()));
                0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
            },
            resize: function() {
                var t = this.S("[" + this.attr_name() + "-content].open"),
                    e = this.S("[" + this.attr_name() + "='" + t.attr("id") + "']");
                t.length && e.length && this.css(t, e)
            },
            css: function(t, e) {
                var i = Math.max((e.width() - t.width()) / 2, 8);
                if (this.clear_idx(), this.small()) {
                    var n = this.dirs.bottom.call(t, e);
                    t.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                        position: "absolute",
                        width: "95%",
                        "max-width": "none",
                        top: n.top
                    }), t.css(Foundation.rtl ? "right" : "left", i)
                } else {
                    var s = e.data(this.attr_name(!0) + "-init") || this.settings;
                    this.style(t, e, s)
                }
                return t
            },
            style: function(e, i, n) {
                var s = t.extend({
                    position: "absolute"
                }, this.dirs[n.align].call(e, i, n));
                e.attr("style", "").css(s)
            },
            dirs: {
                _base: function(t) {
                    var e = this.offsetParent(),
                        i = e.offset(),
                        n = t.offset();
                    return n.top -= i.top, n.left -= i.left, n
                },
                top: function(t) {
                    var e = Foundation.libs.dropdown,
                        i = e.dirs._base.call(this, t),
                        n = 8;
                    return this.addClass("drop-top"), (t.outerWidth() < this.outerWidth() || e.small()) && e.adjust_pip(n, i), Foundation.rtl ? {
                        left: i.left - this.outerWidth() + t.outerWidth(),
                        top: i.top - this.outerHeight()
                    } : {
                        left: i.left,
                        top: i.top - this.outerHeight()
                    }
                },
                bottom: function(t) {
                    var e = Foundation.libs.dropdown,
                        i = e.dirs._base.call(this, t),
                        n = 8;
                    return (t.outerWidth() < this.outerWidth() || e.small()) && e.adjust_pip(n, i), e.rtl ? {
                        left: i.left - this.outerWidth() + t.outerWidth(),
                        top: i.top + t.outerHeight()
                    } : {
                        left: i.left,
                        top: i.top + t.outerHeight()
                    }
                },
                left: function(t) {
                    var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                    return this.addClass("drop-left"), {
                        left: e.left - this.outerWidth(),
                        top: e.top
                    }
                },
                right: function(t) {
                    var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                    return this.addClass("drop-right"), {
                        left: e.left + t.outerWidth(),
                        top: e.top
                    }
                }
            },
            adjust_pip: function(t, e) {
                var i = Foundation.stylesheet;
                this.small() && (t += e.left - 8), this.rule_idx = i.cssRules.length;
                var n = ".f-dropdown.open:before",
                    s = ".f-dropdown.open:after",
                    a = "left: " + t + "px;",
                    o = "left: " + (t - 1) + "px;";
                i.insertRule ? (i.insertRule([n, "{", a, "}"].join(" "), this.rule_idx), i.insertRule([s, "{", o, "}"].join(" "), this.rule_idx + 1)) : (i.addRule(n, a, this.rule_idx), i.addRule(s, o, this.rule_idx + 1))
            },
            clear_idx: function() {
                var t = Foundation.stylesheet;
                this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx)
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            off: function() {
                this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.interchange = {
            name: "interchange",
            version: "5.3.3",
            cache: {},
            images_loaded: !1,
            nodes_loaded: !1,
            settings: {
                load_attr: "interchange",
                named_queries: {
                    "default": "only screen",
                    small: Foundation.media_queries.small,
                    medium: Foundation.media_queries.medium,
                    large: Foundation.media_queries.large,
                    xlarge: Foundation.media_queries.xlarge,
                    xxlarge: Foundation.media_queries.xxlarge,
                    landscape: "only screen and (orientation: landscape)",
                    portrait: "only screen and (orientation: portrait)",
                    retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                },
                directives: {
                    replace: function(e, i, n) {
                        if (/IMG/.test(e[0].nodeName)) {
                            var s = e[0].src;
                            if (new RegExp(i, "i").test(s)) return;
                            return e[0].src = i, n(e[0].src)
                        }
                        var a = e.data(this.data_attr + "-last-path"),
                            o = this;
                        if (a != i) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i) ? (t(e).css("background-image", "url(" + i + ")"), e.data("interchange-last-path", i), n(i)) : t.get(i, function(t) {
                            e.html(t), e.data(o.data_attr + "-last-path", i), n()
                        })
                    }
                }
            },
            init: function(e, i, n) {
                Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, i, n), this.bindings(i, n), this.load("images"), this.load("nodes")
            },
            get_media_hash: function() {
                var t = "";
                for (var e in this.settings.named_queries) t += matchMedia(this.settings.named_queries[e]).matches.toString();
                return t
            },
            events: function() {
                var i, n = this;
                return t(e).off(".interchange").on("resize.fndtn.interchange", n.throttle(function() {
                    var t = n.get_media_hash();
                    t !== i && n.resize(), i = t
                }, 50)), this
            },
            resize: function() {
                var e = this.cache;
                if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(t.proxy(this.resize, this), 50);
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        var n = this.results(i, e[i]);
                        n && this.settings.directives[n.scenario[1]].call(this, n.el, n.scenario[0], function() {
                            if (arguments[0] instanceof Array) var t = arguments[0];
                            else var t = Array.prototype.slice.call(arguments, 0);
                            n.el.trigger(n.scenario[1], t)
                        })
                    }
            },
            results: function(t, e) {
                var i = e.length;
                if (i > 0)
                    for (var n = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--;) {
                        var s, a = e[i][2];
                        if (s = matchMedia(this.settings.named_queries.hasOwnProperty(a) ? this.settings.named_queries[a] : a), s.matches) return {
                            el: n,
                            scenario: e[i]
                        }
                    }
                return !1
            },
            load: function(t, e) {
                return ("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
            },
            update_images: function() {
                var t = this.S("img[" + this.data_attr + "]"),
                    e = t.length,
                    i = e,
                    n = 0,
                    s = this.data_attr;
                for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; i--;) {
                    if (n++, t[i]) {
                        var a = t[i].getAttribute(s) || "";
                        a.length > 0 && this.cached_images.push(t[i])
                    }
                    n === e && (this.images_loaded = !0, this.enhance("images"))
                }
                return this
            },
            update_nodes: function() {
                var t = this.S("[" + this.data_attr + "]").not("img"),
                    e = t.length,
                    i = e,
                    n = 0,
                    s = this.data_attr;
                for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--;) {
                    n++;
                    var a = t[i].getAttribute(s) || "";
                    a.length > 0 && this.cached_nodes.push(t[i]), n === e && (this.nodes_loaded = !0, this.enhance("nodes"))
                }
                return this
            },
            enhance: function(i) {
                for (var n = this["cached_" + i].length; n--;) this.object(t(this["cached_" + i][n]));
                return t(e).trigger("resize").trigger("resize.fndtn.interchange")
            },
            convert_directive: function(t) {
                var e = this.trim(t);
                return e.length > 0 ? e : "replace"
            },
            parse_scenario: function(t) {
                var e = t[0].match(/(.+),\s*(\w+)\s*$/),
                    i = t[1];
                if (e) var n = e[1],
                    s = e[2];
                else var a = t[0].split(/,\s*$/),
                    n = a[0],
                    s = "";
                return [this.trim(n), this.convert_directive(s), this.trim(i)]
            },
            object: function(t) {
                var e = this.parse_data_attr(t),
                    i = [],
                    n = e.length;
                if (n > 0)
                    for (; n--;) {
                        var s = e[n].split(/\((.*?)(\))$/);
                        if (s.length > 1) {
                            var a = this.parse_scenario(s);
                            i.push(a)
                        }
                    }
                return this.store(t, i)
            },
            store: function(t, e) {
                var i = this.random_str(),
                    n = t.data(this.add_namespace("uuid", !0));
                return this.cache[n] ? this.cache[n] : (t.attr(this.add_namespace("data-uuid"), i), this.cache[i] = e)
            },
            trim: function(e) {
                return "string" == typeof e ? t.trim(e) : e
            },
            set_data_attr: function(t) {
                return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
            },
            parse_data_attr: function(t) {
                for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, n = []; i--;) e[i].replace(/[\W\d]+/, "").length > 4 && n.push(e[i]);
                return n
            },
            reflow: function() {
                this.load("images", !0), this.load("nodes", !0)
            }
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";
        Foundation.libs.joyride = {
            name: "joyride",
            version: "5.3.3",
            defaults: {
                expose: !1,
                modal: !0,
                tip_location: "bottom",
                nub_position: "auto",
                scroll_speed: 1500,
                scroll_animation: "linear",
                timer: 0,
                start_timer_on_click: !0,
                start_offset: 0,
                next_button: !0,
                prev_button: !0,
                tip_animation: "fade",
                pause_after: [],
                exposed: [],
                tip_animation_fade_speed: 300,
                cookie_monster: !1,
                cookie_name: "joyride",
                cookie_domain: !1,
                cookie_expires: 365,
                tip_container: "body",
                abort_on_close: !0,
                tip_location_patterns: {
                    top: ["bottom"],
                    bottom: [],
                    left: ["right", "top", "bottom"],
                    right: ["left", "top", "bottom"]
                },
                post_ride_callback: function() {},
                post_step_callback: function() {},
                pre_step_callback: function() {},
                pre_ride_callback: function() {},
                post_expose_callback: function() {},
                template: {
                    link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                    timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                    tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                    wrapper: '<div class="joyride-content-wrapper"></div>',
                    button: '<a href="#" class="small button joyride-next-tip"></a>',
                    prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                    modal: '<div class="joyride-modal-bg"></div>',
                    expose: '<div class="joyride-expose-wrapper"></div>',
                    expose_cover: '<div class="joyride-expose-cover"></div>'
                },
                expose_add_class: ""
            },
            init: function(e, i, n) {
                Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || t.extend({}, this.defaults, n || i), this.bindings(i, n)
            },
            events: function() {
                var i = this;
                t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(t) {
                    t.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
                }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(t) {
                    t.preventDefault(), this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
                }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(t) {
                    t.preventDefault(), this.end(this.settings.abort_on_close)
                }.bind(this)), t(e).off(".joyride").on("resize.fndtn.joyride", i.throttle(function() {
                    if (t("[" + i.attr_name() + "]").length > 0 && i.settings.$next_tip) {
                        if (i.settings.exposed.length > 0) {
                            var e = t(i.settings.exposed);
                            e.each(function() {
                                var e = t(this);
                                i.un_expose(e), i.expose(e)
                            })
                        }
                        i.is_phone() ? i.pos_phone() : i.pos_default(!1)
                    }
                }, 100))
            },
            start: function() {
                var e = this,
                    i = t("[" + this.attr_name() + "]", this.scope),
                    n = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                    s = n.length;
                !i.length > 0 || (this.settings.init || this.events(), this.settings = i.data(this.attr_name(!0) + "-init"), this.settings.$content_el = i, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(i) {
                    var a = t(this);
                    this.settings = t.extend({}, e.defaults, e.data_options(a));
                    for (var o = s; o--;) e.settings[n[o]] = parseInt(e.settings[n[o]], 10);
                    e.create({
                        $li: a,
                        index: i
                    })
                }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
            },
            resume: function() {
                this.set_li(), this.show()
            },
            tip_template: function(e) {
                var i, n;
                return e.tip_class = e.tip_class || "", i = t(this.settings.template.tip).addClass(e.tip_class), n = t.trim(t(e.li).html()) + this.prev_button_text(e.prev_button_text, e.index) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), i.append(t(this.settings.template.wrapper)), i.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", i).append(n), i[0]
            },
            timer_instance: function(e) {
                var i;
                return i = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
            },
            button_text: function(e) {
                return this.settings.tip_settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
            },
            prev_button_text: function(e, i) {
                return this.settings.tip_settings.prev_button ? (e = t.trim(e) || "Previous", e = 0 == i ? t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML : t(this.settings.template.prev_button).append(e)[0].outerHTML) : e = "", e
            },
            create: function(e) {
                this.settings.tip_settings = t.extend({}, this.settings, this.data_options(e.$li));
                var i = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")),
                    n = e.$li.attr(this.add_namespace("data-button-prev")) || e.$li.attr(this.add_namespace("data-prev-text")),
                    s = e.$li.attr("class"),
                    a = t(this.tip_template({
                        tip_class: s,
                        index: e.index,
                        button_text: i,
                        prev_button_text: n,
                        li: e.$li
                    }));
                t(this.settings.tip_container).append(a)
            },
            show: function(e, i) {
                var s = null;
                this.settings.$li === n || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(e, i), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), s = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (s.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                    s.animate({
                        width: s.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (s.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                    s.animate({
                        width: s.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
            },
            is_phone: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            hide: function() {
                this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || t(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(t.proxy(function() {
                    this.hide(), this.css("visibility", "visible")
                }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
            },
            set_li: function(t, e) {
                t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = e ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
            },
            set_next_tip: function() {
                this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
            },
            set_target: function() {
                var e = this.settings.$li.attr(this.add_namespace("data-class")),
                    n = this.settings.$li.attr(this.add_namespace("data-id")),
                    s = function() {
                        return n ? t(i.getElementById(n)) : e ? t("." + e).first() : t("body")
                    };
                this.settings.$target = s()
            },
            scroll_to: function() {
                var i, n;
                i = t(e).height() / 2, n = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()), 0 != n && t("html, body").stop().animate({
                    scrollTop: n
                }, this.settings.scroll_speed, "swing")
            },
            paused: function() {
                return -1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
            },
            restart: function() {
                this.hide(), this.settings.$li = n, this.show("init")
            },
            pos_default: function(t) {
                var e = this.settings.$next_tip.find(".joyride-nub"),
                    i = Math.ceil(e.outerWidth() / 2),
                    n = Math.ceil(e.outerHeight() / 2),
                    s = t || !1;
                if (s && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(e);
                else {
                    var a = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                        o = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                    this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                        top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + a,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + o
                    } : {
                        top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + a,
                        left: this.settings.$target.offset().left + o
                    }), this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                        top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + a,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                    } : {
                        top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + a,
                        left: this.settings.$target.offset().left + o
                    }), this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + a,
                        left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + i + o
                    }), this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + a,
                        left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - i + o
                    }), this.nub_position(e, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
                }
                s && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function(e) {
                var i = this.settings.$next_tip.outerHeight(),
                    n = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                    s = t(".joyride-nub", this.settings.$next_tip),
                    a = Math.ceil(s.outerHeight() / 2),
                    o = e || !1;
                s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : this.top() ? (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top - i - a
                }), s.addClass("bottom")) : (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top + n + a
                }), s.addClass("top")), o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function(t) {
                this.center(), t.hide(), this.show_modal()
            },
            show_modal: function() {
                if (!this.settings.$next_tip.data("closed")) {
                    var e = t(".joyride-modal-bg");
                    e.length < 1 && t("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
                }
            },
            expose: function() {
                var i, n, s, a, o, r = "expose-" + this.random_str(6);
                if (arguments.length > 0 && arguments[0] instanceof t) s = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    s = this.settings.$target
                }
                return s.length < 1 ? (e.console && console.error("element not valid", s), !1) : (i = t(this.settings.template.expose), this.settings.$body.append(i), i.css({
                    top: s.offset().top,
                    left: s.offset().left,
                    width: s.outerWidth(!0),
                    height: s.outerHeight(!0)
                }), n = t(this.settings.template.expose_cover), a = {
                    zIndex: s.css("z-index"),
                    position: s.css("position")
                }, o = null == s.attr("class") ? "" : s.attr("class"), s.css("z-index", parseInt(i.css("z-index")) + 1), "static" == a.position && s.css("position", "relative"), s.data("expose-css", a), s.data("orig-class", o), s.attr("class", o + " " + this.settings.expose_add_class), n.css({
                    top: s.offset().top,
                    left: s.offset().left,
                    width: s.outerWidth(!0),
                    height: s.outerHeight(!0)
                }), this.settings.modal && this.show_modal(), this.settings.$body.append(n), i.addClass(r), n.addClass(r), s.data("expose", r), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, s), void this.add_exposed(s))
            },
            un_expose: function() {
                var i, n, s, a, o, r = !1;
                if (arguments.length > 0 && arguments[0] instanceof t) n = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    n = this.settings.$target
                }
                return n.length < 1 ? (e.console && console.error("element not valid", n), !1) : (i = n.data("expose"), s = t("." + i), arguments.length > 1 && (r = arguments[1]), r === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : s.remove(), a = n.data("expose-css"), "auto" == a.zIndex ? n.css("z-index", "") : n.css("z-index", a.zIndex), a.position != n.css("position") && ("static" == a.position ? n.css("position", "") : n.css("position", a.position)), o = n.data("orig-class"), n.attr("class", o), n.removeData("orig-classes"), n.removeData("expose"), n.removeData("expose-z-index"), void this.remove_exposed(n))
            },
            add_exposed: function(e) {
                this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
            },
            remove_exposed: function(e) {
                var i, n;
                for (e instanceof t ? i = e[0] : "string" == typeof e && (i = e), this.settings.exposed = this.settings.exposed || [], n = this.settings.exposed.length; n--;)
                    if (this.settings.exposed[n] == i) return void this.settings.exposed.splice(n, 1)
            },
            center: function() {
                var i = t(e);
                return this.settings.$next_tip.css({
                    top: (i.height() - this.settings.$next_tip.outerHeight()) / 2 + i.scrollTop(),
                    left: (i.width() - this.settings.$next_tip.outerWidth()) / 2 + i.scrollLeft()
                }), !0
            },
            bottom: function() {
                return /bottom/i.test(this.settings.tip_settings.tip_location)
            },
            top: function() {
                return /top/i.test(this.settings.tip_settings.tip_location)
            },
            right: function() {
                return /right/i.test(this.settings.tip_settings.tip_location)
            },
            left: function() {
                return /left/i.test(this.settings.tip_settings.tip_location)
            },
            corners: function(i) {
                var n = t(e),
                    s = n.height() / 2,
                    a = Math.ceil(this.settings.$target.offset().top - s + this.settings.$next_tip.outerHeight()),
                    o = n.width() + n.scrollLeft(),
                    r = n.height() + a,
                    l = n.height() + n.scrollTop(),
                    d = n.scrollTop();
                return d > a && (d = 0 > a ? 0 : a), r > l && (l = r), [i.offset().top < d, o < i.offset().left + i.outerWidth(), l < i.offset().top + i.outerHeight(), n.scrollLeft() > i.offset().left]
            },
            visible: function(t) {
                for (var e = t.length; e--;)
                    if (t[e]) return !1;
                return !0
            },
            nub_position: function(t, e, i) {
                t.addClass("auto" === e ? i : e)
            },
            startTimer: function() {
                this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                    this.hide(), this.show(), this.startTimer()
                }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
            },
            end: function(e) {
                this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {
                    expires: this.settings.cookie_expires,
                    domain: this.settings.cookie_domain
                }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof e || e === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), t(".joyride-tip-guide").remove()
            },
            off: function() {
                t(this.scope).off(".joyride"), t(e).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs["magellan-expedition"] = {
            name: "magellan-expedition",
            version: "5.3.3",
            settings: {
                active_class: "active",
                threshold: 0,
                destination_threshold: 20,
                throttle_delay: 30,
                fixed_top: 0
            },
            init: function(t, e, i) {
                Foundation.inherit(this, "throttle"), this.bindings(e, i)
            },
            events: function() {
                var i = this,
                    n = i.S,
                    s = i.settings;
                i.set_expedition_position(), n(i.scope).off(".magellan").on("click.fndtn.magellan", "[" + i.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(e) {
                    e.preventDefault();
                    var n = t(this).closest("[" + i.attr_name() + "]"),
                        s = n.data("magellan-expedition-init"),
                        a = this.hash.split("#").join(""),
                        o = t("a[name='" + a + "']");
                    0 === o.length && (o = t("#" + a));
                    var r = o.offset().top - s.destination_threshold + 1;
                    r -= n.outerHeight(), t("html, body").stop().animate({
                        scrollTop: r
                    }, 700, "swing", function() {
                        history.pushState ? history.pushState(null, null, "#" + a) : location.hash = "#" + a
                    })
                }).on("scroll.fndtn.magellan", i.throttle(this.check_for_arrivals.bind(this), s.throttle_delay)), t(e).on("resize.fndtn.magellan", i.throttle(this.set_expedition_position.bind(this), s.throttle_delay))
            },
            check_for_arrivals: function() {
                var t = this;
                t.update_arrivals(), t.update_expedition_positions()
            },
            set_expedition_position: function() {
                var e = this;
                t("[" + this.attr_name() + "=fixed]", e.scope).each(function() {
                    var i, n, s = t(this),
                        a = s.data("magellan-expedition-init"),
                        o = s.attr("styles");
                    s.attr("style", ""), i = s.offset().top + a.threshold, n = parseInt(s.data("magellan-fixed-top")), isNaN(n) || (e.settings.fixed_top = n), s.data(e.data_attr("magellan-top-offset"), i), s.attr("style", o)
                })
            },
            update_expedition_positions: function() {
                var i = this,
                    n = t(e).scrollTop();
                t("[" + this.attr_name() + "=fixed]", i.scope).each(function() {
                    var e = t(this),
                        s = e.data("magellan-expedition-init"),
                        a = e.attr("style"),
                        o = e.data("magellan-top-offset");
                    if (n + i.settings.fixed_top >= o) {
                        var r = e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]");
                        0 === r.length && (r = e.clone(), r.removeAttr(i.attr_name()), r.attr(i.add_namespace("data-magellan-expedition-clone"), ""), e.before(r)), e.css({
                            position: "fixed",
                            top: s.fixed_top
                        })
                    } else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", a).css("position", "").css("top", "").removeClass("fixed")
                })
            },
            update_arrivals: function() {
                var i = this,
                    n = t(e).scrollTop();
                t("[" + this.attr_name() + "]", i.scope).each(function() {
                    var e = t(this),
                        s = e.data(i.attr_name(!0) + "-init"),
                        a = i.offsets(e, n),
                        o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"),
                        r = !1;
                    a.each(function(t, n) {
                        if (n.viewport_offset >= n.top_offset) {
                            var a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]");
                            return a.not(n.arrival).removeClass(s.active_class), n.arrival.addClass(s.active_class), r = !0, !0
                        }
                    }), r || o.removeClass(s.active_class)
                })
            },
            offsets: function(e, i) {
                var n = this,
                    s = e.data(n.attr_name(!0) + "-init"),
                    a = i;
                return e.find("[" + n.add_namespace("data-magellan-arrival") + "]").map(function() {
                    var i = t(this).data(n.data_attr("magellan-arrival")),
                        o = t("[" + n.add_namespace("data-magellan-destination") + "=" + i + "]");
                    if (o.length > 0) {
                        var r = Math.floor(o.offset().top - s.destination_threshold - e.outerHeight());
                        return {
                            destination: o,
                            arrival: t(this),
                            top_offset: r,
                            viewport_offset: a
                        }
                    }
                }).sort(function(t, e) {
                    return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
                })
            },
            data_attr: function(t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            off: function() {
                this.S(this.scope).off(".magellan"), this.S(e).off(".magellan")
            },
            reflow: function() {
                var e = this;
                t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
            }
        }
    }(jQuery, window, window.document),
    function() {
        "use strict";
        Foundation.libs.offcanvas = {
            name: "offcanvas",
            version: "5.3.3",
            settings: {
                open_method: "move",
                close_on_click: !1
            },
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function() {
                var t = this,
                    e = t.S,
                    i = "",
                    n = "",
                    s = "";
                "move" === this.settings.open_method ? (i = "move-", n = "right", s = "left") : "overlap" === this.settings.open_method && (i = "offcanvas-overlap"), e(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(e) {
                    t.click_toggle_class(e, i + n)
                }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(e) {
                    var s = t.get_settings(e);
                    s.close_on_click && t.hide.call(t, i + n, t.get_wrapper(e))
                }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(e) {
                    t.click_toggle_class(e, i + s)
                }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(e) {
                    var n = t.get_settings(e);
                    n.close_on_click && t.hide.call(t, i + s, t.get_wrapper(e))
                }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(e) {
                    t.click_remove_class(e, i + s), n && t.click_remove_class(e, i + n)
                })
            },
            toggle: function(t, e) {
                e = e || this.get_wrapper(), e.is("." + t) ? this.hide(t, e) : this.show(t, e)
            },
            show: function(t, e) {
                e = e || this.get_wrapper(), e.trigger("open").trigger("open.fndtn.offcanvas"), e.addClass(t)
            },
            hide: function(t, e) {
                e = e || this.get_wrapper(), e.trigger("close").trigger("close.fndtn.offcanvas"), e.removeClass(t)
            },
            click_toggle_class: function(t, e) {
                t.preventDefault();
                var i = this.get_wrapper(t);
                this.toggle(e, i)
            },
            click_remove_class: function(t, e) {
                t.preventDefault();
                var i = this.get_wrapper(t);
                this.hide(e, i)
            },
            get_settings: function(t) {
                var e = this.S(t.target).closest("[" + this.attr_name() + "]");
                return e.data(this.attr_name(!0) + "-init") || this.settings
            },
            get_wrapper: function(t) {
                var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
                return 0 === e.length && (e = this.S(".off-canvas-wrap")), e
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";
        var s = function() {},
            a = function(s, a) {
                if (s.hasClass(a.slides_container_class)) return this;
                var d, c, u, h, p, f, g = this,
                    m = s,
                    v = 0,
                    y = !1;
                g.slides = function() {
                    return m.children(a.slide_selector)
                }, g.slides().first().addClass(a.active_slide_class), g.update_slide_number = function(e) {
                    a.slide_number && (c.find("span:first").text(parseInt(e) + 1), c.find("span:last").text(g.slides().length)), a.bullets && (u.children().removeClass(a.bullets_active_class), t(u.children().get(e)).addClass(a.bullets_active_class))
                }, g.update_active_link = function(e) {
                    var i = t('[data-orbit-link="' + g.slides().eq(e).attr("data-orbit-slide") + '"]');
                    i.siblings().removeClass(a.bullets_active_class), i.addClass(a.bullets_active_class)
                }, g.build_markup = function() {
                    m.wrap('<div class="' + a.container_class + '"></div>'), d = m.parent(), m.addClass(a.slides_container_class), a.stack_on_small && d.addClass(a.stack_on_small_class), a.navigation_arrows && (d.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)), d.append(t('<a href="#"><span></span></a>').addClass(a.next_class))), a.timer && (h = t("<div>").addClass(a.timer_container_class), h.append("<span>"), h.append(t("<div>").addClass(a.timer_progress_class)), h.addClass(a.timer_paused_class), d.append(h)), a.slide_number && (c = t("<div>").addClass(a.slide_number_class), c.append("<span></span> " + a.slide_number_text + " <span></span>"), d.append(c)), a.bullets && (u = t("<ol>").addClass(a.bullets_container_class), d.append(u), u.wrap('<div class="orbit-bullets-container"></div>'), g.slides().each(function(e) {
                        var i = t("<li>").attr("data-orbit-slide", e).on("click", g.link_bullet);
                        u.append(i)
                    }))
                }, g._goto = function(e, i) {
                    if (e === v) return !1;
                    "object" == typeof f && f.restart();
                    var n = g.slides(),
                        s = "next";
                    if (y = !0, v > e && (s = "prev"), e >= n.length) {
                        if (!a.circular) return !1;
                        e = 0
                    } else if (0 > e) {
                        if (!a.circular) return !1;
                        e = n.length - 1
                    }
                    var o = t(n.get(v)),
                        r = t(n.get(e));
                    o.css("zIndex", 2), o.removeClass(a.active_slide_class), r.css("zIndex", 4).addClass(a.active_slide_class), m.trigger("before-slide-change.fndtn.orbit"), a.before_slide_change(), g.update_active_link(e);
                    var l = function() {
                        var t = function() {
                            v = e, y = !1, i === !0 && (f = g.create_timer(), f.start()), g.update_slide_number(v), m.trigger("after-slide-change.fndtn.orbit", [{
                                slide_number: v,
                                total_slides: n.length
                            }]), a.after_slide_change(v, n.length)
                        };
                        m.height() != r.height() && a.variable_height ? m.animate({
                            height: r.height()
                        }, 250, "linear", t) : t()
                    };
                    if (1 === n.length) return l(), !1;
                    var d = function() {
                        "next" === s && p.next(o, r, l), "prev" === s && p.prev(o, r, l)
                    };
                    r.height() > m.height() && a.variable_height ? m.animate({
                        height: r.height()
                    }, 250, "linear", d) : d()
                }, g.next = function(t) {
                    t.stopImmediatePropagation(), t.preventDefault(), g._goto(v + 1)
                }, g.prev = function(t) {
                    t.stopImmediatePropagation(), t.preventDefault(), g._goto(v - 1)
                }, g.link_custom = function(e) {
                    e.preventDefault();
                    var i = t(this).attr("data-orbit-link");
                    if ("string" == typeof i && "" != (i = t.trim(i))) {
                        var n = d.find("[data-orbit-slide=" + i + "]"); - 1 != n.index() && g._goto(n.index())
                    }
                }, g.link_bullet = function() {
                    var e = t(this).attr("data-orbit-slide");
                    if ("string" == typeof e && "" != (e = t.trim(e)))
                        if (isNaN(parseInt(e))) {
                            var i = d.find("[data-orbit-slide=" + e + "]"); - 1 != i.index() && g._goto(i.index() + 1)
                        } else g._goto(parseInt(e))
                }, g.timer_callback = function() {
                    g._goto(v + 1, !0)
                }, g.compute_dimensions = function() {
                    var e = t(g.slides().get(v)),
                        i = e.height();
                    a.variable_height || g.slides().each(function() {
                        t(this).height() > i && (i = t(this).height())
                    }), m.height(i)
                }, g.create_timer = function() {
                    var t = new o(d.find("." + a.timer_container_class), a, g.timer_callback);
                    return t
                }, g.stop_timer = function() {
                    "object" == typeof f && f.stop()
                }, g.toggle_timer = function() {
                    var t = d.find("." + a.timer_container_class);
                    t.hasClass(a.timer_paused_class) ? ("undefined" == typeof f && (f = g.create_timer()), f.start()) : "object" == typeof f && f.stop()
                }, g.init = function() {
                    g.build_markup(), a.timer && (f = g.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), f.start)), p = new l(a, m), "slide" === a.animation && (p = new r(a, m)), d.on("click", "." + a.next_class, g.next), d.on("click", "." + a.prev_class, g.prev), a.next_on_click && d.on("click", "." + a.slides_container_class + " [data-orbit-slide]", g.link_bullet), d.on("click", g.toggle_timer), a.swipe && d.on("touchstart.fndtn.orbit", function(t) {
                        t.touches || (t = t.originalEvent);
                        var e = {
                            start_page_x: t.touches[0].pageX,
                            start_page_y: t.touches[0].pageY,
                            start_time: (new Date).getTime(),
                            delta_x: 0,
                            is_scrolling: n
                        };
                        d.data("swipe-transition", e), t.stopPropagation()
                    }).on("touchmove.fndtn.orbit", function(t) {
                        if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                            var e = d.data("swipe-transition");
                            if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                                t.preventDefault();
                                var i = e.delta_x < 0 ? v + 1 : v - 1;
                                e.active = !0, g._goto(i)
                            }
                        }
                    }).on("touchend.fndtn.orbit", function(t) {
                        d.data("swipe-transition", {}), t.stopPropagation()
                    }), d.on("mouseenter.fndtn.orbit", function() {
                        a.timer && a.pause_on_hover && g.stop_timer()
                    }).on("mouseleave.fndtn.orbit", function() {
                        a.timer && a.resume_on_mouseout && f.start()
                    }), t(i).on("click", "[data-orbit-link]", g.link_custom), t(e).on("load resize", g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                        d.prev("." + a.preloader_class).css("display", "none"), g.update_slide_number(0), g.update_active_link(0), m.trigger("ready.fndtn.orbit")
                    })
                }, g.init()
            },
            o = function(t, e, i) {
                var n, s, a = this,
                    o = e.timer_speed,
                    r = t.find("." + e.timer_progress_class),
                    l = -1;
                this.update_progress = function(t) {
                    var e = r.clone();
                    e.attr("style", ""), e.css("width", t + "%"), r.replaceWith(e), r = e
                }, this.restart = function() {
                    clearTimeout(s), t.addClass(e.timer_paused_class), l = -1, a.update_progress(0)
                }, this.start = function() {
                    return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? o : l, t.removeClass(e.timer_paused_class), n = (new Date).getTime(), r.animate({
                        width: "100%"
                    }, l, "linear"), s = setTimeout(function() {
                        a.restart(), i()
                    }, l), void t.trigger("timer-started.fndtn.orbit")) : !0
                }, this.stop = function() {
                    if (t.hasClass(e.timer_paused_class)) return !0;
                    clearTimeout(s), t.addClass(e.timer_paused_class);
                    var i = (new Date).getTime();
                    l -= i - n;
                    var r = 100 - l / o * 100;
                    a.update_progress(r), t.trigger("timer-stopped.fndtn.orbit")
                }
            },
            r = function(e) {
                var i = e.animation_speed,
                    n = 1 === t("html[dir=rtl]").length,
                    s = n ? "marginRight" : "marginLeft",
                    a = {};
                a[s] = "0%", this.next = function(t, e, n) {
                    t.animate({
                        marginLeft: "-100%"
                    }, i), e.animate(a, i, function() {
                        t.css(s, "100%"), n()
                    })
                }, this.prev = function(t, e, n) {
                    t.animate({
                        marginLeft: "100%"
                    }, i), e.css(s, "-100%"), e.animate(a, i, function() {
                        t.css(s, "100%"), n()
                    })
                }
            },
            l = function(e) {
                {
                    var i = e.animation_speed;
                    1 === t("html[dir=rtl]").length
                }
                this.next = function(t, e, n) {
                    e.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), e.animate({
                        opacity: "1"
                    }, i, "linear", function() {
                        t.css("margin", "100%"), n()
                    })
                }, this.prev = function(t, e, n) {
                    e.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), e.animate({
                        opacity: "1"
                    }, i, "linear", function() {
                        t.css("margin", "100%"), n()
                    })
                }
            };
        Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
            name: "orbit",
            version: "5.3.1",
            settings: {
                animation: "slide",
                timer_speed: 1e4,
                pause_on_hover: !0,
                resume_on_mouseout: !1,
                next_on_click: !0,
                animation_speed: 500,
                stack_on_small: !1,
                navigation_arrows: !0,
                slide_number: !0,
                slide_number_text: "of",
                container_class: "orbit-container",
                stack_on_small_class: "orbit-stack-on-small",
                next_class: "orbit-next",
                prev_class: "orbit-prev",
                timer_container_class: "orbit-timer",
                timer_paused_class: "paused",
                timer_progress_class: "orbit-progress",
                slides_container_class: "orbit-slides-container",
                preloader_class: "preloader",
                slide_selector: "*",
                bullets_container_class: "orbit-bullets",
                bullets_active_class: "active",
                slide_number_class: "orbit-slide-number",
                caption_class: "orbit-caption",
                active_slide_class: "active",
                orbit_transition_class: "orbit-transitioning",
                bullets: !0,
                circular: !0,
                timer: !0,
                variable_height: !1,
                swipe: !0,
                before_slide_change: s,
                after_slide_change: s
            },
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function(t) {
                var e = new a(this.S(t), this.S(t).data("orbit-init"));
                this.S(t).data(this.name + "-instance", e)
            },
            reflow: function() {
                var t = this;
                if (t.S(t.scope).is("[data-orbit]")) {
                    var e = t.S(t.scope),
                        i = e.data(t.name + "-instance");
                    i.compute_dimensions()
                } else t.S("[data-orbit]", t.scope).each(function(e, i) {
                    var n = t.S(i),
                        s = (t.data_options(n), n.data(t.name + "-instance"));
                    s.compute_dimensions()
                })
            }
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";

        function s(t) {
            var e = /fade/i.test(t),
                i = /pop/i.test(t);
            return {
                animate: e || i,
                pop: i,
                fade: e
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.3.3",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                bg_class: "reveal-modal-bg",
                root_element: "body",
                open: function() {},
                opened: function() {},
                close: function() {},
                closed: function() {},
                bg: t(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function(e, i, n) {
                t.extend(!0, this.settings, i, n), this.bindings(i, n)
            },
            events: function() {
                var t = this,
                    e = t.S;
                return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(i) {
                    if (i.preventDefault(), !t.locked) {
                        var n = e(this),
                            s = n.data(t.data_attr("reveal-ajax"));
                        if (t.locked = !0, "undefined" == typeof s) t.open.call(t, n);
                        else {
                            var a = s === !0 ? n.attr("href") : s;
                            t.open.call(t, n, {
                                url: a
                            })
                        }
                    }
                }), e(i).on("click.fndtn.reveal", this.close_targets(), function(i) {
                    if (i.preventDefault(), !t.locked) {
                        var n = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"),
                            s = e(i.target)[0] === e("." + n.bg_class)[0];
                        if (s) {
                            if (!n.close_on_background_click) return;
                            i.stopPropagation()
                        }
                        t.locked = !0, t.close.call(t, s ? e("[" + t.attr_name() + "].open") : e(this).closest("[" + t.attr_name() + "]"))
                    }
                }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function() {
                var t = this;
                return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(e) {
                    var i = t.S("[" + t.attr_name() + "].open"),
                        n = i.data(t.attr_name(!0) + "-init") || t.settings;
                    n && 27 === e.which && n.close_on_esc && !t.locked && t.close.call(t, i)
                }), !0
            },
            key_up_off: function() {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function(e, i) {
                var n, s = this;
                e ? "undefined" != typeof e.selector ? n = s.S("#" + e.data(s.data_attr("reveal-id"))).first() : (n = s.S(this.scope), i = e) : n = s.S(this.scope);
                var a = n.data(s.attr_name(!0) + "-init");
                if (a = a || this.settings, n.hasClass("open") && e.attr("data-reveal-id") == n.attr("id")) return s.close(n);
                if (!n.hasClass("open")) {
                    var o = s.S("[" + s.attr_name() + "].open");
                    if ("undefined" == typeof n.data("css-top") && n.data("css-top", parseInt(n.css("top"), 10)).data("offset", this.cache_offset(n)), this.key_up_on(n), n.trigger("open").trigger("open.fndtn.reveal"), o.length < 1 && this.toggle_bg(n, !0), "string" == typeof i && (i = {
                            url: i
                        }), "undefined" != typeof i && i.url) {
                        var r = "undefined" != typeof i.success ? i.success : null;
                        t.extend(i, {
                            success: function(e, i, l) {
                                t.isFunction(r) && r(e, i, l), n.html(e), s.S(n).foundation("section", "reflow"), s.S(n).children().foundation(), o.length > 0 && s.hide(o, a.css.close), s.show(n, a.css.open)
                            }
                        }), t.ajax(i)
                    } else o.length > 0 && this.hide(o, a.css.close), this.show(n, a.css.open)
                }
            },
            close: function(t) {
                var t = t && t.length ? t : this.S(this.scope),
                    e = this.S("[" + this.attr_name() + "].open"),
                    i = t.data(this.attr_name(!0) + "-init") || this.settings;
                e.length > 0 && (this.locked = !0, this.key_up_off(t), t.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(t, !1), this.hide(e, i.css.close, i))
            },
            close_targets: function() {
                var t = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
            },
            toggle_bg: function(e, i) {
                0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide());
                var s = this.settings.bg.filter(":visible").length > 0;
                i != s && ((i == n ? s : !i) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
            },
            show: function(i, n) {
                if (n) {
                    var a = i.data(this.attr_name(!0) + "-init") || this.settings,
                        o = a.root_element;
                    if (0 === i.parent(o).length) {
                        var r = i.wrap('<div style="display: none;" />').parent();
                        i.on("closed.fndtn.reveal.wrapped", function() {
                            i.detach().appendTo(r), i.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), i.detach().appendTo(o)
                    }
                    var l = s(a.animation);
                    if (l.animate || (this.locked = !1), l.pop) {
                        n.top = t(e).scrollTop() - i.data("offset") + "px";
                        var d = {
                            top: t(e).scrollTop() + i.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return i.css(n).animate(d, a.animation_speed, "linear", function() {
                                this.locked = !1, i.trigger("opened").trigger("opened.fndtn.reveal")
                            }.bind(this)).addClass("open")
                        }.bind(this), a.animation_speed / 2)
                    }
                    if (l.fade) {
                        n.top = t(e).scrollTop() + i.data("css-top") + "px";
                        var d = {
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return i.css(n).animate(d, a.animation_speed, "linear", function() {
                                this.locked = !1, i.trigger("opened").trigger("opened.fndtn.reveal")
                            }.bind(this)).addClass("open")
                        }.bind(this), a.animation_speed / 2)
                    }
                    return i.css(n).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
                }
                var a = this.settings;
                return s(a.animation).fade ? i.fadeIn(a.animation_speed / 2) : (this.locked = !1, i.show())
            },
            hide: function(i, n) {
                if (n) {
                    var a = i.data(this.attr_name(!0) + "-init");
                    a = a || this.settings;
                    var o = s(a.animation);
                    if (o.animate || (this.locked = !1), o.pop) {
                        var r = {
                            top: -t(e).scrollTop() - i.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return i.animate(r, a.animation_speed, "linear", function() {
                                this.locked = !1, i.css(n).trigger("closed").trigger("closed.fndtn.reveal")
                            }.bind(this)).removeClass("open")
                        }.bind(this), a.animation_speed / 2)
                    }
                    if (o.fade) {
                        var r = {
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return i.animate(r, a.animation_speed, "linear", function() {
                                this.locked = !1, i.css(n).trigger("closed").trigger("closed.fndtn.reveal")
                            }.bind(this)).removeClass("open")
                        }.bind(this), a.animation_speed / 2)
                    }
                    return i.hide().css(n).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
                }
                var a = this.settings;
                return s(a.animation).fade ? i.fadeOut(a.animation_speed / 2) : i.hide()
            },
            close_video: function(e) {
                var i = t(".flex-video", e.target),
                    n = t("iframe", i);
                n.length > 0 && (n.attr("data-src", n[0].src), n.attr("src", n.attr("src")), i.hide())
            },
            open_video: function(e) {
                var i = t(".flex-video", e.target),
                    s = i.find("iframe");
                if (s.length > 0) {
                    var a = s.attr("data-src");
                    if ("string" == typeof a) s[0].src = s.attr("data-src");
                    else {
                        var o = s[0].src;
                        s[0].src = n, s[0].src = o
                    }
                    i.show()
                }
            },
            data_attr: function(t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            cache_offset: function(t) {
                var e = t.show().height() + parseInt(t.css("top"), 10);
                return t.hide(), e
            },
            off: function() {
                t(this.scope).off(".fndtn.reveal")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.slider = {
            name: "slider",
            version: "5.3.3",
            settings: {
                start: 0,
                end: 100,
                step: 1,
                initial: null,
                display_selector: "",
                vertical: !1,
                on_change: function() {}
            },
            cache: {},
            init: function(t, e, i) {
                Foundation.inherit(this, "throttle"), this.bindings(e, i), this.reflow()
            },
            events: function() {
                var i = this;
                t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + i.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(e) {
                    i.cache.active || (e.preventDefault(), i.set_active_slider(t(e.target)))
                }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(n) {
                    if (i.cache.active)
                        if (n.preventDefault(), t.data(i.cache.active[0], "settings").vertical) {
                            var s = 0;
                            n.pageY || (s = e.scrollY), i.calculate_position(i.cache.active, (n.pageY || n.originalEvent.clientY || n.originalEvent.touches[0].clientY || n.currentPoint.y) + s)
                        } else i.calculate_position(i.cache.active, n.pageX || n.originalEvent.clientX || n.originalEvent.touches[0].clientX || n.currentPoint.x)
                }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                    i.remove_active_slider()
                }).on("change.fndtn.slider", function() {
                    i.settings.on_change()
                }), i.S(e).on("resize.fndtn.slider", i.throttle(function() {
                    i.reflow()
                }, 300))
            },
            set_active_slider: function(t) {
                this.cache.active = t
            },
            remove_active_slider: function() {
                this.cache.active = null
            },
            calculate_position: function(e, i) {
                var n = this,
                    s = t.data(e[0], "settings"),
                    a = (t.data(e[0], "handle_l"), t.data(e[0], "handle_o"), t.data(e[0], "bar_l")),
                    o = t.data(e[0], "bar_o");
                requestAnimationFrame(function() {
                    var t;
                    t = Foundation.rtl && !s.vertical ? n.limit_to((o + a - i) / a, 0, 1) : n.limit_to((i - o) / a, 0, 1), t = s.vertical ? 1 - t : t;
                    var r = n.normalized_value(t, s.start, s.end, s.step);
                    n.set_ui(e, r)
                })
            },
            set_ui: function(e, i) {
                var n = t.data(e[0], "settings"),
                    s = t.data(e[0], "handle_l"),
                    a = t.data(e[0], "bar_l"),
                    o = this.normalized_percentage(i, n.start, n.end),
                    r = o * (a - s) - 1,
                    l = 100 * o;
                Foundation.rtl && !n.vertical && (r = -r), r = n.vertical ? -r + a - s + 1 : r, this.set_translate(e, r, n.vertical), n.vertical ? e.siblings(".range-slider-active-segment").css("height", l + "%") : e.siblings(".range-slider-active-segment").css("width", l + "%"), e.parent().attr(this.attr_name(), i).trigger("change").trigger("change.fndtn.slider"), e.parent().children("input[type=hidden]").val(i), "" != n.input_id && t(n.display_selector).each(function() {
                    this.hasOwnProperty("value") ? t(this).val(i) : t(this).text(i)
                })
            },
            normalized_percentage: function(t, e, i) {
                return (t - e) / (i - e)
            },
            normalized_value: function(t, e, i, n) {
                var s = i - e,
                    a = t * s,
                    o = (a - a % n) / n,
                    r = a % n,
                    l = r >= .5 * n ? n : 0;
                return o * n + l + e
            },
            set_translate: function(e, i, n) {
                n ? t(e).css("-webkit-transform", "translateY(" + i + "px)").css("-moz-transform", "translateY(" + i + "px)").css("-ms-transform", "translateY(" + i + "px)").css("-o-transform", "translateY(" + i + "px)").css("transform", "translateY(" + i + "px)") : t(e).css("-webkit-transform", "translateX(" + i + "px)").css("-moz-transform", "translateX(" + i + "px)").css("-ms-transform", "translateX(" + i + "px)").css("-o-transform", "translateX(" + i + "px)").css("transform", "translateX(" + i + "px)")
            },
            limit_to: function(t, e, i) {
                return Math.min(Math.max(t, e), i)
            },
            initialize_settings: function(e) {
                var i = t.extend({}, this.settings, this.data_options(t(e).parent()));
                i.vertical ? (t.data(e, "bar_o", t(e).parent().offset().top), t.data(e, "bar_l", t(e).parent().outerHeight()), t.data(e, "handle_o", t(e).offset().top), t.data(e, "handle_l", t(e).outerHeight())) : (t.data(e, "bar_o", t(e).parent().offset().left), t.data(e, "bar_l", t(e).parent().outerWidth()), t.data(e, "handle_o", t(e).offset().left), t.data(e, "handle_l", t(e).outerWidth())), t.data(e, "bar", t(e).parent()), t.data(e, "settings", i)
            },
            set_initial_position: function(e) {
                var i = t.data(e.children(".range-slider-handle")[0], "settings"),
                    n = i.initial ? i.initial : Math.floor(.5 * (i.end - i.start) / i.step) * i.step + i.start,
                    s = e.children(".range-slider-handle");
                this.set_ui(s, n)
            },
            set_value: function(e) {
                var i = this;
                t("[" + i.attr_name() + "]", this.scope).each(function() {
                    t(this).attr(i.attr_name(), e)
                }), t(this.scope).attr(i.attr_name()) && t(this.scope).attr(i.attr_name(), e), i.reflow()
            },
            reflow: function() {
                var e = this;
                e.S("[" + this.attr_name() + "]").each(function() {
                    var i = t(this).children(".range-slider-handle")[0],
                        n = t(this).attr(e.attr_name());
                    e.initialize_settings(i), n ? e.set_ui(t(i), parseFloat(n)) : e.set_initial_position(t(this))
                })
            }
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";
        Foundation.libs.tab = {
            name: "tab",
            version: "5.3.3",
            settings: {
                active_class: "active",
                callback: function() {},
                deep_linking: !1,
                scroll_to_content: !0,
                is_hover: !1
            },
            default_tab_hashes: [],
            init: function(t, e, i) {
                var n = this,
                    s = this.S;
                this.bindings(e, i), this.handle_location_hash_change(), s("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                    n.default_tab_hashes.push(this.hash)
                })
            },
            events: function() {
                var t = this,
                    i = this.S;
                i(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(e) {
                    var n = i(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                    (!n.is_hover || Modernizr.touch) && (e.preventDefault(), e.stopPropagation(), t.toggle_active_tab(i(this).parent()))
                }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                    var e = i(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                    e.is_hover && t.toggle_active_tab(i(this).parent())
                }), i(e).on("hashchange.fndtn.tab", function(e) {
                    e.preventDefault(), t.handle_location_hash_change()
                })
            },
            handle_location_hash_change: function() {
                var e = this,
                    i = this.S;
                i("[" + this.attr_name() + "]", this.scope).each(function() {
                    var s = i(this).data(e.attr_name(!0) + "-init");
                    if (s.deep_linking) {
                        var a = e.scope.location.hash;
                        if ("" != a) {
                            var o = i(a);
                            if (o.hasClass("content") && o.parent().hasClass("tab-content")) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + a + "]").parent());
                            else {
                                var r = o.closest(".content").attr("id");
                                r != n && e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=#" + r + "]").parent(), a)
                            }
                        } else
                            for (var l in e.default_tab_hashes) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + e.default_tab_hashes[l] + "]").parent())
                    }
                })
            },
            toggle_active_tab: function(i, s) {
                var a = this.S,
                    o = i.closest("[" + this.attr_name() + "]"),
                    r = i.children("a").first(),
                    l = "#" + r.attr("href").split("#")[1],
                    d = a(l),
                    c = i.siblings(),
                    u = o.data(this.attr_name(!0) + "-init");
                if (a(this).data(this.data_attr("tab-content")) && (l = "#" + a(this).data(this.data_attr("tab-content")).split("#")[1], d = a(l)), u.deep_linking) {
                    var h = t("body,html").scrollTop();
                    e.location.hash = s != n ? s : l, u.scroll_to_content ? s == n || s == l ? i.parent()[0].scrollIntoView() : a(l)[0].scrollIntoView() : (s == n || s == l) && t("body,html").scrollTop(h)
                }
                i.addClass(u.active_class).triggerHandler("opened"), c.removeClass(u.active_class), d.siblings().removeClass(u.active_class).end().addClass(u.active_class), u.callback(i), d.triggerHandler("toggled", [i]), o.triggerHandler("toggled", [d])
            },
            data_attr: function(t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            off: function() {},
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.tooltip = {
            name: "tooltip",
            version: "5.3.3",
            settings: {
                additional_inheritable_classes: [],
                tooltip_class: ".tooltip",
                append_to: "body",
                touch_close_text: "Tap To Close",
                disable_for_touch: !1,
                hover_delay: 200,
                show_on: "all",
                tip_template: function(t, e) {
                    return '<span data-selector="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + e + '<span class="nub"></span></span>'
                }
            },
            cache: {},
            init: function(t, e, i) {
                Foundation.inherit(this, "random_str"), this.bindings(e, i)
            },
            should_show: function(e) {
                var i = t.extend({}, this.settings, this.data_options(e));
                return "all" === i.show_on ? !0 : this.small() && "small" === i.show_on ? !0 : this.medium() && "medium" === i.show_on ? !0 : this.large() && "large" === i.show_on ? !0 : !1
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            events: function(e) {
                var i = this,
                    n = i.S;
                i.create(this.S(e)), t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(e) {
                    var s = n(this),
                        a = t.extend({}, i.settings, i.data_options(s)),
                        o = !1;
                    if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && n(e.target).is("a")) return !1;
                    if (/mouse/i.test(e.type) && i.ie_touch(e)) return !1;
                    if (s.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && e.preventDefault(), i.hide(s);
                    else {
                        if (a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) return;
                        !a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && (e.preventDefault(), n(a.tooltip_class + ".open").hide(), o = !0), /enter|over/i.test(e.type) ? this.timer = setTimeout(function() {
                            i.showTip(s)
                        }.bind(this), i.settings.hover_delay) : "mouseout" === e.type || "mouseleave" === e.type ? (clearTimeout(this.timer), i.hide(s)) : i.showTip(s)
                    }
                }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(e) {
                    return /mouse/i.test(e.type) && i.ie_touch(e) ? !1 : void(("touch" != t(this).data("tooltip-open-event-type") || "mouseleave" != e.type) && ("mouse" == t(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(e.type) ? i.convert_to_touch(t(this)) : i.hide(t(this))))
                }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                    i.hide(n(this))
                })
            },
            ie_touch: function() {
                return !1
            },
            showTip: function(t) {
                var e = this.getTip(t);
                return this.should_show(t, e) ? this.show(t) : void 0
            },
            getTip: function(e) {
                var i = this.selector(e),
                    n = t.extend({}, this.settings, this.data_options(e)),
                    s = null;
                return i && (s = this.S('span[data-selector="' + i + '"]' + n.tooltip_class)), "object" == typeof s ? s : !1
            },
            selector: function(t) {
                var e = t.attr("id"),
                    i = t.attr(this.attr_name()) || t.attr("data-selector");
                return (e && e.length < 1 || !e) && "string" != typeof i && (i = this.random_str(6), t.attr("data-selector", i)), e && e.length > 0 ? e : i
            },
            create: function(i) {
                var n = this,
                    s = t.extend({}, this.settings, this.data_options(i)),
                    a = this.settings.tip_template;
                "string" == typeof s.tip_template && e.hasOwnProperty(s.tip_template) && (a = e[s.tip_template]);
                var o = t(a(this.selector(i), t("<div></div>").html(i.attr("title")).html())),
                    r = this.inheritable_classes(i);
                o.addClass(r).appendTo(s.append_to), Modernizr.touch && (o.append('<span class="tap-to-close">' + s.touch_close_text + "</span>"), o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                    n.hide(i)
                })), i.removeAttr("title").attr("title", "")
            },
            reposition: function(e, i, n) {
                var s, a, o, r, l;
                if (i.css("visibility", "hidden").show(), s = e.data("width"), a = i.children(".nub"), o = a.outerHeight(), r = a.outerHeight(), i.css(this.small() ? {
                        width: "100%"
                    } : {
                        width: s ? s : "auto"
                    }), l = function(t, e, i, n, s) {
                        return t.css({
                            top: e ? e : "auto",
                            bottom: n ? n : "auto",
                            left: s ? s : "auto",
                            right: i ? i : "auto"
                        }).end()
                    }, l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", e.offset().left), this.small()) l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", 12.5, t(this.scope).width()), i.addClass("tip-override"), l(a, -o, "auto", "auto", e.offset().left);
                else {
                    var d = e.offset().left;
                    Foundation.rtl && (a.addClass("rtl"), d = e.offset().left + e.outerWidth() - i.outerWidth()), l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", d), i.removeClass("tip-override"), n && n.indexOf("tip-top") > -1 ? (Foundation.rtl && a.addClass("rtl"), l(i, e.offset().top - i.outerHeight(), "auto", "auto", d).removeClass("tip-override")) : n && n.indexOf("tip-left") > -1 ? (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left - i.outerWidth() - o).removeClass("tip-override"), a.removeClass("rtl")) : n && n.indexOf("tip-right") > -1 && (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left + e.outerWidth() + o).removeClass("tip-override"), a.removeClass("rtl"))
                }
                i.css("visibility", "visible").hide()
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            inheritable_classes: function(e) {
                var i = t.extend({}, this.settings, this.data_options(e)),
                    n = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(i.additional_inheritable_classes),
                    s = e.attr("class"),
                    a = s ? t.map(s.split(" "), function(e) {
                        return -1 !== t.inArray(e, n) ? e : void 0
                    }).join(" ") : "";
                return t.trim(a)
            },
            convert_to_touch: function(e) {
                var i = this,
                    n = i.getTip(e),
                    s = t.extend({}, i.settings, i.data_options(e));
                0 === n.find(".tap-to-close").length && (n.append('<span class="tap-to-close">' + s.touch_close_text + "</span>"), n.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                    i.hide(e)
                })), e.data("tooltip-open-event-type", "touch")
            },
            show: function(t) {
                var e = this.getTip(t);
                "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t), this.reposition(t, e, t.attr("class")), t.addClass("open"), e.fadeIn(150)
            },
            hide: function(t) {
                var e = this.getTip(t);
                e.fadeOut(150, function() {
                    e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), t.removeClass("open")
                })
            },
            off: function() {
                var e = this;
                this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(i) {
                    t("[" + e.attr_name() + "]").eq(i).attr("title", t(this).text())
                }).remove()
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e, i) {
        "use strict";
        Foundation.libs.topbar = {
            name: "topbar",
            version: "5.3.3",
            settings: {
                index: 0,
                sticky_class: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                mobile_show_parent_link: !0,
                is_hover: !0,
                scrolltop: !0,
                sticky_on: "all"
            },
            init: function(e, i, n) {
                Foundation.inherit(this, "add_custom_rule register_media throttle");
                var s = this;
                s.register_media("topbar", "foundation-mq-topbar"), this.bindings(i, n), s.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    {
                        var e = t(this),
                            i = e.data(s.attr_name(!0) + "-init");
                        s.S("section", this)
                    }
                    e.data("index", 0);
                    var n = e.parent();
                    n.hasClass("fixed") || s.is_sticky(e, n, i) ? (s.settings.sticky_class = i.sticky_class, s.settings.sticky_topbar = e, e.data("height", n.outerHeight()), e.data("stickyoffset", n.offset().top)) : e.data("height", e.outerHeight()), i.assembled || s.assemble(e), i.is_hover ? s.S(".has-dropdown", e).addClass("not-click") : s.S(".has-dropdown", e).removeClass("not-click"), s.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), n.hasClass("fixed") && s.S("body").addClass("f-topbar-fixed")
                })
            },
            is_sticky: function(t, e, i) {
                var n = e.hasClass(i.sticky_class);
                return n && "all" === i.sticky_on ? !0 : n && this.small() && "small" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : n && this.medium() && "medium" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : n && this.large() && "large" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1
            },
            toggle: function(i) {
                var n, s = this;
                n = i ? s.S(i).closest("[" + this.attr_name() + "]") : s.S("[" + this.attr_name() + "]");
                var a = n.data(this.attr_name(!0) + "-init"),
                    o = s.S("section, .section", n);
                s.breakpoint() && (s.rtl ? (o.css({
                    right: "0%"
                }), t(">.name", o).css({
                    right: "100%"
                })) : (o.css({
                    left: "0%"
                }), t(">.name", o).css({
                    left: "100%"
                })), s.S("li.moved", o).removeClass("moved"), n.data("index", 0), n.toggleClass("expanded").css("height", "")), a.scrolltop ? n.hasClass("expanded") ? n.parent().hasClass("fixed") && (a.scrolltop ? (n.parent().removeClass("fixed"), n.addClass("fixed"), s.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : n.parent().removeClass("expanded")) : n.hasClass("fixed") && (n.parent().addClass("fixed"), n.removeClass("fixed"), s.S("body").addClass("f-topbar-fixed")) : (s.is_sticky(n, n.parent(), a) && n.parent().addClass("fixed"), n.parent().hasClass("fixed") && (n.hasClass("expanded") ? (n.addClass("fixed"), n.parent().addClass("expanded"), s.S("body").addClass("f-topbar-fixed")) : (n.removeClass("fixed"), n.parent().removeClass("expanded"), s.update_sticky_positioning())))
            },
            timer: null,
            events: function() {
                var i = this,
                    n = this.S;
                n(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(t) {
                    t.preventDefault(), i.toggle(this)
                }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                    var e = t(this).closest("li");
                    !i.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || i.toggle()
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(e) {
                    var s = n(this),
                        a = n(e.target),
                        o = s.closest("[" + i.attr_name() + "]"),
                        r = o.data(i.attr_name(!0) + "-init");
                    return a.data("revealId") ? void i.toggle() : void(i.breakpoint() || (!r.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), s.hasClass("hover") ? (s.removeClass("hover").find("li").removeClass("hover"), s.parents("li.hover").removeClass("hover")) : (s.addClass("hover"), t(s).siblings().removeClass("hover"), "A" === a[0].nodeName && a.parent().hasClass("has-dropdown") && e.preventDefault())))
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(t) {
                    if (i.breakpoint()) {
                        t.preventDefault();
                        var e = n(this),
                            s = e.closest("[" + i.attr_name() + "]"),
                            a = s.find("section, .section"),
                            o = (e.next(".dropdown").outerHeight(), e.closest("li"));
                        s.data("index", s.data("index") + 1), o.addClass("moved"), i.rtl ? (a.css({
                            right: -(100 * s.data("index")) + "%"
                        }), a.find(">.name").css({
                            right: 100 * s.data("index") + "%"
                        })) : (a.css({
                            left: -(100 * s.data("index")) + "%"
                        }), a.find(">.name").css({
                            left: 100 * s.data("index") + "%"
                        })), s.css("height", e.siblings("ul").outerHeight(!0) + s.data("height"))
                    }
                }), n(e).off(".topbar").on("resize.fndtn.topbar", i.throttle(function() {
                    i.resize.call(i)
                }, 50)).trigger("resize").trigger("resize.fndtn.topbar"), n("body").off(".topbar").on("click.fndtn.topbar", function(t) {
                    var e = n(t.target).closest("li").closest("li.hover");
                    e.length > 0 || n("[" + i.attr_name() + "] li.hover").removeClass("hover")
                }), n(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(t) {
                    t.preventDefault();
                    var e = n(this),
                        s = e.closest("[" + i.attr_name() + "]"),
                        a = s.find("section, .section"),
                        o = (s.data(i.attr_name(!0) + "-init"), e.closest("li.moved")),
                        r = o.parent();
                    s.data("index", s.data("index") - 1), i.rtl ? (a.css({
                        right: -(100 * s.data("index")) + "%"
                    }), a.find(">.name").css({
                        right: 100 * s.data("index") + "%"
                    })) : (a.css({
                        left: -(100 * s.data("index")) + "%"
                    }), a.find(">.name").css({
                        left: 100 * s.data("index") + "%"
                    })), 0 === s.data("index") ? s.css("height", "") : s.css("height", r.outerHeight(!0) + s.data("height")), setTimeout(function() {
                        o.removeClass("moved")
                    }, 300)
                })
            },
            resize: function() {
                var t = this;
                t.S("[" + this.attr_name() + "]").each(function() {
                    var e, n = t.S(this),
                        s = n.data(t.attr_name(!0) + "-init"),
                        a = n.parent("." + t.settings.sticky_class);
                    if (!t.breakpoint()) {
                        var o = n.hasClass("expanded");
                        n.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && t.toggle(n)
                    }
                    t.is_sticky(n, a, s) && (a.hasClass("fixed") ? (a.removeClass("fixed"), e = a.offset().top, t.S(i.body).hasClass("f-topbar-fixed") && (e -= n.data("height")), n.data("stickyoffset", e), a.addClass("fixed")) : (e = a.offset().top, n.data("stickyoffset", e)))
                })
            },
            breakpoint: function() {
                return !matchMedia(Foundation.media_queries.topbar).matches
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            assemble: function(e) {
                var i = this,
                    n = e.data(this.attr_name(!0) + "-init"),
                    s = i.S("section", e);
                s.detach(), i.S(".has-dropdown>a", s).each(function() {
                    var e, s = i.S(this),
                        a = s.siblings(".dropdown"),
                        o = s.attr("href");
                    a.find(".title.back").length || (e = t(1 == n.mobile_show_parent_link && o ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' + o + '">' + s.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), t("h5>a", e).html(1 == n.custom_back_text ? n.back_text : "&laquo; " + s.html()), a.prepend(e))
                }), s.appendTo(e), this.sticky(), this.assembled(e)
            },
            assembled: function(e) {
                e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {
                    assembled: !0
                }))
            },
            height: function(e) {
                var i = 0,
                    n = this;
                return t("> li", e).each(function() {
                    i += n.S(this).outerHeight(!0)
                }), i
            },
            sticky: function() {
                var t = this;
                this.S(e).on("scroll", function() {
                    t.update_sticky_positioning()
                })
            },
            update_sticky_positioning: function() {
                var t = "." + this.settings.sticky_class,
                    i = this.S(e),
                    n = this;
                if (n.settings.sticky_topbar && n.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                    var s = this.settings.sticky_topbar.data("stickyoffset");
                    n.S(t).hasClass("expanded") || (i.scrollTop() > s ? n.S(t).hasClass("fixed") || (n.S(t).addClass("fixed"), n.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= s && n.S(t).hasClass("fixed") && (n.S(t).removeClass("fixed"), n.S("body").removeClass("f-topbar-fixed")))
                }
            },
            off: function() {
                this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar")
            },
            reflow: function() {}
        }
    }(jQuery, this, this.document),
    function(t, e) {
        "use strict";
        Foundation.libs.equalizer = {
            name: "equalizer",
            version: "5.3.3",
            settings: {
                use_tallest: !0,
                before_height_change: t.noop,
                after_height_change: t.noop,
                equalize_on_stack: !1
            },
            init: function(t, e, i) {
                Foundation.inherit(this, "image_loaded"), this.bindings(e, i), this.reflow()
            },
            events: function() {
                this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function() {
                    this.reflow()
                }.bind(this))
            },
            equalize: function(e) {
                var i = !1,
                    n = e.find("[" + this.attr_name() + "-watch]:visible"),
                    s = e.data(this.attr_name(!0) + "-init");
                if (0 !== n.length) {
                    var a = n.first().offset().top;
                    if (s.before_height_change(), e.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), n.height("inherit"), n.each(function() {
                            var e = t(this);
                            e.offset().top !== a && (i = !0)
                        }), s.equalize_on_stack !== !1 || !i) {
                        var o = n.map(function() {
                            return t(this).outerHeight(!1)
                        }).get();
                        if (s.use_tallest) {
                            var r = Math.max.apply(null, o);
                            n.css("height", r)
                        } else {
                            var l = Math.min.apply(null, o);
                            n.css("height", l)
                        }
                        s.after_height_change(), e.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                    }
                }
            },
            reflow: function() {
                var e = this;
                this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    var i = t(this);
                    e.image_loaded(e.S("img", this), function() {
                        e.equalize(i)
                    })
                })
            }
        }
    }(jQuery, window, window.document),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var s, a, o = this;
                if (o.defaults = {
                        accessibility: !0,
                        appendArrows: t(e),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                        nextArrow: '<button type="button" class="slick-next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(t, e) {
                            return '<button type="button">' + (e + 1) + "</button>"
                        },
                        dots: !1,
                        draggable: !0,
                        easing: "linear",
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        lazyLoad: "ondemand",
                        onBeforeChange: null,
                        onAfterChange: null,
                        onInit: null,
                        onReInit: null,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        responsive: null,
                        slide: "div",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 300,
                        swipe: !0,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        vertical: !1
                    }, o.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentSlide: 0,
                        currentLeft: null,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.paused = !1, o.positionProp = null, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.windowWidth = 0, o.windowTimer = null, o.options = t.extend({}, o.defaults, n), o.originalSettings = o.options, s = o.options.responsive || null, s && s.length > -1) {
                    for (a in s) s.hasOwnProperty(a) && (o.breakpoints.push(s[a].breakpoint), o.breakpointSettings[s[a].breakpoint] = s[a].settings);
                    o.breakpoints.sort(function(t, e) {
                        return e - t
                    })
                }
                o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.changeSlide = t.proxy(o.changeSlide, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.init()
            }
            var i = 0;
            return e
        }(), e.prototype.addSlide = function(e, i, n) {
            var s = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (0 > i || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : n === !0 ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).remove(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) {
                t(i).attr("index", e)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                s = this;
            s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, i) : s.cssTransitions === !1 ? t({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(t) {
                    s.options.vertical === !1 ? (n[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            }) : (s.applyTransition(), n[s.animType] = s.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() {
                s.disableTransition(), i.call()
            }, s.options.speed))
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var e = this,
                i = null != e.options.asNavFor ? t(e.options.asNavFor).getSlick() : null;
            e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll), null != i && i.slideHandler(i.currentSlide + i.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll), null != i && i.slideHandler(i.currentSlide - i.options.slidesToScroll)) : (e.slideHandler(e.currentSlide + e.options.slidesToScroll), null != i && i.slideHandler(i.currentSlide + i.options.slidesToScroll))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow = t(e.options.prevArrow), e.$nextArrow = t(e.options.nextArrow), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.appendTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled"))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (i = '<ul class="slick-dots">', e = 0; e <= n.getDotCount(); e += 1) i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
                i += "</ul>", n.$dots = t(i).appendTo(n.$slider), n.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("index", e)
            }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode === !0 && (e.options.slidesToScroll = 1, e.options.slidesToShow % 2 === 0 && (e.options.slidesToShow = 3)), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.options.accessibility === !0 && e.$list.prop("tabIndex", 0), e.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.checkResponsive = function() {
            var e, i, n = this;
            if (n.originalSettings.responsive && n.originalSettings.responsive.length > -1 && null !== n.originalSettings.responsive) {
                i = null;
                for (e in n.breakpoints) n.breakpoints.hasOwnProperty(e) && t(window).width() < n.breakpoints[e] && (i = n.breakpoints[e]);
                null !== i ? null !== n.activeBreakpoint ? i !== n.activeBreakpoint && (n.activeBreakpoint = i, n.options = t.extend({}, n.options, n.breakpointSettings[i]), n.refresh()) : (n.activeBreakpoint = i, n.options = t.extend({}, n.options, n.breakpointSettings[i]), n.refresh()) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = t.extend({}, n.options, n.originalSettings), n.refresh())
            }
        }, e.prototype.changeSlide = function(e) {
            var i = this,
                n = t(e.target),
                s = null != i.options.asNavFor ? t(i.options.asNavFor).getSlick() : null;
            switch (n.is("a") && e.preventDefault(), e.data.message) {
                case "previous":
                    i.slideCount > i.options.slidesToShow && (i.slideHandler(i.currentSlide - i.options.slidesToScroll), null != s && s.slideHandler(s.currentSlide - s.options.slidesToScroll));
                    break;
                case "next":
                    i.slideCount > i.options.slidesToShow && (i.slideHandler(i.currentSlide + i.options.slidesToScroll), null != s && s.slideHandler(s.currentSlide + s.options.slidesToScroll));
                    break;
                case "index":
                    var a = t(e.target).parent().index() * i.options.slidesToScroll;
                    i.slideHandler(a), null != s && s.slideHandler(a);
                    break;
                default:
                    return !1
            }
        }, e.prototype.destroy = function() {
            var e = this;
            e.autoPlayClear(), e.touchObject = {}, t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && (e.$prevArrow.remove(), e.$nextArrow.remove()), e.$slides.parent().hasClass("slick-track") && e.$slides.unwrap().unwrap(), e.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$list.off(".slick"), t(window).off(".slick-" + e.instanceUid)
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: 1e3
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: 1e3
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.filterSlides = function(t) {
            var e = this;
            null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).remove(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.getCurrent = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t, e = this,
                i = 0,
                n = 0,
                s = 0;
            for (t = e.options.infinite === !0 ? e.slideCount + e.options.slidesToShow - e.options.slidesToScroll : e.slideCount; t > i;) s++, n += e.options.slidesToScroll, i = n + e.options.slidesToShow;
            return s
        }, e.prototype.getLeft = function(t) {
            var e, i, n = this,
                s = 0;
            return n.slideOffset = 0, i = n.$slides.first().outerHeight(), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = i * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll !== 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideCount % n.options.slidesToShow * n.slideWidth * -1, s = n.slideCount % n.options.slidesToShow * i * -1)) : n.slideCount % n.options.slidesToShow !== 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (n.slideOffset = n.options.slidesToShow * n.slideWidth - n.slideCount % n.options.slidesToShow * n.slideWidth, s = n.slideCount % n.options.slidesToShow * i), n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + s
        }, e.prototype.init = function() {
            var e = this;
            t(e.$slider).hasClass("slick-initialized") || (t(e.$slider).addClass("slick-initialized"), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.checkResponsive()), null !== e.options.onInit && e.options.onInit.call(this, e)
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", e.autoPlayClear).on("mouseleave.slick", e.autoPlay)
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.options.pauseOnHover === !0 && e.options.autoplay === !0 && (e.$list.on("mouseenter.slick", e.autoPlayClear), e.$list.on("mouseleave.slick", e.autoPlay)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.options.slide, e.$slideTrack).on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, function() {
                e.checkResponsive(), e.setPosition()
            }), t(window).on("resize.slick.slick-" + e.instanceUid, function() {
                t(window).width !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                    e.windowWidth = t(window).width(), e.checkResponsive(), e.setPosition()
                }, 50))
            }), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            37 === t.keyCode ? e.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === t.keyCode && e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy");
                    e.css({
                        opacity: 0
                    }).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading").load(function() {
                        e.animate({
                            opacity: 1
                        }, 200)
                    })
                })
            }
            var i, n, s, a, o = this;
            o.options.centerMode === !0 || o.options.fade === !0 ? (s = o.options.slidesToShow + o.currentSlide - 1, a = s + o.options.slidesToShow + 2) : (s = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, a = s + o.options.slidesToShow), i = o.$slider.find(".slick-slide").slice(s, a), e(i), 1 == o.slideCount ? (n = o.$slider.find(".slick-slide"), e(n)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (n = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(n)) : 0 === o.currentSlide && (n = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.postSlide = function(t) {
            var e = this;
            null !== e.options.onAfterChange && e.options.onAfterChange.call(this, e, t), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay()
        }, e.prototype.progressiveLazyLoad = function() {
            var e, i, n = this;
            e = t("img[data-lazy]").length, e > 0 && (i = t("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad()
            }))
        }, e.prototype.refresh = function() {
            var e = this,
                i = e.currentSlide;
            e.destroy(), t.extend(e, e.initials), e.currentSlide = i, e.init()
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.options.focusOnSelect === !0 && t(e.options.slide, e.$slideTrack).on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), null !== e.options.onReInit && e.options.onReInit.call(this, e)
        }, e.prototype.removeSlide = function(t, e) {
            var i = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : i.slideCount - 1) : t = e === !0 ? --t : t, i.slideCount < 1 || 0 > t || t > i.slideCount - 1 ? !1 : (i.unload(), i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).remove(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                s = {};
            e = "left" == n.positionProp ? t + "px" : "0px", i = "top" == n.positionProp ? t + "px" : "0px", s[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(s) : (s = {}, n.cssTransitions === !1 ? (s[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(s)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.$slideTrack.children(".slick-slide").width(t.options.centerMode === !0 ? t.slideWidth : t.slideWidth), t.options.vertical === !1 ? (t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)), t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            })) : (t.$list.height(t.$slides.first().outerHeight() * t.options.slidesToShow), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight() * t.$slideTrack.children(".slick-slide").length)), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            }))
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, s) {
                e = i.slideWidth * n * -1, t(s).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setValues(), t.setDimensions(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade()
        }, e.prototype.setProps = function() {
            var t = this;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== document.body.style.WebkitTransition || void 0 !== document.body.style.MozTransition || void 0 !== document.body.style.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), void 0 !== document.body.style.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition"), void 0 !== document.body.style.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition"), void 0 !== document.body.style.msTransform && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = null !== t.animType
        }, e.prototype.setValues = function() {
            var t = this;
            t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.slideWidth = Math.ceil(t.options.vertical === !1 ? t.listWidth / t.options.slidesToShow : t.listWidth)
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, s = this;
            s.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), i = s.$slider.find(".slick-slide"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t > 0 && t < s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active") : i.length <= s.options.slidesToShow ? i.addClass("slick-active") : (n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, i.slice(n, n + s.options.slidesToShow).addClass("slick-active")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, s = this;
            if ((s.options.fade === !0 || s.options.vertical === !0) && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (n = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - n; e -= 1) i = e - 1, t(s.$slides[i]).clone().attr("id", "").prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; n > e; e += 1) i = e, t(s.$slides[i]).clone().attr("id", "").appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = null != i.options.asNavFor ? t(i.options.asNavFor).getSlick() : null,
                s = parseInt(t(e.target).parent().attr("index"));
            if (s || (s = 0), !(i.slideCount <= i.options.slidesToShow) && (i.slideHandler(s), null != n)) {
                if (n.slideCount <= n.options.slidesToShow) return;
                n.slideHandler(s)
            }
        }, e.prototype.slideHandler = function(t) {
            var e, i, n, s, a = null,
                o = this;
            return o.animating === !0 ? !1 : (e = t, a = o.getLeft(e), n = o.getLeft(o.currentSlide), s = o.slideCount % o.options.slidesToScroll !== 0 ? o.options.slidesToScroll : 0, o.currentLeft = null === o.swipeLeft ? n : o.swipeLeft, o.options.infinite === !1 && o.options.centerMode === !1 && (0 > t || t > o.slideCount - o.options.slidesToShow + s) ? (o.options.fade === !1 && (e = o.currentSlide, o.animateSlide(n, function() {
                o.postSlide(e)
            })), !1) : o.options.infinite === !1 && o.options.centerMode === !0 && (0 > t || t > o.slideCount - o.options.slidesToScroll) ? (o.options.fade === !1 && (e = o.currentSlide, o.animateSlide(n, function() {
                o.postSlide(e)
            })), !1) : (o.options.autoplay === !0 && clearInterval(o.autoPlayTimer), i = 0 > e ? o.slideCount % o.options.slidesToScroll !== 0 ? o.slideCount - o.slideCount % o.options.slidesToScroll : o.slideCount - o.options.slidesToScroll : e > o.slideCount - 1 ? 0 : e, o.animating = !0, null !== o.options.onBeforeChange && t !== o.currentSlide && o.options.onBeforeChange.call(this, o, o.currentSlide, i), o.currentSlide = i, o.setSlideClasses(o.currentSlide), o.updateDots(), o.updateArrows(), o.options.fade === !0 ? (o.fadeSlide(i, function() {
                o.postSlide(i)
            }), !1) : void o.animateSlide(a, function() {
                o.postSlide(i)
            })))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, s = this;
            return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? "left" : 360 >= n && n >= 315 ? "left" : n >= 135 && 225 >= n ? "right" : "vertical"
        }, e.prototype.swipeEnd = function(e) {
            var i = this,
                n = null != i.options.asNavFor ? t(i.options.asNavFor).getSlick() : null;
            if (i.dragging = !1, void 0 === i.touchObject.curX) return !1;
            if (i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (t(e.target).on("click.slick", function(e) {
                e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.slick")
            }), i.swipeDirection()) {
                case "left":
                    i.slideHandler(i.currentSlide + i.options.slidesToScroll), null != n && n.slideHandler(n.currentSlide + n.options.slidesToScroll), i.touchObject = {};
                    break;
                case "right":
                    i.slideHandler(i.currentSlide - i.options.slidesToScroll), null != n && n.slideHandler(n.currentSlide - n.options.slidesToScroll), i.touchObject = {}
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), null != n && n.slideHandler(n.currentSlide), i.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 || e.options.draggable === !1 && !t.originalEvent.touches)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, s, a = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, e = a.getLeft(a.currentSlide), !a.dragging || s && 1 !== s.length ? !1 : (a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), i = a.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && t.preventDefault(), n = a.touchObject.curX > a.touchObject.startX ? 1 : -1, a.swipeLeft = a.options.vertical === !1 ? e + a.touchObject.swipeLength * n : e + a.touchObject.swipeLength * (a.$list.height() / a.listWidth) * n, a.options.fade === !0 || a.options.touchMove === !1 ? !1 : a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).remove(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && (e.$prevArrow.remove(), e.$nextArrow.remove()), e.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")
        }, e.prototype.updateArrows = function() {
            var t = this;
            t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
        }, t.fn.slick = function(t) {
            var i = this;
            return i.each(function(i, n) {
                n.slick = new e(n, t)
            })
        }, t.fn.slickAdd = function(t, e, i) {
            var n = this;
            return n.each(function(n, s) {
                s.slick.addSlide(t, e, i)
            })
        }, t.fn.slickCurrentSlide = function() {
            var t = this;
            return t.get(0).slick.getCurrent()
        }, t.fn.slickFilter = function(t) {
            var e = this;
            return e.each(function(e, i) {
                i.slick.filterSlides(t)
            })
        }, t.fn.slickGoTo = function(e) {
            var i = this;
            return i.each(function(i, n) {
                var s = null != n.slick.options.asNavFor ? t(n.slick.options.asNavFor) : null;
                null != s && s.slickGoTo(e), n.slick.slideHandler(e)
            })
        }, t.fn.slickNext = function() {
            var t = this;
            return t.each(function(t, e) {
                e.slick.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            })
        }, t.fn.slickPause = function() {
            var t = this;
            return t.each(function(t, e) {
                e.slick.autoPlayClear(), e.slick.paused = !0
            })
        }, t.fn.slickPlay = function() {
            var t = this;
            return t.each(function(t, e) {
                e.slick.paused = !1, e.slick.autoPlay()
            })
        }, t.fn.slickPrev = function() {
            var t = this;
            return t.each(function(t, e) {
                e.slick.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            })
        }, t.fn.slickRemove = function(t, e) {
            var i = this;
            return i.each(function(i, n) {
                n.slick.removeSlide(t, e)
            })
        }, t.fn.slickGetOption = function(t) {
            var e = this;
            return e.get(0).slick.options[t]
        }, t.fn.slickSetOption = function(t, e, i) {
            var n = this;
            return n.each(function(n, s) {
                s.slick.options[t] = e, i === !0 && (s.slick.unload(), s.slick.reinit())
            })
        }, t.fn.slickUnfilter = function() {
            var t = this;
            return t.each(function(t, e) {
                e.slick.unfilterSlides()
            })
        }, t.fn.unslick = function() {
            var t = this;
            return t.each(function(t, e) {
                e.slick && e.slick.destroy()
            })
        }, t.fn.getSlick = function() {
            var t = null,
                e = this;
            return e.each(function(e, i) {
                t = i.slick
            }), t
        }
    }),
    function() {
        $(function() {
            return $(document).foundation()
        })
    }.call(this), $(function() {
        $(".slick").slick({
            arrows: !1,
            dots: !0
        })
    }),
    function() {
        $(function() {
            var t;
            return t = $(".service"), t.length ? $(window).on("scroll", function() {
                return t.filter(":not(.animated)").each(function(t, e) {
                    var i;
                    return i = $(e), i.isInViewport(.25) ? i.addClass("animated") : void 0
                })
            }).trigger("scroll") : void 0
        })
    }.call(this),
    function() {
        $(function() {
            var t;
            return t = $(".map"), $(window).on("scroll", function() {
                var e, i, n, s, a, o;
                return t.is(":empty") && t.isInViewport(.25) ? (o = new google.maps.LatLng(49.260745, -123.113969), e = new google.maps.LatLng(38, -100), n = {
                    center: e,
                    zoom: 4,
                    disableDefaultUI: !0,
                    disableDoubleClickZoom: !0,
                    scrollwheel: !1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }, s = new google.maps.StyledMapType([{
                    stylers: [{
                        saturation: -83
                    }, {
                        lightness: 6
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.country",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.province",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.country",
                    elementType: "labels.text",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.country",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#F2F2F2"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.locality",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{
                        lightness: 20
                    }]
                }]), i = new google.maps.Map(t.get(0), n), a = new MarkerWithLabel({
                    clickable: !1,
                    position: o,
                    icon: {
                        path: "M 293 0C158.333 0 29 110.666 29 272.667 S293 841.89 293 841.89 s268.667-393.891 268.667-569.223 S427.667 0 293 0 z M 293.333 381.332 c-62.04 0-112.333-50.293-112.333-112.333 s50.293-112.333 112.333-112.333 c62.041 0 112.333 50.293 112.333 112.333S355.374 381.332 293.333 381.332 z",
                        fillColor: "#CE1628",
                        fillOpacity: 1,
                        strokeColor: "",
                        strokeWeight: 0,
                        scale: 1 / 9,
                        anchor: new google.maps.Point(266, 842)
                    },
                    map: i,
                    labelContent: "Vancouver, BC",
                    labelAnchor: new google.maps.Point(-15, 15),
                    labelClass: "pin",
                    labelStyle: {
                        opacity: 1
                    }
                }), i.mapTypes.set("black_and_white", s), i.setMapTypeId("black_and_white"), i.setOptions({
                    draggable: !1
                }), google.maps.event.addDomListener(window, "resize", function() {
                    return i.setCenter(e)
                })) : void 0
            }).trigger("scroll")
        })
    }.call(this),
    function() {
        $(function() {
            return $(".menu-toggle").on("click", function() {
                return $(this).toggleClass("open"), $(".menu").toggle()
            })
        })
    }.call(this),
    function() {
        $(function() {
            var t, e, i, n;
            return $(".messages").length ? (n = $(".title"), e = $(".form"), i = $(".sent"), t = e.find(".error-message"), e.find("form").validate({
                errorClass: "invalid",
                errorPlacement: function() {
                    return t.show()
                },
                onkeyup: function() {
                    return t.hide()
                }
            }), i.find("button").on("click", function() {
                return i.hide(), n.show(), e.show()
            }), e.on("ajax:success", function() {
                return n.hide(), e.hide(), i.show(), window.scroll(0, 0)
            }), e.find("select").on("change", function() {
                var t, e;
                return e = $(this), t = e.find("option:selected"), e.prev().text(t.text())
            }).trigger("change")) : void 0
        })
    }.call(this),
    function() {
        $(function() {
            return $(".work.show").length ? $(window).on("scroll", function() {
                var t;
                return t = $(this).scrollTop() / 150, $(".mask").css("opacity", t)
            }) : void 0
        })
    }.call(this),
    function() {}.call(this);