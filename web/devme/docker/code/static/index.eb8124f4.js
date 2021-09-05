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
})({"FOiCN":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "2ef8f131ee9710f67a2b76a8eb8124f4";
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

},{}],"NgFab":[function(require,module,exports) {
/**
* @popperjs/core v2.9.2 - MIT License
*/
"use strict";
var define;
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {});
})(this, function (e) {
  function t(e) {
    return {
      width: (e = e.getBoundingClientRect()).width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }
  function n(e) {
    return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e;
  }
  function o(e) {
    return {
      scrollLeft: (e = n(e)).pageXOffset,
      scrollTop: e.pageYOffset
    };
  }
  function r(e) {
    return e instanceof n(e).Element || e instanceof Element;
  }
  function i(e) {
    return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
  }
  function a(e) {
    return "undefined" != typeof ShadowRoot && (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot);
  }
  function s(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function f(e) {
    return ((r(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function p(e) {
    return t(f(e)).left + o(e).scrollLeft;
  }
  function c(e) {
    return n(e).getComputedStyle(e);
  }
  function l(e) {
    return (e = c(e), (/auto|scroll|overlay|hidden/).test(e.overflow + e.overflowY + e.overflowX));
  }
  function u(e, r, a) {
    void 0 === a && (a = !1);
    var c = f(r);
    e = t(e);
    var u = i(r), d = {
      scrollLeft: 0,
      scrollTop: 0
    }, m = {
      x: 0,
      y: 0
    };
    return ((u || !u && !a) && (("body" !== s(r) || l(c)) && (d = r !== n(r) && i(r) ? {
      scrollLeft: r.scrollLeft,
      scrollTop: r.scrollTop
    } : o(r)), i(r) ? ((m = t(r)).x += r.clientLeft, m.y += r.clientTop) : c && (m.x = p(c))), {
      x: e.left + d.scrollLeft - m.x,
      y: e.top + d.scrollTop - m.y,
      width: e.width,
      height: e.height
    });
  }
  function d(e) {
    var n = t(e), o = e.offsetWidth, r = e.offsetHeight;
    return (1 >= Math.abs(n.width - o) && (o = n.width), 1 >= Math.abs(n.height - r) && (r = n.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: o,
      height: r
    });
  }
  function m(e) {
    return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e);
  }
  function h(e) {
    return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : i(e) && l(e) ? e : h(m(e));
  }
  function v(e, t) {
    var o;
    void 0 === t && (t = []);
    var r = h(e);
    return (e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = n(r), r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(v(m(r))));
  }
  function g(e) {
    return i(e) && "fixed" !== c(e).position ? e.offsetParent : null;
  }
  function y(e) {
    for (var t = n(e), o = g(e); o && 0 <= ["table", "td", "th"].indexOf(s(o)) && "static" === c(o).position; ) o = g(o);
    if (o && ("html" === s(o) || "body" === s(o) && "static" === c(o).position)) return t;
    if (!o) e: {
      if ((o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !i(e) || "fixed" !== c(e).position)) for (e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e)); ) {
        var r = c(e);
        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || o && "filter" === r.willChange || o && r.filter && "none" !== r.filter) {
          o = e;
          break e;
        }
        e = e.parentNode;
      }
      o = null;
    }
    return o || t;
  }
  function b(e) {
    function t(e) {
      (o.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
        o.has(e) || (e = n.get(e)) && t(e);
      }), r.push(e));
    }
    var n = new Map(), o = new Set(), r = [];
    return (e.forEach(function (e) {
      n.set(e.name, e);
    }), e.forEach(function (e) {
      o.has(e.name) || t(e);
    }), r);
  }
  function w(e) {
    var t;
    return function () {
      return (t || (t = new Promise(function (n) {
        Promise.resolve().then(function () {
          (t = void 0, n(e()));
        });
      })), t);
    };
  }
  function x(e) {
    return e.split("-")[0];
  }
  function O(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && a(n)) do {
      if (t && e.isSameNode(t)) return !0;
      t = t.parentNode || t.host;
    } while (t);
    return !1;
  }
  function j(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function E(e, r) {
    if ("viewport" === r) {
      r = n(e);
      var a = f(e);
      r = r.visualViewport;
      var s = a.clientWidth;
      a = a.clientHeight;
      var l = 0, u = 0;
      (r && (s = r.width, a = r.height, (/^((?!chrome|android).)*safari/i).test(navigator.userAgent) || (l = r.offsetLeft, u = r.offsetTop)), e = j(e = {
        width: s,
        height: a,
        x: l + p(e),
        y: u
      }));
    } else i(r) ? ((e = t(r)).top += r.clientTop, e.left += r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top) : (u = f(e), e = f(u), s = o(u), r = null == (a = u.ownerDocument) ? void 0 : a.body, a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), u = -s.scrollLeft + p(u), s = -s.scrollTop, "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), e = j({
      width: a,
      height: l,
      x: u,
      y: s
    }));
    return e;
  }
  function D(e, t, n) {
    return (t = "clippingParents" === t ? (function (e) {
      var t = v(m(e)), n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e) ? y(e) : e;
      return r(n) ? t.filter(function (e) {
        return r(e) && O(e, n) && "body" !== s(e);
      }) : [];
    })(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce(function (t, n) {
      return (n = E(e, n), t.top = _(n.top, t.top), t.right = U(n.right, t.right), t.bottom = U(n.bottom, t.bottom), t.left = _(n.left, t.left), t);
    }, E(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n);
  }
  function L(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
  }
  function P(e) {
    var t = e.reference, n = e.element, o = (e = e.placement) ? x(e) : null;
    e = e ? e.split("-")[1] : null;
    var r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2;
    switch (o) {
      case "top":
        r = {
          x: r,
          y: t.y - n.height
        };
        break;
      case "bottom":
        r = {
          x: r,
          y: t.y + t.height
        };
        break;
      case "right":
        r = {
          x: t.x + t.width,
          y: i
        };
        break;
      case "left":
        r = {
          x: t.x - n.width,
          y: i
        };
        break;
      default:
        r = {
          x: t.x,
          y: t.y
        };
    }
    if (null != (o = o ? L(o) : null)) switch ((i = "y" === o ? "height" : "width", e)) {
      case "start":
        r[o] -= t[i] / 2 - n[i] / 2;
        break;
      case "end":
        r[o] += t[i] / 2 - n[i] / 2;
    }
    return r;
  }
  function M(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e);
  }
  function k(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e, t);
    }, {});
  }
  function A(e, n) {
    void 0 === n && (n = {});
    var o = n;
    n = void 0 === (n = o.placement) ? e.placement : n;
    var i = o.boundary, a = void 0 === i ? "clippingParents" : i, s = void 0 === (i = o.rootBoundary) ? "viewport" : i;
    i = void 0 === (i = o.elementContext) ? "popper" : i;
    var p = o.altBoundary, c = void 0 !== p && p;
    o = M("number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C));
    var l = e.elements.reference;
    (p = e.rects.popper, a = D(r(c = e.elements[c ? "popper" === i ? "reference" : "popper" : i]) ? c : c.contextElement || f(e.elements.popper), a, s), c = P({
      reference: s = t(l),
      element: p,
      strategy: "absolute",
      placement: n
    }), p = j(Object.assign({}, p, c)), s = "popper" === i ? p : s);
    var u = {
      top: a.top - s.top + o.top,
      bottom: s.bottom - a.bottom + o.bottom,
      left: a.left - s.left + o.left,
      right: s.right - a.right + o.right
    };
    if ((e = e.modifiersData.offset, "popper" === i && e)) {
      var d = e[n];
      Object.keys(u).forEach(function (e) {
        var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1, n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
        u[e] += d[n] * t;
      });
    }
    return u;
  }
  function W() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function B(e) {
    void 0 === e && (e = {});
    var t = e.defaultModifiers, n = void 0 === t ? [] : t, o = void 0 === (e = e.defaultOptions) ? F : e;
    return function (e, t, i) {
      function a() {
        (f.forEach(function (e) {
          return e();
        }), f = []);
      }
      void 0 === i && (i = o);
      var s = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, F, o),
        modifiersData: {},
        elements: {
          reference: e,
          popper: t
        },
        attributes: {},
        styles: {}
      }, f = [], p = !1, c = {
        state: s,
        setOptions: function (i) {
          return (a(), s.options = Object.assign({}, o, s.options, i), s.scrollParents = {
            reference: r(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
            popper: v(t)
          }, i = (function (e) {
            var t = b(e);
            return I.reduce(function (e, n) {
              return e.concat(t.filter(function (e) {
                return e.phase === n;
              }));
            }, []);
          })((function (e) {
            var t = e.reduce(function (e, t) {
              var n = e[t.name];
              return (e[t.name] = n ? Object.assign({}, n, t, {
                options: Object.assign({}, n.options, t.options),
                data: Object.assign({}, n.data, t.data)
              }) : t, e);
            }, {});
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          })([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter(function (e) {
            return e.enabled;
          }), s.orderedModifiers.forEach(function (e) {
            var t = e.name, n = e.options;
            (n = void 0 === n ? {} : n, "function" == typeof (e = e.effect) && (t = e({
              state: s,
              name: t,
              instance: c,
              options: n
            }), f.push(t || (function () {}))));
          }), c.update());
        },
        forceUpdate: function () {
          if (!p) {
            var e = s.elements, t = e.reference;
            if (W(t, e = e.popper)) for ((s.rects = {
              reference: u(t, y(e), "fixed" === s.options.strategy),
              popper: d(e)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function (e) {
              return s.modifiersData[e.name] = Object.assign({}, e.data);
            }), t = 0); t < s.orderedModifiers.length; t++) if (!0 === s.reset) (s.reset = !1, t = -1); else {
              var n = s.orderedModifiers[t];
              e = n.fn;
              var o = n.options;
              (o = void 0 === o ? {} : o, n = n.name, "function" == typeof e && (s = e({
                state: s,
                options: o,
                name: n,
                instance: c
              }) || s));
            }
          }
        },
        update: w(function () {
          return new Promise(function (e) {
            (c.forceUpdate(), e(s));
          });
        }),
        destroy: function () {
          (a(), p = !0);
        }
      };
      return W(e, t) ? (c.setOptions(i).then(function (e) {
        !p && i.onFirstUpdate && i.onFirstUpdate(e);
      }), c) : c;
    };
  }
  function T(e) {
    var t, o = e.popper, r = e.popperRect, i = e.placement, a = e.offsets, s = e.position, p = e.gpuAcceleration, l = e.adaptive;
    if (!0 === (e = e.roundOffsets)) {
      e = a.y;
      var u = window.devicePixelRatio || 1;
      e = {
        x: z(z(a.x * u) / u) || 0,
        y: z(z(e * u) / u) || 0
      };
    } else e = "function" == typeof e ? e(a) : a;
    (e = void 0 === (e = (u = e).x) ? 0 : e, u = void 0 === (u = u.y) ? 0 : u);
    var d = a.hasOwnProperty("x");
    a = a.hasOwnProperty("y");
    var m, h = "left", v = "top", g = window;
    if (l) {
      var b = y(o), w = "clientHeight", x = "clientWidth";
      (b === n(o) && ("static" !== c(b = f(o)).position && (w = "scrollHeight", x = "scrollWidth")), "top" === i && (v = "bottom", u -= b[w] - r.height, u *= p ? 1 : -1), "left" === i && (h = "right", e -= b[x] - r.width, e *= p ? 1 : -1));
    }
    return (o = Object.assign({
      position: s
    }, l && J), p ? Object.assign({}, o, ((m = {})[v] = a ? "0" : "", m[h] = d ? "0" : "", m.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)", m)) : Object.assign({}, o, ((t = {})[v] = a ? u + "px" : "", t[h] = d ? e + "px" : "", t.transform = "", t)));
  }
  function H(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return $[e];
    });
  }
  function R(e) {
    return e.replace(/start|end/g, function (e) {
      return ee[e];
    });
  }
  function S(e, t, n) {
    return (void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    });
  }
  function q(e) {
    return ["top", "right", "bottom", "left"].some(function (t) {
      return 0 <= e[t];
    });
  }
  var C = ["top", "bottom", "right", "left"], N = C.reduce(function (e, t) {
    return e.concat([t + "-start", t + "-end"]);
  }, []), V = [].concat(C, ["auto"]).reduce(function (e, t) {
    return e.concat([t, t + "-start", t + "-end"]);
  }, []), I = ("beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite").split(" "), _ = Math.max, U = Math.min, z = Math.round, F = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  }, X = {
    passive: !0
  }, Y = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var t = e.state, o = e.instance, r = (e = e.options).scroll, i = void 0 === r || r, a = void 0 === (e = e.resize) || e, s = n(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return (i && f.forEach(function (e) {
        e.addEventListener("scroll", o.update, X);
      }), a && s.addEventListener("resize", o.update, X), function () {
        (i && f.forEach(function (e) {
          e.removeEventListener("scroll", o.update, X);
        }), a && s.removeEventListener("resize", o.update, X));
      });
    },
    data: {}
  }, G = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (e) {
      var t = e.state;
      t.modifiersData[e.name] = P({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      });
    },
    data: {}
  }, J = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  }, K = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
      var t = e.state, n = e.options;
      e = void 0 === (e = n.gpuAcceleration) || e;
      var o = n.adaptive;
      (o = void 0 === o || o, n = void 0 === (n = n.roundOffsets) || n, e = {
        placement: x(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: e
      }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: o,
        roundOffsets: n
      })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: n
      })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
      }));
    },
    data: {}
  }, Q = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || ({}), o = t.attributes[e] || ({}), r = t.elements[e];
        i(r) && s(r) && (Object.assign(r.style, n), Object.keys(o).forEach(function (e) {
          var t = o[e];
          !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t);
        }));
      });
    },
    effect: function (e) {
      var t = e.state, n = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return (Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
        Object.keys(t.elements).forEach(function (e) {
          var o = t.elements[e], r = t.attributes[e] || ({});
          (e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
            return (e[t] = "", e);
          }, {}), i(o) && s(o) && (Object.assign(o.style, e), Object.keys(r).forEach(function (e) {
            o.removeAttribute(e);
          })));
        });
      });
    },
    requires: ["computeStyles"]
  }, Z = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var t = e.state, n = e.name, o = void 0 === (e = e.options.offset) ? [0, 0] : e, r = (e = V.reduce(function (e, n) {
        var r = t.rects, i = x(n), a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1, s = "function" == typeof o ? o(Object.assign({}, r, {
          placement: n
        })) : o;
        return (r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? {
          x: s,
          y: r
        } : {
          x: r,
          y: s
        }, e[n] = i, e);
      }, {}))[t.placement], i = r.x;
      (r = r.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += r), t.modifiersData[n] = e);
    }
  }, $ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, ee = {
    start: "end",
    end: "start"
  }, te = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state, n = e.options;
      if ((e = e.name, !t.modifiersData[e]._skip)) {
        var o = n.mainAxis;
        o = void 0 === o || o;
        var r = n.altAxis;
        r = void 0 === r || r;
        var i = n.fallbackPlacements, a = n.padding, s = n.boundary, f = n.rootBoundary, p = n.altBoundary, c = n.flipVariations, l = void 0 === c || c, u = n.allowedAutoPlacements;
        (c = x(n = t.options.placement), i = i || (c !== n && l ? (function (e) {
          if ("auto" === x(e)) return [];
          var t = H(e);
          return [R(e), t, R(t)];
        })(n) : [H(n)]));
        var d = [n].concat(i).reduce(function (e, n) {
          return e.concat("auto" === x(n) ? (function (e, t) {
            void 0 === t && (t = {});
            var n = t.boundary, o = t.rootBoundary, r = t.padding, i = t.flipVariations, a = t.allowedAutoPlacements, s = void 0 === a ? V : a, f = t.placement.split("-")[1];
            0 === (i = (t = f ? i ? N : N.filter(function (e) {
              return e.split("-")[1] === f;
            }) : C).filter(function (e) {
              return 0 <= s.indexOf(e);
            })).length && (i = t);
            var p = i.reduce(function (t, i) {
              return (t[i] = A(e, {
                placement: i,
                boundary: n,
                rootBoundary: o,
                padding: r
              })[x(i)], t);
            }, {});
            return Object.keys(p).sort(function (e, t) {
              return p[e] - p[t];
            });
          })(t, {
            placement: n,
            boundary: s,
            rootBoundary: f,
            padding: a,
            flipVariations: l,
            allowedAutoPlacements: u
          }) : n);
        }, []);
        (n = t.rects.reference, i = t.rects.popper);
        var m = new Map();
        c = !0;
        for (var h = d[0], v = 0; v < d.length; v++) {
          var g = d[v], y = x(g), b = "start" === g.split("-")[1], w = 0 <= ["top", "bottom"].indexOf(y), O = w ? "width" : "height", j = A(t, {
            placement: g,
            boundary: s,
            rootBoundary: f,
            altBoundary: p,
            padding: a
          });
          if ((b = w ? b ? "right" : "left" : b ? "bottom" : "top", n[O] > i[O] && (b = H(b)), O = H(b), w = [], o && w.push(0 >= j[y]), r && w.push(0 >= j[b], 0 >= j[O]), w.every(function (e) {
            return e;
          }))) {
            (h = g, c = !1);
            break;
          }
          m.set(g, w);
        }
        if (c) for ((o = function (e) {
          var t = d.find(function (t) {
            if (t = m.get(t)) return t.slice(0, e).every(function (e) {
              return e;
            });
          });
          if (t) return (h = t, "break");
        }, r = l ? 3 : 1); 0 < r && "break" !== o(r); r--) ;
        t.placement !== h && (t.modifiersData[e]._skip = !0, t.placement = h, t.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  }, ne = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state, n = e.options;
      e = e.name;
      var o = n.mainAxis, r = void 0 === o || o, i = void 0 !== (o = n.altAxis) && o;
      o = void 0 === (o = n.tether) || o;
      var a = n.tetherOffset, s = void 0 === a ? 0 : a, f = A(t, {
        boundary: n.boundary,
        rootBoundary: n.rootBoundary,
        padding: n.padding,
        altBoundary: n.altBoundary
      });
      n = x(t.placement);
      var p = t.placement.split("-")[1], c = !p, l = L(n);
      (n = "x" === l ? "y" : "x", a = t.modifiersData.popperOffsets);
      var u = t.rects.reference, m = t.rects.popper, h = "function" == typeof s ? s(Object.assign({}, t.rects, {
        placement: t.placement
      })) : s;
      if ((s = {
        x: 0,
        y: 0
      }, a)) {
        if (r || i) {
          var v = "y" === l ? "top" : "left", g = "y" === l ? "bottom" : "right", b = "y" === l ? "height" : "width", w = a[l], O = a[l] + f[v], j = a[l] - f[g], E = o ? -m[b] / 2 : 0, D = "start" === p ? u[b] : m[b];
          (p = "start" === p ? -m[b] : -u[b], m = t.elements.arrow, m = o && m ? d(m) : {
            width: 0,
            height: 0
          });
          var P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
          (v = P[v], g = P[g], m = _(0, U(u[b], m[b])), D = c ? u[b] / 2 - E - m - v - h : D - m - v - h, u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h, c = t.elements.arrow && y(t.elements.arrow), h = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0, c = a[l] + D - h - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0), u = a[l] + u - h, r && (r = o ? U(O, c) : O, j = o ? _(j, u) : j, r = _(r, U(w, j)), a[l] = r, s[l] = r - w), i && (r = (i = a[n]) + f["x" === l ? "top" : "left"], f = i - f["x" === l ? "bottom" : "right"], r = o ? U(r, c) : r, o = o ? _(f, u) : f, o = _(r, U(i, o)), a[n] = o, s[n] = o - i));
        }
        t.modifiersData[e] = s;
      }
    },
    requiresIfExists: ["offset"]
  }, oe = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = x(n.placement);
      if ((e = L(s), s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width", i && a)) {
        r = M("number" != typeof (r = "function" == typeof (r = r.padding) ? r(Object.assign({}, n.rects, {
          placement: n.placement
        })) : r) ? r : k(r, C));
        var f = d(i), p = "y" === e ? "top" : "left", c = "y" === e ? "bottom" : "right", l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s];
        (a = a[e] - n.rects.reference[e], a = (i = (i = y(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = _(r[p], U(a, i - f[s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = s - a, t));
      }
    },
    effect: function (e) {
      var t = e.state;
      if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) {
        if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return;
        O(t.elements.popper, e) && (t.elements.arrow = e);
      }
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  }, re = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (e) {
      var t = e.state;
      e = e.name;
      var n = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = A(t, {
        elementContext: "reference"
      }), a = A(t, {
        altBoundary: !0
      });
      (n = S(i, n), o = S(a, o, r), r = q(n), a = q(o), t.modifiersData[e] = {
        referenceClippingOffsets: n,
        popperEscapeOffsets: o,
        isReferenceHidden: r,
        hasPopperEscaped: a
      }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": r,
        "data-popper-escaped": a
      }));
    }
  }, ie = B({
    defaultModifiers: [Y, G, K, Q]
  }), ae = [Y, G, K, Q, Z, te, ne, oe, re], se = B({
    defaultModifiers: ae
  });
  (e.applyStyles = Q, e.arrow = oe, e.computeStyles = K, e.createPopper = se, e.createPopperLite = ie, e.defaultModifiers = ae, e.detectOverflow = A, e.eventListeners = Y, e.flip = te, e.hide = re, e.offset = Z, e.popperGenerator = B, e.popperOffsets = G, e.preventOverflow = ne, Object.defineProperty(e, "__esModule", {
    value: !0
  }));
});

},{}]},["FOiCN","NgFab"], "NgFab", "parcelRequire3297")

//# sourceMappingURL=index.eb8124f4.js.map
