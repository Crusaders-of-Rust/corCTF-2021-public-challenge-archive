// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1DzRJ":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "3089d1c2f6ab2ad1131fa4f26483b687";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"7oR4J":[function(require,module,exports) {
var define;
/*!
* Bootstrap v5.0.2 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
})(this, function (t) {
  "use strict";
  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return (t && Object.keys(t).forEach(function (s) {
      if ("default" !== s) {
        var i = Object.getOwnPropertyDescriptor(t, s);
        Object.defineProperty(e, s, i.get ? i : {
          enumerable: !0,
          get: function () {
            return t[s];
          }
        });
      }
    }), e.default = t, Object.freeze(e));
  }
  var s = e(t);
  const i = {
    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
    children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
    parents(t, e) {
      const s = [];
      let i = t.parentNode;
      for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; ) (i.matches(e) && s.push(i), i = i.parentNode);
      return s;
    },
    prev(t, e) {
      let s = t.previousElementSibling;
      for (; s; ) {
        if (s.matches(e)) return [s];
        s = s.previousElementSibling;
      }
      return [];
    },
    next(t, e) {
      let s = t.nextElementSibling;
      for (; s; ) {
        if (s.matches(e)) return [s];
        s = s.nextElementSibling;
      }
      return [];
    }
  }, n = t => {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));
    return t;
  }, o = t => {
    let e = t.getAttribute("data-bs-target");
    if (!e || "#" === e) {
      let s = t.getAttribute("href");
      if (!s || !s.includes("#") && !s.startsWith(".")) return null;
      (s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]), e = s && "#" !== s ? s.trim() : null);
    }
    return e;
  }, r = t => {
    const e = o(t);
    return e && document.querySelector(e) ? e : null;
  }, a = t => {
    const e = o(t);
    return e ? document.querySelector(e) : null;
  }, l = t => {
    t.dispatchEvent(new Event("transitionend"));
  }, c = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), h = t => c(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? i.findOne(t) : null, d = (t, e, s) => {
    Object.keys(s).forEach(i => {
      const n = s[i], o = e[i], r = o && c(o) ? "element" : null == (a = o) ? "" + a : ({}).toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
      var a;
      if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`);
    });
  }, u = t => !(!c(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"), g = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), p = t => {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t.getRootNode) {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
    return t instanceof ShadowRoot ? t : t.parentNode ? p(t.parentNode) : null;
  }, f = () => {}, m = t => t.offsetHeight, _ = () => {
    const {jQuery: t} = window;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  }, b = [], v = () => "rtl" === document.documentElement.dir, y = t => {
    var e;
    (e = () => {
      const e = _();
      if (e) {
        const s = t.NAME, i = e.fn[s];
        (e.fn[s] = t.jQueryInterface, e.fn[s].Constructor = t, e.fn[s].noConflict = () => (e.fn[s] = i, t.jQueryInterface));
      }
    }, "loading" === document.readyState ? (b.length || document.addEventListener("DOMContentLoaded", () => {
      b.forEach(t => t());
    }), b.push(e)) : e());
  }, w = t => {
    "function" == typeof t && t();
  }, E = (t, e, s = !0) => {
    if (!s) return void w(t);
    const i = (t => {
      if (!t) return 0;
      let {transitionDuration: e, transitionDelay: s} = window.getComputedStyle(t);
      const i = Number.parseFloat(e), n = Number.parseFloat(s);
      return i || n ? (e = e.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0;
    })(e) + 5;
    let n = !1;
    const o = ({target: s}) => {
      s === e && (n = !0, e.removeEventListener("transitionend", o), w(t));
    };
    (e.addEventListener("transitionend", o), setTimeout(() => {
      n || l(e);
    }, i));
  }, A = (t, e, s, i) => {
    let n = t.indexOf(e);
    if (-1 === n) return t[!s && i ? t.length - 1 : 0];
    const o = t.length;
    return (n += s ? 1 : -1, i && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))]);
  }, T = /[^.]*(?=\..*)\.|.*/, C = /\..*/, k = /::\d+$/, L = {};
  let O = 1;
  const D = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, I = /^(mouseenter|mouseleave)/i, N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function S(t, e) {
    return e && `${e}::${O++}` || t.uidEvent || O++;
  }
  function x(t) {
    const e = S(t);
    return (t.uidEvent = e, L[e] = L[e] || ({}), L[e]);
  }
  function M(t, e, s = null) {
    const i = Object.keys(t);
    for (let n = 0, o = i.length; n < o; n++) {
      const o = t[i[n]];
      if (o.originalHandler === e && o.delegationSelector === s) return o;
    }
    return null;
  }
  function P(t, e, s) {
    const i = "string" == typeof e, n = i ? s : e;
    let o = R(t);
    return (N.has(o) || (o = t), [i, n, o]);
  }
  function j(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;
    if ((s || (s = i, i = null), I.test(e))) {
      const t = t => function (e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
      };
      i ? i = t(i) : s = t(s);
    }
    const [o, r, a] = P(e, s, i), l = x(t), c = l[a] || (l[a] = {}), h = M(c, r, o ? s : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = S(r, e.replace(T, "")), u = o ? (function (t, e, s) {
      return function i(n) {
        const o = t.querySelectorAll(e);
        for (let {target: r} = n; r && r !== this; r = r.parentNode) for (let a = o.length; a--; ) if (o[a] === r) return (n.delegateTarget = r, i.oneOff && B.off(t, n.type, e, s), s.apply(r, [n]));
        return null;
      };
    })(t, s, i) : (function (t, e) {
      return function s(i) {
        return (i.delegateTarget = t, s.oneOff && B.off(t, i.type, e), e.apply(t, [i]));
      };
    })(t, s);
    (u.delegationSelector = o ? s : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o));
  }
  function H(t, e, s, i, n) {
    const o = M(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }
  function R(t) {
    return (t = t.replace(C, ""), D[t] || t);
  }
  const B = {
    on(t, e, s, i) {
      j(t, e, s, i, !1);
    },
    one(t, e, s, i) {
      j(t, e, s, i, !0);
    },
    off(t, e, s, i) {
      if ("string" != typeof e || !t) return;
      const [n, o, r] = P(e, s, i), a = r !== e, l = x(t), c = e.startsWith(".");
      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void H(t, l, r, o, n ? s : null);
      }
      c && Object.keys(l).forEach(s => {
        !(function (t, e, s, i) {
          const n = e[s] || ({});
          Object.keys(n).forEach(o => {
            if (o.includes(i)) {
              const i = n[o];
              H(t, e, s, i.originalHandler, i.delegationSelector);
            }
          });
        })(t, l, s, e.slice(1));
      });
      const h = l[r] || ({});
      Object.keys(h).forEach(s => {
        const i = s.replace(k, "");
        if (!a || e.includes(i)) {
          const e = h[s];
          H(t, l, r, e.originalHandler, e.delegationSelector);
        }
      });
    },
    trigger(t, e, s) {
      if ("string" != typeof e || !t) return null;
      const i = _(), n = R(e), o = e !== n, r = N.has(n);
      let a, l = !0, c = !0, h = !1, d = null;
      return (o && i && (a = i.Event(e, s), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== s && Object.keys(s).forEach(t => {
        Object.defineProperty(d, t, {
          get: () => s[t]
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d);
    }
  }, $ = new Map();
  var W = {
    set(t, e, s) {
      $.has(t) || $.set(t, new Map());
      const i = $.get(t);
      i.has(e) || 0 === i.size ? i.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
    },
    get: (t, e) => $.has(t) && $.get(t).get(e) || null,
    remove(t, e) {
      if (!$.has(t)) return;
      const s = $.get(t);
      (s.delete(e), 0 === s.size && $.delete(t));
    }
  };
  class q {
    constructor(t) {
      (t = h(t)) && (this._element = t, W.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      (W.remove(this._element, this.constructor.DATA_KEY), B.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
        this[t] = null;
      }));
    }
    _queueCallback(t, e, s = !0) {
      E(t, e, s);
    }
    static getInstance(t) {
      return W.get(t, this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
    }
    static get VERSION() {
      return "5.0.2";
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
      return "bs." + this.NAME;
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }
  }
  class z extends q {
    static get NAME() {
      return "alert";
    }
    close(t) {
      const e = t ? this._getRootElement(t) : this._element, s = this._triggerCloseEvent(e);
      null === s || s.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(t) {
      return a(t) || t.closest(".alert");
    }
    _triggerCloseEvent(t) {
      return B.trigger(t, "close.bs.alert");
    }
    _removeElement(t) {
      t.classList.remove("show");
      const e = t.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(t), t, e);
    }
    _destroyElement(t) {
      (t.remove(), B.trigger(t, "closed.bs.alert"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = z.getOrCreateInstance(this);
        "close" === t && e[t](this);
      });
    }
    static handleDismiss(t) {
      return function (e) {
        (e && e.preventDefault(), t.close(this));
      };
    }
  }
  (B.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', z.handleDismiss(new z())), y(z));
  class F extends q {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = F.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function U(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }
  function K(t) {
    return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase());
  }
  (B.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
    t.preventDefault();
    const e = t.target.closest('[data-bs-toggle="button"]');
    F.getOrCreateInstance(e).toggle();
  }), y(F));
  const V = {
    setDataAttribute(t, e, s) {
      t.setAttribute("data-bs-" + K(e), s);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + K(e));
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {};
      return (Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(s => {
        let i = s.replace(/^bs/, "");
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = U(t.dataset[s]));
      }), e);
    },
    getDataAttribute: (t, e) => U(t.getAttribute("data-bs-" + K(e))),
    offset(t) {
      const e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: t => ({
      top: t.offsetTop,
      left: t.offsetLeft
    })
  }, Q = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  }, X = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  }, Y = "next", G = "prev", Z = "left", J = "right", tt = {
    ArrowLeft: J,
    ArrowRight: Z
  };
  class et extends q {
    constructor(t, e) {
      (super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = i.findOne(".carousel-indicators", this._element), this._touchSupported = ("ontouchstart" in document.documentElement) || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners());
    }
    static get Default() {
      return Q;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(Y);
    }
    nextWhenVisible() {
      !document.hidden && u(this._element) && this.next();
    }
    prev() {
      this._slide(G);
    }
    pause(t) {
      (t || (this._isPaused = !0), i.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (l(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null);
    }
    cycle(t) {
      (t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
    }
    to(t) {
      this._activeElement = i.findOne(".active.carousel-item", this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding) return void B.one(this._element, "slid.bs.carousel", () => this.to(t));
      if (e === t) return (this.pause(), void this.cycle());
      const s = t > e ? Y : G;
      this._slide(s, this._items[t]);
    }
    _getConfig(t) {
      return (t = {
        ...Q,
        ...V.getDataAttributes(this._element),
        ..."object" == typeof t ? t : {}
      }, d("carousel", t, X), t);
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z));
    }
    _addEventListeners() {
      (this._config.keyboard && B.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (B.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), B.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners());
    }
    _addTouchEventListeners() {
      const t = t => {
        !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX;
      }, e = t => {
        this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
      }, s = t => {
        (!this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval)));
      };
      (i.find(".carousel-item img", this._element).forEach(t => {
        B.on(t, "dragstart.bs.carousel", t => t.preventDefault());
      }), this._pointerEvent ? (B.on(this._element, "pointerdown.bs.carousel", e => t(e)), B.on(this._element, "pointerup.bs.carousel", t => s(t)), this._element.classList.add("pointer-event")) : (B.on(this._element, "touchstart.bs.carousel", e => t(e)), B.on(this._element, "touchmove.bs.carousel", t => e(t)), B.on(this._element, "touchend.bs.carousel", t => s(t))));
    }
    _keydown(t) {
      if ((/input|textarea/i).test(t.target.tagName)) return;
      const e = tt[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (this._items = t && t.parentNode ? i.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t));
    }
    _getItemByOrder(t, e) {
      const s = t === Y;
      return A(this._items, e, s, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const s = this._getItemIndex(t), n = this._getItemIndex(i.findOne(".active.carousel-item", this._element));
      return B.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: n,
        to: s
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = i.findOne(".active", this._indicatorsElement);
        (e.classList.remove("active"), e.removeAttribute("aria-current"));
        const s = i.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < s.length; e++) if (Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
          (s[e].classList.add("active"), s[e].setAttribute("aria-current", "true"));
          break;
        }
      }
    }
    _updateInterval() {
      const t = this._activeElement || i.findOne(".active.carousel-item", this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(t, e) {
      const s = this._directionToOrder(t), n = i.findOne(".active.carousel-item", this._element), o = this._getItemIndex(n), r = e || this._getItemByOrder(s, n), a = this._getItemIndex(r), l = Boolean(this._interval), c = s === Y, h = c ? "carousel-item-start" : "carousel-item-end", d = c ? "carousel-item-next" : "carousel-item-prev", u = this._orderToDirection(s);
      if (r && r.classList.contains("active")) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(r, u).defaultPrevented) return;
      if (!n || !r) return;
      (this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r);
      const g = () => {
        B.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: r,
          direction: u,
          from: o,
          to: a
        });
      };
      if (this._element.classList.contains("slide")) {
        (r.classList.add(d), m(r), n.classList.add(h), r.classList.add(h));
        const t = () => {
          (r.classList.remove(h, d), r.classList.add("active"), n.classList.remove("active", d, h), this._isSliding = !1, setTimeout(g, 0));
        };
        this._queueCallback(t, n, !0);
      } else (n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, g());
      l && this.cycle();
    }
    _directionToOrder(t) {
      return [J, Z].includes(t) ? v() ? t === Z ? G : Y : t === Z ? Y : G : t;
    }
    _orderToDirection(t) {
      return [Y, G].includes(t) ? v() ? t === G ? Z : J : t === G ? J : Z : t;
    }
    static carouselInterface(t, e) {
      const s = et.getOrCreateInstance(t, e);
      let {_config: i} = s;
      "object" == typeof e && (i = {
        ...i,
        ...e
      });
      const n = "string" == typeof e ? e : i.slide;
      if ("number" == typeof e) s.to(e); else if ("string" == typeof n) {
        if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
        s[n]();
      } else i.interval && i.ride && (s.pause(), s.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        et.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = a(this);
      if (!e || !e.classList.contains("carousel")) return;
      const s = {
        ...V.getDataAttributes(e),
        ...V.getDataAttributes(this)
      }, i = this.getAttribute("data-bs-slide-to");
      (i && (s.interval = !1), et.carouselInterface(e, s), i && et.getInstance(e).to(i), t.preventDefault());
    }
  }
  (B.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", et.dataApiClickHandler), B.on(window, "load.bs.carousel.data-api", () => {
    const t = i.find('[data-bs-ride="carousel"]');
    for (let e = 0, s = t.length; e < s; e++) et.carouselInterface(t[e], et.getInstance(t[e]));
  }), y(et));
  const st = {
    toggle: !0,
    parent: ""
  }, it = {
    toggle: "boolean",
    parent: "(string|element)"
  };
  class nt extends q {
    constructor(t, e) {
      (super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = i.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`));
      const s = i.find('[data-bs-toggle="collapse"]');
      for (let t = 0, e = s.length; t < e; t++) {
        const e = s[t], n = r(e), o = i.find(n).filter(t => t === this._element);
        null !== n && o.length && (this._selector = n, this._triggerArray.push(e));
      }
      (this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle());
    }
    static get Default() {
      return st;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains("show")) return;
      let t, e;
      this._parent && (t = i.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === t.length && (t = null));
      const s = i.findOne(this._selector);
      if (t) {
        const i = t.find(t => s !== t);
        if ((e = i ? nt.getInstance(i) : null, e && e._isTransitioning)) return;
      }
      if (B.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      t && t.forEach(t => {
        (s !== t && nt.collapseInterface(t, "hide"), e || W.set(t, "bs.collapse", null));
      });
      const n = this._getDimension();
      (this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
        (t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0));
      }), this.setTransitioning(!0));
      const o = "scroll" + (n[0].toUpperCase() + n.slice(1));
      (this._queueCallback(() => {
        (this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n] = "", this.setTransitioning(!1), B.trigger(this._element, "shown.bs.collapse"));
      }, this._element, !0), this._element.style[n] = this._element[o] + "px");
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show")) return;
      if (B.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", m(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show"));
      const e = this._triggerArray.length;
      if (e > 0) for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t], s = a(e);
        s && !s.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
      }
      (this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(() => {
        (this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), B.trigger(this._element, "hidden.bs.collapse"));
      }, this._element, !0));
    }
    setTransitioning(t) {
      this._isTransitioning = t;
    }
    _getConfig(t) {
      return ((t = {
        ...st,
        ...t
      }).toggle = Boolean(t.toggle), d("collapse", t, it), t);
    }
    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }
    _getParent() {
      let {parent: t} = this._config;
      t = h(t);
      const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
      return (i.find(e, t).forEach(t => {
        const e = a(t);
        this._addAriaAndCollapsedClass(e, [t]);
      }), t);
    }
    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const s = t.classList.contains("show");
      e.forEach(t => {
        (s ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", s));
      });
    }
    static collapseInterface(t, e) {
      let s = nt.getInstance(t);
      const i = {
        ...st,
        ...V.getDataAttributes(t),
        ..."object" == typeof e && e ? e : {}
      };
      if ((!s && i.toggle && "string" == typeof e && (/show|hide/).test(e) && (i.toggle = !1), s || (s = new nt(t, i)), "string" == typeof e)) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        nt.collapseInterface(this, t);
      });
    }
  }
  (B.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    const e = V.getDataAttributes(this), s = r(this);
    i.find(s).forEach(t => {
      const s = nt.getInstance(t);
      let i;
      (s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent, s._parent = s._getParent()), i = "toggle") : i = e, nt.collapseInterface(t, i));
    });
  }), y(nt));
  const ot = new RegExp("ArrowUp|ArrowDown|Escape"), rt = v() ? "top-end" : "top-start", at = v() ? "top-start" : "top-end", lt = v() ? "bottom-end" : "bottom-start", ct = v() ? "bottom-start" : "bottom-end", ht = v() ? "left-start" : "right-start", dt = v() ? "right-start" : "left-start", ut = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  }, gt = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };
  class pt extends q {
    constructor(t, e) {
      (super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners());
    }
    static get Default() {
      return ut;
    }
    static get DefaultType() {
      return gt;
    }
    static get NAME() {
      return "dropdown";
    }
    toggle() {
      g(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
    }
    show() {
      if (g(this._element) || this._menu.classList.contains("show")) return;
      const t = pt.getParentFromElement(this._element), e = {
        relatedTarget: this._element
      };
      if (!B.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) V.setDataAttribute(this._menu, "popper", "none"); else {
          if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let e = this._element;
          "parent" === this._config.reference ? e = t : c(this._config.reference) ? e = h(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
          const i = this._getPopperConfig(), n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
          (this._popper = s.createPopper(e, this._menu, i), n && V.setDataAttribute(this._menu, "popper", "static"));
        }
        (("ontouchstart" in document.documentElement) && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => B.on(t, "mouseover", f)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.trigger(this._element, "shown.bs.dropdown", e));
      }
    }
    hide() {
      if (g(this._element) || !this._menu.classList.contains("show")) return;
      const t = {
        relatedTarget: this._element
      };
      this._completeHide(t);
    }
    dispose() {
      (this._popper && this._popper.destroy(), super.dispose());
    }
    update() {
      (this._inNavbar = this._detectNavbar(), this._popper && this._popper.update());
    }
    _addEventListeners() {
      B.on(this._element, "click.bs.dropdown", t => {
        (t.preventDefault(), this.toggle());
      });
    }
    _completeHide(t) {
      B.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (("ontouchstart" in document.documentElement) && [].concat(...document.body.children).forEach(t => B.off(t, "mouseover", f)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), V.removeDataAttribute(this._menu, "popper"), B.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if ((t = {
        ...this.constructor.Default,
        ...V.getDataAttributes(this._element),
        ...t
      }, d("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !c(t.reference) && "function" != typeof t.reference.getBoundingClientRect)) throw new TypeError(("dropdown").toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return t;
    }
    _getMenuElement() {
      return i.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return ht;
      if (t.classList.contains("dropstart")) return dt;
      const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? at : rt : e ? ct : lt;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const {offset: t} = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return ("static" === this._config.display && (t.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), {
        ...t,
        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
      });
    }
    _selectMenuItem({key: t, target: e}) {
      const s = i.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(u);
      s.length && A(s, e, "ArrowDown" === t, !s.includes(e)).focus();
    }
    static dropdownInterface(t, e) {
      const s = pt.getOrCreateInstance(t, e);
      if ("string" == typeof e) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        pt.dropdownInterface(this, t);
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
      const e = i.find('[data-bs-toggle="dropdown"]');
      for (let s = 0, i = e.length; s < i; s++) {
        const i = pt.getInstance(e[s]);
        if (!i || !1 === i._config.autoClose) continue;
        if (!i._element.classList.contains("show")) continue;
        const n = {
          relatedTarget: i._element
        };
        if (t) {
          const e = t.composedPath(), s = e.includes(i._menu);
          if (e.includes(i._element) || "inside" === i._config.autoClose && !s || "outside" === i._config.autoClose && s) continue;
          if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || (/input|select|option|textarea|form/i).test(t.target.tagName))) continue;
          "click" === t.type && (n.clickEvent = t);
        }
        i._completeHide(n);
      }
    }
    static getParentFromElement(t) {
      return a(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if ((/input|textarea/i).test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ot.test(t.key)) return;
      const e = this.classList.contains("show");
      if (!e && "Escape" === t.key) return;
      if ((t.preventDefault(), t.stopPropagation(), g(this))) return;
      const s = () => this.matches('[data-bs-toggle="dropdown"]') ? this : i.prev(this, '[data-bs-toggle="dropdown"]')[0];
      return "Escape" === t.key ? (s().focus(), void pt.clearMenus()) : "ArrowUp" === t.key || "ArrowDown" === t.key ? (e || s().click(), void pt.getInstance(s())._selectMenuItem(t)) : void (e && "Space" !== t.key || pt.clearMenus());
    }
  }
  (B.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', pt.dataApiKeydownHandler), B.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", pt.dataApiKeydownHandler), B.on(document, "click.bs.dropdown.data-api", pt.clearMenus), B.on(document, "keyup.bs.dropdown.data-api", pt.clearMenus), B.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    (t.preventDefault(), pt.dropdownInterface(this));
  }), y(pt));
  class ft {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      (this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), this._setElementAttributes(".sticky-top", "marginRight", e => e - t));
    }
    _disableOverFlow() {
      (this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, s) {
      const i = this.getWidth();
      this._applyManipulationCallback(t, t => {
        if (t !== this._element && window.innerWidth > t.clientWidth + i) return;
        this._saveInitialAttribute(t, e);
        const n = window.getComputedStyle(t)[e];
        t.style[e] = s(Number.parseFloat(n)) + "px";
      });
    }
    reset() {
      (this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"));
    }
    _saveInitialAttribute(t, e) {
      const s = t.style[e];
      s && V.setDataAttribute(t, e, s);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, t => {
        const s = V.getDataAttribute(t, e);
        void 0 === s ? t.style.removeProperty(e) : (V.removeDataAttribute(t, e), t.style[e] = s);
      });
    }
    _applyManipulationCallback(t, e) {
      c(t) ? e(t) : i.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const mt = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  }, _t = {
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  };
  class bt {
    constructor(t) {
      (this._config = this._getConfig(t), this._isAppended = !1, this._element = null);
    }
    show(t) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && m(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
        w(t);
      })) : w(t);
    }
    hide(t) {
      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
        (this.dispose(), w(t));
      })) : w(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return ((t = {
        ...mt,
        ..."object" == typeof t ? t : {}
      }).rootElement = h(t.rootElement), d("backdrop", t, _t), t);
    }
    _append() {
      this._isAppended || (this._config.rootElement.appendChild(this._getElement()), B.on(this._getElement(), "mousedown.bs.backdrop", () => {
        w(this._config.clickCallback);
      }), this._isAppended = !0);
    }
    dispose() {
      this._isAppended && (B.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1);
    }
    _emulateAnimation(t) {
      E(t, this._getElement(), this._config.isAnimated);
    }
  }
  const vt = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  }, yt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };
  class wt extends q {
    constructor(t, e) {
      (super(t), this._config = this._getConfig(e), this._dialog = i.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new ft());
    }
    static get Default() {
      return vt;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown || this._isTransitioning || B.trigger(this._element, "show.bs.modal", {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), B.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), B.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
        B.one(this._element, "mouseup.dismiss.bs.modal", t => {
          t.target === this._element && (this._ignoreBackdropClick = !0);
        });
      }), this._showBackdrop(() => this._showElement(t)));
    }
    hide(t) {
      if ((t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning)) return;
      if (B.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), B.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), B.off(this._element, "click.dismiss.bs.modal"), B.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e));
    }
    dispose() {
      ([window, this._dialog].forEach(t => B.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), B.off(document, "focusin.bs.modal"));
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new bt({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }
    _getConfig(t) {
      return (t = {
        ...vt,
        ...V.getDataAttributes(this._element),
        ..."object" == typeof t ? t : {}
      }, d("modal", t, yt), t);
    }
    _showElement(t) {
      const e = this._isAnimated(), s = i.findOne(".modal-body", this._dialog);
      (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), e && m(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
        (this._config.focus && this._element.focus(), this._isTransitioning = !1, B.trigger(this._element, "shown.bs.modal", {
          relatedTarget: t
        }));
      }, this._dialog, e));
    }
    _enforceFocus() {
      (B.off(document, "focusin.bs.modal"), B.on(document, "focusin.bs.modal", t => {
        document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus();
      }));
    }
    _setEscapeEvent() {
      this._isShown ? B.on(this._element, "keydown.dismiss.bs.modal", t => {
        this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition();
      }) : B.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown ? B.on(window, "resize.bs.modal", () => this._adjustDialog()) : B.off(window, "resize.bs.modal");
    }
    _hideModal() {
      (this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
        (document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), B.trigger(this._element, "hidden.bs.modal"));
      }));
    }
    _showBackdrop(t) {
      (B.on(this._element, "click.dismiss.bs.modal", t => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
      }), this._backdrop.show(t));
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (B.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
      const {classList: t, scrollHeight: e, style: s} = this._element, i = e > document.documentElement.clientHeight;
      !i && "hidden" === s.overflowY || t.contains("modal-static") || (i || (s.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(() => {
        (t.remove("modal-static"), i || this._queueCallback(() => {
          s.overflowY = "";
        }, this._dialog));
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), s = e > 0;
      ((!s && t && !v() || s && !t && v()) && (this._element.style.paddingLeft = e + "px"), (s && !t && !v() || !s && t && v()) && (this._element.style.paddingRight = e + "px"));
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = "", this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const s = wt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
          s[t](e);
        }
      });
    }
  }
  (B.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    const e = a(this);
    (["A", "AREA"].includes(this.tagName) && t.preventDefault(), B.one(e, "show.bs.modal", t => {
      t.defaultPrevented || B.one(e, "hidden.bs.modal", () => {
        u(this) && this.focus();
      });
    }), wt.getOrCreateInstance(e).toggle(this));
  }), y(wt));
  const Et = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  }, At = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };
  class Tt extends q {
    constructor(t, e) {
      (super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners());
    }
    static get NAME() {
      return "offcanvas";
    }
    static get Default() {
      return Et;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown || B.trigger(this._element, "show.bs.offcanvas", {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new ft().hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
        B.trigger(this._element, "shown.bs.offcanvas", {
          relatedTarget: t
        });
      }, this._element, !0));
    }
    hide() {
      this._isShown && (B.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (B.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
        (this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new ft().reset(), B.trigger(this._element, "hidden.bs.offcanvas"));
      }, this._element, !0)));
    }
    dispose() {
      (this._backdrop.dispose(), super.dispose(), B.off(document, "focusin.bs.offcanvas"));
    }
    _getConfig(t) {
      return (t = {
        ...Et,
        ...V.getDataAttributes(this._element),
        ..."object" == typeof t ? t : {}
      }, d("offcanvas", t, At), t);
    }
    _initializeBackDrop() {
      return new bt({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }
    _enforceFocusOnElement(t) {
      (B.off(document, "focusin.bs.offcanvas"), B.on(document, "focusin.bs.offcanvas", e => {
        document === e.target || t === e.target || t.contains(e.target) || t.focus();
      }), t.focus());
    }
    _addEventListeners() {
      (B.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), B.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      }));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Tt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  (B.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    const e = a(this);
    if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this))) return;
    B.one(e, "hidden.bs.offcanvas", () => {
      u(this) && this.focus();
    });
    const s = i.findOne(".offcanvas.show");
    (s && s !== e && Tt.getInstance(s).hide(), Tt.getOrCreateInstance(e).toggle(this));
  }), B.on(window, "load.bs.offcanvas.data-api", () => i.find(".offcanvas.show").forEach(t => Tt.getOrCreateInstance(t).show())), y(Tt));
  const Ct = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), kt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i, Lt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ot = (t, e) => {
    const s = t.nodeName.toLowerCase();
    if (e.includes(s)) return !Ct.has(s) || Boolean(kt.test(t.nodeValue) || Lt.test(t.nodeValue));
    const i = e.filter(t => t instanceof RegExp);
    for (let t = 0, e = i.length; t < e; t++) if (i[t].test(s)) return !0;
    return !1;
  };
  function Dt(t, e, s) {
    if (!t.length) return t;
    if (s && "function" == typeof s) return s(t);
    const i = new window.DOMParser().parseFromString(t, "text/html"), n = Object.keys(e), o = [].concat(...i.body.querySelectorAll("*"));
    for (let t = 0, s = o.length; t < s; t++) {
      const s = o[t], i = s.nodeName.toLowerCase();
      if (!n.includes(i)) {
        s.remove();
        continue;
      }
      const r = [].concat(...s.attributes), a = [].concat(e["*"] || [], e[i] || []);
      r.forEach(t => {
        Ot(t, a) || s.removeAttribute(t.nodeName);
      });
    }
    return i.body.innerHTML;
  }
  const It = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Nt = new Set(["sanitize", "allowList", "sanitizeFn"]), St = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  }, xt = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: v() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: v() ? "right" : "left"
  }, Mt = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  }, Pt = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };
  class jt extends q {
    constructor(t, e) {
      if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      (super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners());
    }
    static get Default() {
      return Mt;
    }
    static get NAME() {
      return "tooltip";
    }
    static get Event() {
      return Pt;
    }
    static get DefaultType() {
      return St;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled) if (t) {
        const e = this._initializeOnDelegatedTarget(t);
        (e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e));
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
        this._enter(null, this);
      }
    }
    dispose() {
      (clearTimeout(this._timeout), B.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose());
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = B.trigger(this._element, this.constructor.Event.SHOW), e = p(this._element), i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      const o = this.getTipElement(), r = n(this.constructor.NAME);
      (o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this._config.animation && o.classList.add("fade"));
      const a = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement, l = this._getAttachment(a);
      this._addAttachmentClass(l);
      const {container: c} = this._config;
      (W.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(o), B.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(l)), o.classList.add("show"));
      const h = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
      (h && o.classList.add(...h.split(" ")), ("ontouchstart" in document.documentElement) && [].concat(...document.body.children).forEach(t => {
        B.on(t, "mouseover", f);
      }));
      const d = this.tip.classList.contains("fade");
      this._queueCallback(() => {
        const t = this._hoverState;
        (this._hoverState = null, B.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this));
      }, this.tip, d);
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (B.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      (t.classList.remove("show"), ("ontouchstart" in document.documentElement) && [].concat(...document.body.children).forEach(t => B.off(t, "mouseover", f)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains("fade");
      (this._queueCallback(() => {
        this._isWithActiveTrigger() || ("show" !== this._hoverState && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), B.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null));
      }, this.tip, e), this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return (t.innerHTML = this._config.template, this.tip = t.children[0], this.tip);
    }
    setContent() {
      const t = this.getTipElement();
      (this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show"));
    }
    setElementContent(t, e) {
      if (null !== t) return c(e) ? (e = h(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Dt(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
    }
    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");
      return (t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      const s = this.constructor.DATA_KEY;
      return ((e = e || W.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), W.set(t.delegateTarget, s, e)), e);
    }
    _getOffset() {
      const {offset: t} = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: t => this._handlePopperPlacementChange(t)
        }],
        onFirstUpdate: t => {
          t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
        }
      };
      return {
        ...e,
        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
    }
    _getAttachment(t) {
      return xt[t.toUpperCase()];
    }
    _setListeners() {
      (this._config.trigger.split(" ").forEach(t => {
        if ("click" === t) B.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t)); else if ("manual" !== t) {
          const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, s = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          (B.on(this._element, e, this._config.selector, t => this._enter(t)), B.on(this._element, s, this._config.selector, t => this._leave(t)));
        }
      }), this._hideModalHandler = () => {
        this._element && this.hide();
      }, B.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
        ...this._config,
        trigger: "manual",
        selector: ""
      } : this._fixTitle());
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
        "show" === e._hoverState && e.show();
      }, e._config.delay.show) : e.show()));
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
        "out" === e._hoverState && e.hide();
      }, e._config.delay.hide) : e.hide()));
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = V.getDataAttributes(this._element);
      return (Object.keys(e).forEach(t => {
        Nt.has(t) && delete e[t];
      }), (t = {
        ...this.constructor.Default,
        ...e,
        ..."object" == typeof t && t ? t : {}
      }).container = !1 === t.container ? document.body : h(t.container), "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Dt(t.template, t.allowList, t.sanitizeFn)), t);
    }
    _getDelegateConfig() {
      const t = {};
      if (this._config) for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(), e = t.getAttribute("class").match(It);
      null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e));
    }
    _handlePopperPlacementChange(t) {
      const {state: e} = t;
      e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = jt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  y(jt);
  const Ht = new RegExp("(^|\\s)bs-popover\\S+", "g"), Rt = {
    ...jt.Default,
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }, Bt = {
    ...jt.DefaultType,
    content: "(string|element|function)"
  }, $t = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };
  class Wt extends jt {
    static get Default() {
      return Rt;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return $t;
    }
    static get DefaultType() {
      return Bt;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    getTipElement() {
      return (this.tip || (this.tip = super.getTipElement(), this.getTitle() || i.findOne(".popover-header", this.tip).remove(), this._getContent() || i.findOne(".popover-body", this.tip).remove()), this.tip);
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(i.findOne(".popover-header", t), this.getTitle());
      let e = this._getContent();
      ("function" == typeof e && (e = e.call(this._element)), this.setElementContent(i.findOne(".popover-body", t), e), t.classList.remove("fade", "show"));
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
    }
    _getContent() {
      return this._element.getAttribute("data-bs-content") || this._config.content;
    }
    _cleanTipClass() {
      const t = this.getTipElement(), e = t.getAttribute("class").match(Ht);
      null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Wt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  y(Wt);
  const qt = {
    offset: 10,
    method: "auto",
    target: ""
  }, zt = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };
  class Ft extends q {
    constructor(t, e) {
      (super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, B.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process());
    }
    static get Default() {
      return qt;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      const t = this._scrollElement === this._scrollElement.window ? "offset" : "position", e = "auto" === this._config.method ? t : this._config.method, s = "position" === e ? this._getScrollTop() : 0;
      (this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), i.find(this._selector).map(t => {
        const n = r(t), o = n ? i.findOne(n) : null;
        if (o) {
          const t = o.getBoundingClientRect();
          if (t.width || t.height) return [V[e](o).top + s, n];
        }
        return null;
      }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
        (this._offsets.push(t[0]), this._targets.push(t[1]));
      }));
    }
    dispose() {
      (B.off(this._scrollElement, ".bs.scrollspy"), super.dispose());
    }
    _getConfig(t) {
      if ("string" != typeof (t = {
        ...qt,
        ...V.getDataAttributes(this._element),
        ..."object" == typeof t && t ? t : {}
      }).target && c(t.target)) {
        let {id: e} = t.target;
        (e || (e = n("scrollspy"), t.target.id = e), t.target = "#" + e);
      }
      return (d("scrollspy", t, zt), t);
    }
    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), s = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= s)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null, void this._clear());
        for (let e = this._offsets.length; e--; ) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t, this._clear());
      const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`), s = i.findOne(e.join(","));
      (s.classList.contains("dropdown-item") ? (i.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"), s.classList.add("active")) : (s.classList.add("active"), i.parents(s, ".nav, .list-group").forEach(t => {
        (i.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), i.prev(t, ".nav-item").forEach(t => {
          i.children(t, ".nav-link").forEach(t => t.classList.add("active"));
        }));
      })), B.trigger(this._scrollElement, "activate.bs.scrollspy", {
        relatedTarget: t
      }));
    }
    _clear() {
      i.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ft.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  (B.on(window, "load.bs.scrollspy.data-api", () => {
    i.find('[data-bs-spy="scroll"]').forEach(t => new Ft(t));
  }), y(Ft));
  class Ut extends q {
    static get NAME() {
      return "tab";
    }
    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
      let t;
      const e = a(this._element), s = this._element.closest(".nav, .list-group");
      if (s) {
        const e = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";
        (t = i.find(e, s), t = t[t.length - 1]);
      }
      const n = t ? B.trigger(t, "hide.bs.tab", {
        relatedTarget: this._element
      }) : null;
      if (B.trigger(this._element, "show.bs.tab", {
        relatedTarget: t
      }).defaultPrevented || null !== n && n.defaultPrevented) return;
      this._activate(this._element, s);
      const o = () => {
        (B.trigger(t, "hidden.bs.tab", {
          relatedTarget: this._element
        }), B.trigger(this._element, "shown.bs.tab", {
          relatedTarget: t
        }));
      };
      e ? this._activate(e, e.parentNode, o) : o();
    }
    _activate(t, e, s) {
      const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.children(e, ".active") : i.find(":scope > li > .active", e))[0], o = s && n && n.classList.contains("fade"), r = () => this._transitionComplete(t, n, s);
      n && o ? (n.classList.remove("show"), this._queueCallback(r, t, !0)) : r();
    }
    _transitionComplete(t, e, s) {
      if (e) {
        e.classList.remove("active");
        const t = i.findOne(":scope > .dropdown-menu .active", e.parentNode);
        (t && t.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1));
      }
      (t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m(t), t.classList.contains("fade") && t.classList.add("show"));
      let n = t.parentNode;
      if ((n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu"))) {
        const e = t.closest(".dropdown");
        (e && i.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")), t.setAttribute("aria-expanded", !0));
      }
      s && s();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ut.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  (B.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    (["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this) || Ut.getOrCreateInstance(this).show());
  }), y(Ut));
  const Kt = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  }, Vt = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };
  class Qt extends q {
    constructor(t, e) {
      (super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners());
    }
    static get DefaultType() {
      return Kt;
    }
    static get Default() {
      return Vt;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      B.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), m(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
        (this._element.classList.remove("showing"), this._element.classList.add("show"), B.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide());
      }, this._element, this._config.animation));
    }
    hide() {
      this._element.classList.contains("show") && (B.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
        (this._element.classList.add("hide"), B.trigger(this._element, "hidden.bs.toast"));
      }, this._element, this._config.animation)));
    }
    dispose() {
      (this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose());
    }
    _getConfig(t) {
      return (t = {
        ...Vt,
        ...V.getDataAttributes(this._element),
        ..."object" == typeof t && t ? t : {}
      }, d("toast", t, this.constructor.DefaultType), t);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const s = t.relatedTarget;
      this._element === s || this._element.contains(s) || this._maybeScheduleHide();
    }
    _setListeners() {
      (B.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), B.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), B.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), B.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), B.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1)));
    }
    _clearTimeout() {
      (clearTimeout(this._timeout), this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Qt.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (y(Qt), {
    Alert: z,
    Button: F,
    Carousel: et,
    Collapse: nt,
    Dropdown: pt,
    Modal: wt,
    Offcanvas: Tt,
    Popover: Wt,
    ScrollSpy: Ft,
    Tab: Ut,
    Toast: Qt,
    Tooltip: jt
  });
});

},{"@popperjs/core":"3b7Fs"}],"3b7Fs":[function(require,module,exports) {
/**
* @popperjs/core v2.9.2 - MIT License
*/
"use strict";
Object.defineProperty(exports, '__esModule', {
  value: true
});
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return (/auto|scroll|overlay|hidden/).test(overflow + overflowY + overflowX);
}
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || (// DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }
  return element.offsetParent;
}
// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;
  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);
    if (elementCss.position === 'fixed') {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
// modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead';
// pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain';
// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  });
  // On visiting object, check for its dependencies and visit them recursively
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers);
  // order based on phase
  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }
          break;
        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }
        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }
          break;
        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }
          break;
        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }
          break;
        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }
          break;
        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }
          break;
        case 'options':
        case 'data':
          break;
        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }
      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {});
  // IE11 does not support Object.values
  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent
    if (!(/^((?!chrome|android).)*safari/i).test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  // First, attempt with faster native method
  if (parent.contains(child)) {
    return true;
      // then fallback to custom implementation with Shadow DOM support
} else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      // $FlowFixMe[prop-missing]: need a better way to handle this...
      next = next.parentNode || next.host;
    } while (next);
  }
  // Give up, the result is false
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
}
// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getVariation(placement) {
  return placement.split('-')[1];
}
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
function computeOffsets(_ref) {
  var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  // Offsets can be applied only to the popper element
  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        };
        // Orders the modifiers based on their dependencies and `phase`
        // properties
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
        // Strip out disabled modifiers
        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason
        if ("development" !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }
          var _getComputedStyle = getComputedStyle(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
        // Don't proceed if `reference` or `popper` are not valid elements
        // anymore
        if (!areValidElements(reference, popper)) {
          if ("development" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        // Store the reference and popper rects to be read by modifiers
        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        };
        // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect
        state.reset = false;
        state.placement = state.options.placement;
        // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`
        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("development" !== "production") {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      if ("development" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    });
    // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.
    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });
          var noopFn = function noopFn() {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }
  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
}
// eslint-disable-next-line import/no-unused-modules
var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
}
// eslint-disable-next-line import/no-unused-modules
var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
};
// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    }
    // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
    offsetParent = offsetParent;
    if (placement === top) {
      sideY = bottom;
      // $FlowFixMe[prop-missing]
      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left) {
      sideX = right;
      // $FlowFixMe[prop-missing]
      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if ("development" !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';
    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
}
// eslint-disable-next-line import/no-unused-modules
var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || ({});
    var attributes = state.attributes[name] || ({});
    var element = state.elements[name];
    // arrow is optional + virtual elements
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];
      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || ({});
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      // Set all values to an empty string to unset them
      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {});
      // arrow is optional + virtual elements
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
// eslint-disable-next-line import/no-unused-modules
var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};
function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
// eslint-disable-next-line import/no-unused-modules
var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
    if ("development" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  }
  // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];
  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);
        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
// eslint-disable-next-line import/no-unused-modules
var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets) {
    return;
  }
  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;
      var _altSide = mainAxis === 'x' ? bottom : right;
      var _offset = popperOffsets[altAxis];
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }
  state.modifiersData[name] = data;
}
// eslint-disable-next-line import/no-unused-modules
var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';
  if (!arrowElement || !popperOffsets) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds
  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max);
  // Prevents breaking syntax highlighting...
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
  if (arrowElement == null) {
    return;
  }
  // CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if ("development" !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if ("development" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
// eslint-disable-next-line import/no-unused-modules
var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
}
// eslint-disable-next-line import/no-unused-modules
var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers$1
});
// eslint-disable-next-line import/no-unused-modules
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
});
// eslint-disable-next-line import/no-unused-modules
exports.applyStyles = applyStyles$1;
exports.arrow = arrow$1;
exports.computeStyles = computeStyles$1;
exports.createPopper = createPopper;
exports.createPopperLite = createPopper$1;
exports.defaultModifiers = defaultModifiers;
exports.detectOverflow = detectOverflow;
exports.eventListeners = eventListeners;
exports.flip = flip$1;
exports.hide = hide$1;
exports.offset = offset$1;
exports.popperGenerator = popperGenerator;
exports.popperOffsets = popperOffsets$1;
exports.preventOverflow = preventOverflow$1;

},{}]},["1DzRJ","7oR4J"], "7oR4J", "parcelRequire3297")

//# sourceMappingURL=index.6483b687.js.map
