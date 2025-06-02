function Vc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Qc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xa = { exports: {} },
  pl = {},
  wa = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = Symbol.for("react.element"),
  Kc = Symbol.for("react.portal"),
  Gc = Symbol.for("react.fragment"),
  Yc = Symbol.for("react.strict_mode"),
  Xc = Symbol.for("react.profiler"),
  Zc = Symbol.for("react.provider"),
  Jc = Symbol.for("react.context"),
  qc = Symbol.for("react.forward_ref"),
  bc = Symbol.for("react.suspense"),
  ed = Symbol.for("react.memo"),
  td = Symbol.for("react.lazy"),
  ns = Symbol.iterator;
function nd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ns && e[ns]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ka = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sa = Object.assign,
  ja = {};
function pn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ja),
    (this.updater = n || ka);
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Na() {}
Na.prototype = pn.prototype;
function no(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ja),
    (this.updater = n || ka);
}
var ro = (no.prototype = new Na());
ro.constructor = no;
Sa(ro, pn.prototype);
ro.isPureReactComponent = !0;
var rs = Array.isArray,
  Ea = Object.prototype.hasOwnProperty,
  lo = { current: null },
  Ca = { key: !0, ref: !0, __self: !0, __source: !0 };
function _a(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ea.call(t, r) && !Ca.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: lr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: lo.current,
  };
}
function rd(e, t) {
  return {
    $$typeof: lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function io(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function ld(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ls = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ld("" + e.key)
    : t.toString(36);
}
function Tr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case lr:
          case Kc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Il(o, 0) : r),
      rs(l)
        ? ((n = ""),
          e != null && (n = e.replace(ls, "$&/") + "/"),
          Tr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (io(l) &&
            (l = rd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ls, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), rs(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Il(i, s);
      o += Tr(i, t, n, a, l);
    }
  else if (((a = nd(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Il(i, s++)), (o += Tr(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function pr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function id(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Rr = { transition: null },
  od = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Rr,
    ReactCurrentOwner: lo,
  };
function Pa() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: pr,
  forEach: function (e, t, n) {
    pr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!io(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
z.Component = pn;
z.Fragment = Gc;
z.Profiler = Xc;
z.PureComponent = no;
z.StrictMode = Yc;
z.Suspense = bc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = od;
z.act = Pa;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Sa({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = lo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Ea.call(t, a) &&
        !Ca.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = _a;
z.createFactory = function (e) {
  var t = _a.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: qc, render: e };
};
z.isValidElement = io;
z.lazy = function (e) {
  return { $$typeof: td, _payload: { _status: -1, _result: e }, _init: id };
};
z.memo = function (e, t) {
  return { $$typeof: ed, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
z.unstable_act = Pa;
z.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ue.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
z.useId = function () {
  return ue.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ue.current.useRef(e);
};
z.useState = function (e) {
  return ue.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ue.current.useTransition();
};
z.version = "18.3.1";
wa.exports = z;
var S = wa.exports;
const sd = Qc(S),
  ad = Vc({ __proto__: null, default: sd }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud = S,
  cd = Symbol.for("react.element"),
  dd = Symbol.for("react.fragment"),
  fd = Object.prototype.hasOwnProperty,
  pd = ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hd = { key: !0, ref: !0, __self: !0, __source: !0 };
function La(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) fd.call(t, r) && !hd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: cd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: pd.current,
  };
}
pl.Fragment = dd;
pl.jsx = La;
pl.jsxs = La;
xa.exports = pl;
var u = xa.exports,
  Ta = { exports: {} },
  ke = {},
  Ra = { exports: {} },
  za = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, T) {
    var R = E.length;
    E.push(T);
    e: for (; 0 < R; ) {
      var Q = (R - 1) >>> 1,
        J = E[Q];
      if (0 < l(J, T)) (E[Q] = T), (E[R] = J), (R = Q);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var T = E[0],
      R = E.pop();
    if (R !== T) {
      E[0] = R;
      e: for (var Q = 0, J = E.length, dr = J >>> 1; Q < dr; ) {
        var kt = 2 * (Q + 1) - 1,
          zl = E[kt],
          St = kt + 1,
          fr = E[St];
        if (0 > l(zl, R))
          St < J && 0 > l(fr, zl)
            ? ((E[Q] = fr), (E[St] = R), (Q = St))
            : ((E[Q] = zl), (E[kt] = R), (Q = kt));
        else if (St < J && 0 > l(fr, R)) (E[Q] = fr), (E[St] = R), (Q = St);
        else break e;
      }
    }
    return T;
  }
  function l(E, T) {
    var R = E.sortIndex - T.sortIndex;
    return R !== 0 ? R : E.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    c = [],
    g = 1,
    h = null,
    m = 3,
    y = !1,
    x = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= E)
        r(c), (T.sortIndex = T.expirationTime), t(a, T);
      else break;
      T = n(c);
    }
  }
  function v(E) {
    if (((w = !1), p(E), !x))
      if (n(a) !== null) (x = !0), Tl(j);
      else {
        var T = n(c);
        T !== null && Rl(v, T.startTime - E);
      }
  }
  function j(E, T) {
    (x = !1), w && ((w = !1), f(L), (L = -1)), (y = !0);
    var R = m;
    try {
      for (
        p(T), h = n(a);
        h !== null && (!(h.expirationTime > T) || (E && !Le()));

      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var J = Q(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof J == "function" ? (h.callback = J) : h === n(a) && r(a),
            p(T);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var dr = !0;
      else {
        var kt = n(c);
        kt !== null && Rl(v, kt.startTime - T), (dr = !1);
      }
      return dr;
    } finally {
      (h = null), (m = R), (y = !1);
    }
  }
  var _ = !1,
    P = null,
    L = -1,
    V = 5,
    I = -1;
  function Le() {
    return !(e.unstable_now() - I < V);
  }
  function gn() {
    if (P !== null) {
      var E = e.unstable_now();
      I = E;
      var T = !0;
      try {
        T = P(!0, E);
      } finally {
        T ? vn() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var vn;
  if (typeof d == "function")
    vn = function () {
      d(gn);
    };
  else if (typeof MessageChannel < "u") {
    var ts = new MessageChannel(),
      Hc = ts.port2;
    (ts.port1.onmessage = gn),
      (vn = function () {
        Hc.postMessage(null);
      });
  } else
    vn = function () {
      C(gn, 0);
    };
  function Tl(E) {
    (P = E), _ || ((_ = !0), vn());
  }
  function Rl(E, T) {
    L = C(function () {
      E(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || y || ((x = !0), Tl(j));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var R = m;
      m = T;
      try {
        return E();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, T) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var R = m;
      m = E;
      try {
        return T();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (E, T, R) {
      var Q = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Q + R : Q))
          : (R = Q),
        E)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = R + J),
        (E = {
          id: g++,
          callback: T,
          priorityLevel: E,
          startTime: R,
          expirationTime: J,
          sortIndex: -1,
        }),
        R > Q
          ? ((E.sortIndex = R),
            t(c, E),
            n(a) === null &&
              E === n(c) &&
              (w ? (f(L), (L = -1)) : (w = !0), Rl(v, R - Q)))
          : ((E.sortIndex = J), t(a, E), x || y || ((x = !0), Tl(j))),
        E
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (E) {
      var T = m;
      return function () {
        var R = m;
        m = T;
        try {
          return E.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    });
})(za);
Ra.exports = za;
var md = Ra.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd = S,
  we = md;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ia = new Set(),
  Un = {};
function Dt(e, t) {
  on(e, t), on(e + "Capture", t);
}
function on(e, t) {
  for (Un[e] = t, e = 0; e < t.length; e++) Ia.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  si = Object.prototype.hasOwnProperty,
  vd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  is = {},
  os = {};
function yd(e) {
  return si.call(os, e)
    ? !0
    : si.call(is, e)
      ? !1
      : vd.test(e)
        ? (os[e] = !0)
        : ((is[e] = !0), !1);
}
function xd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function wd(e, t, n, r) {
  if (t === null || typeof t > "u" || xd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oo = /[\-:]([a-z])/g;
function so(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(oo, so);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(oo, so);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(oo, so);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ao(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (wd(t, n, l, r) && (n = null),
    r || l === null
      ? yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hr = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  Bt = Symbol.for("react.fragment"),
  uo = Symbol.for("react.strict_mode"),
  ai = Symbol.for("react.profiler"),
  Oa = Symbol.for("react.provider"),
  Da = Symbol.for("react.context"),
  co = Symbol.for("react.forward_ref"),
  ui = Symbol.for("react.suspense"),
  ci = Symbol.for("react.suspense_list"),
  fo = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  Ma = Symbol.for("react.offscreen"),
  ss = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ss && e[ss]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Ol;
function Cn(e) {
  if (Ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ol = (t && t[1]) || "";
    }
  return (
    `
` +
    Ol +
    e
  );
}
var Dl = !1;
function Ml(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function kd(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ml(e.type, !1)), e;
    case 11:
      return (e = Ml(e.type.render, !1)), e;
    case 1:
      return (e = Ml(e.type, !0)), e;
    default:
      return "";
  }
}
function di(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case $t:
      return "Portal";
    case ai:
      return "Profiler";
    case uo:
      return "StrictMode";
    case ui:
      return "Suspense";
    case ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Da:
        return (e.displayName || "Context") + ".Consumer";
      case Oa:
        return (e._context.displayName || "Context") + ".Provider";
      case co:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fo:
        return (
          (t = e.displayName || null), t !== null ? t : di(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return di(e(t));
        } catch {}
    }
  return null;
}
function Sd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return di(t);
    case 8:
      return t === uo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jd(e) {
  var t = Fa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function mr(e) {
  e._valueTracker || (e._valueTracker = jd(e));
}
function Aa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fi(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function as(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ua(e, t) {
  (t = t.checked), t != null && ao(e, "checked", t, !1);
}
function pi(e, t) {
  Ua(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? hi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hi(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function us(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function hi(e, t, n) {
  (t !== "number" || Wr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function $a(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ds(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ba(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ba(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var gr,
  Wa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gr = gr || document.createElement("div"),
          gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $n(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Nd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function (e) {
  Nd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[t] = Tn[e]);
  });
});
function Ha(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tn.hasOwnProperty(e) && Tn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Va(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ha(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ed = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function vi(e, t) {
  if (t) {
    if (Ed[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function yi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xi = null;
function po(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wi = null,
  bt = null,
  en = null;
function fs(e) {
  if ((e = sr(e))) {
    if (typeof wi != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = yl(t)), wi(e.stateNode, e.type, t));
  }
}
function Qa(e) {
  bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function Ka() {
  if (bt) {
    var e = bt,
      t = en;
    if (((en = bt = null), fs(e), t)) for (e = 0; e < t.length; e++) fs(t[e]);
  }
}
function Ga(e, t) {
  return e(t);
}
function Ya() {}
var Fl = !1;
function Xa(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return Ga(e, t, n);
  } finally {
    (Fl = !1), (bt !== null || en !== null) && (Ya(), Ka());
  }
}
function Bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var ki = !1;
if (Ge)
  try {
    var xn = {};
    Object.defineProperty(xn, "passive", {
      get: function () {
        ki = !0;
      },
    }),
      window.addEventListener("test", xn, xn),
      window.removeEventListener("test", xn, xn);
  } catch {
    ki = !1;
  }
function Cd(e, t, n, r, l, i, o, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var Rn = !1,
  Hr = null,
  Vr = !1,
  Si = null,
  _d = {
    onError: function (e) {
      (Rn = !0), (Hr = e);
    },
  };
function Pd(e, t, n, r, l, i, o, s, a) {
  (Rn = !1), (Hr = null), Cd.apply(_d, arguments);
}
function Ld(e, t, n, r, l, i, o, s, a) {
  if ((Pd.apply(this, arguments), Rn)) {
    if (Rn) {
      var c = Hr;
      (Rn = !1), (Hr = null);
    } else throw Error(k(198));
    Vr || ((Vr = !0), (Si = c));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Za(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ps(e) {
  if (Mt(e) !== e) throw Error(k(188));
}
function Td(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ps(l), e;
        if (i === r) return ps(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ja(e) {
  return (e = Td(e)), e !== null ? qa(e) : null;
}
function qa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ba = we.unstable_scheduleCallback,
  hs = we.unstable_cancelCallback,
  Rd = we.unstable_shouldYield,
  zd = we.unstable_requestPaint,
  K = we.unstable_now,
  Id = we.unstable_getCurrentPriorityLevel,
  ho = we.unstable_ImmediatePriority,
  eu = we.unstable_UserBlockingPriority,
  Qr = we.unstable_NormalPriority,
  Od = we.unstable_LowPriority,
  tu = we.unstable_IdlePriority,
  hl = null,
  $e = null;
function Dd(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Ad,
  Md = Math.log,
  Fd = Math.LN2;
function Ad(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Md(e) / Fd) | 0)) | 0;
}
var vr = 64,
  yr = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Kr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Pn(s)) : ((i &= o), i !== 0 && (r = Pn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Pn(o)) : i !== 0 && (r = Pn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ud(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $d(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      s = 1 << o,
      a = l[o];
    a === -1
      ? (!(s & n) || s & r) && (l[o] = Ud(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ji(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function nu() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Bd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function mo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function ru(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var lu,
  go,
  iu,
  ou,
  su,
  Ni = !1,
  xr = [],
  ot = null,
  st = null,
  at = null,
  Wn = new Map(),
  Hn = new Map(),
  tt = [],
  Wd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ms(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Wn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = sr(t)), t !== null && go(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Hd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = wn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (st = wn(st, e, t, n, r, l)), !0;
    case "mouseover":
      return (at = wn(at, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Wn.set(i, wn(Wn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Hn.set(i, wn(Hn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function au(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Za(n)), t !== null)) {
          (e.blockedOn = t),
            su(e.priority, function () {
              iu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ei(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (xi = r), n.target.dispatchEvent(r), (xi = null);
    } else return (t = sr(n)), t !== null && go(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function gs(e, t, n) {
  zr(e) && n.delete(t);
}
function Vd() {
  (Ni = !1),
    ot !== null && zr(ot) && (ot = null),
    st !== null && zr(st) && (st = null),
    at !== null && zr(at) && (at = null),
    Wn.forEach(gs),
    Hn.forEach(gs);
}
function kn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ni ||
      ((Ni = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Vd)));
}
function Vn(e) {
  function t(l) {
    return kn(l, e);
  }
  if (0 < xr.length) {
    kn(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && kn(ot, e),
      st !== null && kn(st, e),
      at !== null && kn(at, e),
      Wn.forEach(t),
      Hn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    au(n), n.blockedOn === null && tt.shift();
}
var tn = Je.ReactCurrentBatchConfig,
  Gr = !0;
function Qd(e, t, n, r) {
  var l = D,
    i = tn.transition;
  tn.transition = null;
  try {
    (D = 1), vo(e, t, n, r);
  } finally {
    (D = l), (tn.transition = i);
  }
}
function Kd(e, t, n, r) {
  var l = D,
    i = tn.transition;
  tn.transition = null;
  try {
    (D = 4), vo(e, t, n, r);
  } finally {
    (D = l), (tn.transition = i);
  }
}
function vo(e, t, n, r) {
  if (Gr) {
    var l = Ei(e, t, n, r);
    if (l === null) Yl(e, t, r, Yr, n), ms(e, r);
    else if (Hd(l, e, t, n, r)) r.stopPropagation();
    else if ((ms(e, r), t & 4 && -1 < Wd.indexOf(e))) {
      for (; l !== null; ) {
        var i = sr(l);
        if (
          (i !== null && lu(i),
          (i = Ei(e, t, n, r)),
          i === null && Yl(e, t, r, Yr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Yl(e, t, r, null, n);
  }
}
var Yr = null;
function Ei(e, t, n, r) {
  if (((Yr = null), (e = po(r)), (e = Et(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Za(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yr = e), null;
}
function uu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Id()) {
        case ho:
          return 1;
        case eu:
          return 4;
        case Qr:
        case Od:
          return 16;
        case tu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  yo = null,
  Ir = null;
function cu() {
  if (Ir) return Ir;
  var e,
    t = yo,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Or(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wr() {
  return !0;
}
function vs() {
  return !1;
}
function Se(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? wr
        : vs),
      (this.isPropagationStopped = vs),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wr));
      },
      persist: function () {},
      isPersistent: wr,
    }),
    t
  );
}
var hn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xo = Se(hn),
  or = W({}, hn, { view: 0, detail: 0 }),
  Gd = Se(or),
  Ul,
  $l,
  Sn,
  ml = W({}, or, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sn &&
            (Sn && e.type === "mousemove"
              ? ((Ul = e.screenX - Sn.screenX), ($l = e.screenY - Sn.screenY))
              : ($l = Ul = 0),
            (Sn = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : $l;
    },
  }),
  ys = Se(ml),
  Yd = W({}, ml, { dataTransfer: 0 }),
  Xd = Se(Yd),
  Zd = W({}, or, { relatedTarget: 0 }),
  Bl = Se(Zd),
  Jd = W({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qd = Se(Jd),
  bd = W({}, hn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ef = Se(bd),
  tf = W({}, hn, { data: 0 }),
  xs = Se(tf),
  nf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  rf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  lf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function of(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lf[e]) ? !!t[e] : !1;
}
function wo() {
  return of;
}
var sf = W({}, or, {
    key: function (e) {
      if (e.key) {
        var t = nf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? rf[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wo,
    charCode: function (e) {
      return e.type === "keypress" ? Or(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Or(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  af = Se(sf),
  uf = W({}, ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ws = Se(uf),
  cf = W({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wo,
  }),
  df = Se(cf),
  ff = W({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pf = Se(ff),
  hf = W({}, ml, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mf = Se(hf),
  gf = [9, 13, 27, 32],
  ko = Ge && "CompositionEvent" in window,
  zn = null;
Ge && "documentMode" in document && (zn = document.documentMode);
var vf = Ge && "TextEvent" in window && !zn,
  du = Ge && (!ko || (zn && 8 < zn && 11 >= zn)),
  ks = " ",
  Ss = !1;
function fu(e, t) {
  switch (e) {
    case "keyup":
      return gf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wt = !1;
function yf(e, t) {
  switch (e) {
    case "compositionend":
      return pu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ss = !0), ks);
    case "textInput":
      return (e = t.data), e === ks && Ss ? null : e;
    default:
      return null;
  }
}
function xf(e, t) {
  if (Wt)
    return e === "compositionend" || (!ko && fu(e, t))
      ? ((e = cu()), (Ir = yo = rt = null), (Wt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return du && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wf[e.type] : t === "textarea";
}
function hu(e, t, n, r) {
  Qa(r),
    (t = Xr(t, "onChange")),
    0 < t.length &&
      ((n = new xo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var In = null,
  Qn = null;
function kf(e) {
  Eu(e, 0);
}
function gl(e) {
  var t = Qt(e);
  if (Aa(t)) return e;
}
function Sf(e, t) {
  if (e === "change") return t;
}
var mu = !1;
if (Ge) {
  var Wl;
  if (Ge) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Ns = document.createElement("div");
      Ns.setAttribute("oninput", "return;"),
        (Hl = typeof Ns.oninput == "function");
    }
    Wl = Hl;
  } else Wl = !1;
  mu = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Es() {
  In && (In.detachEvent("onpropertychange", gu), (Qn = In = null));
}
function gu(e) {
  if (e.propertyName === "value" && gl(Qn)) {
    var t = [];
    hu(t, Qn, e, po(e)), Xa(kf, t);
  }
}
function jf(e, t, n) {
  e === "focusin"
    ? (Es(), (In = t), (Qn = n), In.attachEvent("onpropertychange", gu))
    : e === "focusout" && Es();
}
function Nf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(Qn);
}
function Ef(e, t) {
  if (e === "click") return gl(t);
}
function Cf(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function _f(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : _f;
function Kn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!si.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Cs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _s(e, t) {
  var n = Cs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cs(n);
  }
}
function vu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? vu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function yu() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function So(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Pf(e) {
  var t = yu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && So(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = _s(n, i));
        var o = _s(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Lf = Ge && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  Ci = null,
  On = null,
  _i = !1;
function Ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _i ||
    Ht == null ||
    Ht !== Wr(r) ||
    ((r = Ht),
    "selectionStart" in r && So(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (On && Kn(On, r)) ||
      ((On = r),
      (r = Xr(Ci, "onSelect")),
      0 < r.length &&
        ((t = new xo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vt = {
    animationend: kr("Animation", "AnimationEnd"),
    animationiteration: kr("Animation", "AnimationIteration"),
    animationstart: kr("Animation", "AnimationStart"),
    transitionend: kr("Transition", "TransitionEnd"),
  },
  Vl = {},
  xu = {};
Ge &&
  ((xu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vt.animationend.animation,
    delete Vt.animationiteration.animation,
    delete Vt.animationstart.animation),
  "TransitionEvent" in window || delete Vt.transitionend.transition);
function vl(e) {
  if (Vl[e]) return Vl[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xu) return (Vl[e] = t[n]);
  return e;
}
var wu = vl("animationend"),
  ku = vl("animationiteration"),
  Su = vl("animationstart"),
  ju = vl("transitionend"),
  Nu = new Map(),
  Ls =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function vt(e, t) {
  Nu.set(e, t), Dt(t, [e]);
}
for (var Ql = 0; Ql < Ls.length; Ql++) {
  var Kl = Ls[Ql],
    Tf = Kl.toLowerCase(),
    Rf = Kl[0].toUpperCase() + Kl.slice(1);
  vt(Tf, "on" + Rf);
}
vt(wu, "onAnimationEnd");
vt(ku, "onAnimationIteration");
vt(Su, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(ju, "onTransitionEnd");
on("onMouseEnter", ["mouseout", "mouseover"]);
on("onMouseLeave", ["mouseout", "mouseover"]);
on("onPointerEnter", ["pointerout", "pointerover"]);
on("onPointerLeave", ["pointerout", "pointerover"]);
Dt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Dt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Dt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Dt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  zf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function Ts(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ld(r, t, void 0, e), (e.currentTarget = null);
}
function Eu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== i && l.isPropagationStopped())) break e;
          Ts(l, s, c), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          Ts(l, s, c), (i = a);
        }
    }
  }
  if (Vr) throw ((e = Si), (Vr = !1), (Si = null), e);
}
function F(e, t) {
  var n = t[zi];
  n === void 0 && (n = t[zi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Cu(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), Cu(n, e, r, t);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[Sr]) {
    (e[Sr] = !0),
      Ia.forEach(function (n) {
        n !== "selectionchange" && (zf.has(n) || Gl(n, !1, e), Gl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sr] || ((t[Sr] = !0), Gl("selectionchange", !1, t));
  }
}
function Cu(e, t, n, r) {
  switch (uu(t)) {
    case 1:
      var l = Qd;
      break;
    case 4:
      l = Kd;
      break;
    default:
      l = vo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ki ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Yl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Et(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Xa(function () {
    var c = i,
      g = po(n),
      h = [];
    e: {
      var m = Nu.get(e);
      if (m !== void 0) {
        var y = xo,
          x = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = af;
            break;
          case "focusin":
            (x = "focus"), (y = Bl);
            break;
          case "focusout":
            (x = "blur"), (y = Bl);
            break;
          case "beforeblur":
          case "afterblur":
            y = Bl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = ys;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Xd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = df;
            break;
          case wu:
          case ku:
          case Su:
            y = qd;
            break;
          case ju:
            y = pf;
            break;
          case "scroll":
            y = Gd;
            break;
          case "wheel":
            y = mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = ef;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ws;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              f !== null && ((v = Bn(d, f)), v != null && w.push(Yn(d, v, p)))),
            C)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((m = new y(m, x, null, n, g)), h.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== xi &&
            (x = n.relatedTarget || n.fromElement) &&
            (Et(x) || x[Ye]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            g.window === g
              ? g
              : (m = g.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          y
            ? ((x = n.relatedTarget || n.toElement),
              (y = c),
              (x = x ? Et(x) : null),
              x !== null &&
                ((C = Mt(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((y = null), (x = c)),
          y !== x)
        ) {
          if (
            ((w = ys),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = ws),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (C = y == null ? m : Qt(y)),
            (p = x == null ? m : Qt(x)),
            (m = new w(v, d + "leave", y, n, g)),
            (m.target = C),
            (m.relatedTarget = p),
            (v = null),
            Et(g) === c &&
              ((w = new w(f, d + "enter", x, n, g)),
              (w.target = p),
              (w.relatedTarget = C),
              (v = w)),
            (C = v),
            y && x)
          )
            t: {
              for (w = y, f = x, d = 0, p = w; p; p = Ut(p)) d++;
              for (p = 0, v = f; v; v = Ut(v)) p++;
              for (; 0 < d - p; ) (w = Ut(w)), d--;
              for (; 0 < p - d; ) (f = Ut(f)), p--;
              for (; d--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Ut(w)), (f = Ut(f));
              }
              w = null;
            }
          else w = null;
          y !== null && Rs(h, m, y, w, !1),
            x !== null && C !== null && Rs(h, C, x, w, !0);
        }
      }
      e: {
        if (
          ((m = c ? Qt(c) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var j = Sf;
        else if (js(m))
          if (mu) j = Cf;
          else {
            j = Nf;
            var _ = jf;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (j = Ef);
        if (j && (j = j(e, c))) {
          hu(h, j, n, g);
          break e;
        }
        _ && _(e, m, c),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            hi(m, "number", m.value);
      }
      switch (((_ = c ? Qt(c) : window), e)) {
        case "focusin":
          (js(_) || _.contentEditable === "true") &&
            ((Ht = _), (Ci = c), (On = null));
          break;
        case "focusout":
          On = Ci = Ht = null;
          break;
        case "mousedown":
          _i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_i = !1), Ps(h, n, g);
          break;
        case "selectionchange":
          if (Lf) break;
        case "keydown":
        case "keyup":
          Ps(h, n, g);
      }
      var P;
      if (ko)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Wt
          ? fu(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (du &&
          n.locale !== "ko" &&
          (Wt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Wt && (P = cu())
            : ((rt = g),
              (yo = "value" in rt ? rt.value : rt.textContent),
              (Wt = !0))),
        (_ = Xr(c, L)),
        0 < _.length &&
          ((L = new xs(L, e, null, n, g)),
          h.push({ event: L, listeners: _ }),
          P ? (L.data = P) : ((P = pu(n)), P !== null && (L.data = P)))),
        (P = vf ? yf(e, n) : xf(e, n)) &&
          ((c = Xr(c, "onBeforeInput")),
          0 < c.length &&
            ((g = new xs("onBeforeInput", "beforeinput", null, n, g)),
            h.push({ event: g, listeners: c }),
            (g.data = P)));
    }
    Eu(h, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Bn(e, n)),
      i != null && r.unshift(Yn(e, i, l)),
      (i = Bn(e, t)),
      i != null && r.push(Yn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Rs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((a = Bn(n, i)), a != null && o.unshift(Yn(n, a, s)))
        : l || ((a = Bn(n, i)), a != null && o.push(Yn(n, a, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var If = /\r\n?/g,
  Of = /\u0000|\uFFFD/g;
function zs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      If,
      `
`,
    )
    .replace(Of, "");
}
function jr(e, t, n) {
  if (((t = zs(t)), zs(e) !== t && n)) throw Error(k(425));
}
function Zr() {}
var Pi = null,
  Li = null;
function Ti(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ri = typeof setTimeout == "function" ? setTimeout : void 0,
  Df = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Is = typeof Promise == "function" ? Promise : void 0,
  Mf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Is < "u"
        ? function (e) {
            return Is.resolve(null).then(e).catch(Ff);
          }
        : Ri;
function Ff(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Vn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Vn(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Os(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + mn,
  Xn = "__reactProps$" + mn,
  Ye = "__reactContainer$" + mn,
  zi = "__reactEvents$" + mn,
  Af = "__reactListeners$" + mn,
  Uf = "__reactHandles$" + mn;
function Et(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Os(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Os(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function sr(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function yl(e) {
  return e[Xn] || null;
}
var Ii = [],
  Kt = -1;
function yt(e) {
  return { current: e };
}
function A(e) {
  0 > Kt || ((e.current = Ii[Kt]), (Ii[Kt] = null), Kt--);
}
function M(e, t) {
  Kt++, (Ii[Kt] = e.current), (e.current = t);
}
var gt = {},
  oe = yt(gt),
  he = yt(!1),
  Tt = gt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function Jr() {
  A(he), A(oe);
}
function Ds(e, t, n) {
  if (oe.current !== gt) throw Error(k(168));
  M(oe, t), M(he, n);
}
function _u(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Sd(e) || "Unknown", l));
  return W({}, n, r);
}
function qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (Tt = oe.current),
    M(oe, e),
    M(he, he.current),
    !0
  );
}
function Ms(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = _u(e, t, Tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(he),
      A(oe),
      M(oe, e))
    : A(he),
    M(he, n);
}
var He = null,
  xl = !1,
  Zl = !1;
function Pu(e) {
  He === null ? (He = [e]) : He.push(e);
}
function $f(e) {
  (xl = !0), Pu(e);
}
function xt() {
  if (!Zl && He !== null) {
    Zl = !0;
    var e = 0,
      t = D;
    try {
      var n = He;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (xl = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), ba(ho, xt), l);
    } finally {
      (D = t), (Zl = !1);
    }
  }
  return null;
}
var Gt = [],
  Yt = 0,
  br = null,
  el = 0,
  je = [],
  Ne = 0,
  Rt = null,
  Ve = 1,
  Qe = "";
function jt(e, t) {
  (Gt[Yt++] = el), (Gt[Yt++] = br), (br = e), (el = t);
}
function Lu(e, t, n) {
  (je[Ne++] = Ve), (je[Ne++] = Qe), (je[Ne++] = Rt), (Rt = e);
  var r = Ve;
  e = Qe;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ve = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Qe = i + e);
  } else (Ve = (1 << i) | (n << l) | r), (Qe = e);
}
function jo(e) {
  e.return !== null && (jt(e, 1), Lu(e, 1, 0));
}
function No(e) {
  for (; e === br; )
    (br = Gt[--Yt]), (Gt[Yt] = null), (el = Gt[--Yt]), (Gt[Yt] = null);
  for (; e === Rt; )
    (Rt = je[--Ne]),
      (je[Ne] = null),
      (Qe = je[--Ne]),
      (je[Ne] = null),
      (Ve = je[--Ne]),
      (je[Ne] = null);
}
var xe = null,
  ye = null,
  U = !1,
  Ie = null;
function Tu(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (ye = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rt !== null ? { id: Ve, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Di(e) {
  if (U) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Fs(e, t)) {
        if (Oi(e)) throw Error(k(418));
        t = ut(n.nextSibling);
        var r = xe;
        t && Fs(e, t)
          ? Tu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (xe = e));
      }
    } else {
      if (Oi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (xe = e);
    }
  }
}
function As(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Nr(e) {
  if (e !== xe) return !1;
  if (!U) return As(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ti(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Oi(e)) throw (Ru(), Error(k(418)));
    for (; t; ) Tu(e, t), (t = ut(t.nextSibling));
  }
  if ((As(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = xe ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function Ru() {
  for (var e = ye; e; ) e = ut(e.nextSibling);
}
function an() {
  (ye = xe = null), (U = !1);
}
function Eo(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var Bf = Je.ReactCurrentBatchConfig;
function jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Er(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Us(e) {
  var t = e._init;
  return t(e._payload);
}
function zu(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [d]), (f.flags |= 16)) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function l(f, d) {
    return (f = pt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, d, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < d ? ((f.flags |= 2), d) : p)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, p, v) {
    return d === null || d.tag !== 6
      ? ((d = ri(p, f.mode, v)), (d.return = f), d)
      : ((d = l(d, p)), (d.return = f), d);
  }
  function a(f, d, p, v) {
    var j = p.type;
    return j === Bt
      ? g(f, d, p.props.children, v, p.key)
      : d !== null &&
          (d.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === be &&
              Us(j) === d.type))
        ? ((v = l(d, p.props)), (v.ref = jn(f, d, p)), (v.return = f), v)
        : ((v = Br(p.type, p.key, p.props, null, f.mode, v)),
          (v.ref = jn(f, d, p)),
          (v.return = f),
          v);
  }
  function c(f, d, p, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = li(p, f.mode, v)), (d.return = f), d)
      : ((d = l(d, p.children || [])), (d.return = f), d);
  }
  function g(f, d, p, v, j) {
    return d === null || d.tag !== 7
      ? ((d = Lt(p, f.mode, v, j)), (d.return = f), d)
      : ((d = l(d, p)), (d.return = f), d);
  }
  function h(f, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = ri("" + d, f.mode, p)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hr:
          return (
            (p = Br(d.type, d.key, d.props, null, f.mode, p)),
            (p.ref = jn(f, null, d)),
            (p.return = f),
            p
          );
        case $t:
          return (d = li(d, f.mode, p)), (d.return = f), d;
        case be:
          var v = d._init;
          return h(f, v(d._payload), p);
      }
      if (_n(d) || yn(d))
        return (d = Lt(d, f.mode, p, null)), (d.return = f), d;
      Er(f, d);
    }
    return null;
  }
  function m(f, d, p, v) {
    var j = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return j !== null ? null : s(f, d, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          return p.key === j ? a(f, d, p, v) : null;
        case $t:
          return p.key === j ? c(f, d, p, v) : null;
        case be:
          return (j = p._init), m(f, d, j(p._payload), v);
      }
      if (_n(p) || yn(p)) return j !== null ? null : g(f, d, p, v, null);
      Er(f, p);
    }
    return null;
  }
  function y(f, d, p, v, j) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(p) || null), s(d, f, "" + v, j);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case hr:
          return (f = f.get(v.key === null ? p : v.key) || null), a(d, f, v, j);
        case $t:
          return (f = f.get(v.key === null ? p : v.key) || null), c(d, f, v, j);
        case be:
          var _ = v._init;
          return y(f, d, p, _(v._payload), j);
      }
      if (_n(v) || yn(v)) return (f = f.get(p) || null), g(d, f, v, j, null);
      Er(d, v);
    }
    return null;
  }
  function x(f, d, p, v) {
    for (
      var j = null, _ = null, P = d, L = (d = 0), V = null;
      P !== null && L < p.length;
      L++
    ) {
      P.index > L ? ((V = P), (P = null)) : (V = P.sibling);
      var I = m(f, P, p[L], v);
      if (I === null) {
        P === null && (P = V);
        break;
      }
      e && P && I.alternate === null && t(f, P),
        (d = i(I, d, L)),
        _ === null ? (j = I) : (_.sibling = I),
        (_ = I),
        (P = V);
    }
    if (L === p.length) return n(f, P), U && jt(f, L), j;
    if (P === null) {
      for (; L < p.length; L++)
        (P = h(f, p[L], v)),
          P !== null &&
            ((d = i(P, d, L)), _ === null ? (j = P) : (_.sibling = P), (_ = P));
      return U && jt(f, L), j;
    }
    for (P = r(f, P); L < p.length; L++)
      (V = y(P, f, L, p[L], v)),
        V !== null &&
          (e && V.alternate !== null && P.delete(V.key === null ? L : V.key),
          (d = i(V, d, L)),
          _ === null ? (j = V) : (_.sibling = V),
          (_ = V));
    return (
      e &&
        P.forEach(function (Le) {
          return t(f, Le);
        }),
      U && jt(f, L),
      j
    );
  }
  function w(f, d, p, v) {
    var j = yn(p);
    if (typeof j != "function") throw Error(k(150));
    if (((p = j.call(p)), p == null)) throw Error(k(151));
    for (
      var _ = (j = null), P = d, L = (d = 0), V = null, I = p.next();
      P !== null && !I.done;
      L++, I = p.next()
    ) {
      P.index > L ? ((V = P), (P = null)) : (V = P.sibling);
      var Le = m(f, P, I.value, v);
      if (Le === null) {
        P === null && (P = V);
        break;
      }
      e && P && Le.alternate === null && t(f, P),
        (d = i(Le, d, L)),
        _ === null ? (j = Le) : (_.sibling = Le),
        (_ = Le),
        (P = V);
    }
    if (I.done) return n(f, P), U && jt(f, L), j;
    if (P === null) {
      for (; !I.done; L++, I = p.next())
        (I = h(f, I.value, v)),
          I !== null &&
            ((d = i(I, d, L)), _ === null ? (j = I) : (_.sibling = I), (_ = I));
      return U && jt(f, L), j;
    }
    for (P = r(f, P); !I.done; L++, I = p.next())
      (I = y(P, f, L, I.value, v)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? L : I.key),
          (d = i(I, d, L)),
          _ === null ? (j = I) : (_.sibling = I),
          (_ = I));
    return (
      e &&
        P.forEach(function (gn) {
          return t(f, gn);
        }),
      U && jt(f, L),
      j
    );
  }
  function C(f, d, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Bt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case hr:
          e: {
            for (var j = p.key, _ = d; _ !== null; ) {
              if (_.key === j) {
                if (((j = p.type), j === Bt)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (d = l(_, p.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  _.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === be &&
                    Us(j) === _.type)
                ) {
                  n(f, _.sibling),
                    (d = l(_, p.props)),
                    (d.ref = jn(f, _, p)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            p.type === Bt
              ? ((d = Lt(p.props.children, f.mode, v, p.key)),
                (d.return = f),
                (f = d))
              : ((v = Br(p.type, p.key, p.props, null, f.mode, v)),
                (v.ref = jn(f, d, p)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case $t:
          e: {
            for (_ = p.key; d !== null; ) {
              if (d.key === _)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  n(f, d.sibling),
                    (d = l(d, p.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = li(p, f.mode, v)), (d.return = f), (f = d);
          }
          return o(f);
        case be:
          return (_ = p._init), C(f, d, _(p._payload), v);
      }
      if (_n(p)) return x(f, d, p, v);
      if (yn(p)) return w(f, d, p, v);
      Er(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = l(d, p)), (d.return = f), (f = d))
          : (n(f, d), (d = ri(p, f.mode, v)), (d.return = f), (f = d)),
        o(f))
      : n(f, d);
  }
  return C;
}
var un = zu(!0),
  Iu = zu(!1),
  tl = yt(null),
  nl = null,
  Xt = null,
  Co = null;
function _o() {
  Co = Xt = nl = null;
}
function Po(e) {
  var t = tl.current;
  A(tl), (e._currentValue = t);
}
function Mi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nn(e, t) {
  (nl = e),
    (Co = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (Co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (nl === null) throw Error(k(308));
      (Xt = e), (nl.dependencies = { lanes: 0, firstContext: e });
    } else Xt = Xt.next = e;
  return t;
}
var Ct = null;
function Lo(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Ou(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Lo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function To(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Du(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Lo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Dr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n);
  }
}
function $s(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function rl(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), o === null ? (i = c) : (o.next = c), (o = a);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (s = g.lastBaseUpdate),
      s !== o &&
        (s === null ? (g.firstBaseUpdate = c) : (s.next = c),
        (g.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (g = c = a = null), (s = i);
    do {
      var m = s.lane,
        y = s.eventTime;
      if ((r & m) === m) {
        g !== null &&
          (g = g.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            w = s;
          switch (((m = t), (y = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                h = x.call(y, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (m = typeof x == "function" ? x.call(y, h, m) : x),
                m == null)
              )
                break e;
              h = W({}, h, m);
              break e;
            case 2:
              et = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          g === null ? ((c = g = y), (a = h)) : (g = g.next = y),
          (o |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (It |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Bs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var ar = {},
  Be = yt(ar),
  Zn = yt(ar),
  Jn = yt(ar);
function _t(e) {
  if (e === ar) throw Error(k(174));
  return e;
}
function Ro(e, t) {
  switch ((M(Jn, t), M(Zn, e), M(Be, ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gi(t, e));
  }
  A(Be), M(Be, t);
}
function cn() {
  A(Be), A(Zn), A(Jn);
}
function Mu(e) {
  _t(Jn.current);
  var t = _t(Be.current),
    n = gi(t, e.type);
  t !== n && (M(Zn, e), M(Be, n));
}
function zo(e) {
  Zn.current === e && (A(Be), A(Zn));
}
var $ = yt(0);
function ll(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jl = [];
function Io() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Mr = Je.ReactCurrentDispatcher,
  ql = Je.ReactCurrentBatchConfig,
  zt = 0,
  B = null,
  X = null,
  q = null,
  il = !1,
  Dn = !1,
  qn = 0,
  Wf = 0;
function re() {
  throw Error(k(321));
}
function Oo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Do(e, t, n, r, l, i) {
  if (
    ((zt = i),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mr.current = e === null || e.memoizedState === null ? Kf : Gf),
    (e = n(r, l)),
    Dn)
  ) {
    i = 0;
    do {
      if (((Dn = !1), (qn = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (q = X = null),
        (t.updateQueue = null),
        (Mr.current = Yf),
        (e = n(r, l));
    } while (Dn);
  }
  if (
    ((Mr.current = ol),
    (t = X !== null && X.next !== null),
    (zt = 0),
    (q = X = B = null),
    (il = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Mo() {
  var e = qn !== 0;
  return (qn = 0), e;
}
function Ae() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (B.memoizedState = q = e) : (q = q.next = e), q;
}
function Pe() {
  if (X === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? B.memoizedState : q.next;
  if (t !== null) (q = t), (X = e);
  else {
    if (e === null) throw Error(k(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      q === null ? (B.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function bn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      a = null,
      c = i;
    do {
      var g = c.lane;
      if ((zt & g) === g)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = h), (o = r)) : (a = a.next = h),
          (B.lanes |= g),
          (It |= g);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (o = r) : (a.next = s),
      Me(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (B.lanes |= i), (It |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ei(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Fu() {}
function Au(e, t) {
  var n = B,
    r = Pe(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Fo(Bu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      er(9, $u.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(k(349));
    zt & 30 || Uu(n, t, l);
  }
  return l;
}
function Uu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $u(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wu(t) && Hu(e);
}
function Bu(e, t, n) {
  return n(function () {
    Wu(t) && Hu(e);
  });
}
function Wu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Hu(e) {
  var t = Xe(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Ws(e) {
  var t = Ae();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qf.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Vu() {
  return Pe().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Ae();
  (B.flags |= e),
    (l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r));
}
function wl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && Oo(r, o.deps))) {
      l.memoizedState = er(t, n, i, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = er(1 | t, n, i, r));
}
function Hs(e, t) {
  return Fr(8390656, 8, e, t);
}
function Fo(e, t) {
  return wl(2048, 8, e, t);
}
function Qu(e, t) {
  return wl(4, 2, e, t);
}
function Ku(e, t) {
  return wl(4, 4, e, t);
}
function Gu(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wl(4, 4, Gu.bind(null, t, e), n)
  );
}
function Ao() {}
function Xu(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zu(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ju(e, t, n) {
  return zt & 21
    ? (Me(n, t) || ((n = nu()), (B.lanes |= n), (It |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Hf(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (ql.transition = r);
  }
}
function qu() {
  return Pe().memoizedState;
}
function Vf(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bu(e))
  )
    ec(t, n);
  else if (((n = Ou(e, t, n, r)), n !== null)) {
    var l = ae();
    De(n, e, r, l), tc(n, t, r);
  }
}
function Qf(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bu(e)) ec(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Me(s, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Lo(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ou(e, t, l, r)),
      n !== null && ((l = ae()), De(n, e, r, l), tc(n, t, r));
  }
}
function bu(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function ec(e, t) {
  Dn = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n);
  }
}
var ol = {
    readContext: _e,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Kf = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Ae().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Hs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fr(4194308, 4, Gu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ae();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ae();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Vf.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ae();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ws,
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      return (Ae().memoizedState = e);
    },
    useTransition: function () {
      var e = Ws(!1),
        t = e[0];
      return (e = Hf.bind(null, e[1])), (Ae().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Ae();
      if (U) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(k(349));
        zt & 30 || Uu(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Hs(Bu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        er(9, $u.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ae(),
        t = b.identifierPrefix;
      if (U) {
        var n = Qe,
          r = Ve;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Wf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gf = {
    readContext: _e,
    useCallback: Xu,
    useContext: _e,
    useEffect: Fo,
    useImperativeHandle: Yu,
    useInsertionEffect: Qu,
    useLayoutEffect: Ku,
    useMemo: Zu,
    useReducer: bl,
    useRef: Vu,
    useState: function () {
      return bl(bn);
    },
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      var t = Pe();
      return Ju(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(bn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Fu,
    useSyncExternalStore: Au,
    useId: qu,
    unstable_isNewReconciler: !1,
  },
  Yf = {
    readContext: _e,
    useCallback: Xu,
    useContext: _e,
    useEffect: Fo,
    useImperativeHandle: Yu,
    useInsertionEffect: Qu,
    useLayoutEffect: Ku,
    useMemo: Zu,
    useReducer: ei,
    useRef: Vu,
    useState: function () {
      return ei(bn);
    },
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      var t = Pe();
      return X === null ? (t.memoizedState = e) : Ju(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(bn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Fu,
    useSyncExternalStore: Au,
    useId: qu,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = ft(e),
      i = Ke(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (De(t, e, l, r), Dr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = ft(e),
      i = Ke(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (De(t, e, l, r), Dr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = ft(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (De(t, e, r, n), Dr(t, e, r));
  },
};
function Vs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Kn(n, r) || !Kn(l, i)
        : !0
  );
}
function nc(e, t, n) {
  var r = !1,
    l = gt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((l = me(t) ? Tt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? sn(e, l) : gt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = kl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Qs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Ai(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), To(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = _e(i))
    : ((i = me(t) ? Tt : oe.current), (l.context = sn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Fi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && kl.enqueueReplaceState(l, l.state, null),
      rl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function dn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += kd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ti(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ui(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xf = typeof WeakMap == "function" ? WeakMap : Map;
function rc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (Xi = r)), Ui(e, t);
    }),
    n
  );
}
function lc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ui(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ui(e, t),
          typeof r != "function" &&
            (dt === null ? (dt = new Set([this])) : dt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ks(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = up.bind(null, e, t, n)), t.then(e, e));
}
function Gs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ys(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Zf = Je.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? Iu(t, null, n, r) : un(t, e.child, n, r);
}
function Xs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    nn(t, l),
    (r = Do(e, t, n, r, i, l)),
    (n = Mo()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (U && n && jo(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function Zs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ko(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ic(e, t, i, r, l))
      : ((e = Br(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kn), n(o, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ic(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kn(i, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return $i(e, t, n, r, l);
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Jt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(Jt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        M(Jt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(Jt, ve),
      (ve |= r);
  return se(e, t, l, n), t.child;
}
function sc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $i(e, t, n, r, l) {
  var i = me(n) ? Tt : oe.current;
  return (
    (i = sn(t, i)),
    nn(t, l),
    (n = Do(e, t, n, r, i, l)),
    (r = Mo()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (U && r && jo(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function Js(e, t, n, r, l) {
  if (me(n)) {
    var i = !0;
    qr(t);
  } else i = !1;
  if ((nn(t, l), t.stateNode === null))
    Ar(e, t), nc(t, n, r), Ai(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var a = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = me(n) ? Tt : oe.current), (c = sn(t, c)));
    var g = n.getDerivedStateFromProps,
      h =
        typeof g == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || a !== c) && Qs(t, o, r, c)),
      (et = !1);
    var m = t.memoizedState;
    (o.state = m),
      rl(t, r, o, l),
      (a = t.memoizedState),
      s !== r || m !== a || he.current || et
        ? (typeof g == "function" && (Fi(t, n, g, r), (a = t.memoizedState)),
          (s = et || Vs(t, n, s, r, m, a, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = c),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Du(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Re(t.type, s)),
      (o.props = c),
      (h = t.pendingProps),
      (m = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = _e(a))
        : ((a = me(n) ? Tt : oe.current), (a = sn(t, a)));
    var y = n.getDerivedStateFromProps;
    (g =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== h || m !== a) && Qs(t, o, r, a)),
      (et = !1),
      (m = t.memoizedState),
      (o.state = m),
      rl(t, r, o, l);
    var x = t.memoizedState;
    s !== h || m !== x || he.current || et
      ? (typeof y == "function" && (Fi(t, n, y, r), (x = t.memoizedState)),
        (c = et || Vs(t, n, c, r, m, x, a) || !1)
          ? (g ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = a),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bi(e, t, n, r, i, l);
}
function Bi(e, t, n, r, l, i) {
  sc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ms(t, n, !1), Ze(e, t, i);
  (r = t.stateNode), (Zf.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, s, i)))
      : se(e, t, s, i),
    (t.memoizedState = r.state),
    l && Ms(t, n, !0),
    t.child
  );
}
function ac(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ds(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ds(e, t.context, !1),
    Ro(e, t.containerInfo);
}
function qs(e, t, n, r, l) {
  return an(), Eo(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function uc(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M($, l & 1),
    e === null)
  )
    return (
      Di(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Nl(o, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Hi(n)),
              (t.memoizedState = Wi),
              e)
            : Uo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Jf(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = pt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = pt(s, i)) : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Hi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uo(e, t) {
  return (
    (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cr(e, t, n, r) {
  return (
    r !== null && Eo(r),
    un(t, e.child, null, n),
    (e = Uo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ti(Error(k(422)))), Cr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Nl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Lt(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && un(t, e.child, null, o),
          (t.child.memoizedState = Hi(o)),
          (t.memoizedState = Wi),
          i);
  if (!(t.mode & 1)) return Cr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(k(419))), (r = ti(i, r, void 0)), Cr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), pe || s)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), De(r, e, l, -1));
    }
    return Qo(), (r = ti(Error(k(421)))), Cr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = ut(l.nextSibling)),
      (xe = t),
      (U = !0),
      (Ie = null),
      e !== null &&
        ((je[Ne++] = Ve),
        (je[Ne++] = Qe),
        (je[Ne++] = Rt),
        (Ve = e.id),
        (Qe = e.overflow),
        (Rt = t)),
      (t = Uo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mi(e.return, t, n);
}
function ni(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((se(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bs(e, n, t);
        else if (e.tag === 19) bs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ll(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ni(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ll(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ni(t, !0, n, null, i);
        break;
      case "together":
        ni(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ar(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (It |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qf(e, t, n) {
  switch (t.tag) {
    case 3:
      ac(t), an();
      break;
    case 5:
      Mu(t);
      break;
    case 1:
      me(t.type) && qr(t);
      break;
    case 4:
      Ro(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(tl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? uc(e, t, n)
            : (M($, $.current & 1),
              (e = Ze(e, t, n)),
              e !== null ? e.sibling : null);
      M($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), oc(e, t, n);
  }
  return Ze(e, t, n);
}
var dc, Vi, fc, pc;
dc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vi = function () {};
fc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = fi(e, l)), (r = fi(e, r)), (i = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = mi(e, l)), (r = mi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zr);
    }
    vi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Un.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(c, a))
            : c === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(c, "" + a)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Un.hasOwnProperty(c)
                  ? (a != null && c === "onScroll" && F("scroll", e),
                    i || s === a || (i = []))
                  : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
pc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bf(e, t, n) {
  var r = t.pendingProps;
  switch ((No(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return me(t.type) && Jr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        cn(),
        A(he),
        A(oe),
        Io(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (qi(Ie), (Ie = null)))),
        Vi(e, t),
        le(t),
        null
      );
    case 5:
      zo(t);
      var l = _t(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return le(t), null;
        }
        if (((e = _t(Be.current)), Nr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Xn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) F(Ln[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              as(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              cs(r, i), F("invalid", r);
          }
          vi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      jr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      jr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Un.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              mr(r), us(r, i, !0);
              break;
            case "textarea":
              mr(r), ds(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Zr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ba(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Xn] = r),
            dc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = yi(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) F(Ln[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                as(e, r), (l = fi(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                cs(e, r), (l = mi(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            vi(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Va(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Wa(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && $n(e, a)
                        : typeof a == "number" && $n(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Un.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && F("scroll", e)
                          : a != null && ao(e, i, a, o));
              }
            switch (n) {
              case "input":
                mr(e), us(e, r, !1);
                break;
              case "textarea":
                mr(e), ds(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = _t(Jn.current)), _t(Be.current), Nr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (A($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ye !== null && t.mode & 1 && !(t.flags & 128))
          Ru(), an(), (t.flags |= 98560), (i = !1);
        else if (((i = Nr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[Ue] = t;
          } else
            an(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Ie !== null && (qi(Ie), (Ie = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? Z === 0 && (Z = 3) : Qo())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        cn(), Vi(e, t), e === null && Gn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Po(t.type._context), le(t), null;
    case 17:
      return me(t.type) && Jr(), le(t), null;
    case 19:
      if ((A($), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Nn(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ll(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Nn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > fn &&
            ((t.flags |= 128), (r = !0), Nn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ll(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = $.current),
          M($, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Vo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function ep(e, t) {
  switch ((No(t), t.tag)) {
    case 1:
      return (
        me(t.type) && Jr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        cn(),
        A(he),
        A(oe),
        Io(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return zo(t), null;
    case 13:
      if ((A($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        an();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A($), null;
    case 4:
      return cn(), null;
    case 10:
      return Po(t.type._context), null;
    case 22:
    case 23:
      return Vo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _r = !1,
  ie = !1,
  tp = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function Qi(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var ea = !1;
function np(e, t) {
  if (((Pi = Gr), (e = yu()), So(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            a = -1,
            c = 0,
            g = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (l !== 0 && h.nodeType !== 3) || (s = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (m = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (s = o),
                m === i && ++g === r && (a = o),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = y;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Li = { focusedElem: e, selectionRange: n }, Gr = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    C = x.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Re(t.type, w),
                      C,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (v) {
          H(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (x = ea), (ea = !1), x;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Qi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Sl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ki(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Xn], delete t[zi], delete t[Af], delete t[Uf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ta(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), (e = e.sibling);
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) gc(e, t, n), (n = n.sibling);
}
function gc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Zt(n, t);
    case 6:
      var r = ee,
        l = ze;
      (ee = null),
        qe(e, t, n),
        (ee = r),
        (ze = l),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, n)
              : e.nodeType === 1 && Xl(e, n),
            Vn(e))
          : Xl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        qe(e, t, n),
        (ee = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Qi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          H(n, t, s);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), qe(e, t, n), (ie = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function na(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tp()),
      t.forEach(function (r) {
        var l = dp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ee = s.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = s.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = s.stateNode.containerInfo), (ze = !0);
              break e;
          }
          s = s.return;
        }
        if (ee === null) throw Error(k(160));
        gc(i, o, l), (ee = null), (ze = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        H(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vc(t, e), (t = t.sibling);
}
function vc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), Fe(e), r & 4)) {
        try {
          Mn(3, e, e.return), Sl(3, e);
        } catch (w) {
          H(e, e.return, w);
        }
        try {
          Mn(5, e, e.return);
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 1:
      Te(t, e), Fe(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        Fe(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          $n(l, "");
        } catch (w) {
          H(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Ua(l, i),
              yi(s, o);
            var c = yi(s, i);
            for (o = 0; o < a.length; o += 2) {
              var g = a[o],
                h = a[o + 1];
              g === "style"
                ? Va(l, h)
                : g === "dangerouslySetInnerHTML"
                  ? Wa(l, h)
                  : g === "children"
                    ? $n(l, h)
                    : ao(l, g, h, c);
            }
            switch (s) {
              case "input":
                pi(l, i);
                break;
              case "textarea":
                $a(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? qt(l, !!i.multiple, y, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(l, !!i.multiple, i.defaultValue, !0)
                      : qt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Xn] = i;
          } catch (w) {
            H(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Te(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vn(t.containerInfo);
        } catch (w) {
          H(e, e.return, w);
        }
      break;
    case 4:
      Te(t, e), Fe(e);
      break;
    case 13:
      Te(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Wo = K())),
        r & 4 && na(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || g), Te(t, e), (ie = c)) : Te(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !g && e.mode & 1)
        )
          for (N = e, g = e.child; g !== null; ) {
            for (h = N = g; N !== null; ) {
              switch (((m = N), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, m, m.return);
                  break;
                case 1:
                  Zt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      H(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Zt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    la(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (N = y)) : la(h);
            }
            g = g.sibling;
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Ha("display", o)));
              } catch (w) {
                H(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (w) {
                H(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            g === h && (g = null), (h = h.return);
          }
          g === h && (g = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), Fe(e), r & 4 && na(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($n(l, ""), (r.flags &= -33));
          var i = ta(e);
          Yi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = ta(e);
          Gi(e, s, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      H(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rp(e, t, n) {
  (N = e), yc(e);
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || _r;
      if (!o) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || ie;
        s = _r;
        var c = ie;
        if (((_r = o), (ie = a) && !c))
          for (N = l; N !== null; )
            (o = N),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ia(l)
                : a !== null
                  ? ((a.return = o), (N = a))
                  : ia(l);
        for (; i !== null; ) (N = i), yc(i), (i = i.sibling);
        (N = l), (_r = s), (ie = c);
      }
      ra(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (N = i)) : ra(e);
  }
}
function ra(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Bs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bs(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var g = c.memoizedState;
                  if (g !== null) {
                    var h = g.dehydrated;
                    h !== null && Vn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && Ki(t));
      } catch (m) {
        H(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function la(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ia(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sl(4, t);
          } catch (a) {
            H(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              H(t, l, a);
            }
          }
          var i = t.return;
          try {
            Ki(t);
          } catch (a) {
            H(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ki(t);
          } catch (a) {
            H(t, o, a);
          }
      }
    } catch (a) {
      H(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (N = s);
      break;
    }
    N = t.return;
  }
}
var lp = Math.ceil,
  sl = Je.ReactCurrentDispatcher,
  $o = Je.ReactCurrentOwner,
  Ce = Je.ReactCurrentBatchConfig,
  O = 0,
  b = null,
  G = null,
  te = 0,
  ve = 0,
  Jt = yt(0),
  Z = 0,
  tr = null,
  It = 0,
  jl = 0,
  Bo = 0,
  Fn = null,
  fe = null,
  Wo = 0,
  fn = 1 / 0,
  We = null,
  al = !1,
  Xi = null,
  dt = null,
  Pr = !1,
  lt = null,
  ul = 0,
  An = 0,
  Zi = null,
  Ur = -1,
  $r = 0;
function ae() {
  return O & 6 ? K() : Ur !== -1 ? Ur : (Ur = K());
}
function ft(e) {
  return e.mode & 1
    ? O & 2 && te !== 0
      ? te & -te
      : Bf.transition !== null
        ? ($r === 0 && ($r = nu()), $r)
        : ((e = D),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uu(e.type))),
          e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < An) throw ((An = 0), (Zi = null), Error(k(185)));
  ir(e, n, r),
    (!(O & 2) || e !== b) &&
      (e === b && (!(O & 2) && (jl |= n), Z === 4 && nt(e, te)),
      ge(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((fn = K() + 500), xl && xt()));
}
function ge(e, t) {
  var n = e.callbackNode;
  $d(e, t);
  var r = Kr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && hs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && hs(n), t === 1))
      e.tag === 0 ? $f(oa.bind(null, e)) : Pu(oa.bind(null, e)),
        Mf(function () {
          !(O & 6) && xt();
        }),
        (n = null);
    else {
      switch (ru(r)) {
        case 1:
          n = ho;
          break;
        case 4:
          n = eu;
          break;
        case 16:
          n = Qr;
          break;
        case 536870912:
          n = tu;
          break;
        default:
          n = Qr;
      }
      n = Cc(n, xc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xc(e, t) {
  if (((Ur = -1), ($r = 0), O & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Kr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cl(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var i = kc();
    (b !== e || te !== t) && ((We = null), (fn = K() + 500), Pt(e, t));
    do
      try {
        sp();
        break;
      } catch (s) {
        wc(e, s);
      }
    while (!0);
    _o(),
      (sl.current = i),
      (O = l),
      G !== null ? (t = 0) : ((b = null), (te = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ji(e)), l !== 0 && ((r = l), (t = Ji(e, l)))), t === 1)
    )
      throw ((n = tr), Pt(e, 0), nt(e, r), ge(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ip(l) &&
          ((t = cl(e, r)),
          t === 2 && ((i = ji(e)), i !== 0 && ((r = i), (t = Ji(e, i)))),
          t === 1))
      )
        throw ((n = tr), Pt(e, 0), nt(e, r), ge(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Nt(e, fe, We);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Wo + 500 - K()), 10 < t))
          ) {
            if (Kr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ri(Nt.bind(null, e, fe, We), t);
            break;
          }
          Nt(e, fe, We);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * lp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ri(Nt.bind(null, e, fe, We), r);
            break;
          }
          Nt(e, fe, We);
          break;
        case 5:
          Nt(e, fe, We);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ge(e, K()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function Ji(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256),
    (e = cl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && qi(t)),
    e
  );
}
function qi(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function ip(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Bo,
      t &= ~jl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function oa(e) {
  if (O & 6) throw Error(k(327));
  rn();
  var t = Kr(e, 0);
  if (!(t & 1)) return ge(e, K()), null;
  var n = cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ji(e);
    r !== 0 && ((t = r), (n = Ji(e, r)));
  }
  if (n === 1) throw ((n = tr), Pt(e, 0), nt(e, t), ge(e, K()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, fe, We),
    ge(e, K()),
    null
  );
}
function Ho(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((fn = K() + 500), xl && xt());
  }
}
function Ot(e) {
  lt !== null && lt.tag === 0 && !(O & 6) && rn();
  var t = O;
  O |= 1;
  var n = Ce.transition,
    r = D;
  try {
    if (((Ce.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Ce.transition = n), (O = t), !(O & 6) && xt();
  }
}
function Vo() {
  (ve = Jt.current), A(Jt);
}
function Pt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Df(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((No(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jr();
          break;
        case 3:
          cn(), A(he), A(oe), Io();
          break;
        case 5:
          zo(r);
          break;
        case 4:
          cn();
          break;
        case 13:
          A($);
          break;
        case 19:
          A($);
          break;
        case 10:
          Po(r.type._context);
          break;
        case 22:
        case 23:
          Vo();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (G = e = pt(e.current, null)),
    (te = ve = t),
    (Z = 0),
    (tr = null),
    (Bo = jl = It = 0),
    (fe = Fn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function wc(e, t) {
  do {
    var n = G;
    try {
      if ((_o(), (Mr.current = ol), il)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((zt = 0),
        (q = X = B = null),
        (Dn = !1),
        (qn = 0),
        ($o.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (tr = t), (G = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          a = t;
        if (
          ((t = te),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            g = s,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m
              ? ((g.updateQueue = m.updateQueue),
                (g.memoizedState = m.memoizedState),
                (g.lanes = m.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var y = Gs(o);
          if (y !== null) {
            (y.flags &= -257),
              Ys(y, o, s, i, t),
              y.mode & 1 && Ks(i, c, t),
              (t = y),
              (a = c);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ks(i, c, t), Qo();
              break e;
            }
            a = Error(k(426));
          }
        } else if (U && s.mode & 1) {
          var C = Gs(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Ys(C, o, s, i, t),
              Eo(dn(a, s));
            break e;
          }
        }
        (i = a = dn(a, s)),
          Z !== 4 && (Z = 2),
          Fn === null ? (Fn = [i]) : Fn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = rc(i, a, t);
              $s(i, f);
              break e;
            case 1:
              s = a;
              var d = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (dt === null || !dt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = lc(i, s, t);
                $s(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jc(n);
    } catch (j) {
      (t = j), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function kc() {
  var e = sl.current;
  return (sl.current = ol), e === null ? ol : e;
}
function Qo() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(It & 268435455) && !(jl & 268435455)) || nt(b, te);
}
function cl(e, t) {
  var n = O;
  O |= 2;
  var r = kc();
  (b !== e || te !== t) && ((We = null), Pt(e, t));
  do
    try {
      op();
      break;
    } catch (l) {
      wc(e, l);
    }
  while (!0);
  if ((_o(), (O = n), (sl.current = r), G !== null)) throw Error(k(261));
  return (b = null), (te = 0), Z;
}
function op() {
  for (; G !== null; ) Sc(G);
}
function sp() {
  for (; G !== null && !Rd(); ) Sc(G);
}
function Sc(e) {
  var t = Ec(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? jc(e) : (G = t),
    ($o.current = null);
}
function jc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ep(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (G = null);
        return;
      }
    } else if (((n = bf(n, t, ve)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Nt(e, t, n) {
  var r = D,
    l = Ce.transition;
  try {
    (Ce.transition = null), (D = 1), ap(e, t, n, r);
  } finally {
    (Ce.transition = l), (D = r);
  }
  return null;
}
function ap(e, t, n, r) {
  do rn();
  while (lt !== null);
  if (O & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Bd(e, i),
    e === b && ((G = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pr ||
      ((Pr = !0),
      Cc(Qr, function () {
        return rn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var o = D;
    D = 1;
    var s = O;
    (O |= 4),
      ($o.current = null),
      np(e, n),
      vc(n, e),
      Pf(Li),
      (Gr = !!Pi),
      (Li = Pi = null),
      (e.current = n),
      rp(n),
      zd(),
      (O = s),
      (D = o),
      (Ce.transition = i);
  } else e.current = n;
  if (
    (Pr && ((Pr = !1), (lt = e), (ul = l)),
    (i = e.pendingLanes),
    i === 0 && (dt = null),
    Dd(n.stateNode),
    ge(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw ((al = !1), (e = Xi), (Xi = null), e);
  return (
    ul & 1 && e.tag !== 0 && rn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Zi ? An++ : ((An = 0), (Zi = e))) : (An = 0),
    xt(),
    null
  );
}
function rn() {
  if (lt !== null) {
    var e = ru(ul),
      t = Ce.transition,
      n = D;
    try {
      if (((Ce.transition = null), (D = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (ul = 0), O & 6)) throw Error(k(331));
        var l = O;
        for (O |= 4, N = e.current; N !== null; ) {
          var i = N,
            o = i.child;
          if (N.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (N = c; N !== null; ) {
                  var g = N;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, g, i);
                  }
                  var h = g.child;
                  if (h !== null) (h.return = g), (N = h);
                  else
                    for (; N !== null; ) {
                      g = N;
                      var m = g.sibling,
                        y = g.return;
                      if ((hc(g), g === c)) {
                        N = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (N = m);
                        break;
                      }
                      N = y;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (N = o);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (N = f);
                break e;
              }
              N = i.return;
            }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          o = N;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (N = p);
          else
            e: for (o = d; N !== null; ) {
              if (((s = N), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sl(9, s);
                  }
                } catch (j) {
                  H(s, s.return, j);
                }
              if (s === o) {
                N = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (N = v);
                break e;
              }
              N = s.return;
            }
        }
        if (
          ((O = l), xt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Ce.transition = t);
    }
  }
  return !1;
}
function sa(e, t, n) {
  (t = dn(n, t)),
    (t = rc(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = ae()),
    e !== null && (ir(e, 1, t), ge(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) sa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dt === null || !dt.has(r)))
        ) {
          (e = dn(n, e)),
            (e = lc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = ae()),
            t !== null && (ir(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function up(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > K() - Wo)
        ? Pt(e, 0)
        : (Bo |= n)),
    ge(e, t);
}
function Nc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yr), (yr <<= 1), !(yr & 130023424) && (yr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Xe(e, t)), e !== null && (ir(e, t, n), ge(e, n));
}
function cp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nc(e, n);
}
function dp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Nc(e, n);
}
var Ec;
Ec = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), qf(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), U && t.flags & 1048576 && Lu(t, el, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ar(e, t), (e = t.pendingProps);
      var l = sn(t, oe.current);
      nn(t, n), (l = Do(null, t, r, e, l, n));
      var i = Mo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((i = !0), qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            To(t),
            (l.updater = kl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ai(t, r, e, n),
            (t = Bi(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && jo(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ar(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = pp(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = $i(null, t, r, e, n);
            break e;
          case 1:
            t = Js(null, t, r, e, n);
            break e;
          case 11:
            t = Xs(null, t, r, e, n);
            break e;
          case 14:
            t = Zs(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        $i(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Js(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ac(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Du(e, t),
          rl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = dn(Error(k(423)), t)), (t = qs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = dn(Error(k(424)), t)), (t = qs(e, t, r, n, l));
            break e;
          } else
            for (
              ye = ut(t.stateNode.containerInfo.firstChild),
                xe = t,
                U = !0,
                Ie = null,
                n = Iu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((an(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Mu(t),
        e === null && Di(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ti(r, l) ? (o = null) : i !== null && Ti(r, i) && (t.flags |= 32),
        sc(e, t),
        se(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Di(t), null;
    case 13:
      return uc(e, t, n);
    case 4:
      return (
        Ro(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Xs(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          M(tl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !he.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Ke(-1, n & -n)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var g = c.pending;
                        g === null
                          ? (a.next = a)
                          : ((a.next = g.next), (g.next = a)),
                          (c.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Mi(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Mi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        nn(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        Zs(e, t, r, l, n)
      );
    case 15:
      return ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ar(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), qr(t)) : (e = !1),
        nn(t, n),
        nc(t, r, l),
        Ai(t, r, l, n),
        Bi(null, t, r, !0, e, n)
      );
    case 19:
      return cc(e, t, n);
    case 22:
      return oc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Cc(e, t) {
  return ba(e, t);
}
function fp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new fp(e, t, n, r);
}
function Ko(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pp(e) {
  if (typeof e == "function") return Ko(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === co)) return 11;
    if (e === fo) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Br(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ko(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Bt:
        return Lt(n.children, l, i, t);
      case uo:
        (o = 8), (l |= 8);
        break;
      case ai:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = ai), (e.lanes = i), e
        );
      case ui:
        return (e = Ee(13, n, t, l)), (e.elementType = ui), (e.lanes = i), e;
      case ci:
        return (e = Ee(19, n, t, l)), (e.elementType = ci), (e.lanes = i), e;
      case Ma:
        return Nl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Oa:
              o = 10;
              break e;
            case Da:
              o = 9;
              break e;
            case co:
              o = 11;
              break e;
            case fo:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Lt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = Ma),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ri(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function li(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Go(e, t, n, r, l, i, o, s, a) {
  return (
    (e = new hp(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    To(i),
    e
  );
}
function mp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _c(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return _u(e, n, t);
  }
  return t;
}
function Pc(e, t, n, r, l, i, o, s, a) {
  return (
    (e = Go(n, r, !0, e, l, i, o, s, a)),
    (e.context = _c(null)),
    (n = e.current),
    (r = ae()),
    (l = ft(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    ct(n, i, l),
    (e.current.lanes = l),
    ir(e, l, r),
    ge(e, r),
    e
  );
}
function El(e, t, n, r) {
  var l = t.current,
    i = ae(),
    o = ft(l);
  return (
    (n = _c(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, o)),
    e !== null && (De(e, l, o, i), Dr(e, l, o)),
    o
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function aa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yo(e, t) {
  aa(e, t), (e = e.alternate) && aa(e, t);
}
function gp() {
  return null;
}
var Lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xo(e) {
  this._internalRoot = e;
}
Cl.prototype.render = Xo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  El(e, t, null, null);
};
Cl.prototype.unmount = Xo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      El(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ou();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && au(e);
  }
};
function Zo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ua() {}
function vp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = dl(o);
        i.call(c);
      };
    }
    var o = Pc(t, r, e, 0, null, !1, !1, "", ua);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = dl(a);
      s.call(c);
    };
  }
  var a = Go(e, 0, !1, null, null, !1, !1, "", ua);
  return (
    (e._reactRootContainer = a),
    (e[Ye] = a.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      El(t, a, n, r);
    }),
    a
  );
}
function Pl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = dl(o);
        s.call(a);
      };
    }
    El(t, o, e, l);
  } else o = vp(n, t, e, l, r);
  return dl(o);
}
lu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 &&
          (mo(t, n | 1), ge(t, K()), !(O & 6) && ((fn = K() + 500), xt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ae();
          De(r, e, 1, l);
        }
      }),
        Yo(e, 1);
  }
};
go = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ae();
      De(t, e, 134217728, n);
    }
    Yo(e, 134217728);
  }
};
iu = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = ae();
      De(n, e, t, r);
    }
    Yo(e, t);
  }
};
ou = function () {
  return D;
};
su = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
wi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(k(90));
            Aa(r), pi(r, l);
          }
        }
      }
      break;
    case "textarea":
      $a(e, n);
      break;
    case "select":
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
Ga = Ho;
Ya = Ot;
var yp = { usingClientEntryPoint: !1, Events: [sr, Qt, yl, Qa, Ka, Ho] },
  En = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  xp = {
    bundleType: En.bundleType,
    version: En.version,
    rendererPackageName: En.rendererPackageName,
    rendererConfig: En.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ja(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: En.findFiberByHostInstance || gp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber)
    try {
      (hl = Lr.inject(xp)), ($e = Lr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zo(t)) throw Error(k(200));
  return mp(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Zo(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Lc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Go(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    new Xo(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Ja(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return Ot(e);
};
ke.hydrate = function (e, t, n) {
  if (!_l(t)) throw Error(k(200));
  return Pl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Zo(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Lc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Pc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Gn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Cl(t);
};
ke.render = function (e, t, n) {
  if (!_l(t)) throw Error(k(200));
  return Pl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!_l(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Ho;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_l(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Pl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function Tc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc);
    } catch (e) {
      console.error(e);
    }
}
Tc(), (Ta.exports = ke);
var wp = Ta.exports;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
var it;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(it || (it = {}));
const ca = "popstate";
function kp(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: o = "/",
      search: s = "",
      hash: a = "",
    } = Ft(l.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      bi(
        "",
        { pathname: o, search: s, hash: a },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default",
      )
    );
  }
  function n(l, i) {
    let o = l.document.querySelector("base"),
      s = "";
    if (o && o.getAttribute("href")) {
      let a = l.location.href,
        c = a.indexOf("#");
      s = c === -1 ? a : a.slice(0, c);
    }
    return s + "#" + (typeof i == "string" ? i : fl(i));
  }
  function r(l, i) {
    Jo(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")",
    );
  }
  return jp(t, n, r, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Jo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Sp() {
  return Math.random().toString(36).substr(2, 8);
}
function da(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function bi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    nr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ft(t) : t,
      { state: n, key: (t && t.key) || r || Sp() },
    )
  );
}
function fl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ft(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function jp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    s = it.Pop,
    a = null,
    c = g();
  c == null && ((c = 0), o.replaceState(nr({}, o.state, { idx: c }), ""));
  function g() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    s = it.Pop;
    let C = g(),
      f = C == null ? null : C - c;
    (c = C), a && a({ action: s, location: w.location, delta: f });
  }
  function m(C, f) {
    s = it.Push;
    let d = bi(w.location, C, f);
    n && n(d, C), (c = g() + 1);
    let p = da(d, c),
      v = w.createHref(d);
    try {
      o.pushState(p, "", v);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      l.location.assign(v);
    }
    i && a && a({ action: s, location: w.location, delta: 1 });
  }
  function y(C, f) {
    s = it.Replace;
    let d = bi(w.location, C, f);
    n && n(d, C), (c = g());
    let p = da(d, c),
      v = w.createHref(d);
    o.replaceState(p, "", v),
      i && a && a({ action: s, location: w.location, delta: 0 });
  }
  function x(C) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof C == "string" ? C : fl(C);
    return (
      (d = d.replace(/ $/, "%20")),
      Y(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d,
      ),
      new URL(d, f)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(l, o);
    },
    listen(C) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ca, h),
        (a = C),
        () => {
          l.removeEventListener(ca, h), (a = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: x,
    encodeLocation(C) {
      let f = x(C);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: y,
    go(C) {
      return o.go(C);
    },
  };
  return w;
}
var fa;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fa || (fa = {}));
function Np(e, t, n) {
  return n === void 0 && (n = "/"), Ep(e, t, n);
}
function Ep(e, t, n, r) {
  let l = typeof t == "string" ? Ft(t) : t,
    i = qo(l.pathname || "/", n);
  if (i == null) return null;
  let o = Rc(e);
  Cp(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a) {
    let c = Ap(i);
    s = Dp(o[a], c);
  }
  return s;
}
function Rc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (Y(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = ht([r, a.relativePath]),
      g = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (Y(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      Rc(i.children, t, g, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: Ip(c, i.index), routesMeta: g });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, o);
      else for (let a of zc(i.path)) l(i, o, a);
    }),
    t
  );
}
function zc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = zc(r.join("/")),
    s = [];
  return (
    s.push(...o.map((a) => (a === "" ? i : [i, a].join("/")))),
    l && s.push(...o),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Cp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Op(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const _p = /^:[\w-]+$/,
  Pp = 3,
  Lp = 2,
  Tp = 1,
  Rp = 10,
  zp = -2,
  pa = (e) => e === "*";
function Ip(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(pa) && (r += zp),
    t && (r += Lp),
    n
      .filter((l) => !pa(l))
      .reduce((l, i) => l + (_p.test(i) ? Pp : i === "" ? Tp : Rp), r)
  );
}
function Op(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Dp(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let a = r[s],
      c = s === r.length - 1,
      g = i === "/" ? t : t.slice(i.length) || "/",
      h = Mp(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: c },
        g,
      ),
      m = a.route;
    if (!h) return null;
    Object.assign(l, h.params),
      o.push({
        params: l,
        pathname: ht([i, h.pathname]),
        pathnameBase: Wp(ht([i, h.pathnameBase])),
        route: m,
      }),
      h.pathnameBase !== "/" && (i = ht([i, h.pathnameBase]));
  }
  return o;
}
function Mp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Fp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((c, g, h) => {
      let { paramName: m, isOptional: y } = g;
      if (m === "*") {
        let w = s[h] || "";
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = s[h];
      return (
        y && !x ? (c[m] = void 0) : (c[m] = (x || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Fp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Jo(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Ap(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Jo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function qo(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Up(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ft(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : $p(n, t)) : t,
    search: Hp(r),
    hash: Vp(l),
  };
}
function $p(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ii(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Bp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Ic(e, t) {
  let n = Bp(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Oc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Ft(e))
    : ((l = nr({}, e)),
      Y(
        !l.pathname || !l.pathname.includes("?"),
        ii("?", "pathname", "search", l),
      ),
      Y(
        !l.pathname || !l.pathname.includes("#"),
        ii("#", "pathname", "hash", l),
      ),
      Y(!l.search || !l.search.includes("#"), ii("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    s;
  if (o == null) s = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (h -= 1);
      l.pathname = m.join("/");
    }
    s = h >= 0 ? t[h] : "/";
  }
  let a = Up(l, s),
    c = o && o !== "/" && o.endsWith("/"),
    g = (i || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || g) && (a.pathname += "/"), a;
}
const ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Wp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Hp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Vp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Qp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Dc = ["post", "put", "patch", "delete"];
new Set(Dc);
const Kp = ["get", ...Dc];
new Set(Kp);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
const bo = S.createContext(null),
  Gp = S.createContext(null),
  At = S.createContext(null),
  Ll = S.createContext(null),
  wt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Mc = S.createContext(null);
function Yp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ur() || Y(!1);
  let { basename: r, navigator: l } = S.useContext(At),
    { hash: i, pathname: o, search: s } = Ac(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : ht([r, o])),
    l.createHref({ pathname: a, search: s, hash: i })
  );
}
function ur() {
  return S.useContext(Ll) != null;
}
function cr() {
  return ur() || Y(!1), S.useContext(Ll).location;
}
function Fc(e) {
  S.useContext(At).static || S.useLayoutEffect(e);
}
function Xp() {
  let { isDataRoute: e } = S.useContext(wt);
  return e ? ch() : Zp();
}
function Zp() {
  ur() || Y(!1);
  let e = S.useContext(bo),
    { basename: t, future: n, navigator: r } = S.useContext(At),
    { matches: l } = S.useContext(wt),
    { pathname: i } = cr(),
    o = JSON.stringify(Ic(l, n.v7_relativeSplatPath)),
    s = S.useRef(!1);
  return (
    Fc(() => {
      s.current = !0;
    }),
    S.useCallback(
      function (c, g) {
        if ((g === void 0 && (g = {}), !s.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let h = Oc(c, JSON.parse(o), i, g.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : ht([t, h.pathname])),
          (g.replace ? r.replace : r.push)(h, g.state, g);
      },
      [t, r, o, i, e],
    )
  );
}
const Jp = S.createContext(null);
function qp(e) {
  let t = S.useContext(wt).outlet;
  return t && S.createElement(Jp.Provider, { value: e }, t);
}
function Ac(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = S.useContext(At),
    { matches: l } = S.useContext(wt),
    { pathname: i } = cr(),
    o = JSON.stringify(Ic(l, r.v7_relativeSplatPath));
  return S.useMemo(() => Oc(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function bp(e, t) {
  return eh(e, t);
}
function eh(e, t, n, r) {
  ur() || Y(!1);
  let { navigator: l, static: i } = S.useContext(At),
    { matches: o } = S.useContext(wt),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let c = s ? s.pathnameBase : "/";
  s && s.route;
  let g = cr(),
    h;
  if (t) {
    var m;
    let f = typeof t == "string" ? Ft(t) : t;
    c === "/" || ((m = f.pathname) != null && m.startsWith(c)) || Y(!1),
      (h = f);
  } else h = g;
  let y = h.pathname || "/",
    x = y;
  if (c !== "/") {
    let f = c.replace(/^\//, "").split("/");
    x = "/" + y.replace(/^\//, "").split("/").slice(f.length).join("/");
  }
  let w = Np(e, { pathname: x }),
    C = ih(
      w &&
        w.map((f) =>
          Object.assign({}, f, {
            params: Object.assign({}, a, f.params),
            pathname: ht([
              c,
              l.encodeLocation
                ? l.encodeLocation(f.pathname).pathname
                : f.pathname,
            ]),
            pathnameBase:
              f.pathnameBase === "/"
                ? c
                : ht([
                    c,
                    l.encodeLocation
                      ? l.encodeLocation(f.pathnameBase).pathname
                      : f.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && C
    ? S.createElement(
        Ll.Provider,
        {
          value: {
            location: rr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h,
            ),
            navigationType: it.Pop,
          },
        },
        C,
      )
    : C;
}
function th() {
  let e = uh(),
    t = Qp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const nh = S.createElement(th, null);
class rh extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          wt.Provider,
          { value: this.props.routeContext },
          S.createElement(Mc.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function lh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = S.useContext(bo);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(wt.Provider, { value: t }, r)
  );
}
function ih(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    s = (l = n) == null ? void 0 : l.errors;
  if (s != null) {
    let g = o.findIndex(
      (h) => h.route.id && (s == null ? void 0 : s[h.route.id]) !== void 0,
    );
    g >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, g + 1)));
  }
  let a = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let g = 0; g < o.length; g++) {
      let h = o[g];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = g),
        h.route.id)
      ) {
        let { loaderData: m, errors: y } = n,
          x =
            h.route.loader &&
            m[h.route.id] === void 0 &&
            (!y || y[h.route.id] === void 0);
        if (h.route.lazy || x) {
          (a = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((g, h, m) => {
    let y,
      x = !1,
      w = null,
      C = null;
    n &&
      ((y = s && h.route.id ? s[h.route.id] : void 0),
      (w = h.route.errorElement || nh),
      a &&
        (c < 0 && m === 0
          ? (dh("route-fallback"), (x = !0), (C = null))
          : c === m &&
            ((x = !0), (C = h.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, m + 1)),
      d = () => {
        let p;
        return (
          y
            ? (p = w)
            : x
              ? (p = C)
              : h.route.Component
                ? (p = S.createElement(h.route.Component, null))
                : h.route.element
                  ? (p = h.route.element)
                  : (p = g),
          S.createElement(lh, {
            match: h,
            routeContext: { outlet: g, matches: f, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || m === 0)
      ? S.createElement(rh, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: y,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Uc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Uc || {}),
  $c = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })($c || {});
function oh(e) {
  let t = S.useContext(bo);
  return t || Y(!1), t;
}
function sh(e) {
  let t = S.useContext(Gp);
  return t || Y(!1), t;
}
function ah(e) {
  let t = S.useContext(wt);
  return t || Y(!1), t;
}
function Bc(e) {
  let t = ah(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function uh() {
  var e;
  let t = S.useContext(Mc),
    n = sh(),
    r = Bc();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ch() {
  let { router: e } = oh(Uc.UseNavigateStable),
    t = Bc($c.UseNavigateStable),
    n = S.useRef(!1);
  return (
    Fc(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, rr({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
const ha = {};
function dh(e, t, n) {
  ha[e] || (ha[e] = !0);
}
function fh(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function ph(e) {
  return qp(e.context);
}
function de(e) {
  Y(!1);
}
function hh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = it.Pop,
    navigator: i,
    static: o = !1,
    future: s,
  } = e;
  ur() && Y(!1);
  let a = t.replace(/^\/*/, "/"),
    c = S.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: o,
        future: rr({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, i, o],
    );
  typeof r == "string" && (r = Ft(r));
  let {
      pathname: g = "/",
      search: h = "",
      hash: m = "",
      state: y = null,
      key: x = "default",
    } = r,
    w = S.useMemo(() => {
      let C = qo(g, a);
      return C == null
        ? null
        : {
            location: { pathname: C, search: h, hash: m, state: y, key: x },
            navigationType: l,
          };
    }, [a, g, h, m, y, x, l]);
  return w == null
    ? null
    : S.createElement(
        At.Provider,
        { value: c },
        S.createElement(Ll.Provider, { children: n, value: w }),
      );
}
function mh(e) {
  let { children: t, location: n } = e;
  return bp(eo(t), n);
}
new Promise(() => {});
function eo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, l) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === S.Fragment) {
        n.push.apply(n, eo(r.props.children, i));
        return;
      }
      r.type !== de && Y(!1), !r.props.index || !r.props.children || Y(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = eo(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    to.apply(this, arguments)
  );
}
function gh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function vh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function yh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !vh(e);
}
const xh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  wh = "6";
try {
  window.__reactRouterVersion = wh;
} catch {}
const kh = "startTransition",
  ma = ad[kh];
function Sh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = S.useRef();
  i.current == null && (i.current = kp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [s, a] = S.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    g = S.useCallback(
      (h) => {
        c && ma ? ma(() => a(h)) : a(h);
      },
      [a, c],
    );
  return (
    S.useLayoutEffect(() => o.listen(g), [o, g]),
    S.useEffect(() => fh(r), [r]),
    S.createElement(hh, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
const jh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Nh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ln = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: s,
        target: a,
        to: c,
        preventScrollReset: g,
        viewTransition: h,
      } = t,
      m = gh(t, xh),
      { basename: y } = S.useContext(At),
      x,
      w = !1;
    if (typeof c == "string" && Nh.test(c) && ((x = c), jh))
      try {
        let p = new URL(window.location.href),
          v = c.startsWith("//") ? new URL(p.protocol + c) : new URL(c),
          j = qo(v.pathname, y);
        v.origin === p.origin && j != null
          ? (c = j + v.search + v.hash)
          : (w = !0);
      } catch {}
    let C = Yp(c, { relative: l }),
      f = Eh(c, {
        replace: o,
        state: s,
        target: a,
        preventScrollReset: g,
        relative: l,
        viewTransition: h,
      });
    function d(p) {
      r && r(p), p.defaultPrevented || f(p);
    }
    return S.createElement(
      "a",
      to({}, m, { href: x || C, onClick: w || i ? r : d, ref: n, target: a }),
    );
  });
var ga;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ga || (ga = {}));
var va;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(va || (va = {}));
function Eh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    a = Xp(),
    c = cr(),
    g = Ac(e, { relative: o });
  return S.useCallback(
    (h) => {
      if (yh(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : fl(c) === fl(g);
        a(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [c, a, g, r, l, n, e, i, o, s],
  );
}
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ch = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Wc = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _h = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ph = S.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: i,
      iconNode: o,
      ...s
    },
    a,
  ) =>
    S.createElement(
      "svg",
      {
        ref: a,
        ..._h,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Wc("lucide", l),
        ...s,
      },
      [
        ...o.map(([c, g]) => S.createElement(c, g)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const es = (e, t) => {
  const n = S.forwardRef(({ className: r, ...l }, i) =>
    S.createElement(Ph, {
      ref: i,
      iconNode: t,
      className: Wc(`lucide-${Ch(e)}`, r),
      ...l,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lh = es("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Th = es("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rh = es("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ya = [
    { name: "Introduction", path: "/introduction" },
    { name: "Generative Models", path: "/generative-models" },
    { name: "Captioning", path: "/captioning" },
    { name: "Model Architectures", path: "/model-architectures" },
    { name: "Prompt Demo", path: "/prompt-demo" },
    { name: "Model Comparison", path: "/model-comparison" },
    { name: "Prompt Engineering", path: "/prompt-engineering" },
    { name: "Legal & Ethical", path: "/legal-ethical" },
    { name: "Deep Dive", path: "/deep-dive" },
    { name: "How to Use", path: "/how-to-use" },
    { name: "References", path: "/references" },
  ],
  zh = () => {
    const [e, t] = S.useState(!1),
      n = cr(),
      r = (l) => {
        const i = n.pathname.replace(/^\//, ""),
          o = l.replace(/^\//, "");
        return i === o;
      };
    return u.jsxs("header", {
      className: "bg-white shadow-sm sticky top-0 z-50",
      children: [
        u.jsx("nav", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: u.jsxs("div", {
            className: "flex justify-between h-16",
            children: [
              u.jsx("div", {
                className: "flex items-center mr-8",
                children: u.jsx(ln, {
                  to: "/",
                  className: "flex-shrink-0 flex items-center",
                  children: u.jsx("span", {
                    className: "text-xl font-bold text-indigo-600",
                    children: "Text-to-Image AI",
                  }),
                }),
              }),
              u.jsx("div", {
                className: "hidden md:ml-6 md:flex md:space-x-6",
                children: ya.map((l) =>
                  u.jsx(
                    ln,
                    {
                      to: l.path,
                      className: `inline-flex items-center px-1 pt-1 text-sm font-medium ${r(l.path) ? "border-b-2 border-indigo-500 text-gray-900" : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`,
                      children: l.name,
                    },
                    l.name,
                  ),
                ),
              }),
              u.jsx("div", {
                className: "flex items-center md:hidden",
                children: u.jsxs("button", {
                  onClick: () => t(!e),
                  className:
                    "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                  children: [
                    u.jsx("span", {
                      className: "sr-only",
                      children: "Open main menu",
                    }),
                    e
                      ? u.jsx(Rh, { className: "block h-6 w-6" })
                      : u.jsx(Th, { className: "block h-6 w-6" }),
                  ],
                }),
              }),
            ],
          }),
        }),
        e &&
          u.jsx("div", {
            className: "md:hidden",
            children: u.jsx("div", {
              className: "pt-2 pb-3 space-y-1",
              children: ya.map((l) =>
                u.jsx(
                  ln,
                  {
                    to: l.path,
                    className: `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${r(l.path) ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"}`,
                    onClick: () => t(!1),
                    children: l.name,
                  },
                  l.name,
                ),
              ),
            }),
          }),
      ],
    });
  },
  Ih = () =>
    u.jsx("footer", {
      className: "bg-white border-t border-gray-200",
      children: u.jsx("div", {
        className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          className: "flex flex-col md:flex-row justify-between items-center",
          children: [
            u.jsx("div", {
              className: "mb-4 md:mb-0",
              children: u.jsx("p", {
                className: "text-gray-500 text-sm",
                children: "CS396 Project - Text-to-Image Generative AI",
              }),
            }),
            u.jsxs("div", {
              className: "flex space-x-6",
              children: [
                u.jsx(ln, {
                  to: "/how-to-use",
                  className: "text-gray-400 hover:text-gray-500",
                  children: "How to Use",
                }),
                u.jsx(ln, {
                  to: "/references",
                  className: "text-gray-400 hover:text-gray-500",
                  children: "References",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Oh = () =>
    u.jsxs("div", {
      className: "min-h-screen flex flex-col bg-gray-50",
      children: [
        u.jsx(zh, {}),
        u.jsx("main", { className: "flex-grow pt-1", children: u.jsx(ph, {}) }),
        u.jsx(Ih, {}),
      ],
    }),
  Dh = ({ className: e = "" }) =>
    u.jsxs(ln, {
      to: "/introduction",
      className: `inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${e}`,
      children: ["Start Here", u.jsx(Lh, { className: "ml-2 -mr-1 h-5 w-5" })],
    }),
  Mh = () =>
    u.jsxs("div", {
      className: "bg-white w-full",
      children: [
        u.jsxs("div", {
          className: "relative overflow-hidden",
          children: [
            u.jsx("div", {
              className: "absolute inset-0",
              children: u.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 mix-blend-multiply",
              }),
            }),
            u.jsx("div", {
              className:
                "relative px-4 py-32 sm:px-6 sm:py-40 lg:py-48 lg:px-8",
              children: u.jsxs("div", {
                className: "max-w-3xl mx-auto text-center",
                children: [
                  u.jsx("h1", {
                    className:
                      "text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl",
                    children: "Understanding Text-to-Image AI",
                  }),
                  u.jsx("p", {
                    className: "mt-6 text-xl text-indigo-100 max-w-2xl mx-auto",
                    children:
                      "An interactive exploration of how AI transforms text prompts into images, from the data it learns from to the ethical considerations of its use.",
                  }),
                  u.jsx("div", {
                    className: "mt-10",
                    children: u.jsx(Dh, { className: "text-lg px-8 py-4" }),
                  }),
                ],
              }),
            }),
          ],
        }),
        u.jsx("div", {
          className: "py-16 bg-gray-50 overflow-hidden",
          children: u.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              u.jsxs("div", {
                className: "text-center",
                children: [
                  u.jsx("h2", {
                    className:
                      "text-3xl font-extrabold text-gray-900 sm:text-4xl",
                    children: "Explore the World of Generative AI",
                  }),
                  u.jsx("p", {
                    className: "mt-4 max-w-2xl mx-auto text-xl text-gray-500",
                    children:
                      "This interactive site guides you through the technology behind text-to-image AI models.",
                  }),
                ],
              }),
              u.jsx("div", {
                className: "mt-16",
                children: u.jsxs("div", {
                  className:
                    "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
                  children: [
                    u.jsx("div", {
                      className:
                        "bg-white shadow-md rounded-lg overflow-hidden",
                      children: u.jsxs("div", {
                        className: "p-6",
                        children: [
                          u.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "How Generative Models Learn",
                          }),
                          u.jsx("p", {
                            className: "mt-2 text-base text-gray-500",
                            children:
                              "Discover how AI models are trained on massive datasets of images and captions.",
                          }),
                        ],
                      }),
                    }),
                    u.jsx("div", {
                      className:
                        "bg-white shadow-md rounded-lg overflow-hidden",
                      children: u.jsxs("div", {
                        className: "p-6",
                        children: [
                          u.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "Interactive Demos",
                          }),
                          u.jsx("p", {
                            className: "mt-2 text-base text-gray-500",
                            children:
                              "Experience how small changes to prompts can dramatically affect generated images.",
                          }),
                        ],
                      }),
                    }),
                    u.jsx("div", {
                      className:
                        "bg-white shadow-md rounded-lg overflow-hidden",
                      children: u.jsxs("div", {
                        className: "p-6",
                        children: [
                          u.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "Ethical Considerations",
                          }),
                          u.jsx("p", {
                            className: "mt-2 text-base text-gray-500",
                            children:
                              "Explore the legal and ethical implications of AI-generated imagery.",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  oi = [
    { label: "Prompt", description: "The user’s written description or idea." },
    {
      label: "Tokenization",
      description:
        "Text is split into tokens (smaller pieces) for the AI model.",
    },
    {
      label: "Embedding",
      description:
        "Tokens are converted to numerical “meanings” for the model.",
    },
    {
      label: "Image",
      description: "The model generates an image that matches the prompt.",
    },
  ];
function Fh(e, t) {
  return e.every((n, r) => n.label === t[r].label);
}
function Ah() {
  const [e, t] = S.useState([...oi].sort(() => Math.random() - 0.5)),
    [n, r] = S.useState(null),
    [l, i] = S.useState(!1),
    o = (m) => r(m),
    s = (m, y) => {
      if ((m.preventDefault(), n === null || n === y)) return;
      const x = [...e],
        [w] = x.splice(n, 1);
      x.splice(y, 0, w), t(x), r(y);
    },
    a = () => r(null),
    c = () => i(!0),
    g = () => {
      t([...oi].sort(() => Math.random() - 0.5)), i(!1);
    },
    h = Fh(e, oi);
  return u.jsxs("div", {
    className: "my-8 p-6 bg-gray-50 rounded-xl shadow-md max-w-2xl mx-auto",
    children: [
      u.jsx("h3", {
        className: "text-2xl font-semibold mb-4 text-center",
        children: "Arrange the Pipeline Steps in Order",
      }),
      u.jsx("ul", {
        className: "space-y-4",
        children: e.map((m, y) =>
          u.jsxs(
            "li",
            {
              draggable: !0,
              onDragStart: () => o(y),
              onDragOver: (x) => s(x, y),
              onDrop: a,
              className: `p-4 bg-white rounded-md border cursor-move shadow ${n === y ? "border-indigo-500" : "border-gray-200"}`,
              children: [
                u.jsx("span", { className: "font-bold", children: m.label }),
                u.jsx("div", {
                  className: "text-gray-600 text-sm",
                  children: m.description,
                }),
              ],
            },
            m.label,
          ),
        ),
      }),
      u.jsxs("div", {
        className: "mt-6 flex gap-4 justify-center",
        children: [
          !l &&
            u.jsx("button", {
              className:
                "px-6 py-2 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700",
              onClick: c,
              children: "Check Answer",
            }),
          l &&
            u.jsx("button", {
              className:
                "px-6 py-2 rounded bg-gray-200 text-gray-800 font-medium hover:bg-gray-300",
              onClick: g,
              children: "Try Again",
            }),
        ],
      }),
      l &&
        u.jsx("div", {
          className: "mt-6 text-center",
          children: h
            ? u.jsxs("div", {
                className: "text-green-700 font-semibold",
                children: [
                  "Correct!",
                  u.jsx("br", {}),
                  u.jsx("span", {
                    className: "text-gray-700 block mt-2",
                    children:
                      "A text prompt is tokenized, transformed into a machine-understandable form (embedding), and the model generates an image that matches your intent.",
                  }),
                ],
              })
            : u.jsx("div", {
                className: "text-red-600 font-semibold",
                children:
                  "Not quite! Try dragging the steps into the correct order.",
              }),
        }),
    ],
  });
}
const Uh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("section", {
        className: "max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10",
        children: [
          u.jsx("h2", {
            className: "text-4xl font-bold text-gray-900 mb-12",
            children: "Introduction & Motivation",
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "What is Text-to-Image Generative AI?",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "Text-to-image generative AI is a subset of generative artificial intelligence, specifically designed to produce images directly from textual descriptions. Unlike traditional machine learning models—which primarily classify data or make predictions—generative models create entirely new data, resembling the training examples but not directly copied from them (AWS, 2024).",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "Traditional machine learning models are discriminative, meaning they identify relationships between input features and labels. For instance, they recognize patterns in images—such as pixel arrangements, lines, colors, and shapes—to categorize or label them. Generative models, however, reverse this relationship. They aim to generate new features based on a given label or description. Mathematically, this involves modeling the probability distribution of both inputs and outputs simultaneously, allowing these models to synthesize new and original examples (AWS, 2024).",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "For example, a generative model analyzing animal images would learn variations in features like ear shape, eye placement, tail characteristics, and fur patterns. After capturing these relationships, the model can generate novel animal images, even though these specific images were not present in its training data.",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "Example: DALL-E",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "DALL-E is a prominent text-to-image generative AI model developed by OpenAI. It enables both artists and non-artists to create diverse, high-quality visuals from text prompts. DALL-E is trained on extensive datasets consisting of paired images and descriptive text, empowering it to emulate various artistic styles and create novel images.",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "At its core, DALL-E utilizes a transformer language model, similar to those found in GPT models. The input—text prompts or image descriptions—is converted into smaller units called tokens. DALL-E compares these tokens with patterns learned during its training, interpreting the intent of the user's prompt to generate new, original images quickly and effectively (OpenAI, 2024).",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children: u.jsx("b", {
                  children:
                    "Explore our interactive Drag-and-Drop Pipeline Builder to visualize the process:",
                }),
              }),
              u.jsx(Ah, {}),
            ],
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "Why Should You Care?",
              }),
              u.jsxs("ul", {
                className: "list-disc list-inside ml-6 text-gray-700 space-y-1",
                children: [
                  u.jsx("li", {
                    children: "Lower barriers to visual content creation.",
                  }),
                  u.jsx("li", {
                    children: "Powerful tool for brainstorming and ideation.",
                  }),
                  u.jsx("li", {
                    children: "Rapid prototyping of visual concepts.",
                  }),
                  u.jsx("li", {
                    children:
                      "Augmenting human creativity with machine capabilities.",
                  }),
                  u.jsx("li", {
                    children:
                      "Accessible visual expression regardless of traditional artistic skills.",
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "How to Use This Site",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "Navigate using the top bar to explore various topics:",
              }),
              u.jsxs("ul", {
                className: "list-disc list-inside ml-6 text-gray-700 space-y-1",
                children: [
                  u.jsx("li", {
                    children:
                      "Adjust complexity levels through provided options.",
                  }),
                  u.jsx("li", {
                    children:
                      "Interactive elements help reinforce key concepts.",
                  }),
                  u.jsx("li", {
                    children:
                      "External links offer additional resources for further exploration.",
                  }),
                ],
              }),
              u.jsx("p", {
                className: "text-gray-700 mt-4 italic",
                children:
                  "Disclaimer: This site provides an educational overview. Users should refer to original research and documentation for detailed and specific implementations.",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-4",
            children: [
              u.jsx("h4", {
                className: "text-xl font-semibold text-gray-800 mb-3",
                children: "References",
              }),
              u.jsxs("ul", {
                className:
                  "list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm",
                children: [
                  u.jsxs("li", {
                    children: [
                      "AWS. (2024). What is Generative AI? Retrieved from ",
                      u.jsx("a", {
                        href: "https://aws.amazon.com/what-is/generative-ai/",
                        className: "text-blue-600 underline",
                        children: "AWS Generative AI",
                      }),
                      ".",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "OpenAI. (2024). DALL-E. Retrieved from ",
                      u.jsx("a", {
                        href: "https://openai.com/dall-e",
                        className: "text-blue-600 underline",
                        children: "OpenAI DALL-E",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  $h = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("section", {
        className: "max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10",
        children: [
          u.jsx("h2", {
            className: "text-4xl font-bold text-gray-900 mb-12",
            children: "How Generative Models Learn",
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "Dataset Origins",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "Generative AI models depend on vast datasets of images paired with descriptive captions. These pairs are critical for helping AI learn the relationship between language and visual content.",
              }),
              u.jsxs("ul", {
                className:
                  "list-disc list-inside ml-6 text-gray-700 space-y-1 mb-4",
                children: [
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Web-scraped datasets:" }),
                      " Billions of image-text pairs gathered from public websites and image-sharing platforms (e.g., LAION-5B).",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Curated datasets:" }),
                      " Smaller, human-annotated datasets with higher-quality captions and less noise (e.g., MS COCO).",
                    ],
                  }),
                ],
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-2",
                children: u.jsx("b", {
                  children: "Key concerns with datasets:",
                }),
              }),
              u.jsxs("ul", {
                className: "list-disc list-inside ml-6 text-gray-700 space-y-1",
                children: [
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Quality and relevance:" }),
                      " Web-scraped data is abundant but often noisy and ambiguous.",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Biases and stereotypes:" }),
                      " Datasets can reinforce existing societal biases, resulting in biased outputs Birhane et al., 2021).",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Licensing and copyright:" }),
                      " Many images are used without explicit creator permission, raising legal questions (Harvard Business Review, 2023).",
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "Automated Captioning & Tokenization",
              }),
              u.jsxs("p", {
                className: "text-gray-700 mb-4",
                children: [
                  "When you enter a prompt, generative AI models first break your input into smaller units called ",
                  u.jsx("b", { children: "tokens" }),
                  " (which can be words or parts of words). This tokenization enables models to process text mathematically.",
                ],
              }),
              u.jsxs("ul", {
                className:
                  "list-disc list-inside ml-6 text-gray-700 space-y-1 mb-4",
                children: [
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Example Prompt:" }),
                      ' "A dog on the moon"',
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Tokens:" }),
                      ' [ "A", "dog", "on", "the", "moon" ]',
                    ],
                  }),
                ],
              }),
              u.jsxs("p", {
                className: "text-gray-700 mb-4",
                children: [
                  u.jsx("b", { children: "Role of captioning pipelines:" }),
                  " Automated systems generate captions for images at scale. This enables models to learn from large, loosely labeled datasets. However, automatically generated captions can be vague or inaccurate (Radford et al., 2019).",
                ],
              }),
              u.jsxs("ul", {
                className: "list-disc list-inside ml-6 text-gray-700 space-y-1",
                children: [
                  u.jsx("li", {
                    children: "Extract visual features from images",
                  }),
                  u.jsx("li", {
                    children: "Generate descriptive captions or tags",
                  }),
                  u.jsx("li", {
                    children:
                      "Associate these captions with images for training",
                  }),
                ],
              }),
              u.jsx("p", {
                className: "text-gray-700 mt-4",
                children:
                  "These pipelines allow generative models to learn from huge datasets, despite some inaccuracies (Vinyals et al., 2015).",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "Model Architectures (High-Level)",
              }),
              u.jsx("div", {
                className: "mb-3",
                children: u.jsx("b", {
                  children:
                    "Generative AI uses several approaches to create images from text. Here’s a quick comparison:",
                }),
              }),
              u.jsxs("ul", {
                className:
                  "list-disc list-inside ml-6 text-gray-700 space-y-2 mb-6",
                children: [
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Diffusion Models:" }),
                      " Start with random noise and gradually refine it into a clear image (e.g., Stable Diffusion, DALL·E 2).",
                      u.jsxs("span", {
                        className: "block text-gray-500 text-sm ml-4",
                        children: [
                          "+ Exceptional detail and realism",
                          u.jsx("br", {}),
                          "– Slower, resource-intensive",
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Autoregressive Models:" }),
                      " Generate images pixel-by-pixel, each one depending on the last (e.g., original DALL·E).",
                      u.jsxs("span", {
                        className: "block text-gray-500 text-sm ml-4",
                        children: [
                          "+ Precise control",
                          u.jsx("br", {}),
                          "– Slow for large images",
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("b", { children: "Encoder-Decoder Models:" }),
                      " Convert prompts into numerical embeddings and then decode them into images (e.g., Imagen, conditional GANs).",
                      u.jsxs("span", {
                        className: "block text-gray-500 text-sm ml-4",
                        children: [
                          "+ Fast and efficient",
                          u.jsx("br", {}),
                          "– May lack fine-grained detail",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "overflow-x-auto mt-8",
                children: u.jsxs("table", {
                  className:
                    "min-w-full border text-gray-700 text-left text-base",
                  children: [
                    u.jsx("thead", {
                      children: u.jsxs("tr", {
                        children: [
                          u.jsx("th", {
                            className:
                              "border px-4 py-2 bg-gray-100 font-semibold",
                            children: "Trade-off",
                          }),
                          u.jsx("th", {
                            className:
                              "border px-4 py-2 bg-gray-100 font-semibold",
                            children: "Description",
                          }),
                        ],
                      }),
                    }),
                    u.jsxs("tbody", {
                      children: [
                        u.jsxs("tr", {
                          children: [
                            u.jsx("td", {
                              className: "border px-4 py-2",
                              children: "Quality vs. Speed",
                            }),
                            u.jsx("td", {
                              className: "border px-4 py-2",
                              children:
                                "Higher quality images usually require more compute and time.",
                            }),
                          ],
                        }),
                        u.jsxs("tr", {
                          children: [
                            u.jsx("td", {
                              className: "border px-4 py-2",
                              children: "Generalization vs. Specialization",
                            }),
                            u.jsx("td", {
                              className: "border px-4 py-2",
                              children:
                                "Some models can handle many prompts; others excel at specific styles or domains.",
                            }),
                          ],
                        }),
                        u.jsxs("tr", {
                          children: [
                            u.jsx("td", {
                              className: "border px-4 py-2",
                              children: "Resource Requirements",
                            }),
                            u.jsx("td", {
                              className: "border px-4 py-2",
                              children:
                                "More powerful models need special hardware (GPUs/TPUs), limiting everyday use.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-4",
            children: [
              u.jsx("h4", {
                className: "text-xl font-semibold text-gray-800 mb-3",
                children: "References & Further Reading",
              }),
              u.jsxs("ul", {
                className:
                  "list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm",
                children: [
                  u.jsxs("li", {
                    children: [
                      "LAION-5B: ",
                      u.jsx("a", {
                        href: "https://laion.ai/blog/laion-5b/",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Schuhmann et al., 2022",
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "MS COCO Dataset: ",
                      u.jsx("a", {
                        href: "https://arxiv.org/abs/1405.0312",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Lin et al., 2014",
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "Bias in Datasets: ",
                      u.jsx("a", {
                        href: "https://arxiv.org/abs/2106.15590",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Birhane et al., 2021",
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "Licensing Concerns: ",
                      u.jsx("a", {
                        href: "https://hbr.org/2023/04/generative-ai-has-an-intellectual-property-problem",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Harvard Business Review, 2023",
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "Tokenization: ",
                      u.jsx("a", {
                        href: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Radford et al., 2019",
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "Image Captioning: ",
                      u.jsx("a", {
                        href: "https://arxiv.org/abs/1411.4555",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Vinyals et al., 2015",
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "Diffusion Models: ",
                      u.jsx("a", {
                        href: "https://arxiv.org/abs/2112.10752",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Rombach et al., 2022",
                      }),
                      ", ",
                      u.jsx("a", {
                        href: "https://openai.com/blog/dall-e/",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "OpenAI DALL·E 2",
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "Autoregressive Models: ",
                      u.jsx("a", {
                        href: "https://arxiv.org/abs/2102.12092",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Original DALL·E paper",
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      "Encoder-Decoder Models: ",
                      u.jsx("a", {
                        href: "https://imagen.research.google/",
                        className: "text-blue-600 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Google Imagen, 2022",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Bh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8",
        children: [
          u.jsx("h2", {
            className: "text-3xl font-extrabold text-gray-900 mb-8",
            children: "Automated Captioning & Tokenization",
          }),
          u.jsxs("div", {
            className: "prose prose-indigo prose-lg max-w-none text-gray-500",
            children: [
              u.jsx("p", {
                children:
                  "This page will cover the process from user prompt to token IDs and the role of captioning pipelines.",
              }),
              u.jsx("p", { children: "Content coming soon..." }),
            ],
          }),
        ],
      }),
    }),
  Wh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8",
        children: [
          u.jsx("h2", {
            className: "text-3xl font-extrabold text-gray-900 mb-8",
            children: "Model Architectures",
          }),
          u.jsxs("div", {
            className: "prose prose-indigo prose-lg max-w-none text-gray-500",
            children: [
              u.jsx("p", {
                children:
                  "This page will cover diffusion vs. autoregressive vs. encoder-decoder architectures and their key trade-offs.",
              }),
              u.jsx("p", { children: "Content coming soon..." }),
            ],
          }),
        ],
      }),
    }),
  Hh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8",
        children: [
          u.jsx("h2", {
            className: "text-3xl font-extrabold text-gray-900 mb-8",
            children: "Interactive Demo: Prompt ↔ Image",
          }),
          u.jsx("div", {
            className:
              "prose prose-indigo prose-lg max-w-none text-gray-500 mb-8",
            children: u.jsx("p", {
              children:
                "This page will feature an interactive demo with a slider to tweak a prompt's adjectives and show side-by-side images.",
            }),
          }),
          u.jsx("div", {
            className: "bg-gray-100 p-8 rounded-lg",
            children: u.jsx("p", {
              className: "text-center text-gray-500",
              children: "Interactive demo will be implemented here",
            }),
          }),
        ],
      }),
    }),
  Vh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8",
        children: [
          u.jsx("h2", {
            className: "text-3xl font-extrabold text-gray-900 mb-8",
            children: "Interactive Demo: Model Comparison",
          }),
          u.jsx("div", {
            className:
              "prose prose-indigo prose-lg max-w-none text-gray-500 mb-8",
            children: u.jsx("p", {
              children:
                'This page will feature an interactive demo with an input box and "Generate" button for two models with side-by-side outputs.',
            }),
          }),
          u.jsx("div", {
            className: "bg-gray-100 p-8 rounded-lg",
            children: u.jsx("p", {
              className: "text-center text-gray-500",
              children: "Interactive demo will be implemented here",
            }),
          }),
        ],
      }),
    }),
  Qh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8",
        children: [
          u.jsx("h2", {
            className: "text-3xl font-extrabold text-gray-900 mb-8",
            children: "Prompt Engineering Tips",
          }),
          u.jsxs("div", {
            className: "prose prose-indigo prose-lg max-w-none text-gray-500",
            children: [
              u.jsx("p", {
                children:
                  "This page will provide plain-language guidelines for clearer prompts and before/after examples.",
              }),
              u.jsx("p", { children: "Content coming soon..." }),
            ],
          }),
        ],
      }),
    }),
  Kh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8",
        children: [
          u.jsx("h2", {
            className: "text-3xl font-extrabold text-gray-900 mb-8",
            children: "Legal & Ethical Considerations",
          }),
          u.jsxs("div", {
            className: "prose prose-indigo prose-lg max-w-none text-gray-500",
            children: [
              u.jsx("p", {
                children:
                  'This page will cover copyright, consent, and "fair use" basics, sources of bias and stereotyping, and mitigation strategies.',
              }),
              u.jsx("p", { children: "Content coming soon..." }),
            ],
          }),
        ],
      }),
    }),
  Gh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8",
        children: [
          u.jsx("h2", {
            className: "text-3xl font-extrabold text-gray-900 mb-8",
            children: "Deep Dive",
          }),
          u.jsxs("div", {
            className: "prose prose-indigo prose-lg max-w-none text-gray-500",
            children: [
              u.jsx("p", {
                children:
                  "This optional deep dive section will cover encoder/decoder internals and visualizing embedding spaces.",
              }),
              u.jsx("p", { children: "Content coming soon..." }),
            ],
          }),
        ],
      }),
    }),
  Yh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("section", {
        className: "max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10",
        children: [
          u.jsx("h2", {
            className: "text-4xl font-bold text-gray-900 mb-12",
            children: "How to Use This Site",
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "Navigating the Content",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "Use the navigation bar at the top of the page to access major sections of the site. Each section covers a distinct topic in the text-to-image AI pipeline:",
              }),
              u.jsxs("ul", {
                className: "list-disc list-inside ml-6 text-gray-700 space-y-1",
                children: [
                  u.jsxs("li", {
                    children: [
                      u.jsx("strong", { children: "Introduction:" }),
                      " Overview of text-to-image AI and its significance",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("strong", { children: "Generative Models:" }),
                      " How models are trained and what data they rely on",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("strong", { children: "Captioning:" }),
                      " How text labels are paired with training images",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("strong", { children: "Model Architectures:" }),
                      " How diffusion and transformer models are structured and optimized",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("strong", { children: "Prompt Demo:" }),
                      " Interactive space to experiment with prompt design",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("strong", { children: "Model Comparison:" }),
                      " Visual differences between model outputs",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("strong", { children: "Prompt Engineering:" }),
                      " How to improve output with prompt design techniques",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("strong", { children: "Legal & Ethical:" }),
                      " Discussion of consent, copyright, and algorithmic bias",
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "Interactive Features",
              }),
              u.jsx("p", {
                className: "text-gray-700 mb-4",
                children:
                  "Many pages include embedded, interactive elements to help reinforce your understanding. Follow the instructions specified alongside each activity.",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-12",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "Recommended Starting Point",
              }),
              u.jsxs("p", {
                className: "text-gray-700",
                children: [
                  "New to the topic? Click the ",
                  u.jsx("strong", { children: "Start Here" }),
                  " button on the homepage to begin with the Introduction section. If you're already familiar, use the navigation bar to explore any topic directly.",
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "mb-4",
            children: [
              u.jsx("h3", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "References & Further Reading",
              }),
              u.jsxs("p", {
                className: "text-gray-700",
                children: [
                  "The ",
                  u.jsx("strong", { children: "References" }),
                  " section provides links to the research papers, official docs, and articles cited throughout the site.",
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Xh = () =>
    u.jsx("div", {
      className: "bg-white w-full",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8",
        children: [
          u.jsx("h2", {
            className: "text-3xl font-extrabold text-gray-900 mb-8",
            children: "References & Further Reading",
          }),
          u.jsxs("div", {
            className: "prose prose-indigo prose-lg max-w-none text-gray-500",
            children: [
              u.jsx("p", {
                children:
                  "This page will provide key tutorials, papers, and community links, as well as a citation list.",
              }),
              u.jsx("p", { children: "Content coming soon..." }),
            ],
          }),
        ],
      }),
    });
function Zh() {
  return u.jsx(Sh, {
    children: u.jsx(mh, {
      children: u.jsxs(de, {
        path: "/",
        element: u.jsx(Oh, {}),
        children: [
          u.jsx(de, { index: !0, element: u.jsx(Mh, {}) }),
          u.jsx(de, { path: "introduction", element: u.jsx(Uh, {}) }),
          u.jsx(de, { path: "generative-models", element: u.jsx($h, {}) }),
          u.jsx(de, { path: "captioning", element: u.jsx(Bh, {}) }),
          u.jsx(de, { path: "model-architectures", element: u.jsx(Wh, {}) }),
          u.jsx(de, { path: "prompt-demo", element: u.jsx(Hh, {}) }),
          u.jsx(de, { path: "model-comparison", element: u.jsx(Vh, {}) }),
          u.jsx(de, { path: "prompt-engineering", element: u.jsx(Qh, {}) }),
          u.jsx(de, { path: "legal-ethical", element: u.jsx(Kh, {}) }),
          u.jsx(de, { path: "deep-dive", element: u.jsx(Gh, {}) }),
          u.jsx(de, { path: "how-to-use", element: u.jsx(Yh, {}) }),
          u.jsx(de, { path: "references", element: u.jsx(Xh, {}) }),
        ],
      }),
    }),
  });
}
wp.render(u.jsx(Zh, {}), document.getElementById("root"));
