;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    334: function (e, t, n) {
      var r = n(335),
        o = n(336),
        l = n(337),
        h = n(338),
        c = n(339)
      function d(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator']
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return f(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return f(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] }
              },
              e: function (e) {
                throw e
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          l = !0,
          h = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (l = e.done), e
          },
          e: function (e) {
            ;(h = !0), (o = e)
          },
          f: function () {
            try {
              l || null == n.return || n.return()
            } finally {
              if (h) throw o
            }
          },
        }
      }
      function f(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i]
        return n
      }
      n(51),
        n(14),
        n(38),
        n(39),
        n(66),
        n(85),
        n(40),
        n(198),
        n(340),
        n(341),
        n(47),
        n(31),
        n(48),
        n(27),
        n(26),
        n(33),
        n(49),
        n(50),
        n(28)
      var _ = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          return Object.keys(e)
            .filter(function (e) {
              return t.includes(e)
            })
            .reduce(function (t, n) {
              return Object.assign(t, c({}, n, e[n]))
            }, {})
        },
        w = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          return Object.keys(e)
            .filter(function (e) {
              return !t.includes(e)
            })
            .reduce(function (t, n) {
              return Object.assign(t, c({}, n, e[n]))
            }, {})
        },
        m = (function () {
          'use strict'
          function e(t, n) {
            var r = t.query,
              path = t.path,
              o = t.init,
              text = t.text,
              h = t.postprocess,
              c = void 0 === h ? [] : h
            l(this, e),
              (this.query = r),
              (this.path = path),
              (this.init = o),
              (this.postprocess = c),
              (this.options = n || {}),
              (this.onlyKeys = null),
              (this.withoutKeys = null),
              (this.sortKeys = []),
              (this.limitN = null),
              (this.skipN = null),
              text ||
                this.postprocess.unshift(function (data) {
                  return data.map(function (e) {
                    return w(e, ['text'])
                  })
                })
          }
          var t
          return (
            h(e, [
              {
                key: 'only',
                value: function (e) {
                  return (this.onlyKeys = Array.isArray(e) ? e : [e]), this
                },
              },
              {
                key: 'without',
                value: function (e) {
                  return (this.withoutKeys = Array.isArray(e) ? e : [e]), this
                },
              },
              {
                key: 'sortBy',
                value: function (e, t) {
                  return this.sortKeys.push([e, 'desc' === t]), this
                },
              },
              {
                key: 'where',
                value: function (e) {
                  return (this.query = this.query.find(e)), this
                },
              },
              {
                key: 'search',
                value: function (e, t) {
                  return e
                    ? ((n =
                        'object' === o(e)
                          ? e
                          : t
                          ? {
                              query: {
                                type: 'match',
                                field: e,
                                value: t,
                                prefix_length: 1,
                                fuzziness: 1,
                                extended: !0,
                                minimum_should_match: 1,
                              },
                            }
                          : {
                              query: {
                                type: 'bool',
                                should: this.options.fullTextSearchFields.map(
                                  function (t) {
                                    return {
                                      type: 'match',
                                      field: t,
                                      value: e,
                                      prefix_length: 1,
                                      operator: 'and',
                                      minimum_should_match: 1,
                                      fuzziness: 1,
                                      extended: !0,
                                    }
                                  }
                                ),
                              },
                            }),
                      (this.query = this.query
                        .find({ $fts: n })
                        .sortByScoring()),
                      this)
                    : this
                  var n
                },
              },
              {
                key: 'surround',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = t.before,
                    r = void 0 === n ? 1 : n,
                    o = t.after,
                    l = void 0 === o ? 1 : o,
                    h = 0 === e.indexOf('/') ? 'path' : 'slug'
                  this.onlyKeys && this.onlyKeys.push(h),
                    this.withoutKeys &&
                      (this.withoutKeys = this.withoutKeys.filter(function (e) {
                        return e !== h
                      }))
                  var c = function (data) {
                    var t = data.findIndex(function (t) {
                        return t[h] === e
                      }),
                      n = new Array(r + l).fill(null, 0)
                    if (-1 === t) return n
                    for (
                      var o = data.slice(t - r, t),
                        c = data.slice(t + 1, t + 1 + l),
                        d = 0,
                        i = r - 1;
                      i >= 0;
                      i--
                    )
                      (n[i] = o[d] || null), d++
                    for (var f = 0, _ = r; _ <= l; _++)
                      (n[_] = c[f] || null), f++
                    return n
                  }
                  return this.postprocess.push(c), this
                },
              },
              {
                key: 'limit',
                value: function (e) {
                  return (
                    'string' == typeof e && (e = parseInt(e)),
                    (this.limitN = e),
                    this
                  )
                },
              },
              {
                key: 'skip',
                value: function (e) {
                  return (
                    'string' == typeof e && (e = parseInt(e)),
                    (this.skipN = e),
                    this
                  )
                },
              },
              {
                key: 'fetch',
                value:
                  ((t = r(
                    regeneratorRuntime.mark(function e() {
                      var data,
                        t,
                        n,
                        r,
                        o,
                        l,
                        h = this
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.sortKeys &&
                                  this.sortKeys.length &&
                                  (this.query = this.query.compoundsort(
                                    this.sortKeys
                                  )),
                                  this.skipN &&
                                    (this.query = this.query.offset(
                                      this.skipN
                                    )),
                                  this.limitN &&
                                    (this.query = this.query.limit(
                                      this.limitN
                                    )),
                                  (data = this.query.data({
                                    removeMeta: !0,
                                  })),
                                  this.onlyKeys &&
                                    (this.options.watch &&
                                      this.onlyKeys.push('path', 'extension'),
                                    (t = function (data) {
                                      return data.map(function (e) {
                                        return _(e, h.onlyKeys)
                                      })
                                    }),
                                    this.postprocess.unshift(t)),
                                  this.withoutKeys &&
                                    (this.options.watch &&
                                      (this.withoutKeys =
                                        this.withoutKeys.filter(function (e) {
                                          return ![
                                            'path',
                                            'extension',
                                          ].includes(e)
                                        })),
                                    (n = function (data) {
                                      return data.map(function (e) {
                                        return w(e, h.withoutKeys)
                                      })
                                    }),
                                    this.postprocess.unshift(n)),
                                  (r = d(this.postprocess))
                                try {
                                  for (r.s(); !(o = r.n()).done; )
                                    (l = o.value), (data = l(data))
                                } catch (e) {
                                  r.e(e)
                                } finally {
                                  r.f()
                                }
                                if (data) {
                                  e.next = 10
                                  break
                                }
                                throw new Error(
                                  ''.concat(this.path, ' not found')
                                )
                              case 10:
                                return e.abrupt(
                                  'return',
                                  JSON.parse(JSON.stringify(data))
                                )
                              case 11:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )),
                  function () {
                    return t.apply(this, arguments)
                  }),
              },
            ]),
            e
          )
        })()
      e.exports = m
    },
    335: function (e, t) {
      function n(e, t, n, r, o, l, h) {
        try {
          var c = e[l](h),
            d = c.value
        } catch (e) {
          return void n(e)
        }
        c.done ? t(d) : Promise.resolve(d).then(r, o)
      }
      ;(e.exports = function (e) {
        return function () {
          var t = this,
            r = arguments
          return new Promise(function (o, l) {
            var h = e.apply(t, r)
            function c(e) {
              n(h, o, l, c, d, 'next', e)
            }
            function d(e) {
              n(h, o, l, c, d, 'throw', e)
            }
            c(void 0)
          })
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    336: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t)
        )
      }
      ;(e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    337: function (e, t) {
      ;(e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    338: function (e, t) {
      function n(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      ;(e.exports = function (e, t, r) {
        return (
          t && n(e.prototype, t),
          r && n(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        )
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    339: function (e, t) {
      ;(e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    340: function (e, t, n) {
      'use strict'
      var r = n(2),
        o = n(65).findIndex,
        l = n(113),
        h = 'findIndex',
        c = !0
      h in [] &&
        Array(1).findIndex(function () {
          c = !1
        }),
        r(
          { target: 'Array', proto: !0, forced: c },
          {
            findIndex: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            },
          }
        ),
        l(h)
    },
    341: function (e, t, n) {
      var r = n(2),
        o = n(342),
        l = n(113)
      r({ target: 'Array', proto: !0 }, { fill: o }), l('fill')
    },
    342: function (e, t, n) {
      'use strict'
      var r = n(23),
        o = n(84),
        l = n(32)
      e.exports = function (e) {
        for (
          var t = r(this),
            n = l(t),
            h = arguments.length,
            c = o(h > 1 ? arguments[1] : void 0, n),
            d = h > 2 ? arguments[2] : void 0,
            f = void 0 === d ? n : o(d, n);
          f > c;

        )
          t[c++] = e
        return t
      }
    },
    343: function (e, t, n) {
      var r
      'undefined' != typeof self && self,
        (r = function () {
          return (function (e) {
            var t = {}
            function n(r) {
              if (t[r]) return t[r].exports
              var o = (t[r] = { i: r, l: !1, exports: {} })
              return (
                e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
              )
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r,
                  })
              }),
              (n.r = function (e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', {
                    value: !0,
                  })
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e
                var r = Object.create(null)
                if (
                  (n.r(r),
                  Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && 'string' != typeof e)
                )
                  for (var o in e)
                    n.d(
                      r,
                      o,
                      function (t) {
                        return e[t]
                      }.bind(null, o)
                    )
                return r
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default
                      }
                    : function () {
                        return e
                      }
                return n.d(t, 'a', t), t
              }),
              (n.o = function (object, e) {
                return Object.prototype.hasOwnProperty.call(object, e)
              }),
              (n.p = ''),
              n((n.s = 8))
            )
          })([
            function (e, t, n) {
              'use strict'
              n.d(t, 'a', function () {
                return o
              })
              var r = n(2)
              let o = {
                js: (e, t) => (e === t ? 0 : e < t ? -1 : 1),
                'abstract-js': (e, t) => (e == t ? 0 : e < t ? -1 : 1),
                'abstract-date': (e, t) => {
                  let n = new Date(e).toISOString(),
                    r = new Date(t).toISOString()
                  return n == r ? 0 : n < r ? -1 : 1
                },
                loki: (e, t) =>
                  Object(r.b)(e, t) ? 0 : Object(r.c)(e, t, !1) ? -1 : 1,
              }
            },
            function (e, t, n) {
              'use strict'
              ;(function (e) {
                function r() {
                  let t
                  return (
                    (function (e) {
                      t = e
                    })((void 0 !== e && e) || this),
                    t
                  )
                }
                n.d(t, 'a', function () {
                  return o
                })
                const o = (function () {
                  const e = r(),
                    t = Symbol.for('LOKI')
                  return void 0 === e[t] && (e[t] = {}), e[t]
                })()
              }.call(this, n(7)))
            },
            function (e, t, n) {
              'use strict'
              function r(e, t) {
                if (e === t) return !0
                if (!e || !t || !0 === e || !0 === t || e != e || t != t) {
                  let n, r
                  switch (e) {
                    case void 0:
                    case null:
                      n = 1
                      break
                    case !1:
                      n = 3
                      break
                    case !0:
                      n = 4
                      break
                    case '':
                      n = 5
                      break
                    default:
                      n = e == e ? 9 : 0
                  }
                  switch (t) {
                    case void 0:
                    case null:
                      r = 1
                      break
                    case !1:
                      r = 3
                      break
                    case !0:
                      r = 4
                      break
                    case '':
                      r = 5
                      break
                    default:
                      r = t == t ? 9 : 0
                  }
                  if (9 !== n || 9 !== r) return n === r
                }
                let n = Number(e),
                  r = Number(t)
                return n == n || r == r
                  ? n === r
                  : ((n = e.toString()), (r = t.toString()), n == r)
              }
              function o(e, t, n) {
                if (!e || !t || !0 === e || !0 === t || e != e || t != t) {
                  let r, o
                  switch (e) {
                    case void 0:
                    case null:
                      r = 1
                      break
                    case !1:
                      r = 3
                      break
                    case !0:
                      r = 4
                      break
                    case '':
                      r = 5
                      break
                    default:
                      r = e == e ? 9 : 0
                  }
                  switch (t) {
                    case void 0:
                    case null:
                      o = 1
                      break
                    case !1:
                      o = 3
                      break
                    case !0:
                      o = 4
                      break
                    case '':
                      o = 5
                      break
                    default:
                      o = t == t ? 9 : 0
                  }
                  if (9 !== r || 9 !== o) return r === o ? n : r < o
                }
                let r = Number(e),
                  o = Number(t)
                return r == r && o == o
                  ? r < o || (!(r > o) && n)
                  : (r == r && o != o) ||
                      ((o != o || r == r) &&
                        (e < t ||
                          (!(e > t) &&
                            (e == t
                              ? n
                              : ((r = e.toString()),
                                (o = t.toString()),
                                r < o || (r == o && n))))))
              }
              function l(e, t, n) {
                if (!e || !t || !0 === e || !0 === t || e != e || t != t) {
                  let r, o
                  switch (e) {
                    case void 0:
                    case null:
                      r = 1
                      break
                    case !1:
                      r = 3
                      break
                    case !0:
                      r = 4
                      break
                    case '':
                      r = 5
                      break
                    default:
                      r = e == e ? 9 : 0
                  }
                  switch (t) {
                    case void 0:
                    case null:
                      o = 1
                      break
                    case !1:
                      o = 3
                      break
                    case !0:
                      o = 4
                      break
                    case '':
                      o = 5
                      break
                    default:
                      o = t == t ? 9 : 0
                  }
                  if (9 !== r || 9 !== o) return r === o ? n : r > o
                }
                let r = Number(e),
                  o = Number(t)
                return r == r && o == o
                  ? r > o || (!(r < o) && n)
                  : (r != r || o == o) &&
                      ((o == o && r != r) ||
                        e > t ||
                        (!(e < t) &&
                          (e == t
                            ? n
                            : ((r = e.toString()),
                              (o = t.toString()),
                              r > o || (r == o && n)))))
              }
              function h(e, t, n) {
                return r(e, t)
                  ? 0
                  : o(e, t, !1)
                  ? n
                    ? 1
                    : -1
                  : l(e, t, !1)
                  ? n
                    ? -1
                    : 1
                  : 0
              }
              n.d(t, 'b', function () {
                return r
              }),
                n.d(t, 'c', function () {
                  return o
                }),
                n.d(t, 'd', function () {
                  return h
                }),
                n.d(t, 'a', function () {
                  return d
                })
              class c {
                $eq(a, b) {
                  return a === b
                }
                $ne(a, b) {
                  return a !== b
                }
                $gt(a, b) {
                  return a > b
                }
                $gte(a, b) {
                  return a >= b
                }
                $lt(a, b) {
                  return a < b
                }
                $lte(a, b) {
                  return a <= b
                }
                $between(a, e) {
                  return null != a && a >= e[0] && a <= e[1]
                }
                $in(a, b) {
                  return -1 !== b.indexOf(a)
                }
                $nin(a, b) {
                  return -1 === b.indexOf(a)
                }
                $keyin(a, b) {
                  return a in b
                }
                $nkeyin(a, b) {
                  return !(a in b)
                }
                $definedin(a, b) {
                  return void 0 !== b[a]
                }
                $undefinedin(a, b) {
                  return void 0 === b[a]
                }
                $regex(a, b) {
                  return b.test(a)
                }
                $containsNone(a, b) {
                  return !this.$containsAny(a, b)
                }
                $containsAny(a, b) {
                  const e = this.containsCheckFn(a)
                  return null !== e && (Array.isArray(b) ? b.some(e) : e(b))
                }
                $contains(a, b) {
                  const e = this.containsCheckFn(a)
                  return null !== e && (Array.isArray(b) ? b.every(e) : e(b))
                }
                $type(a, b) {
                  let e = typeof a
                  return (
                    'object' === e &&
                      (Array.isArray(a)
                        ? (e = 'array')
                        : a instanceof Date && (e = 'date')),
                    'object' != typeof b ? e === b : this.doQueryOp(e, b)
                  )
                }
                $finite(a, b) {
                  return b === isFinite(a)
                }
                $size(a, b) {
                  return (
                    !!Array.isArray(a) &&
                    ('object' != typeof b
                      ? a.length === b
                      : this.doQueryOp(a.length, b))
                  )
                }
                $len(a, b) {
                  return (
                    'string' == typeof a &&
                    ('object' != typeof b
                      ? a.length === b
                      : this.doQueryOp(a.length, b))
                  )
                }
                $where(a, b) {
                  return !0 === b(a)
                }
                $not(a, b) {
                  return !this.doQueryOp(a, b)
                }
                $and(a, b) {
                  for (let e = 0, t = b.length; e < t; e++)
                    if (!this.doQueryOp(a, b[e])) return !1
                  return !0
                }
                $or(a, b) {
                  for (let e = 0, t = b.length; e < t; e++)
                    if (this.doQueryOp(a, b[e])) return !0
                  return !1
                }
                doQueryOp(e, t) {
                  for (let p in t)
                    if (Object.hasOwnProperty.call(t, p))
                      return this[p](e, t[p])
                  return !1
                }
                containsCheckFn(a) {
                  return 'string' == typeof a || Array.isArray(a)
                    ? (b) => -1 !== a.indexOf(b)
                    : 'object' == typeof a && null !== a
                    ? (b) => Object.hasOwnProperty.call(a, b)
                    : null
                }
              }
              let d = {
                js: new c(),
                loki: new (class extends c {
                  constructor() {
                    super()
                  }
                  $eq(a, b) {
                    return r(a, b)
                  }
                  $ne(a, b) {
                    return !r(a, b)
                  }
                  $gt(a, b) {
                    return l(a, b, !1)
                  }
                  $gte(a, b) {
                    return l(a, b, !0)
                  }
                  $lt(a, b) {
                    return o(a, b, !1)
                  }
                  $lte(a, b) {
                    return o(a, b, !0)
                  }
                  $between(a, e) {
                    return null != a && l(a, e[0], !0) && o(a, e[1], !0)
                  }
                })(),
              }
            },
            function (e, t, n) {
              'use strict'
              var r = n(5)
              class o {
                constructor(e) {
                  ;(this._field = e), (this._lokiMap = {}), (this._valMap = {})
                }
                set(e, t) {
                  if (null != t) {
                    if (t in this._lokiMap)
                      throw new Error(
                        'Duplicate key for property ' + this._field + ': ' + t
                      )
                    if (e in this._valMap)
                      throw new Error('Duplicate key for property $loki : ' + e)
                    ;(this._lokiMap[t] = e), (this._valMap[e] = t)
                  }
                }
                get(e) {
                  return this._lokiMap[e]
                }
                update(e, t) {
                  if (t !== this._valMap[e]) {
                    if (t in this._lokiMap)
                      throw new Error(
                        'Duplicate key for property ' + this._field + ': ' + t
                      )
                    this.remove(e), this.set(e, t)
                  }
                }
                remove(e) {
                  if (!(e in this._valMap))
                    throw new Error(
                      'Key is not in unique index: ' + this._field
                    )
                  let t = this._valMap[e]
                  delete this._lokiMap[t], delete this._valMap[e]
                }
                clear() {
                  ;(this._lokiMap = {}), (this._valMap = {})
                }
              }
              function l(e, t, n) {
                return e instanceof Array
                  ? (e.push(n), e[e.length - 1])
                  : e instanceof Object
                  ? ((e[t] = n), e[t])
                  : void 0
              }
              function h(e, t) {
                for (let n in e) {
                  let r = e[n]
                  r instanceof Date
                    ? l(t, n, new Date(r.getTime()))
                    : r instanceof Function
                    ? l(t, n, r)
                    : r instanceof Array
                    ? h(r, l(t, n, []))
                    : r instanceof Object
                    ? h(r, l(t, n, {}))
                    : l(t, n, r)
                }
              }
              function c(e) {
                if (/number|string|boolean/.test(typeof e)) return e
                if (e instanceof Date) return new Date(e.getTime())
                const t = e instanceof Array ? [] : {}
                return h(e, t), t
              }
              function d(data, e = 'parse-stringify') {
                if (null == data) return null
                let t
                switch (e) {
                  case 'parse-stringify':
                    t = JSON.parse(JSON.stringify(data))
                    break
                  case 'deep':
                    t = c(data)
                    break
                  case 'shallow':
                    ;(t = Object.create(data.constructor.prototype)),
                      Object.assign(t, data)
                    break
                  case 'shallow-recurse':
                    t = d(data, 'shallow')
                    const e = Object.keys(data)
                    for (let i = 0; i < e.length; i++) {
                      const n = e[i]
                      'object' == typeof data[n] &&
                        'Object' === data[n].constructor.name &&
                        (t[n] = d(data[n], 'shallow-recurse'))
                    }
                }
                return t
              }
              var f = n(2),
                _ = n(0)
              function w(e, t, n = 0) {
                if (++n >= 10) return e
                for (const r in e)
                  if (
                    'string' == typeof e[r] &&
                    0 === e[r].indexOf('[%lktxp]')
                  ) {
                    const n = e[r].substring(8)
                    void 0 !== t[n] && (e[r] = t[n])
                  } else 'object' == typeof e[r] && (e[r] = w(e[r], t, n))
                return e
              }
              const m = {
                $eq: !0,
                $dteq: !0,
                $gt: !0,
                $gte: !0,
                $lt: !0,
                $lte: !0,
                $in: !0,
                $between: !0,
              }
              class v {
                constructor(e) {
                  ;(this._filteredRows = []),
                    (this._filterInitialized = !1),
                    (this._scoring = null),
                    (this._collection = e)
                }
                reset() {
                  return (
                    this._filteredRows.length > 0 && (this._filteredRows = []),
                    (this._filterInitialized = !1),
                    this
                  )
                }
                toJSON() {
                  const e = this.copy()
                  return (e._collection = null), e
                }
                limit(e) {
                  return (
                    this._filterInitialized ||
                      0 !== this._filteredRows.length ||
                      (this._filteredRows =
                        this._collection._prepareFullDocIndex()),
                    (this._filteredRows = this._filteredRows.slice(0, e)),
                    (this._filterInitialized = !0),
                    this
                  )
                }
                offset(e) {
                  return (
                    this._filterInitialized ||
                      0 !== this._filteredRows.length ||
                      (this._filteredRows =
                        this._collection._prepareFullDocIndex()),
                    (this._filteredRows = this._filteredRows.slice(e)),
                    (this._filterInitialized = !0),
                    this
                  )
                }
                copy() {
                  const e = new v(this._collection)
                  return (
                    (e._filteredRows = this._filteredRows.slice()),
                    (e._filterInitialized = this._filterInitialized),
                    e
                  )
                }
                transform(e, t) {
                  'string' == typeof e && (e = this._collection._transforms[e]),
                    void 0 !== t &&
                      (e = (function (e, t) {
                        if (void 0 === t) return e
                        const n = []
                        for (let r = 0; r < e.length; r++) {
                          const o = d(e[r], 'shallow-recurse')
                          n.push(w(o, t))
                        }
                        return n
                      })(e, t))
                  let n = this
                  for (let t = 0; t < e.length; t++) {
                    const r = e[t]
                    switch (r.type) {
                      case 'find':
                        n.find(r.value)
                        break
                      case 'where':
                        n.where(r.value)
                        break
                      case 'simplesort':
                        n.simplesort(r.property, r.options)
                        break
                      case 'compoundsort':
                        n.compoundsort(r.value)
                        break
                      case 'sort':
                        n.sort(r.value)
                        break
                      case 'sortByScoring':
                        n.sortByScoring(r.desc)
                        break
                      case 'limit':
                        n = n.limit(r.value)
                        break
                      case 'offset':
                        n = n.offset(r.value)
                        break
                      case 'map':
                        n = n.map(r.value, r.dataOptions)
                        break
                      case 'eqJoin':
                        n = n.eqJoin(
                          r.joinData,
                          r.leftJoinKey,
                          r.rightJoinKey,
                          r.mapFun,
                          r.dataOptions
                        )
                        break
                      case 'mapReduce':
                        n = n.mapReduce(r.mapFunction, r.reduceFunction)
                        break
                      case 'update':
                        n.update(r.value)
                        break
                      case 'remove':
                        n.remove()
                    }
                  }
                  return n
                }
                sort(e) {
                  this._filterInitialized ||
                    0 !== this._filteredRows.length ||
                    (this._filteredRows =
                      this._collection._prepareFullDocIndex())
                  const data = this._collection._data
                  return (
                    this._filteredRows.sort((a, b) => e(data[a], data[b])), this
                  )
                }
                simplesort(e, t = { desc: !1 }) {
                  if (
                    ('boolean' == typeof t && (t = { desc: t }),
                    !this._filterInitialized &&
                      this._collection._rangedIndexes.hasOwnProperty(e))
                  ) {
                    let n =
                        this._collection._rangedIndexes[e].index.rangeRequest(),
                      r = []
                    for (let e of n) r.push(this._collection.get(e, !0)[1])
                    return (
                      (this._filteredRows = t.desc ? r.reverse() : r),
                      (this._filterInitialized = !0),
                      this
                    )
                  }
                  this._filterInitialized ||
                    0 !== this._filteredRows.length ||
                    (this._filteredRows =
                      this._collection._prepareFullDocIndex())
                  const data = this._collection._data
                  let n = t.sortComparator
                    ? _.a[t.sortComparator]
                    : _.a[this._collection._unindexedSortComparator]
                  return (
                    this._filteredRows.sort((a, b) =>
                      n(data[a][e], data[b][e])
                    ),
                    t.desc && this._filteredRows.reverse(),
                    this
                  )
                }
                compoundsort(e) {
                  if (0 === e.length)
                    throw new Error(
                      'Invalid call to compoundsort, need at least one property'
                    )
                  if (1 === e.length) {
                    const t = e[0]
                    return 'string' == typeof t
                      ? this.simplesort(t, !1)
                      : this.simplesort(t[0], t[1])
                  }
                  for (let i = 0, t = e.length; i < t; i++) {
                    const t = e[i]
                    'string' == typeof t && (e[i] = [t, !1])
                  }
                  this._filterInitialized ||
                    0 !== this._filteredRows.length ||
                    (this._filteredRows =
                      this._collection._prepareFullDocIndex())
                  const data = this._collection._data
                  return (
                    this._filteredRows.sort((a, b) =>
                      this._compoundeval(e, data[a], data[b])
                    ),
                    this
                  )
                }
                _compoundeval(e, t, n) {
                  for (let i = 0, r = e.length; i < r; i++) {
                    const r = e[i],
                      o = r[0],
                      l = Object(f.d)(t[o], n[o], r[1])
                    if (0 !== l) return l
                  }
                  return 0
                }
                sortByScoring(e = !1) {
                  if (null === this._scoring)
                    throw new Error('No scoring available')
                  return (
                    e
                      ? this._filteredRows.sort(
                          (a, b) =>
                            this._scoring[a].score - this._scoring[b].score
                        )
                      : this._filteredRows.sort(
                          (a, b) =>
                            this._scoring[b].score - this._scoring[a].score
                        ),
                    this
                  )
                }
                getScoring() {
                  if (null === this._scoring)
                    throw new Error('No scoring available')
                  const e = []
                  for (let i = 0; i < this._filteredRows.length; i++)
                    e.push(this._scoring[this._filteredRows[i]])
                  return e
                }
                findOr(e) {
                  const t = [],
                    n = [],
                    r = this.count()
                  for (let o = 0, l = e.length; o < l; o++) {
                    const l = this.copy().find(e[o])._filteredRows,
                      h = l.length
                    if (h === r) return this
                    for (let e = 0; e < h; e++) {
                      const r = l[e]
                      void 0 === n[r] && ((n[r] = !0), t.push(r))
                    }
                  }
                  return (
                    (this._filteredRows = t),
                    (this._filterInitialized = !0),
                    this
                  )
                }
                $or(e) {
                  return this.findOr(e)
                }
                findAnd(e) {
                  for (let i = 0, t = e.length; i < t; i++) {
                    if (0 === this.count()) return this
                    this.find(e[i])
                  }
                  return this
                }
                $and(e) {
                  return this.findAnd(e)
                }
                find(e, t = !1) {
                  if (0 === this._collection._data.length)
                    return (
                      (this._filteredRows = []),
                      (this._filterInitialized = !0),
                      this
                    )
                  const n = e || 'getAll'
                  let r, o, l
                  if ('object' == typeof n) {
                    let e = []
                    for (let p in n) {
                      let t = {}
                      ;(t[p] = n[p]),
                        e.push(t),
                        void 0 !== n[p] && ((r = p), (o = n[p]))
                    }
                    if (e.length > 1) return this.find({ $and: e }, t)
                  }
                  if (!r || 'getAll' === n)
                    return (
                      t &&
                        ((this._filteredRows =
                          this._collection._data.length > 0 ? [0] : []),
                        (this._filterInitialized = !0)),
                      this
                    )
                  if ('$and' === r || '$or' === r)
                    return (
                      this[r](o),
                      t &&
                        this._filteredRows.length > 1 &&
                        (this._filteredRows = this._filteredRows.slice(0, 1)),
                      this
                    )
                  let h = ''
                  if (null === o || 'object' != typeof o || o instanceof Date)
                    (h = '$eq'), (l = o)
                  else {
                    if ('object' != typeof o)
                      throw new Error('Do not know what you want to do.')
                    for (let e in o)
                      if (void 0 !== o[e]) {
                        ;(h = e), (l = o[e])
                        break
                      }
                  }
                  '$regex' === h &&
                    (Array.isArray(l)
                      ? (l = new RegExp(l[0], l[1]))
                      : l instanceof RegExp || (l = new RegExp(l)))
                  let c = !1
                  !this._filterInitialized &&
                    this._collection._rangedIndexes[r] &&
                    m[h] &&
                    (c = !0)
                  const d = f.a[this._collection._defaultLokiOperatorPackage],
                    data = this._collection._data
                  let _ = []
                  if (this._filterInitialized) {
                    let filter = this._filteredRows
                    if ('$fts' === r) {
                      this._scoring = this._collection._fullTextSearch.search(
                        n.$fts
                      )
                      let e = Object.keys(this._scoring)
                      for (let i = 0; i < e.length; i++)
                        -1 !== filter.indexOf(+e[i]) && _.push(+e[i])
                    } else if (
                      void 0 !== this._collection._constraints.unique[r] &&
                      '$eq' === h
                    ) {
                      const e = this._collection._constraints.unique[r].get(l)
                      if (void 0 !== e) {
                        const t = this._collection.get(e, !0)[1]
                        ;-1 !== filter.indexOf(t) && _.push(t)
                      }
                    } else
                      for (let i = 0; i < filter.length; i++) {
                        let e = filter[i]
                        d[h](data[e][r], l) && _.push(e)
                      }
                    return (
                      (this._filteredRows = _),
                      (this._filterInitialized = !0),
                      this
                    )
                  }
                  if (
                    ((this._filteredRows = _),
                    (this._filterInitialized = !0),
                    '$fts' === r)
                  ) {
                    this._scoring = this._collection._fullTextSearch.search(
                      n.$fts
                    )
                    let e = Object.keys(this._scoring)
                    for (let i = 0; i < e.length; i++) _.push(+e[i])
                    return this
                  }
                  if (
                    void 0 !== this._collection._constraints.unique[r] &&
                    '$eq' === h
                  ) {
                    const e = this._collection._constraints.unique[r].get(l)
                    return (
                      void 0 !== e && _.push(this._collection.get(e, !0)[1]),
                      this
                    )
                  }
                  if (!c) {
                    for (let i = 0; i < data.length; i++)
                      if (d[h](data[i][r], l) && (_.push(i), t)) return this
                    return this
                  }
                  if (this._collection._rangedIndexes[r]) {
                    if ('$in' === h) {
                      let e = this._collection._rangedIndexes[r]
                      for (let t of l) {
                        let n = e.index.rangeRequest({
                          op: '$eq',
                          val: t,
                        })
                        for (let e of n) _.push(this._collection.get(e, !0)[1])
                      }
                      return this
                    }
                    if ('$between' === h) {
                      let e = this._collection._rangedIndexes[
                        r
                      ].index.rangeRequest({
                        op: h,
                        val: l[0],
                        high: l[1],
                      })
                      for (let t of e) _.push(this._collection.get(t, !0)[1])
                      return this
                    }
                    let e = this._collection._rangedIndexes[
                      r
                    ].index.rangeRequest({ op: h, val: l })
                    if (!0 !== m[h])
                      for (let t of e) {
                        let e = this._collection.get(t, !0)[1]
                        m[h](data[e][r], l) && _.push(e)
                      }
                    else for (let t of e) _.push(this._collection.get(t, !0)[1])
                  }
                  return this
                }
                where(e) {
                  let t,
                    n = []
                  if ('function' != typeof e)
                    throw new TypeError(
                      'Argument is not a stored view or a function'
                    )
                  if (((t = e), this._filterInitialized)) {
                    let e = this._filteredRows.length
                    for (; e--; )
                      !0 === t(this._collection._data[this._filteredRows[e]]) &&
                        n.push(this._filteredRows[e])
                    return (this._filteredRows = n), this
                  }
                  {
                    let e = this._collection._data.length
                    for (; e--; )
                      !0 === t(this._collection._data[e]) && n.push(e)
                    return (
                      (this._filteredRows = n),
                      (this._filterInitialized = !0),
                      this
                    )
                  }
                }
                count() {
                  return this._filterInitialized
                    ? this._filteredRows.length
                    : this._collection.count()
                }
                data(e = {}) {
                  let t, n, r
                  ;({
                    forceClones: t = !1,
                    forceCloneMethod: n = this._collection._cloneMethod,
                    removeMeta: r = !1,
                  } = e)
                  let o,
                    l,
                    h = [],
                    data = this._collection._data
                  if (
                    (r && !t && ((t = !0), (n = 'shallow')),
                    this._collection._disableDeltaChangesApi ||
                      ((t = !0), (n = 'deep')),
                    !this._filterInitialized)
                  ) {
                    if (0 === this._filteredRows.length) {
                      if (this._collection._cloneObjects || t) {
                        l = n
                        for (let i = 0; i < data.length; i++)
                          (o = this._collection._defineNestedProperties(
                            d(data[i], l)
                          )),
                            r && (delete o.$loki, delete o.meta),
                            h.push(o)
                        return h
                      }
                      return data.slice()
                    }
                    this._filterInitialized = !0
                  }
                  const c = this._filteredRows
                  if (this._collection._cloneObjects || t) {
                    l = n
                    for (let i = 0; i < c.length; i++)
                      (o = this._collection._defineNestedProperties(
                        d(data[c[i]], l)
                      )),
                        r && (delete o.$loki, delete o.meta),
                        h.push(o)
                  } else for (let i = 0; i < c.length; i++) h.push(data[c[i]])
                  return h
                }
                update(e) {
                  this._filterInitialized ||
                    0 !== this._filteredRows.length ||
                    (this._filteredRows =
                      this._collection._prepareFullDocIndex())
                  const t = this._filteredRows.length,
                    n = this._collection._data
                  for (let r = 0; r < t; r++)
                    if (
                      this._collection._cloneObjects ||
                      !this._collection._disableDeltaChangesApi
                    ) {
                      const t = d(
                        n[this._filteredRows[r]],
                        this._collection._cloneMethod
                      )
                      e(t), this._collection.update(t)
                    } else
                      e(n[this._filteredRows[r]]),
                        this._collection.update(n[this._filteredRows[r]])
                  return this
                }
                remove() {
                  return (
                    this._filterInitialized ||
                      0 !== this._filteredRows.length ||
                      (this._filteredRows =
                        this._collection._prepareFullDocIndex()),
                    this._collection.remove(this.data()),
                    (this._filteredRows = []),
                    this
                  )
                }
                mapReduce(e, t) {
                  try {
                    return t(this.data().map(e))
                  } catch (e) {
                    throw e
                  }
                }
                eqJoin(e, t, n, r, o) {
                  let l,
                    h,
                    c = [],
                    d = [],
                    f = 'function' == typeof t,
                    _ = 'function' == typeof n,
                    w = {},
                    m = this.data(o),
                    y = m.length
                  if (e instanceof C) c = e.chain().data(o)
                  else if (e instanceof v) c = e.data(o)
                  else {
                    if (!Array.isArray(e))
                      throw new TypeError(
                        'joinData needs to be an array or result set'
                      )
                    c = e
                  }
                  l = c.length
                  for (let i = 0; i < l; i++)
                    (h = _ ? n(c[i]) : c[i][n]), (w[h] = c[i])
                  r || (r = (e, t) => ({ left: e, right: t }))
                  for (let e = 0; e < y; e++)
                    (h = f ? t(m[e]) : m[e][t]), d.push(r(m[e], w[h] || {}))
                  return (
                    (this._collection = new C('joinData')),
                    this._collection.insert(d),
                    (this._filteredRows = []),
                    (this._filterInitialized = !1),
                    this
                  )
                }
                map(e, t) {
                  const data = this.data(t).map(e)
                  return (
                    (this._collection = new C('mappedData')),
                    this._collection.insert(data),
                    (this._filteredRows = []),
                    (this._filterInitialized = !1),
                    this
                  )
                }
              }
              class y extends r.a {
                constructor(e, t, n = {}) {
                  super(),
                    (this._rebuildPending = !1),
                    (this._resultData = []),
                    (this._resultDirty = !1),
                    (this._cachedResultSet = null),
                    (this._filterPipeline = []),
                    (this._sortFunction = null),
                    (this._sortCriteria = null),
                    (this._sortCriteriaSimple = null),
                    (this._sortByScoring = null),
                    (this._sortDirty = !1),
                    ({
                      persistent: this._persistent = !1,
                      sortPriority: this._sortPriority = 'passive',
                      minRebuildInterval: this._minRebuildInterval = 1,
                    } = n),
                    (this._collection = e),
                    (this.name = t),
                    (this._resultSet = new v(e)),
                    (this._events = { rebuild: [] })
                }
                _rematerialize({ removeWhereFilters: e = !1 }) {
                  if (
                    ((this._resultData = []),
                    (this._resultDirty = !0),
                    (this._resultSet = new v(this._collection)),
                    (this._sortFunction ||
                      this._sortCriteria ||
                      this._sortCriteriaSimple ||
                      null !== this._sortByScoring) &&
                      (this._sortDirty = !0),
                    e)
                  ) {
                    let e = this._filterPipeline.length
                    for (; e--; )
                      'where' === this._filterPipeline[e].type &&
                        (e !== this._filterPipeline.length - 1 &&
                          (this._filterPipeline[e] =
                            this._filterPipeline[
                              this._filterPipeline.length - 1
                            ]),
                        this._filterPipeline.length--)
                  }
                  const t = this._filterPipeline
                  this._filterPipeline = []
                  for (let e = 0; e < t.length; e++) this.applyFind(t[e].val)
                  return this.data(), this.emit('rebuild', this), this
                }
                branchResultSet(e, t) {
                  const n = this._resultSet.copy()
                  return void 0 === e ? n : n.transform(e, t)
                }
                toJSON() {
                  return {
                    name: this.name,
                    _persistent: this._persistent,
                    _sortPriority: this._sortPriority,
                    _minRebuildInterval: this._minRebuildInterval,
                    _resultSet: this._resultSet,
                    _filterPipeline: this._filterPipeline,
                    _sortCriteria: this._sortCriteria,
                    _sortCriteriaSimple: this._sortCriteriaSimple,
                    _sortByScoring: this._sortByScoring,
                    _sortDirty: this._sortDirty,
                  }
                }
                static fromJSONObject(e, t) {
                  let n = new y(e, t.name)
                  return (
                    (n._resultDirty = !0),
                    (n._filterPipeline = t._filterPipeline),
                    (n._resultData = []),
                    (n._sortCriteria = t._sortCriteria),
                    (n._sortCriteriaSimple = t._sortCriteriaSimple),
                    (n._sortByScoring = t._sortByScoring),
                    (n._sortDirty = t._sortDirty),
                    (n._resultSet._filteredRows = t._resultSet._filteredRows),
                    (n._resultSet._filterInitialized =
                      t._resultSet._filterInitialized),
                    n._rematerialize({
                      removeWhereFilters: !0,
                    }),
                    n
                  )
                }
                removeFilters({ queueSortPhase: e = !1 } = {}) {
                  ;(this._rebuildPending = !1),
                    this._resultSet.reset(),
                    (this._resultData = []),
                    (this._resultDirty = !0),
                    (this._cachedResultSet = null),
                    (this._filterPipeline = []),
                    (this._sortFunction = null),
                    (this._sortCriteria = null),
                    (this._sortCriteriaSimple = null),
                    (this._sortByScoring = null),
                    (this._sortDirty = !1),
                    !0 === e && this._queueSortPhase()
                }
                applySort(e) {
                  return (
                    (this._sortFunction = e),
                    (this._sortCriteria = null),
                    (this._sortCriteriaSimple = null),
                    (this._sortByScoring = null),
                    this._queueSortPhase(),
                    this
                  )
                }
                applySimpleSort(e, t = !1) {
                  return (
                    (this._sortCriteriaSimple = {
                      field: e,
                      options: t,
                    }),
                    (this._sortFunction = null),
                    (this._sortCriteria = null),
                    (this._sortByScoring = null),
                    this._queueSortPhase(),
                    this
                  )
                }
                applySortCriteria(e) {
                  return (
                    (this._sortCriteria = e),
                    (this._sortCriteriaSimple = null),
                    (this._sortFunction = null),
                    (this._sortByScoring = null),
                    this._queueSortPhase(),
                    this
                  )
                }
                applySortByScoring(e = !1) {
                  return (
                    (this._sortFunction = null),
                    (this._sortCriteria = null),
                    (this._sortCriteriaSimple = null),
                    (this._sortByScoring = e),
                    this._queueSortPhase(),
                    this
                  )
                }
                getScoring() {
                  return this._resultSet.getScoring()
                }
                startTransaction() {
                  return (this._cachedResultSet = this._resultSet.copy()), this
                }
                commit() {
                  return (this._cachedResultSet = null), this
                }
                rollback() {
                  return (
                    (this._resultSet = this._cachedResultSet),
                    this._persistent &&
                      ((this._resultData = this._resultSet.data()),
                      this.emit('rebuild', this)),
                    this
                  )
                }
                _indexOfFilterWithId(e) {
                  if ('string' == typeof e || 'number' == typeof e)
                    for (let t = 0, n = this._filterPipeline.length; t < n; t++)
                      if (e === this._filterPipeline[t].uid) return t
                  return -1
                }
                _addFilter(filter) {
                  this._filterPipeline.push(filter),
                    this._resultSet[filter.type](filter.val)
                }
                reapplyFilters() {
                  this._resultSet.reset(),
                    (this._cachedResultSet = null),
                    this._persistent &&
                      ((this._resultData = []), (this._resultDirty = !0))
                  const e = this._filterPipeline
                  this._filterPipeline = []
                  for (let t = 0, n = e.length; t < n; t++)
                    this._addFilter(e[t])
                  return (
                    this._sortFunction ||
                    this._sortCriteria ||
                    this._sortCriteriaSimple ||
                    null !== this._sortByScoring
                      ? this._queueSortPhase()
                      : this._queueRebuildEvent(),
                    this
                  )
                }
                applyFilter(filter) {
                  const e = this._indexOfFilterWithId(filter.uid)
                  return e >= 0
                    ? ((this._filterPipeline[e] = filter),
                      this.reapplyFilters())
                    : ((this._cachedResultSet = null),
                      this._persistent &&
                        ((this._resultData = []), (this._resultDirty = !0)),
                      this._addFilter(filter),
                      this._sortFunction ||
                      this._sortCriteria ||
                      this._sortCriteriaSimple ||
                      null !== this._sortByScoring
                        ? this._queueSortPhase()
                        : this._queueRebuildEvent(),
                      this)
                }
                applyFind(e, t = '') {
                  return (
                    this.applyFilter({
                      type: 'find',
                      val: e,
                      uid: t,
                    }),
                    this
                  )
                }
                applyWhere(e, t) {
                  return (
                    this.applyFilter({
                      type: 'where',
                      val: e,
                      uid: t,
                    }),
                    this
                  )
                }
                removeFilter(e) {
                  const t = this._indexOfFilterWithId(e)
                  if (t < 0)
                    throw new Error(
                      'Dynamic view does not contain a filter with ID: ' + e
                    )
                  return (
                    this._filterPipeline.splice(t, 1),
                    this.reapplyFilters(),
                    this
                  )
                }
                count() {
                  return (
                    this._resultDirty &&
                      (this._resultData = this._resultSet.data()),
                    this._resultSet.count()
                  )
                }
                data(e = {}) {
                  return (
                    (this._sortDirty || this._resultDirty) &&
                      this._performSortPhase({
                        suppressRebuildEvent: !0,
                      }),
                    this._persistent
                      ? this._resultData
                      : this._resultSet.data(e)
                  )
                }
                _queueRebuildEvent() {
                  this._rebuildPending ||
                    ((this._rebuildPending = !0),
                    setTimeout(() => {
                      this._rebuildPending &&
                        ((this._rebuildPending = !1),
                        this.emit('rebuild', this))
                    }, this._minRebuildInterval))
                }
                _queueSortPhase() {
                  this._sortDirty ||
                    ((this._sortDirty = !0),
                    'active' === this._sortPriority
                      ? setTimeout(() => {
                          this._performSortPhase()
                        }, this._minRebuildInterval)
                      : this._queueRebuildEvent())
                }
                _performSortPhase(e = {}) {
                  ;(this._sortDirty || this._resultDirty) &&
                    (this._sortDirty &&
                      (this._sortFunction
                        ? this._resultSet.sort(this._sortFunction)
                        : this._sortCriteria
                        ? this._resultSet.compoundsort(this._sortCriteria)
                        : this._sortCriteriaSimple
                        ? this._resultSet.simplesort(
                            this._sortCriteriaSimple.field,
                            this._sortCriteriaSimple.options
                          )
                        : null !== this._sortByScoring &&
                          this._resultSet.sortByScoring(this._sortByScoring),
                      (this._sortDirty = !1)),
                    this._persistent &&
                      ((this._resultData = this._resultSet.data()),
                      (this._resultDirty = !1)),
                    e.suppressRebuildEvent || this.emit('rebuild', this))
                }
                _evaluateDocument(e, t) {
                  if (!this._resultSet._filterInitialized)
                    return (
                      this._persistent &&
                        (this._resultData = this._resultSet.data()),
                      void (this._sortFunction ||
                      this._sortCriteria ||
                      this._sortCriteriaSimple
                        ? this._queueSortPhase()
                        : this._queueRebuildEvent())
                    )
                  const n = this._resultSet._filteredRows,
                    r = t ? -1 : n.indexOf(+e),
                    o = n.length,
                    l = new v(this._collection)
                  let filter
                  ;(l._filteredRows = [e]), (l._filterInitialized = !0)
                  for (let e = 0, t = this._filterPipeline.length; e < t; e++)
                    (filter = this._filterPipeline[e]),
                      l[filter.type](filter.val)
                  const h = 0 === l._filteredRows.length ? -1 : 0
                  return -1 !== r || -1 !== h
                    ? -1 === r && -1 !== h
                      ? (n.push(e),
                        this._persistent &&
                          this._resultData.push(this._collection._data[e]),
                        void (this._sortFunction ||
                        this._sortCriteria ||
                        this._sortCriteriaSimple
                          ? this._queueSortPhase()
                          : this._queueRebuildEvent()))
                      : -1 !== r && -1 === h
                      ? (r < o - 1
                          ? (n.splice(r, 1),
                            this._persistent && this._resultData.splice(r, 1))
                          : ((n.length = o - 1),
                            this._persistent &&
                              (this._resultData.length = o - 1)),
                        void (this._sortFunction ||
                        this._sortCriteria ||
                        this._sortCriteriaSimple
                          ? this._queueSortPhase()
                          : this._queueRebuildEvent()))
                      : void (
                          -1 !== r &&
                          -1 !== h &&
                          (this._persistent &&
                            (this._resultData[r] = this._collection._data[e]),
                          this._sortFunction ||
                          this._sortCriteria ||
                          this._sortCriteriaSimple
                            ? this._queueSortPhase()
                            : this._queueRebuildEvent())
                        )
                    : void 0
                }
                _removeDocument(e) {
                  if (!this._resultSet._filterInitialized)
                    return (
                      this._persistent &&
                        (this._resultData = this._resultSet.data()),
                      void (this._sortFunction ||
                      this._sortCriteria ||
                      this._sortCriteriaSimple
                        ? this._queueSortPhase()
                        : this._queueRebuildEvent())
                    )
                  const t = this._resultSet._filteredRows,
                    n = t.indexOf(+e)
                  let r = t.length
                  ;-1 !== n &&
                    (n < r - 1
                      ? ((t[n] = t[r - 1]),
                        (t.length = r - 1),
                        this._persistent &&
                          ((this._resultData[n] = this._resultData[r - 1]),
                          (this._resultData.length = r - 1)))
                      : ((t.length = r - 1),
                        this._persistent && (this._resultData.length = r - 1)),
                    this._sortFunction ||
                    this._sortCriteria ||
                    this._sortCriteriaSimple
                      ? this._queueSortPhase()
                      : this._queueRebuildEvent()),
                    (r = t.length)
                  for (let n = 0; n < r; n++) t[n] > e && t[n]--
                }
                mapReduce(e, t) {
                  try {
                    return t(this.data().map(e))
                  } catch (e) {
                    throw e
                  }
                }
              }
              var x = n(4),
                S = n(1)
              function k(e) {
                return e.reduce((a, b) => a + b, 0) / e.length
              }
              function I(e, path, t, n = 0) {
                if (void 0 === e) return !1
                if (n + 1 === path.length) return t.push(e[path[n]]), !1
                const r = e[path[n]]
                if (Array.isArray(r)) {
                  for (let i = 0; i < r.length; i++) I(r[i], path, t, n + 1)
                  return !0
                }
                return I(r, path, t, n + 1)
              }
              n.d(t, 'a', function () {
                return C
              })
              class C extends r.a {
                constructor(e, t = {}) {
                  if (
                    (super(),
                    (this._data = []),
                    (this._idIndex = []),
                    (this._rangedIndexes = {}),
                    (this._lokimap = {}),
                    (this._unindexedSortComparator = 'js'),
                    (this._defaultLokiOperatorPackage = 'js'),
                    (this._constraints = { unique: {} }),
                    (this._transforms = {}),
                    (this._dirty = !0),
                    (this._cached = null),
                    (this._nestedProperties = []),
                    (this._ttl = {
                      age: null,
                      ttlInterval: null,
                      daemon: null,
                    }),
                    (this._maxId = 0),
                    (this._dynamicViews = []),
                    (this._changes = []),
                    (this._stages = {}),
                    (this._commitLog = []),
                    t && !0 === t.disableMeta)
                  ) {
                    if (!1 === t.disableChangesApi)
                      throw new Error(
                        'disableMeta option cannot be passed as true when disableChangesApi is passed as false'
                      )
                    if (!1 === t.disableDeltaChangesApi)
                      throw new Error(
                        'disableMeta option cannot be passed as true when disableDeltaChangesApi is passed as false'
                      )
                    if ('number' == typeof t.ttl && t.ttl > 0)
                      throw new Error(
                        'disableMeta option cannot be passed as true when ttl is enabled'
                      )
                  }
                  if (
                    ((this.name = e),
                    (this._unindexedSortComparator =
                      t.unindexedSortComparator || 'js'),
                    (this._defaultLokiOperatorPackage =
                      t.defaultLokiOperatorPackage || 'js'),
                    void 0 !== t.unique &&
                      (Array.isArray(t.unique) || (t.unique = [t.unique]),
                      t.unique.forEach((e) => {
                        this._constraints.unique[e] = new o(e)
                      })),
                    void 0 !== S.a.FullTextSearch
                      ? (this._fullTextSearch =
                          void 0 !== t.fullTextSearch
                            ? new S.a.FullTextSearch(t.fullTextSearch)
                            : null)
                      : (this._fullTextSearch = null),
                    (this._transactional =
                      void 0 !== t.transactional && t.transactional),
                    (this._cloneObjects = void 0 !== t.clone && t.clone),
                    (this._asyncListeners =
                      void 0 !== t.asyncListeners && t.asyncListeners),
                    (this._disableMeta =
                      void 0 !== t.disableMeta && t.disableMeta),
                    (this._disableChangesApi =
                      void 0 === t.disableChangesApi || t.disableChangesApi),
                    (this._disableDeltaChangesApi =
                      void 0 === t.disableDeltaChangesApi ||
                      t.disableDeltaChangesApi),
                    (this._cloneMethod =
                      void 0 !== t.cloneMethod ? t.cloneMethod : 'deep'),
                    this._disableChangesApi &&
                      (this._disableDeltaChangesApi = !0),
                    (this._serializableIndexes =
                      void 0 === t.serializableIndexes ||
                      t.serializableIndexes),
                    null != t.nestedProperties)
                  )
                    for (let i = 0; i < t.nestedProperties.length; i++) {
                      const e = t.nestedProperties[i]
                      'string' == typeof e
                        ? this._nestedProperties.push({
                            name: e,
                            path: e.split('.'),
                          })
                        : this._nestedProperties.push(e)
                    }
                  this.setTTL(t.ttl || -1, t.ttlInterval),
                    (this._events = {
                      insert: [],
                      update: [],
                      'pre-insert': [],
                      'pre-update': [],
                      close: [],
                      flushbuffer: [],
                      error: [],
                      delete: [],
                      warning: [],
                    }),
                    this._ensureId()
                  let n = t.rangedIndexes || {}
                  for (let e in n)
                    this.ensureRangedIndex(
                      e,
                      n[e].indexTypeName,
                      n[e].comparatorName
                    )
                  this.setChangesApi(
                    this._disableChangesApi,
                    this._disableDeltaChangesApi
                  ),
                    this.flushChanges()
                }
                toJSON() {
                  return {
                    name: this.name,
                    unindexedSortComparator: this._unindexedSortComparator,
                    defaultLokiOperatorPackage:
                      this._defaultLokiOperatorPackage,
                    _dynamicViews: this._dynamicViews,
                    uniqueNames: Object.keys(this._constraints.unique),
                    transforms: this._transforms,
                    rangedIndexes: this._rangedIndexes,
                    _data: this._data,
                    idIndex: this._idIndex,
                    maxId: this._maxId,
                    _dirty: this._dirty,
                    _nestedProperties: this._nestedProperties,
                    transactional: this._transactional,
                    asyncListeners: this._asyncListeners,
                    disableMeta: this._disableMeta,
                    disableChangesApi: this._disableChangesApi,
                    disableDeltaChangesApi: this._disableDeltaChangesApi,
                    cloneObjects: this._cloneObjects,
                    cloneMethod: this._cloneMethod,
                    changes: this._changes,
                    _fullTextSearch: this._fullTextSearch,
                  }
                }
                static fromJSONObject(e, t) {
                  let n = new C(e.name, {
                    disableChangesApi: e.disableChangesApi,
                    disableDeltaChangesApi: e.disableDeltaChangesApi,
                    unindexedSortComparator: e.unindexedSortComparator,
                    defaultLokiOperatorPackage: e.defaultLokiOperatorPackage,
                  })
                  if (
                    ((n._transactional = e.transactional),
                    (n._asyncListeners = e.asyncListeners),
                    (n._disableMeta = e.disableMeta),
                    (n._disableChangesApi = e.disableChangesApi),
                    (n._cloneObjects = e.cloneObjects),
                    (n._cloneMethod = e.cloneMethod || 'deep'),
                    (n._changes = e.changes),
                    (n._nestedProperties = e._nestedProperties),
                    (n._rangedIndexes = e.rangedIndexes || {}),
                    (n._dirty = !(!t || !0 !== t.retainDirtyFlags) && e._dirty),
                    t && void 0 !== t[e.name])
                  ) {
                    let r = (function (e) {
                      const n = t[e.name]
                      if (n.proto) {
                        const e =
                          n.inflate ||
                          ((e, t) => {
                            for (let n in e) t[n] = e[n]
                          })
                        return (data) => {
                          const t = new n.proto()
                          return e(data, t), t
                        }
                      }
                      return n.inflate
                    })(e)
                    for (let t = 0; t < e._data.length; t++)
                      (n._data[t] = n._defineNestedProperties(r(e._data[t]))),
                        (n._lokimap[n._data[t].$loki] = n._data[t])
                  } else
                    for (let t = 0; t < e._data.length; t++)
                      (n._data[t] = n._defineNestedProperties(e._data[t])),
                        (n._lokimap[n._data[t].$loki] = n._data[t])
                  ;(n._maxId = void 0 === e.maxId ? 0 : e.maxId),
                    (n._idIndex = e.idIndex),
                    void 0 !== e.transforms && (n._transforms = e.transforms)
                  for (let t in e.rangedIndexes) {
                    let r = e.rangedIndexes[t],
                      o = (0, x.a[r.indexTypeName])(t, _.a[r.comparatorName])
                    o.restore(r.index), (n._rangedIndexes[t].index = o)
                  }
                  if ((n._ensureId(), void 0 !== e.uniqueNames))
                    for (let t = 0; t < e.uniqueNames.length; t++)
                      n.ensureUniqueIndex(e.uniqueNames[t])
                  if (void 0 !== e._dynamicViews)
                    for (let t = 0; t < e._dynamicViews.length; t++)
                      n._dynamicViews.push(
                        y.fromJSONObject(n, e._dynamicViews[t])
                      )
                  return (
                    e._fullTextSearch &&
                      (n._fullTextSearch = S.a.FullTextSearch.fromJSONObject(
                        e._fullTextSearch,
                        t.fullTextSearch
                      )),
                    n
                  )
                }
                addTransform(e, t) {
                  if (void 0 !== this._transforms[e])
                    throw new Error('a transform by that name already exists')
                  this._transforms[e] = t
                }
                getTransform(e) {
                  return this._transforms[e]
                }
                setTransform(e, t) {
                  this._transforms[e] = t
                }
                removeTransform(e) {
                  delete this._transforms[e]
                }
                setTTL(e, t) {
                  e < 0
                    ? clearInterval(this._ttl.daemon)
                    : ((this._ttl.age = e),
                      (this._ttl.ttlInterval = t),
                      (this._ttl.daemon = setInterval(() => {
                        const e = Date.now()
                        this.chain()
                          .where((t) => {
                            const n = t.meta.updated || t.meta.created,
                              r = e - n
                            return this._ttl.age < r
                          })
                          .remove()
                      }, t)))
                }
                _prepareFullDocIndex() {
                  const e = new Array(this._data.length)
                  for (let i = 0; i < e.length; i++) e[i] = i
                  return e
                }
                ensureIndex(e, t, n) {
                  this.ensureRangedIndex(e, t, n)
                }
                ensureRangedIndex(e, t, n) {
                  if (((t = t || 'avl'), (n = n || 'loki'), !x.a[t]))
                    throw new Error(
                      'ensureRangedIndex: Unknown range index type'
                    )
                  if (!_.a[n])
                    throw new Error('ensureRangedIndex: Unknown comparator')
                  let r = x.a[t],
                    o = _.a[n]
                  this._rangedIndexes[e] = {
                    index: r(e, o),
                    indexTypeName: t,
                    comparatorName: n,
                  }
                  let l = this._rangedIndexes[e].index
                  for (let i = 0; i < this._data.length; i++)
                    l.insert(this._data[i].$loki, this._data[i][e])
                }
                ensureUniqueIndex(e) {
                  let t = new o(e)
                  this._constraints.unique[e] = t
                  for (let i = 0; i < this._data.length; i++)
                    t.set(this._data[i].$loki, this._data[i][e])
                  return t
                }
                count(e) {
                  return e
                    ? this.chain().find(e)._filteredRows.length
                    : this._data.length
                }
                _ensureId() {
                  this._idIndex = []
                  for (let i = 0; i < this._data.length; i++)
                    this._idIndex.push(this._data[i].$loki)
                }
                addDynamicView(e, t) {
                  const n = new y(this, e, t)
                  return this._dynamicViews.push(n), n
                }
                removeDynamicView(e) {
                  for (let t = 0; t < this._dynamicViews.length; t++)
                    this._dynamicViews[t].name === e &&
                      this._dynamicViews.splice(t, 1)
                }
                getDynamicView(e) {
                  for (let t = 0; t < this._dynamicViews.length; t++)
                    if (this._dynamicViews[t].name === e)
                      return this._dynamicViews[t]
                  return null
                }
                findAndUpdate(e, t) {
                  this.chain().find(e).update(t)
                }
                findAndRemove(e) {
                  this.chain().find(e).remove()
                }
                insert(e) {
                  if (!Array.isArray(e)) return this.insertOne(e)
                  let t,
                    n = []
                  this.emit('pre-insert', e)
                  for (let i = 0; i < e.length; i++) {
                    if (((t = this.insertOne(e[i], !0)), !t)) return
                    n.push(t)
                  }
                  return (
                    this.emit('insert', n),
                    (n = this._cloneObjects ? d(n, this._cloneMethod) : n),
                    1 === n.length ? n[0] : n
                  )
                }
                insertOne(e, t = !1) {
                  let n,
                    r = null
                  if (
                    ('object' != typeof e
                      ? (r = new TypeError('Document needs to be an object'))
                      : null === e &&
                        (r = new TypeError('Object cannot be null')),
                    null !== r)
                  )
                    throw (this.emit('error', r), r)
                  const o = this._defineNestedProperties(
                    this._cloneObjects ? d(e, this._cloneMethod) : e
                  )
                  if (
                    (this._disableMeta ||
                      void 0 !== o.meta ||
                      (o.meta = {
                        version: 0,
                        revision: 0,
                        created: 0,
                      }),
                    t || this.emit('pre-insert', o),
                    this._add(o))
                  )
                    return (
                      this._disableChangesApi
                        ? this._insertMeta(o)
                        : this._insertMetaWithChange(o),
                      (n = this._cloneObjects ? d(o, this._cloneMethod) : o),
                      t || this.emit('insert', n),
                      n
                    )
                }
                _defineNestedProperties(data) {
                  for (let i = 0; i < this._nestedProperties.length; i++) {
                    const e = this._nestedProperties[i].name,
                      path = this._nestedProperties[i].path
                    Object.defineProperty(data, e, {
                      get() {
                        const e = []
                        return I(this, path, e) ? e : e[0]
                      },
                      set(e) {
                        path
                          .slice(0, path.length - 1)
                          .reduce((e, t) => (e && e[t] ? e[t] : null), this)[
                          path[path.length - 1]
                        ] = e
                      },
                      enumerable: !1,
                      configurable: !0,
                    })
                  }
                  return data
                }
                clear({ removeIndices: e = !1 } = {}) {
                  if (
                    ((this._data = []),
                    (this._idIndex = []),
                    (this._cached = null),
                    (this._maxId = 0),
                    (this._dynamicViews = []),
                    (this._dirty = !0),
                    !0 === e)
                  )
                    (this._rangedIndexes = {}),
                      (this._constraints = { unique: {} })
                  else {
                    for (let e in this._rangedIndexes)
                      this.ensureRangedIndex(
                        e,
                        this._rangedIndexes[e].indexTypeName,
                        this._rangedIndexes[e].comparatorName
                      )
                    const e = Object.keys(this._constraints.unique)
                    for (let i = 0; i < e.length; i++)
                      this._constraints.unique[e[i]].clear()
                  }
                  null !== this._fullTextSearch && this._fullTextSearch.clear()
                }
                update(e) {
                  if (Array.isArray(e))
                    for (let i = 0; i < e.length; i++) this.update(e[i])
                  else {
                    if (void 0 === e.$loki)
                      throw new Error(
                        'Trying to update unsynced document. Please save the document first by using insert() or addMany()'
                      )
                    try {
                      this.startTransaction()
                      const t = this.get(e.$loki, !0)
                      if (!t)
                        throw new Error(
                          'Trying to update a document not in collection.'
                        )
                      let n = t[0],
                        r = t[1],
                        o = this._defineNestedProperties(
                          this._cloneObjects || !this._disableDeltaChangesApi
                            ? d(e, this._cloneMethod)
                            : e
                        )
                      this.emit('pre-update', e),
                        Object.keys(this._constraints.unique).forEach((e) => {
                          this._constraints.unique[e].update(o.$loki, o[e])
                        }),
                        (this._data[r] = o),
                        (this._lokimap[e.$loki] = o)
                      for (let e = 0; e < this._dynamicViews.length; e++)
                        this._dynamicViews[e]._evaluateDocument(r, !1)
                      for (let t in this._rangedIndexes)
                        this._rangedIndexes[t].index.update(e.$loki, e[t])
                      ;(this._idIndex[r] = o.$loki),
                        null !== this._fullTextSearch &&
                          this._fullTextSearch.updateDocument(e, r),
                        this.commit(),
                        (this._dirty = !0),
                        this._disableChangesApi
                          ? this._updateMeta(o)
                          : this._updateMetaWithChange(o, n)
                      let l = o
                      this._cloneObjects && (l = d(o, this._cloneMethod)),
                        this.emit('update', l, n)
                    } catch (e) {
                      throw (this.rollback(), this.emit('error', e), e)
                    }
                  }
                }
                _add(e) {
                  if ('object' != typeof e)
                    throw new TypeError(
                      'Object being added needs to be an object'
                    )
                  if (void 0 !== e.$loki)
                    throw new Error(
                      'Document is already in collection, please use update()'
                    )
                  try {
                    this.startTransaction(),
                      this._maxId++,
                      isNaN(this._maxId) &&
                        (this._maxId =
                          this._data[this._data.length - 1].$loki + 1)
                    const t = e
                    ;(t.$loki = this._maxId),
                      this._disableMeta || (t.meta.version = 0)
                    const n = this._constraints.unique
                    for (const e in n)
                      void 0 !== n[e] && n[e].set(t.$loki, t[e])
                    this._idIndex.push(t.$loki),
                      (this._lokimap[t.$loki] = t),
                      this._data.push(t)
                    const r = this._data.length - 1,
                      o = this._dynamicViews.length
                    for (let i = 0; i < o; i++)
                      this._dynamicViews[i]._evaluateDocument(r, !0)
                    for (let n in this._rangedIndexes)
                      this._serializableIndexes &&
                        t[n] instanceof Date &&
                        (t[n] = t[n].getTime()),
                        this._rangedIndexes[n].index.insert(e.$loki, e[n])
                    return (
                      null !== this._fullTextSearch &&
                        this._fullTextSearch.addDocument(t, r),
                      this.commit(),
                      (this._dirty = !0),
                      this._cloneObjects ? d(t, this._cloneMethod) : t
                    )
                  } catch (e) {
                    throw (this.rollback(), this.emit('error', e), e)
                  }
                }
                updateWhere(e, t) {
                  const n = this.where(e)
                  try {
                    for (let i = 0; i < n.length; i++) this.update(t(n[i]))
                  } catch (e) {
                    throw (this.rollback(), e)
                  }
                }
                removeWhere(e) {
                  this.remove(this._data.filter(e))
                }
                removeDataOnly() {
                  this.remove(this._data.slice())
                }
                remove(e) {
                  if (
                    ('number' == typeof e && (e = this.get(e)),
                    Array.isArray(e))
                  ) {
                    let t = 0
                    const n = e.length
                    for (; t < n; t++) this.remove(e[t])
                  } else {
                    if (void 0 === e.$loki)
                      throw new Error(
                        'Object is not a document stored in the collection'
                      )
                    try {
                      this.startTransaction()
                      const t = this.get(e.$loki, !0),
                        n = t[1]
                      let r = 'number' == typeof e ? this.get(e) : e
                      Object.keys(this._constraints.unique).forEach((e) => {
                        e in r && this._constraints.unique[e].remove(r.$loki)
                      })
                      for (let e = 0; e < this._dynamicViews.length; e++)
                        this._dynamicViews[e]._removeDocument(n)
                      this._data.splice(n, 1),
                        this._idIndex.splice(n, 1),
                        delete this._lokimap[e.$loki]
                      for (let t in this._rangedIndexes)
                        this._rangedIndexes[t].index.remove(e.$loki)
                      null !== this._fullTextSearch &&
                        this._fullTextSearch.removeDocument(e, n),
                        this.commit(),
                        (this._dirty = !0),
                        this._disableChangesApi ||
                          this._createChange(this.name, 'R', t[0]),
                        this.emit('delete', t[0]),
                        delete e.$loki,
                        delete e.meta
                    } catch (e) {
                      throw (this.rollback(), this.emit('error', e), e)
                    }
                  }
                }
                getChanges() {
                  return this._changes
                }
                setChangesApi(e, t = !0) {
                  ;(this._disableChangesApi = e),
                    (this._disableDeltaChangesApi = !!e || t)
                }
                flushChanges() {
                  this._changes = []
                }
                _getObjectDelta(e, t) {
                  const n =
                    null !== t && 'object' == typeof t ? Object.keys(t) : null
                  if (
                    n &&
                    n.length &&
                    ['string', 'boolean', 'number'].indexOf(typeof t) < 0
                  ) {
                    const r = {}
                    for (let i = 0; i < n.length; i++) {
                      const o = n[i]
                      if (t.hasOwnProperty(o))
                        if (
                          e.hasOwnProperty(o) &&
                          void 0 === this._constraints.unique[o] &&
                          '$loki' !== o &&
                          'meta' !== o
                        ) {
                          const n = this._getObjectDelta(e[o], t[o])
                          void 0 !== n && n !== {} && (r[o] = n)
                        } else r[o] = t[o]
                    }
                    return 0 === Object.keys(r).length ? void 0 : r
                  }
                  return e === t ? void 0 : t
                }
                _getChangeDelta(e, t) {
                  return t
                    ? this._getObjectDelta(t, e)
                    : JSON.parse(JSON.stringify(e))
                }
                _createChange(e, t, n, r) {
                  this._changes.push({
                    name: e,
                    operation: t,
                    obj:
                      'U' !== t || this._disableDeltaChangesApi
                        ? JSON.parse(JSON.stringify(n))
                        : this._getChangeDelta(n, r),
                  })
                }
                _createInsertChange(e) {
                  this._createChange(this.name, 'I', e)
                }
                _createUpdateChange(e, t) {
                  this._createChange(this.name, 'U', e, t)
                }
                _insertMetaWithChange(e) {
                  this._insertMeta(e), this._createInsertChange(e)
                }
                _updateMetaWithChange(e, t) {
                  this._updateMeta(e), this._createUpdateChange(e, t)
                }
                _insertMeta(e) {
                  this._disableMeta ||
                    (e.meta ||
                      (e.meta = {
                        version: 0,
                        revision: 0,
                        created: 0,
                      }),
                    (e.meta.created = new Date().getTime()),
                    (e.meta.revision = 0))
                }
                _updateMeta(e) {
                  this._disableMeta ||
                    ((e.meta.updated = new Date().getTime()),
                    (e.meta.revision += 1))
                }
                get(e, t = !1) {
                  if (!t) {
                    let t = this._lokimap[e]
                    return void 0 === t ? null : t
                  }
                  const data = this._idIndex
                  let n = data.length - 1,
                    r = 0,
                    o = (r + n) >> 1
                  if (
                    ((e = 'number' == typeof e ? e : parseInt(e, 10)), isNaN(e))
                  )
                    throw new TypeError('Passed id is not an integer')
                  for (; data[r] < data[n]; )
                    (o = (r + n) >> 1), data[o] < e ? (r = o + 1) : (n = o)
                  return n === r && data[r] === e
                    ? t
                      ? [this._data[r], r]
                      : this._data[r]
                    : null
                }
                by(e, t) {
                  let n = this._constraints.unique[e].get(t)
                  return this._cloneObjects
                    ? d(this._lokimap[n], this._cloneMethod)
                    : this._lokimap[n]
                }
                findOne(e) {
                  e = e || {}
                  const t = this.chain().find(e, !0).data()
                  return Array.isArray(t) && 0 === t.length
                    ? null
                    : this._cloneObjects
                    ? d(t[0], this._cloneMethod)
                    : t[0]
                }
                chain(e, t) {
                  const n = new v(this)
                  return void 0 === e ? n : n.transform(e, t)
                }
                find(e) {
                  return this.chain().find(e).data()
                }
                findOneUnindexed(e, t) {
                  let n,
                    i = this._data.length
                  for (; i--; )
                    if (this._data[i][e] === t) return (n = this._data[i]), n
                  return null
                }
                startTransaction() {
                  if (this._transactional) {
                    let e = {}
                    for (let t in this._rangedIndexes)
                      (e[t].indexTypeName =
                        this._rangedIndexes[t].indexTypeName),
                        (e[t].comparatorName =
                          this._rangedIndexes[t].comparatorName),
                        (e[t].index = this._rangedIndexes[t].index.backup())
                    this._cached = {
                      index: this._idIndex,
                      data: d(this._data, this._cloneMethod),
                      rangedIndexes: e,
                    }
                    for (let e = 0; e < this._dynamicViews.length; e++)
                      this._dynamicViews[e].startTransaction()
                  }
                }
                commit() {
                  if (this._transactional) {
                    this._cached = null
                    for (let e = 0; e < this._dynamicViews.length; e++)
                      this._dynamicViews[e].commit()
                  }
                }
                rollback() {
                  if (this._transactional && null !== this._cached) {
                    ;(this._idIndex = this._cached.index),
                      (this._data = this._cached.data)
                    for (let i = 0; i < this._data.length; i++)
                      this._data[i] = this._defineNestedProperties(
                        this._data[i]
                      )
                    for (let e in this._cached.rangedIndexes) {
                      let t = this._cached.rangedIndexes[e],
                        n = (0, x.a[t.indexTypeName])(e, _.a[t.comparatorName])
                      n.restore(t.index), (this._rangedIndexes[e].index = n)
                    }
                    for (let e = 0; e < this._dynamicViews.length; e++)
                      this._dynamicViews[e].rollback()
                  }
                }
                where(e) {
                  return this.chain().where(e).data()
                }
                mapReduce(e, t) {
                  return t(this._data.map(e))
                }
                eqJoin(e, t, n, r, o) {
                  return new v(this).eqJoin(e, t, n, r, o)
                }
                getStage(e) {
                  return (
                    this._stages[e] || (this._stages[e] = {}), this._stages[e]
                  )
                }
                stage(e, t) {
                  const n = JSON.parse(JSON.stringify(t))
                  return (this.getStage(e)[t.$loki] = n), n
                }
                commitStage(e, t) {
                  const n = this.getStage(e),
                    r = new Date().getTime()
                  for (const e in n)
                    this.update(n[e]),
                      this._commitLog.push({
                        timestamp: r,
                        message: t,
                        data: JSON.parse(JSON.stringify(n[e])),
                      })
                  this._stages[e] = {}
                }
                extract(e) {
                  const t = []
                  for (let i = 0; i < this._data.length; i++)
                    t.push(this._data[i][e])
                  return t
                }
                min(e) {
                  return Math.min.apply(null, this.extractNumerical(e))
                }
                max(e) {
                  return Math.max.apply(null, this.extractNumerical(e))
                }
                minRecord(e) {
                  const t = { index: 0, value: 0 }
                  if (0 === this._data.length)
                    return (t.index = null), (t.value = null), t
                  ;(t.index = this._data[0].$loki),
                    (t.value = parseFloat(this._data[0][e]))
                  for (let i = 1; i < this._data.length; i++) {
                    const n = parseFloat(this._data[i][e])
                    t.value > n &&
                      ((t.value = n), (t.index = this._data[i].$loki))
                  }
                  return t
                }
                maxRecord(e) {
                  const t = { index: 0, value: 0 }
                  if (0 === this._data.length)
                    return (t.index = null), (t.value = null), t
                  ;(t.index = this._data[0].$loki),
                    (t.value = parseFloat(this._data[0][e]))
                  for (let i = 1; i < this._data.length; i++) {
                    const n = parseFloat(this._data[i][e])
                    t.value < n &&
                      ((t.value = n), (t.index = this._data[i].$loki))
                  }
                  return t
                }
                extractNumerical(e) {
                  return this.extract(e)
                    .map(parseFloat)
                    .filter(Number)
                    .filter((e) => !isNaN(e))
                }
                avg(e) {
                  return k(this.extractNumerical(e))
                }
                stdDev(e) {
                  return (function (e) {
                    const t = k(e),
                      n = k(
                        e.map((e) => {
                          const n = e - t
                          return n * n
                        })
                      )
                    return Math.sqrt(n)
                  })(this.extractNumerical(e))
                }
                mode(e) {
                  const t = {},
                    data = this.extractNumerical(e)
                  let n = data[0],
                    r = -1 / 0
                  for (let i = 0; i < data.length; i++) {
                    const e = data[i]
                    t[e] ? t[e]++ : (t[e] = 1),
                      t[e] > r && ((n = e), (r = t[e]))
                  }
                  return n
                }
                median(e) {
                  const t = this.extractNumerical(e)
                  t.sort((a, b) => a - b)
                  const n = Math.floor(t.length / 2)
                  return t.length % 2 ? t[n] : (t[n - 1] + t[n]) / 2
                }
              }
            },
            function (e, t, n) {
              'use strict'
              class r {
                constructor(e, t) {
                  ;(this.nodes = {}),
                    (this.apex = null),
                    (this.name = e),
                    (this.comparator = t)
                }
                backup() {
                  let e = new r(this.name, this.comparator)
                  return (
                    (e.nodes = JSON.parse(JSON.stringify(this.nodes))),
                    (e.apex = this.apex),
                    e
                  )
                }
                restore(e) {
                  ;(this.name = e.name),
                    (this.comparator = e.comparator),
                    (this.nodes = JSON.parse(JSON.stringify(e.nodes))),
                    (this.apex = e.apex)
                }
                insert(e, t) {
                  if (e <= 0)
                    throw new Error(
                      'avl index ids are required to be numbers greater than zero'
                    )
                  let n = (this.nodes[e] = {
                    id: e,
                    value: t,
                    parent: null,
                    balance: 0,
                    height: 0,
                    left: null,
                    right: null,
                    siblings: [],
                  })
                  this.apex
                    ? this.insertNode(this.nodes[this.apex], n)
                    : (this.apex = e)
                }
                insertNode(e, t) {
                  switch (this.comparator(t.value, e.value)) {
                    case 0:
                      e.siblings.push(t.id), (t.parent = e.id)
                      break
                    case 1:
                      e.right
                        ? (this.insertNode(this.nodes[e.right], t),
                          this.updateBalance(e))
                        : ((e.right = t.id),
                          (t.parent = e.id),
                          this.updateBalance(e))
                      break
                    case -1:
                      e.left
                        ? (this.insertNode(this.nodes[e.left], t),
                          this.updateBalance(e))
                        : ((e.left = t.id),
                          (t.parent = e.id),
                          this.updateBalance(e))
                      break
                    default:
                      throw new Error('Invalid comparator result')
                  }
                  if (e.balance < -1) {
                    if (null === e.left)
                      throw new Error(
                        'insertNode.balance() : left child should not be null'
                      )
                    this.nodes[e.left].balance <= 0
                      ? this.leftLeftCase(e)
                      : this.leftRightCase(e)
                  }
                  if (e.balance > 1) {
                    if (null === e.right)
                      throw new Error(
                        'insertNode.balance() : right child should not be null'
                      )
                    this.nodes[e.right].balance >= 0
                      ? this.rightRightCase(e)
                      : this.rightLeftCase(e)
                  }
                  return e.height
                }
                updateBalance(e) {
                  let t = e.left ? this.nodes[e.left].height : -1,
                    hr = e.right ? this.nodes[e.right].height : -1
                  ;(e.height = t > hr ? 1 + t : 1 + hr), (e.balance = hr - t)
                }
                leftLeftCase(e) {
                  return this.rotateRight(e)
                }
                leftRightCase(e) {
                  if (!e.left)
                    throw new Error('leftRightCase: left child not set')
                  return (
                    (e.left = this.rotateLeft(this.nodes[e.left]).id),
                    this.rotateRight(e)
                  )
                }
                rightRightCase(e) {
                  return this.rotateLeft(e)
                }
                rightLeftCase(e) {
                  if (!e.right)
                    throw new Error('rightLeftCase: right child not set')
                  return (
                    (e.right = this.rotateRight(this.nodes[e.right]).id),
                    this.rotateLeft(e)
                  )
                }
                rotateLeft(e) {
                  if (!e.right)
                    throw new Error('rotateLeft: right child was unavailable.')
                  let t = e.parent ? this.nodes[e.parent] : null,
                    n = this.nodes[e.right]
                  if (
                    ((e.right = n.left),
                    e.right && (this.nodes[e.right].parent = e.id),
                    (n.left = e.id),
                    (n.parent = e.parent),
                    (e.parent = n.id),
                    t)
                  )
                    if (t.left === e.id) t.left = n.id
                    else {
                      if (t.right !== e.id)
                        throw new Error(
                          'rotateLeft() : attempt to remap parent back to child failed... not found'
                        )
                      t.right = n.id
                    }
                  else {
                    if (this.apex !== e.id)
                      throw new Error(
                        'rightRotate expecting parentless node to be apex'
                      )
                    this.apex = n.id
                  }
                  return this.updateBalance(e), this.updateBalance(n), n
                }
                rotateRight(e) {
                  if (!e.left)
                    throw new Error('rotateRight : left child unavailable')
                  let t = e.parent ? this.nodes[e.parent] : null,
                    n = this.nodes[e.left]
                  if (
                    ((e.left = n.right),
                    n.right && (this.nodes[n.right].parent = e.id),
                    (n.right = e.id),
                    (n.parent = e.parent),
                    (e.parent = n.id),
                    t)
                  )
                    t.left === e.id ? (t.left = n.id) : (t.right = n.id)
                  else {
                    if (this.apex !== e.id)
                      throw new Error(
                        'rightRotate expecting parentless node to be apex'
                      )
                    this.apex = n.id
                  }
                  return this.updateBalance(e), this.updateBalance(n), n
                }
                getValuesAsTree(e) {
                  return null === this.apex
                    ? null
                    : {
                        id: (e = e || this.nodes[this.apex]).id,
                        val: e.value,
                        siblings: e.siblings,
                        balance: e.balance,
                        height: e.height,
                        left: e.left
                          ? this.getValuesAsTree(this.nodes[e.left])
                          : null,
                        right: e.right
                          ? this.getValuesAsTree(this.nodes[e.right])
                          : null,
                      }
                }
                update(e, t) {
                  let n = this.nodes[e]
                  0 !== this.comparator(n.value, t) &&
                    (this.remove(e), this.insert(e, t))
                }
                remove(e) {
                  if (!this.apex)
                    throw new Error(
                      'remove() : attempting remove when tree has no apex'
                    )
                  this.removeNode(this.nodes[this.apex], e)
                }
                removeNode(e, t) {
                  if (!this.nodes[t])
                    throw new Error(
                      'removeNode: attempting to remove a node which is not in hashmap'
                    )
                  let n = this.nodes[t].value
                  switch (this.comparator(n, e.value)) {
                    case 0:
                      if (e.siblings.length > 0) {
                        if (e.id === t) {
                          let n = e.siblings.shift(),
                            r = this.nodes[n]
                          ;(r.parent = e.parent),
                            this.updateChildLink(e.parent, t, n),
                            e.left && (this.nodes[e.left].parent = n),
                            e.right && (this.nodes[e.right].parent = n),
                            (r.left = e.left),
                            (r.right = e.right),
                            (r.siblings = e.siblings),
                            (r.height = e.height),
                            (r.balance = e.balance),
                            this.apex === t && (this.apex = n)
                          for (let e of r.siblings) this.nodes[e].parent = n
                          return void delete this.nodes[t]
                        }
                        {
                          let n = e.siblings.indexOf(t)
                          if (-1 === n)
                            throw new Error(
                              'Unable to remove sibling from parented sibling'
                            )
                          return (
                            e.siblings.splice(n, 1), void delete this.nodes[t]
                          )
                        }
                      }
                      return e.left || e.right
                        ? e.left && e.right
                          ? void this.promoteSuccessor(e)
                          : (e.left &&
                              (this.promoteChild(e, this.nodes[e.left]),
                              this.apex === t && (this.apex = e.left)),
                            void (
                              e.right &&
                              (this.promoteChild(e, this.nodes[e.right]),
                              this.apex === t && (this.apex = e.right))
                            ))
                        : (this.updateChildLink(e.parent, e.id, null),
                          delete this.nodes[t],
                          void (t === this.apex && (this.apex = null)))
                    case 1:
                      if (!e.right)
                        throw new Error(
                          'removeNode: Unable to find value in tree'
                        )
                      this.removeNode(this.nodes[e.right], t)
                      break
                    case -1:
                      if (!e.left)
                        throw new Error(
                          'removeNode: Unable to find value in tree'
                        )
                      this.removeNode(this.nodes[e.left], t)
                  }
                  if ((this.updateBalance(e), e.balance < -1)) {
                    if (null === e.left)
                      throw new Error(
                        'insertNode.balance() : left child should not be null'
                      )
                    this.nodes[e.left].balance <= 0
                      ? this.leftLeftCase(e)
                      : this.leftRightCase(e)
                  }
                  if (e.balance > 1) {
                    if (null === e.right)
                      throw new Error(
                        'insertNode.balance() : right child should not be null'
                      )
                    this.nodes[e.right].balance >= 0
                      ? this.rightRightCase(e)
                      : this.rightLeftCase(e)
                  }
                }
                updateChildLink(e, t, n) {
                  if (null === e) return
                  let r = this.nodes[e]
                  r.left === t ? (r.left = n) : r.right === t && (r.right = n)
                }
                promoteChild(e, t) {
                  let n = e.parent
                  if (n) {
                    let r = this.nodes[n]
                    r.left === e.id
                      ? (r.left = t.id)
                      : r.right === e.id && (r.right = t.id)
                  }
                  ;(t.parent = n), delete this.nodes[e.id]
                }
                promoteSuccessor(e) {
                  let t = e.id
                  if (!e.right || !e.left)
                    throw new Error(
                      'promoteSuccessor() : node to replace does not have two children'
                    )
                  let n,
                    r,
                    o,
                    l = null
                  if (e.balance < 0) {
                    let t = this.nodes[e.left]
                    ;(l = this.findGreaterLeaf(t)),
                      (n = l.id),
                      (r = l.value),
                      (o = l.siblings),
                      (l.siblings = []),
                      this.removeNode(t, n)
                  } else {
                    let t = this.nodes[e.right]
                    ;(l = this.findLesserLeaf(t)),
                      (n = l.id),
                      (r = l.value),
                      (o = l.siblings),
                      (l.siblings = []),
                      this.removeNode(t, n)
                  }
                  if (e.parent) {
                    let p = this.nodes[e.parent]
                    p.left === t && (p.left = n), p.right === t && (p.right = n)
                  }
                  e.left && (this.nodes[e.left].parent = n),
                    e.right && (this.nodes[e.right].parent = n),
                    (e.id = n),
                    (e.value = r),
                    (e.siblings = o),
                    (this.nodes[n] = e),
                    delete this.nodes[t],
                    this.apex === t && (this.apex = n),
                    this.updateBalance(e)
                }
                findGreaterLeaf(e) {
                  if (!e.right) return e
                  let t = this.findGreaterLeaf(this.nodes[e.right])
                  return t || e
                }
                findLesserLeaf(e) {
                  if (!e.left) return e
                  let t = this.findLesserLeaf(this.nodes[e.left])
                  return t || e
                }
                rangeRequest(e) {
                  if (!this.apex) return []
                  if (!e) return this.collateIds(this.nodes[this.apex])
                  if ('$eq' === e.op) {
                    let t = this.locate(this.nodes[this.apex], e.val)
                    return null === t
                      ? []
                      : t.siblings.length
                      ? [t.id, ...t.siblings]
                      : [t.id]
                  }
                  return this.collateRequest(this.nodes[this.apex], e)
                }
                collateRequest(e, t) {
                  let n = []
                  if ('$eq' === t.op)
                    throw new Error(
                      'collateRequest does not support $eq range request'
                    )
                  let r = this.comparator(e.value, t.val),
                    o = 0
                  if ('$between' === t.op) {
                    if (null === t.high || void 0 === t.high)
                      throw new Error(
                        'collateRequest: $between request missing high range value'
                      )
                    o = this.comparator(e.value, t.high)
                  }
                  if (e.left)
                    switch (t.op) {
                      case '$lt':
                      case '$lte':
                        n = this.collateRequest(this.nodes[e.left], t)
                        break
                      case '$gt':
                      case '$gte':
                      case '$between':
                        1 === r &&
                          (n = this.collateRequest(this.nodes[e.left], t))
                    }
                  if (t)
                    switch (t.op) {
                      case '$lt':
                        ;-1 === r && (n.push(e.id), n.push(...e.siblings))
                        break
                      case '$lte':
                        ;(-1 !== r && 0 !== r) ||
                          (n.push(e.id), n.push(...e.siblings))
                        break
                      case '$gt':
                        1 === r && (n.push(e.id), n.push(...e.siblings))
                        break
                      case '$gte':
                        ;(1 !== r && 0 !== r) ||
                          (n.push(e.id), n.push(...e.siblings))
                        break
                      case '$between':
                        r >= 0 &&
                          o <= 0 &&
                          (n.push(e.id), n.push(...e.siblings))
                    }
                  else n.push(e.id), n.push(...e.siblings)
                  if (e.right)
                    if (t)
                      switch (t.op) {
                        case '$lt':
                        case '$lte':
                          ;-1 === r &&
                            n.push(
                              ...this.collateRequest(this.nodes[e.right], t)
                            )
                          break
                        case '$gt':
                        case '$gte':
                          n.push(...this.collateRequest(this.nodes[e.right], t))
                          break
                        case '$between':
                          ;-1 === o &&
                            n.push(
                              ...this.collateRequest(this.nodes[e.right], t)
                            )
                      }
                    else n.push(...this.collateRequest(this.nodes[e.right], t))
                  return n
                }
                collateIds(e) {
                  let t = []
                  return e
                    ? (e.left && (t = this.collateIds(this.nodes[e.left])),
                      t.push(e.id),
                      t.push(...e.siblings),
                      e.right &&
                        t.push(...this.collateIds(this.nodes[e.right])),
                      t)
                    : []
                }
                locate(e, t) {
                  for (; null !== e; )
                    switch (this.comparator(t, e.value)) {
                      case 0:
                        return e
                      case 1:
                        if (!e.right) return null
                        e = this.nodes[e.right]
                        break
                      case -1:
                        if (!e.left) return null
                        e = this.nodes[e.left]
                    }
                  return null
                }
                validateIndex() {
                  if (!this.apex) return 0 === Object.keys(this.nodes).length
                  if (null !== this.nodes[this.apex].parent) return !1
                  let e = this.collateIds(this.nodes[this.apex]),
                    t = Object.keys(this.nodes).length
                  if (e.length !== t) return !1
                  if (1 === e.length)
                    return (
                      null === this.nodes[e[0]].parent &&
                      null === this.nodes[e[0]].left &&
                      null === this.nodes[e[0]].right
                    )
                  for (let i = 0; i < e.length - 1; i++)
                    if (
                      1 ===
                      this.comparator(
                        this.nodes[e[i]].value,
                        this.nodes[e[i + 1]].value
                      )
                    )
                      return !1
                  return this.validateNode(this.nodes[this.apex])
                }
                validateNode(e) {
                  if (-1 !== [e.parent, e.left, e.right].indexOf(e.id))
                    return !1
                  let t = e.left ? this.nodes[e.left].height : -1,
                    hr = e.right ? this.nodes[e.right].height : -1,
                    n = 1 + Math.max(t, hr)
                  if (e.height !== n) return !1
                  if (e.balance !== hr - t) return !1
                  if (e.siblings.length > 0)
                    for (let t of e.siblings)
                      if (this.nodes[t].parent !== e.id) return !1
                  if (e.left) {
                    if (this.nodes[e.left].parent !== e.id) return !1
                    if (!this.validateNode(this.nodes[e.left])) return !1
                  }
                  if (e.right) {
                    if (this.nodes[e.right].parent !== e.id) return !1
                    if (!this.validateNode(this.nodes[e.right])) return !1
                  }
                  return !0
                }
              }
              n.d(t, 'a', function () {
                return o
              })
              let o = { avl: (e, t) => new r(e, t) }
            },
            function (e, t, n) {
              'use strict'
              n.d(t, 'a', function () {
                return r
              })
              class r {
                constructor() {
                  ;(this._events = {}), (this._asyncListeners = !1)
                }
                on(e, t) {
                  let n
                  return Array.isArray(e)
                    ? (e.forEach((e) => {
                        this.on(e, t)
                      }),
                      t)
                    : ((n = this._events[e]),
                      n || (n = this._events[e] = []),
                      n.push(t),
                      t)
                }
                emit(e, ...data) {
                  e &&
                    this._events[e] &&
                    this._events[e].forEach((e) => {
                      this._asyncListeners
                        ? setTimeout(() => {
                            e(...data)
                          }, 1)
                        : e(...data)
                    })
                }
                addListener(e, t) {
                  return this.on(e, t)
                }
                removeListener(e, t) {
                  if (
                    (Array.isArray(e) &&
                      e.forEach((e) => {
                        this.removeListener(e, t)
                      }),
                    this._events[e])
                  ) {
                    const n = this._events[e]
                    n.splice(n.indexOf(t), 1)
                  }
                }
              }
            },
            function (e, t, n) {
              'use strict'
              ;(function (e) {
                n.d(t, 'a', function () {
                  return _
                })
                var r = n(5),
                  o = n(3),
                  l = n(1),
                  h = n(0),
                  c = n(4),
                  d = n(2)
                function f() {
                  if (void 0 !== e && (e.android || e.NSObject))
                    return 'NATIVESCRIPT'
                  if (
                    void 0 !== e &&
                    '[object process]' === {}.toString.call(e.process)
                  )
                    return e.window, 'NODEJS'
                  if (void 0 !== document)
                    return -1 === document.URL.indexOf('http://') &&
                      -1 === document.URL.indexOf('https://')
                      ? 'CORDOVA'
                      : 'BROWSER'
                  if (
                    void 0 !== window &&
                    '[object Window]' === {}.toString.call(window)
                  )
                    return 'BROWSER'
                  throw SyntaxError('Unknown environment...')
                }
                class _ extends r.a {
                  constructor(e = 'loki.db', t = {}) {
                    if (
                      (super(),
                      (this.databaseVersion = 1.5),
                      (this.engineVersion = 1.5),
                      (this._persistenceMethod = null),
                      (this._persistenceAdapter = null),
                      (this._throttledSaves = !0),
                      (this._throttledSaveRunning = null),
                      (this._throttledSavePending = null),
                      (this._autosave = !1),
                      (this._autosaveInterval = 5e3),
                      (this._autosaveRunning = !1),
                      (this._autosaveHandler = Promise.resolve()),
                      (this.filename = e),
                      (this._collections = []),
                      ({
                        serializationMethod: this
                          ._serializationMethod = 'normal',
                        destructureDelimiter: this
                          ._destructureDelimiter = '$<\n',
                        env: this._env = f(),
                      } = t),
                      (this._events = {
                        init: [],
                        loaded: [],
                        flushChanges: [],
                        close: [],
                        changes: [],
                        warning: [],
                      }),
                      t.comparatorMap)
                    )
                      for (let e in t.comparatorMap) h.a[e] = t.comparatorMap[e]
                    if (t.rangedIndexFactoryMap)
                      for (let e in t.rangedIndexFactoryMap)
                        c.a[e] = t.rangedIndexFactoryMap[e]
                    if (t.lokiOperatorPackageMap)
                      for (let e in t.lokiOperatorPackageMap)
                        d.a[e] = t.lokiOperatorPackageMap[e]
                    this.on('init', this.clearChanges)
                  }
                  initializePersistence(e = {}) {
                    let t = this._autosaveDisable()
                    ;({
                      autosave: this._autosave = !1,
                      autosaveInterval: this._autosaveInterval = 5e3,
                      persistenceMethod: this._persistenceMethod,
                      throttledSaves: this._throttledSaves = !0,
                    } = e)
                    const n = {
                        NODEJS: ['fs-storage'],
                        BROWSER: ['local-storage', 'indexed-storage'],
                        CORDOVA: ['local-storage', 'indexed-storage'],
                        MEMORY: ['memory-storage'],
                      },
                      r = {
                        'fs-storage': l.a.FSStorage,
                        'local-storage': l.a.LocalStorage,
                        'indexed-storage': l.a.IndexedStorage,
                        'memory-storage': l.a.MemoryStorage,
                      }
                    if (void 0 !== this._persistenceMethod) {
                      if ('function' != typeof r[this._persistenceMethod])
                        throw Error('Unknown persistence method.')
                      this._persistenceAdapter = new r[
                        this._persistenceMethod
                      ]()
                    }
                    if (
                      (void 0 !== e.adapter &&
                        ((this._persistenceMethod = 'adapter'),
                        (this._persistenceAdapter = e.adapter)),
                      null === this._persistenceAdapter)
                    ) {
                      let e = n[this._env]
                      if (e)
                        for (let i = 0; i < e.length; i++)
                          if (r[e[i]]) {
                            ;(this._persistenceMethod = e[i]),
                              (this._persistenceAdapter = new r[e[i]]())
                            break
                          }
                    }
                    return (
                      e.autoload &&
                        (t = t.then(() => this._loadDatabase(e.inflate, !0))),
                      t.then(() => {
                        this._autosaveEnable()
                      })
                    )
                  }
                  copy(e = {}) {
                    const t = new _(this.filename, {
                      env: this._env,
                    })
                    if (
                      (t.loadJSONObject(this, {
                        retainDirtyFlags: !0,
                      }),
                      e.removeNonSerializable)
                    ) {
                      t._persistenceAdapter = null
                      for (let e = 0; e < t._collections.length; e++)
                        (t._collections[e]._constraints = null),
                          (t._collections[e]._ttl = null)
                    }
                    return t
                  }
                  addCollection(e, t = {}) {
                    for (let i = 0; i < this._collections.length; i++)
                      if (this._collections[i].name === e)
                        return this._collections[i]
                    const n = new o.a(e, t)
                    return this._collections.push(n), n
                  }
                  loadCollection(e) {
                    if (!e.name)
                      throw new Error(
                        'Collection must have a name property to be loaded'
                      )
                    this._collections.push(e)
                  }
                  getCollection(e) {
                    for (let i = 0; i < this._collections.length; i++)
                      if (this._collections[i].name === e)
                        return this._collections[i]
                    return (
                      this.emit('warning', 'collection ' + e + ' not found'),
                      null
                    )
                  }
                  renameCollection(e, t) {
                    const n = this.getCollection(e)
                    return n && (n.name = t), n
                  }
                  listCollections() {
                    const e = []
                    for (let i = 0; i < this._collections.length; i++)
                      e.push({
                        name: this._collections[i].name,
                        count: this._collections[i].count(),
                      })
                    return e
                  }
                  removeCollection(e) {
                    for (let i = 0; i < this._collections.length; i++)
                      if (this._collections[i].name === e) {
                        const t = new o.a(e, {}),
                          n = this._collections[i]
                        for (const e in n)
                          void 0 !== n[e] && void 0 !== t[e] && (n[e] = t[e])
                        return void this._collections.splice(i, 1)
                      }
                  }
                  serialize(e = {}) {
                    switch (
                      (void 0 === e.serializationMethod &&
                        (e.serializationMethod = this._serializationMethod),
                      e.serializationMethod)
                    ) {
                      case 'normal':
                      default:
                        return JSON.stringify(this)
                      case 'pretty':
                        return JSON.stringify(this, null, 2)
                      case 'destructured':
                        return this.serializeDestructured()
                    }
                  }
                  toJSON() {
                    return {
                      _env: this._env,
                      _serializationMethod: this._serializationMethod,
                      _autosave: this._autosave,
                      _autosaveInterval: this._autosaveInterval,
                      _collections: this._collections,
                      databaseVersion: this.databaseVersion,
                      engineVersion: this.engineVersion,
                      filename: this.filename,
                      _persistenceAdapter: this._persistenceAdapter,
                      _persistenceMethod: this._persistenceMethod,
                      _throttledSaves: this._throttledSaves,
                    }
                  }
                  serializeDestructured(e = {}) {
                    if (
                      (void 0 === e.partitioned && (e.partitioned = !1),
                      void 0 === e.delimited && (e.delimited = !0),
                      void 0 === e.delimiter &&
                        (e.delimiter = this._destructureDelimiter),
                      !0 === e.partitioned &&
                        void 0 !== e.partition &&
                        e.partition >= 0)
                    )
                      return this.serializeCollection({
                        delimited: e.delimited,
                        delimiter: e.delimiter,
                        collectionIndex: e.partition,
                      })
                    let t = new _(this.filename)
                    t.loadJSONObject(this)
                    for (let e = 0; e < t._collections.length; e++)
                      t._collections[e]._data = []
                    if (!0 === e.partitioned && -1 === e.partition)
                      return t.serialize({
                        serializationMethod: 'normal',
                      })
                    const n = []
                    n.push(
                      t.serialize({
                        serializationMethod: 'normal',
                      })
                    ),
                      (t = null)
                    for (let t = 0; t < this._collections.length; t++) {
                      let r = this.serializeCollection({
                        delimited: e.delimited,
                        delimiter: e.delimiter,
                        collectionIndex: t,
                      })
                      if (!1 === e.partitioned && !1 === e.delimited) {
                        if (!Array.isArray(r))
                          throw new Error(
                            'a nondelimited, non partitioned collection serialization did not return an expected array'
                          )
                        for (let e = 0; e < r.length; e++)
                          n.push(r[e]), (r[e] = null)
                        n.push('')
                      } else n.push(r)
                    }
                    return e.partitioned
                      ? (e.delimited, n)
                      : e.delimited
                      ? (n.push(''), n.join(e.delimiter))
                      : (n.push(''), n)
                  }
                  serializeCollection(e = {}) {
                    if (
                      (void 0 === e.delimited && (e.delimited = !0),
                      void 0 === e.collectionIndex)
                    )
                      throw new Error(
                        "serializeCollection called without 'collectionIndex' option"
                      )
                    const t = this._collections[e.collectionIndex].count()
                    let n = []
                    for (let r = 0; r < t; r++)
                      n.push(
                        JSON.stringify(
                          this._collections[e.collectionIndex]._data[r]
                        )
                      )
                    return e.delimited ? (n.push(''), n.join(e.delimiter)) : n
                  }
                  deserializeDestructured(e, t = {}) {
                    if (
                      (void 0 === t.partitioned && (t.partitioned = !1),
                      void 0 === t.delimited && (t.delimited = !0),
                      void 0 === t.delimiter &&
                        (t.delimiter = this._destructureDelimiter),
                      t.partitioned)
                    ) {
                      if (void 0 !== t.partition)
                        return -1 === t.partition
                          ? JSON.parse(e[0])
                          : this.deserializeCollection(e[t.partition + 1], t)
                      const n = JSON.parse(e[0]),
                        r = n._collections.length
                      for (let o = 0; o < r; o++)
                        n._collections[o]._data = this.deserializeCollection(
                          e[o + 1],
                          t
                        )
                      return n
                    }
                    let n = []
                    if (t.delimited) {
                      if (
                        ((n = e.split(t.delimiter)), (e = null), 0 === n.length)
                      )
                        return null
                    } else n = e
                    const r = JSON.parse(n[0]),
                      o = r._collections.length
                    n[0] = null
                    let l = 0,
                      h = 1,
                      c = !1
                    for (; !c; )
                      '' === n[h]
                        ? ++l > o && (c = !0)
                        : r._collections[l]._data.push(JSON.parse(n[h])),
                        (n[h++] = null)
                    return r
                  }
                  deserializeCollection(e, t = {}) {
                    void 0 === t.partitioned && (t.partitioned = !1),
                      void 0 === t.delimited && (t.delimited = !0),
                      void 0 === t.delimiter &&
                        (t.delimiter = this._destructureDelimiter)
                    let n = []
                    t.delimited
                      ? ((n = e.split(t.delimiter)), n.pop())
                      : (n = e)
                    for (let e = 0; e < n.length; e++) n[e] = JSON.parse(n[e])
                    return n
                  }
                  loadJSON(e, t) {
                    let n
                    if (0 === e.length) n = {}
                    else
                      switch (this._serializationMethod) {
                        case 'normal':
                        case 'pretty':
                        default:
                          n = JSON.parse(e)
                          break
                        case 'destructured':
                          n = this.deserializeDestructured(e)
                      }
                    this.loadJSONObject(n, t)
                  }
                  loadJSONObject(e, t = {}) {
                    const n = e._collections ? e._collections.length : 0
                    ;(this.filename = e.filename), (this._collections = [])
                    for (let i = 0; i < n; ++i)
                      this._collections.push(
                        o.a.fromJSONObject(e._collections[i], t)
                      )
                  }
                  close() {
                    return this._autosave
                      ? this._autosaveDisable().then(() =>
                          this._autosaveDirty()
                            ? this.saveDatabase()
                            : Promise.resolve()
                        )
                      : Promise.resolve().then(() => {
                          this.emit('close')
                        })
                  }
                  generateChangesNotification(e) {
                    let t = []
                    const n = e || this._collections.map((e) => e.name)
                    return (
                      this._collections.forEach((e) => {
                        ;-1 !== n.indexOf(e.name) &&
                          (t = t.concat(e.getChanges()))
                      }),
                      t
                    )
                  }
                  serializeChanges(e) {
                    return JSON.stringify(this.generateChangesNotification(e))
                  }
                  clearChanges() {
                    this._collections.forEach((e) => {
                      e.flushChanges && e.flushChanges()
                    })
                  }
                  throttledSaveDrain(e = {}) {
                    const t = new Date().getTime()
                    return this._throttledSaves
                      ? (void 0 === e.recursiveWait && (e.recursiveWait = !0),
                        void 0 === e.recursiveWaitLimit &&
                          (e.recursiveWaitLimit = !1),
                        void 0 === e.recursiveWaitLimitDuration &&
                          (e.recursiveWaitLimitDuration = 2e3),
                        void 0 === e.started && (e.started = new Date()),
                        this._throttledSaves &&
                        null !== this._throttledSaveRunning
                          ? e.recursiveWait
                            ? Promise.resolve(
                                Promise.all([
                                  this._throttledSaveRunning,
                                  this._throttledSavePending,
                                ])
                              ).then(() =>
                                null !== this._throttledSaveRunning ||
                                null !== this._throttledSavePending
                                  ? e.recursiveWaitLimit &&
                                    t - e.started.getTime() >
                                      e.recursiveWaitLimitDuration
                                    ? Promise.reject({})
                                    : this.throttledSaveDrain(e)
                                  : Promise.resolve()
                              )
                            : Promise.resolve(this._throttledSaveRunning)
                          : Promise.resolve())
                      : Promise.resolve()
                  }
                  _loadDatabase(e = {}, t = !1) {
                    return null === this._persistenceAdapter
                      ? Promise.reject(
                          new Error('persistenceAdapter not configured')
                        )
                      : Promise.resolve(
                          this._persistenceAdapter.loadDatabase(this.filename)
                        )
                          .then((t) => {
                            if ('string' == typeof t)
                              this.loadJSON(t, e), this.emit('load', this)
                            else {
                              if (
                                'object' != typeof t ||
                                null === t ||
                                t instanceof Error
                              )
                                throw t
                              this.loadJSONObject(t, e), this.emit('load', this)
                            }
                          })
                          .catch((e) => {
                            if (e instanceof Error) throw e
                            if (null != e)
                              throw new TypeError(
                                'The persistence adapter did not load a serialized DB string or object.'
                              )
                            if (!t) throw new Error('Database not found.')
                          })
                  }
                  loadDatabase(e = {}) {
                    return this._throttledSaves
                      ? this.throttledSaveDrain(e).then(
                          () => (
                            (this._throttledSaveRunning = this._loadDatabase(
                              e
                            ).then(() => {
                              this._throttledSaveRunning = null
                            })),
                            this._throttledSaveRunning
                          ),
                          () => {
                            throw new Error(
                              'Unable to pause save throttling long enough to read database'
                            )
                          }
                        )
                      : this._loadDatabase(e)
                  }
                  _saveDatabase() {
                    return null === this._persistenceAdapter
                      ? Promise.reject(
                          new Error('persistenceAdapter not configured')
                        )
                      : 'reference' === this._persistenceAdapter.mode &&
                        'function' ==
                          typeof this._persistenceAdapter.exportDatabase
                      ? Promise.resolve(
                          this._persistenceAdapter.exportDatabase(
                            this.filename,
                            this.copy({
                              removeNonSerializable: !0,
                            })
                          )
                        ).then(() => {
                          this._autosaveClearFlags(), this.emit('save')
                        })
                      : (this._autosaveClearFlags(),
                        Promise.resolve(
                          this._persistenceAdapter.saveDatabase(
                            this.filename,
                            this.serialize()
                          )
                        ).then(() => {
                          this.emit('save')
                        }))
                  }
                  saveDatabase() {
                    return this._throttledSaves
                      ? (null !== this._throttledSaveRunning &&
                          null === this._throttledSavePending &&
                          (this._throttledSavePending = Promise.resolve(
                            this._throttledSaveRunning
                          ).then(
                            () => (
                              (this._throttledSaveRunning = null),
                              (this._throttledSavePending = null),
                              this.saveDatabase()
                            )
                          )),
                        null !== this._throttledSavePending
                          ? this._throttledSavePending
                          : ((this._throttledSaveRunning =
                              this._saveDatabase().then(() => {
                                this._throttledSaveRunning = null
                              })),
                            this._throttledSaveRunning))
                      : this._saveDatabase()
                  }
                  deleteDatabase() {
                    return null === this._persistenceAdapter
                      ? Promise.reject(
                          new Error('persistenceAdapter not configured')
                        )
                      : Promise.resolve(
                          this._persistenceAdapter.deleteDatabase(this.filename)
                        )
                  }
                  _autosaveDirty() {
                    for (let e = 0; e < this._collections.length; e++)
                      if (this._collections[e]._dirty) return !0
                    return !1
                  }
                  _autosaveClearFlags() {
                    for (let e = 0; e < this._collections.length; e++)
                      this._collections[e]._dirty = !1
                  }
                  _autosaveEnable() {
                    if (!this._autosave || this._autosaveRunning) return
                    this._autosaveRunning = !0
                    const e = setInterval(() => {
                      this._autosaveRunning
                        ? this._autosaveDirty() &&
                          (this._autosaveHandler = this._autosaveHandler.then(
                            () => this.saveDatabase()
                          ))
                        : clearInterval(e)
                    }, this._autosaveInterval)
                  }
                  _autosaveDisable() {
                    return (this._autosaveRunning = !1), this._autosaveHandler
                  }
                }
              }.call(this, n(7)))
            },
            function (e, t) {
              var g
              g = (function () {
                return this
              })()
              try {
                g = g || Function('return this')() || (0, eval)('this')
              } catch (e) {
                'object' == typeof window && (g = window)
              }
              e.exports = g
            },
            function (e, t, n) {
              'use strict'
              n.r(t)
              var r = n(6)
              n.d(t, 'Loki', function () {
                return r.a
              })
              var o = n(3)
              n.d(t, 'Collection', function () {
                return o.a
              }),
                (r.a.Collection = o.a),
                (t.default = r.a)
            },
          ])
        }),
        (e.exports = r())
    },
    344: function (e, t, n) {
      var r
      'undefined' != typeof self && self,
        (r = function () {
          return (function (e) {
            var t = {}
            function n(r) {
              if (t[r]) return t[r].exports
              var o = (t[r] = { i: r, l: !1, exports: {} })
              return (
                e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
              )
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r,
                  })
              }),
              (n.r = function (e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', {
                    value: !0,
                  })
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e
                var r = Object.create(null)
                if (
                  (n.r(r),
                  Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && 'string' != typeof e)
                )
                  for (var o in e)
                    n.d(
                      r,
                      o,
                      function (t) {
                        return e[t]
                      }.bind(null, o)
                    )
                return r
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default
                      }
                    : function () {
                        return e
                      }
                return n.d(t, 'a', t), t
              }),
              (n.o = function (object, e) {
                return Object.prototype.hasOwnProperty.call(object, e)
              }),
              (n.p = ''),
              n((n.s = 1))
            )
          })([
            function (e, t, n) {
              'use strict'
              ;(function (e) {
                function r() {
                  let t
                  return (
                    (function (e) {
                      t = e
                    })((void 0 !== e && e) || this),
                    t
                  )
                }
                n.d(t, 'a', function () {
                  return o
                })
                const o = (function () {
                  const e = r(),
                    t = Symbol.for('LOKI')
                  return void 0 === e[t] && (e[t] = {}), e[t]
                })()
              }.call(this, n(2)))
            },
            function (e, t, n) {
              'use strict'
              function r(e) {
                return e.split(/[\s]+/)
              }
              function o(e) {
                return e.toLowerCase()
              }
              function l(e) {
                return e.toUpperCase()
              }
              function h(e, t) {
                if (e.char_filter)
                  for (let n = 0; n < e.char_filter.length; n++)
                    t = e.char_filter[n](t)
                const n = e.tokenizer(t)
                if (e.token_filter)
                  for (let i = 0; i < n.length; i++)
                    for (let t = 0; t < e.token_filter.length; t++)
                      n[i] = e.token_filter[t](n[i], i, n)
                return n.filter((e) => e)
              }
              n.r(t)
              class c {
                constructor() {
                  ;(this.tokenizer = r), (this.token_filter = [o])
                }
              }
              function d(e) {
                const t = []
                for (let i = 0; i < e.length; ) {
                  const n = e.charCodeAt(i++)
                  if (n >= 55296 && n <= 56319) {
                    const r = e.charCodeAt(i++)
                    t.push((65536 + ((n - 55296) << 10)) | (r - 56320))
                  } else t.push(n)
                }
                return t
              }
              class f {
                constructor(e = {}) {
                  ;(this.docCount = 0),
                    (this.docStore = new Map()),
                    (this.totalFieldLength = 0),
                    (this.root = new Map()),
                    ({
                      store: this._store = !0,
                      optimizeChanges: this._optimizeChanges = !0,
                      analyzer: this.analyzer = new c(),
                    } = e)
                }
                insert(e, t) {
                  if (this.docStore.has(t)) throw Error('Field already added.')
                  const n = h(this.analyzer, e)
                  if (0 == n.length)
                    return void this.docStore.set(t, {
                      fieldLength: 0,
                    })
                  ;(this.totalFieldLength += n.length),
                    (this.docCount += 1),
                    this.docStore.set(t, {
                      fieldLength: n.length,
                    })
                  const r = []
                  this._optimizeChanges &&
                    Object.defineProperties(this.docStore.get(t), {
                      indexRef: {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: r,
                      },
                    })
                  for (const e of new Set(n)) {
                    let o = 0
                    for (let t = 0; t < n.length; t++) n[t] === e && ++o
                    let l = this.root
                    for (const t of d(e)) {
                      let e = l.get(t)
                      void 0 === e &&
                        ((e = new Map()),
                        this._optimizeChanges && (e.pa = l),
                        l.set(t, e)),
                        (l = e)
                    }
                    void 0 === l.dc && ((l.dc = new Map()), (l.df = 0)),
                      l.dc.set(t, o),
                      (l.df += 1),
                      r.push(l)
                  }
                }
                remove(e) {
                  if (!this.docStore.has(e)) return
                  const t = this.docStore.get(e)
                  if ((this.docStore.delete(e), 0 !== t.fieldLength))
                    if (
                      ((this.docCount -= 1),
                      (this.totalFieldLength -= t.fieldLength),
                      this._optimizeChanges)
                    ) {
                      const n = t.indexRef
                      for (let t = 0; t < n.length; t++) {
                        let r = n[t]
                        if (((r.df -= 1), r.dc.delete(e), 0 === r.df)) {
                          if ((delete r.df, delete r.dc, 0 !== r.size)) continue
                          do {
                            const e = r.pa
                            delete r.pa
                            for (const t of e.keys())
                              if (e.get(t) === r) {
                                e.delete(t)
                                break
                              }
                            r = e
                          } while (
                            void 0 !== r.pa &&
                            0 === r.size &&
                            void 0 === r.df
                          )
                        }
                      }
                    } else this._remove(this.root, e)
                }
                static getTermIndex(e, t, n = 0) {
                  if (n >= e.length) return null
                  for (let i = n; i < e.length; i++) {
                    let n = t.get(e[i])
                    if (void 0 === n) return null
                    t = n
                  }
                  return t
                }
                static extendTermIndex(e, t = [], n = []) {
                  void 0 !== e.df && n.push({ index: e, term: t.slice() }),
                    t.push(0)
                  for (const r of e)
                    (t[t.length - 1] = r[0]), f.extendTermIndex(r[1], t, n)
                  return t.pop(), n
                }
                toJSON() {
                  return this._store
                    ? {
                        _store: !0,
                        _optimizeChanges: this._optimizeChanges,
                        docCount: this.docCount,
                        docStore: [...this.docStore],
                        totalFieldLength: this.totalFieldLength,
                        root: f._serializeIndex(this.root),
                      }
                    : {
                        _store: !1,
                        _optimizeChanges: this._optimizeChanges,
                      }
                }
                static fromJSONObject(e, t) {
                  const n = new f({
                    store: e._store,
                    optimizeChanges: e._optimizeChanges,
                    analyzer: t,
                  })
                  return (
                    e._store &&
                      ((n.docCount = e.docCount),
                      (n.docStore = new Map(e.docStore)),
                      (n.totalFieldLength = e.totalFieldLength),
                      (n.root = f._deserializeIndex(e.root))),
                    n._optimizeChanges && n._regenerate(n.root, null),
                    n
                  )
                }
                static _serializeIndex(e) {
                  const t = {}
                  if (
                    (void 0 !== e.dc && (t.d = { df: e.df, dc: [...e.dc] }),
                    0 === e.size)
                  )
                    return t
                  const n = [],
                    r = []
                  for (const t of e)
                    n.push(t[0]), r.push(f._serializeIndex(t[1]))
                  return (t.k = n), (t.v = r), t
                }
                static _deserializeIndex(e) {
                  const t = new Map()
                  if (void 0 !== e.k)
                    for (let i = 0; i < e.k.length; i++)
                      t.set(e.k[i], f._deserializeIndex(e.v[i]))
                  return (
                    void 0 !== e.d &&
                      ((t.df = e.d.df), (t.dc = new Map(e.d.dc))),
                    t
                  )
                }
                _regenerate(e, t) {
                  null !== t && (e.pa = t)
                  for (const t of e.values()) this._regenerate(t, e)
                  if (void 0 !== e.dc)
                    for (const t of e.dc.keys()) {
                      const n = this.docStore.get(t)
                      void 0 === n.indexRef &&
                        Object.defineProperties(n, {
                          indexRef: {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: [],
                          },
                        }),
                        n.indexRef.push(e)
                    }
                }
                _remove(e, t) {
                  for (const n of e) this._remove(n[1], t) && e.delete(n[0])
                  return (
                    void 0 !== e.df &&
                      e.dc.has(t) &&
                      ((e.df -= 1),
                      e.dc.delete(t),
                      0 === e.df && (delete e.df, delete e.dc)),
                    0 === e.size && void 0 === e.dc
                  )
                }
              }
              class _ {
                constructor(e) {
                  ;(this._cache = {}), (this._invIdxs = e)
                }
                setDirty() {
                  this._cache = {}
                }
                score(e, t, n, r, o, l, h = 0) {
                  if (null === n || void 0 === n.dc) return
                  const c = this._idf(e, h || n.df)
                  for (const [h, d] of n.dc)
                    o.has(h) || o.set(h, []),
                      !0 === r
                        ? o.get(h).push({
                            tf: d,
                            idf: c,
                            boost: t,
                            fieldName: e,
                            term: l,
                          })
                        : !1 === r
                        ? o.set(h, [{ boost: t }])
                        : o.set(h, [{ boost: 0 }])
                }
                scoreConstant(e, t, n) {
                  return (
                    n.has(t) || n.set(t, []), n.get(t).push({ boost: e }), n
                  )
                }
                finalScore(e, t) {
                  const n = {},
                    r = void 0 !== e.bm25 ? e.bm25.k1 : 1.2,
                    b = void 0 !== e.bm25 ? e.bm25.b : 0.75,
                    o = void 0 !== e.explain && e.explain
                  for (const [e, l] of t) {
                    let t = 0,
                      h = []
                    for (let i = 0; i < l.length; i++) {
                      const n = l[i]
                      let c = 0
                      if (void 0 !== n.tf) {
                        const t = n.tf,
                          l = _._calculateFieldLength(
                            this._invIdxs[n.fieldName].docStore.get(e)
                              .fieldLength
                          ),
                          d = this._avgFieldLength(n.fieldName),
                          f = (t * (r + 1)) / (t + r * (1 - b + b * (l / d)))
                        ;(c = n.idf * f * n.boost),
                          o &&
                            h.push({
                              boost: n.boost,
                              score: c,
                              docID: e,
                              fieldName: n.fieldName,
                              index: String.fromCharCode(...n.term),
                              idf: n.idf,
                              tfNorm: f,
                              tf: t,
                              fieldLength: l,
                              avgFieldLength: d,
                            })
                      } else
                        (c = n.boost),
                          o &&
                            h.push({
                              boost: n.boost,
                              score: c,
                            })
                      t += c
                    }
                    n[e] = o ? { score: t, explanation: h } : { score: t }
                  }
                  return n
                }
                static _calculateFieldLength(e) {
                  return e
                }
                _getCache(e) {
                  if (void 0 === this._cache[e]) {
                    const t =
                      this._invIdxs[e].totalFieldLength /
                      this._invIdxs[e].docCount
                    this._cache[e] = {
                      idfs: {},
                      avgFieldLength: t,
                    }
                  }
                  return this._cache[e]
                }
                _idf(e, t) {
                  const n = this._getCache(e)
                  return void 0 !== n.idfs[t]
                    ? n.idfs[t]
                    : (n.idfs[t] = Math.log(
                        1 + (this._invIdxs[e].docCount - t + 0.5) / (t + 0.5)
                      ))
                }
                _avgFieldLength(e) {
                  return this._getCache(e).avgFieldLength
                }
              }
              class w {
                constructor(e) {
                  const t = e.getNumStates()
                  ;(this._points = e.getStartPoints()),
                    (this._accept = new Array(t)),
                    (this._transitions = new Array(t * this._points.length))
                  for (let n = 0; n < t; n++) {
                    this._accept[n] = e.isAccept(n)
                    for (let t = 0; t < this._points.length; t++)
                      this._transitions[n * this._points.length + t] = e.step(
                        n,
                        this._points[t]
                      )
                  }
                  this._classmap = new Array(256)
                  for (let i = 0, e = 0; e < this._classmap.length; e++)
                    i + 1 < this._points.length &&
                      e === this._points[i + 1] &&
                      i++,
                      (this._classmap[e] = i)
                }
                getCharClass(e) {
                  let a = 0,
                    b = this._points.length
                  for (; b - a > 1; ) {
                    const t = (a + b) >>> 1
                    if (this._points[t] > e) b = t
                    else {
                      if (!(this._points[t] < e)) return t
                      a = t
                    }
                  }
                  return a
                }
                step(e, t) {
                  return t >= this._classmap.length
                    ? this._transitions[
                        e * this._points.length + this.getCharClass(t)
                      ]
                    : this._transitions[
                        e * this._points.length + this._classmap[t]
                      ]
                }
                isAccept(e) {
                  return this._accept[e]
                }
              }
              const m = 1114111
              function v(a, b) {
                return a[0] < b[0]
                  ? -1
                  : a[0] > b[0]
                  ? 1
                  : a[1] < b[1]
                  ? -1
                  : a[1] > b[1]
                  ? 1
                  : a[2] < b[2]
                  ? -1
                  : a[2] > b[2]
                  ? 1
                  : 0
              }
              function y(a, b) {
                return a[1] < b[1]
                  ? -1
                  : a[1] > b[1]
                  ? 1
                  : a[2] < b[2]
                  ? -1
                  : a[2] > b[2]
                  ? 1
                  : a[0] < b[0]
                  ? -1
                  : a[0] > b[0]
                  ? 1
                  : 0
              }
              class x {
                constructor() {
                  ;(this._stateTransitions = []),
                    (this._stateTransitions = []),
                    (this._accept = new Set()),
                    (this._nextState = 0),
                    (this._currState = -1),
                    (this._transitions = {})
                }
                isAccept(e) {
                  return this._accept.has(e)
                }
                createState() {
                  return this._nextState++
                }
                setAccept(e, t) {
                  t ? this._accept.add(e) : this._accept.delete(e)
                }
                finishState() {
                  ;-1 !== this._currState &&
                    (this._finishCurrentState(), (this._currState = -1))
                }
                _finishCurrentState() {
                  this._stateTransitions.sort(v)
                  let e = 0,
                    p = [-1, -1, -1]
                  for (
                    let i = 0, t = this._stateTransitions.length;
                    i < t;
                    i++
                  ) {
                    let t = this._stateTransitions[i]
                    p[0] === t[0]
                      ? t[1] <= p[2] + 1
                        ? t[2] > p[2] && (p[2] = t[2])
                        : (-1 !== p[0] &&
                            ((this._stateTransitions[e][0] = p[0]),
                            (this._stateTransitions[e][1] = p[1]),
                            (this._stateTransitions[e][2] = p[2]),
                            e++),
                          (p[1] = t[1]),
                          (p[2] = t[2]))
                      : (-1 !== p[0] &&
                          ((this._stateTransitions[e][0] = p[0]),
                          (this._stateTransitions[e][1] = p[1]),
                          (this._stateTransitions[e][2] = p[2]),
                          e++),
                        (p[0] = t[0]),
                        (p[1] = t[1]),
                        (p[2] = t[2]))
                  }
                  ;-1 !== p[0] &&
                    ((this._stateTransitions[e][0] = p[0]),
                    (this._stateTransitions[e][1] = p[1]),
                    (this._stateTransitions[e][2] = p[2]),
                    e++),
                    (this._transitions[this._currState] = this._stateTransitions
                      .slice(0, e)
                      .sort(y)),
                    (this._stateTransitions = [])
                }
                getStartPoints() {
                  const e = new Set()
                  e.add(0)
                  const t = Object.keys(this._transitions)
                  for (let i = 0; i < t.length; i++) {
                    let n = this._transitions[t[i]]
                    for (let t = 0; t < n.length; t++) {
                      let r = n[t]
                      e.add(r[1]), r[2] < m && e.add(r[2] + 1)
                    }
                  }
                  return Array.from(e).sort((a, b) => a - b)
                }
                step(e, label) {
                  let t = this._transitions[e]
                  if (t)
                    for (let i = 0; i < t.length; i++) {
                      let e = t[i]
                      if (e[1] <= label && label <= e[2]) return e[0]
                    }
                  return -1
                }
                getNumStates() {
                  return this._nextState
                }
                addTransition(source, e, t, n) {
                  this._currState !== source &&
                    (-1 !== this._currState && this._finishCurrentState(),
                    (this._currState = source)),
                    this._stateTransitions.push([e, t, n])
                }
              }
              class S {
                constructor(e = 0, t = 0) {
                  ;(this._low = e), (this._high = t)
                }
                shiftRight(e) {
                  return 0 == (e &= 63)
                    ? this
                    : e < 32
                    ? new S(
                        (this._low >>> e) | (this._high << (32 - e)),
                        this._high >> e
                      )
                    : new S(this._high >> (e - 32), this._high >= 0 ? 0 : -1)
                }
                shiftLeft(e) {
                  return 0 == (e &= 63)
                    ? this
                    : e < 32
                    ? new S(
                        this._low << e,
                        (this._high << e) | (this._low >>> (32 - e))
                      )
                    : new S(0, this._low << (e - 32))
                }
                and(e) {
                  return new S(this._low & e._low, this._high & e._high)
                }
                toInt() {
                  return this._low
                }
              }
              const k = [
                new S(1),
                new S(3),
                new S(7),
                new S(15),
                new S(31),
                new S(63),
                new S(127),
                new S(255),
                new S(511),
                new S(1023),
                new S(2047),
                new S(4095),
                new S(8191),
                new S(16383),
                new S(32767),
                new S(65535),
                new S(15, 8191),
                new S(15, 16383),
                new S(15, 32767),
                new S(15, 65535),
                new S(255, 8191),
                new S(255, 16383),
                new S(255, 32767),
                new S(255, 65535),
                new S(4095, 8191),
                new S(4095, 16383),
                new S(4095, 32767),
                new S(4095, 65535),
                new S(65535, 8191),
                new S(65535, 16383),
                new S(65535, 32767),
                new S(65535, 65535),
                new S(1048575, 8191),
                new S(1048575, 16383),
                new S(1048575, 32767),
                new S(1048575, 65535),
                new S(16777215, 8191),
                new S(16777215, 16383),
                new S(16777215, 32767),
                new S(16777215, 65535),
                new S(268435455, 8191),
                new S(268435455, 16383),
                new S(268435455, 32767),
                new S(268435455, 65535),
                new S(4294967295, 8191),
                new S(4294967295, 16383),
                new S(4294967295, 32767),
                new S(4294967295, 65535),
                new S(68719476735, 8191),
                new S(68719476735, 16383),
                new S(68719476735, 32767),
                new S(68719476735, 65535),
                new S(0xffffffffff, 8191),
                new S(0xffffffffff, 16383),
                new S(0xffffffffff, 32767),
                new S(0xffffffffff, 65535),
                new S(0xfffffffffff, 8191),
                new S(0xfffffffffff, 16383),
                new S(0xfffffffffff, 32767),
                new S(0xfffffffffff, 65535),
                new S(0xffffffffffff, 8191),
                new S(0xffffffffffff, 16383),
                new S(0xffffffffffff, 32767),
              ]
              class I {
                constructor(e, t, n) {
                  ;(this._w = e), (this._n = t), (this._minErrors = n)
                }
                size() {
                  return this._minErrors.length * (this._w + 1)
                }
                isAccept(e) {
                  let t = Math.floor(e / (this._w + 1)),
                    n = e % (this._w + 1)
                  return this._w - n + this._minErrors[t] <= this._n
                }
                getPosition(e) {
                  return e % (this._w + 1)
                }
                static unpack(data, e, t) {
                  const n = t * e,
                    r = n >> 6,
                    o = 63 & n
                  if (o + t <= 64)
                    return data[r]
                      .shiftRight(o)
                      .and(k[t - 1])
                      .toInt()
                  {
                    const e = 64 - o
                    return (
                      data[r]
                        .shiftRight(o)
                        .and(k[e - 1])
                        .toInt() +
                      data[1 + r]
                        .and(k[t - e - 1])
                        .shiftLeft(e)
                        .toInt()
                    )
                  }
                }
              }
              const C = [new S(2)],
                O = [new S(0)],
                R = [new S(2627)],
                D = [new S(56)],
                A = [new S(2182348803, 877873428), new S(109)],
                N = [new S(1436680192, 21845)],
                P = [
                  new S(2416705539, 559024212),
                  new S(1161073005, 1531779490),
                  new S(55860),
                ],
                M = [new S(553385984, 1431678474), new S(1431655765)]
              class z extends I {
                constructor(e) {
                  super(e, 1, [0, 1, 0, -1, -1, -1])
                }
                transition(e, t, n) {
                  let r = Math.floor(e / (this._w + 1)),
                    o = e % (this._w + 1)
                  if (t === this._w) {
                    if (r < 2) {
                      const e = 2 * n + r
                      ;(o += I.unpack(O, e, 1)), (r = I.unpack(C, e, 2) - 1)
                    }
                  } else if (t === this._w - 1) {
                    if (r < 3) {
                      const e = 3 * n + r
                      ;(o += I.unpack(D, e, 1)), (r = I.unpack(R, e, 2) - 1)
                    }
                  } else if (t === this._w - 2) {
                    if (r < 6) {
                      const e = 6 * n + r
                      ;(o += I.unpack(N, e, 2)), (r = I.unpack(A, e, 3) - 1)
                    }
                  } else if (r < 6) {
                    const e = 6 * n + r
                    ;(o += I.unpack(M, e, 2)), (r = I.unpack(P, e, 3) - 1)
                  }
                  return -1 === r ? -1 : r * (this._w + 1) + o
                }
              }
              const j = [new S(35)],
                T = [new S(0)],
                $ = [new S(325618500)],
                E = [new S(992)],
                F = [
                  new S(1375778052, 1625010352),
                  new S(654713383, 1379082614),
                  new S(338833973, 592794674),
                  new S(17236),
                ],
                L = [new S(8192, 1431339176), new S(1431655765, 85)],
                J = [
                  new S(1074107396, 3875651625),
                  new S(10813440, 2685408800),
                  new S(2705416840, 2955709504),
                  new S(822630592, 176295986),
                  new S(220770817, 826549144),
                  new S(2222426336, 1384244520),
                  new S(146941966, 2721677523),
                  new S(2841782156, 506631345),
                  new S(579396904, 2353082526),
                  new S(35310113, 289686537),
                  new S(2259748971, 295985736),
                  new S(492978372, 711088276),
                  new S(1217426605, 1344578827),
                  new S(1376534810, 344070858),
                  new S(190401092, 1485354377),
                  new S(3289490533, 2484954400),
                  new S(2909430484, 2337837173),
                  new S(441472420),
                ],
                V = [
                  new S(8192, 3195650),
                  new S(3288085308, 704655603),
                  new S(2189600800, 591003698),
                  new S(850559912, 1431655765),
                  new S(1431655765, 1431655765),
                  new S(1431655765, 1431655765),
                  new S(1431655765, 1431655765),
                ],
                B = [
                  new S(2904068, 58725456),
                  new S(3640, 3305111883),
                  new S(1363153922, 1300),
                  new S(0),
                  new S(335609856, 85458955),
                  new S(685900336, 166838792),
                  new S(2198499522, 564071920),
                  new S(136348160, 2181038210),
                  new S(1619003392, 134546689),
                  new S(39855683, 813828486),
                  new S(1347453028, 1164181826),
                  new S(536873009, 139461908),
                  new S(2231378050, 1094735904),
                  new S(160481793, 1164017816),
                  new S(1352667217, 137456908),
                  new S(84799712, 558175264),
                  new S(340820500, 219423040),
                  new S(1350704224, 1008844824),
                  new S(3407093895, 30086147),
                  new S(407994924, 2148016453),
                  new S(545259552, 2097672),
                  new S(2266497861, 3490060320),
                  new S(613903113, 3406463435),
                  new S(1648822737, 145860110),
                  new S(2183434377, 38340640),
                  new S(13811748, 3272876486),
                  new S(356860963, 1009861909),
                  new S(3256660288, 830815266),
                  new S(740327956, 1158959115),
                  new S(1351286865, 141656116),
                  new S(1359540421, 2999666001),
                  new S(481339408, 3894702429),
                  new S(2425032288, 337824532),
                  new S(3224154437, 813771810),
                  new S(212943372, 2216698370),
                  new S(550373456, 1545653768),
                  new S(2332913858, 545392672),
                  new S(337723912, 1107841154),
                  new S(1350765600, 153125696),
                  new S(325399954, 3323153862),
                  new S(1841617741, 3540595740),
                  new S(1423134004, 1680136456),
                  new S(50861250, 2449943586),
                  new S(614664496, 1109422667),
                  new S(633938146, 611374880),
                  new S(2539425922, 2462657904),
                  new S(76697096, 3406332098),
                  new S(3259769985, 1165203240),
                  new S(3663819994, 3336195509),
                  new S(1563465501, 1264399831),
                  new S(2474794210, 271614300),
                  new S(34386245, 1363419217),
                  new S(740429356, 3308790030),
                  new S(1389038960, 139543060),
                  new S(2232701250, 541788240),
                  new S(1079067660, 2450874499),
                  new S(2785961365, 1298533965),
                  new S(476956248, 2497254628),
                  new S(341103461, 2187601497),
                  new S(1359153171, 680658732),
                  new S(3408700171, 3804373106),
                  new S(542345488, 1160540375),
                  new S(1888368785, 145935149),
                  new S(3255087694, 2177569856),
                  new S(683854372, 3661947790),
                  new S(2245419236, 499571301),
                  new S(2388496718, 3804978483),
                  new S(949191224),
                ],
                U = [
                  new S(524288, 805437440),
                  new S(2146400),
                  new S(67108864, 2169044992),
                  new S(276973604, 1076138561),
                  new S(1610621058, 3680514243),
                  new S(807079296, 1815527532),
                  new S(897243, 2954387888),
                  new S(2441666669, 460338720),
                  new S(114847159, 134255104),
                  new S(37758096, 76680228),
                  new S(136613897, 4784130),
                  new S(672286724, 1225265793),
                  new S(306857122, 880804100),
                  new S(220463628, 3272159376),
                  new S(616713508, 1073781257),
                  new S(2449540634, 77089286),
                  new S(1898353250, 1229784210),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 9362),
                ],
                K = [
                  new S(2904068, 58725456),
                  new S(3640, 3305111883),
                  new S(1363153922, 1300),
                  new S(0),
                  new S(335609856, 85196811),
                  new S(59637984, 5570560),
                  new S(100708736, 642062416),
                  new S(136348168, 2181570690),
                  new S(1082263584, 181504),
                  new S(2156659014, 1887570488),
                  new S(2620424828, 3279691970),
                  new S(545261671, 2130440),
                  new S(33562752, 2973765664),
                  new S(5341184, 2190352419),
                  new S(547298336, 137406220),
                  new S(2235429087, 1363481680),
                  new S(340820500, 370417986),
                  new S(813715536, 1613103716),
                  new S(1124606104, 621086726),
                  new S(341196820, 1107296387),
                  new S(545587281, 139461128),
                  new S(336856450, 2157513760),
                  new S(136714249, 2181140994),
                  new S(2416314689, 143787289),
                  new S(3257709122, 575218834),
                  new S(23218476, 1124599045),
                  new S(2248302630, 2151761173),
                  new S(3316920642, 935559200),
                  new S(340819988, 1107841157),
                  new S(1350893649, 21053528),
                  new S(2550763714, 1363501440),
                  new S(206610448, 3758633325),
                  new S(1351295472, 743623468),
                  new S(3257709129, 1611476114),
                  new S(407929372, 2268864960),
                  new S(63640608, 738315028),
                  new S(1159221634, 545261601),
                  new S(136347648, 1157636098),
                  new S(545724419, 141559316),
                  new S(84419023, 1946484981),
                  new S(408981504, 2471335494),
                  new S(813845808, 1277481805),
                  new S(3321943618, 25561121),
                  new S(635093620, 3265295049),
                  new S(2445440114, 745112472),
                  new S(2300846658, 2453800992),
                  new S(883951872, 2181591424),
                  new S(2963079265, 481446262),
                  new S(2635903144, 1625695344),
                  new S(359976510, 3541325271),
                  new S(633494900, 476056888),
                  new S(1111241026, 1364284500),
                  new S(335790868, 3257672139),
                  new S(558045267, 11715080),
                  new S(85217605, 54855856),
                  new S(206604056, 1427443855),
                  new S(4060419156, 141821184),
                  new S(102297744, 3797110162),
                  new S(1704116792, 1228416601),
                  new S(566624470, 1143194388),
                  new S(3408729413, 1925357634),
                  new S(2693907828, 1110194563),
                  new S(1351298130, 11715860),
                  new S(2150936715, 4039444593),
                  new S(1162957064, 2819666635),
                  new S(1901927600, 576776228),
                  new S(2385343694, 3864603731),
                  new S(949191224, 1108095105),
                  new S(570559665, 139494432),
                  new S(3456639182, 1891785760),
                  new S(136350477, 1107828866),
                  new S(1350702113, 203440648),
                  new S(2200719491, 554174592),
                  new S(137937428, 2768779394),
                  new S(2848166960, 2863311530),
                  new S(2678717098, 447381162),
                  new S(337691400, 2185765072),
                  new S(2228833636, 1904530289),
                  new S(460404435, 885148935),
                  new S(355783501, 2567517762),
                  new S(818021680, 137626888),
                  new S(1398349970, 886858038),
                  new S(1303698529, 2759444188),
                  new S(1227133514, 2450169746),
                  new S(2173872170, 1925324848),
                  new S(814942496, 119845450),
                  new S(2450400290, 225575516),
                  new S(3372753479, 2463566197),
                  new S(618694956, 2282496073),
                  new S(3259505840, 747801636),
                  new S(2299037513, 2158306440),
                  new S(2865185684, 1787173674),
                  new S(2871505528, 135998630),
                  new S(120332803, 2735288466),
                  new S(1763036764, 3614016979),
                  new S(1998285110, 1567933020),
                  new S(2301457623, 1917716851),
                  new S(142656005, 1277460939),
                  new S(1939286210, 1635048005),
                  new S(3662525914, 1252095430),
                  new S(2252890502, 1787206439),
                  new S(813795018, 212944144),
                  new S(1142968578, 571354193),
                  new S(941690412, 3406655685),
                  new S(1363285074, 340869640),
                  new S(1258836101, 1363414048),
                  new S(339772204, 3407106312),
                  new S(1217071240, 2486264328),
                  new S(2675866051, 4205477370),
                  new S(2124930941, 50862570),
                  new S(550507601, 1701086552),
                  new S(2473165721, 2517850499),
                  new S(956767089, 3647288901),
                  new S(2521109812, 81828105),
                  new S(85213378, 559286324),
                  new S(1625708889, 3596674266),
                  new S(3336332676, 2449992057),
                  new S(3750905888, 2821358087),
                  new S(271614374, 2300605125),
                  new S(2999595186, 740427564),
                  new S(87593230, 1388776818),
                  new S(149129492, 2334962391),
                  new S(541795552, 481379340),
                  new S(2351735368, 2269850802),
                  new S(608733960, 1133805922),
                  new S(2602532471, 2658691750),
                  new S(3970345447, 1359153177),
                  new S(680658732, 2386076427),
                  new S(2207475987, 1771444057),
                  new S(1161328411, 1959672182),
                  new S(149130029, 3255099982),
                  new S(2177569856, 683854372),
                  new S(3661947790, 2245419236),
                  new S(1975966309, 1770391529),
                  new S(2582087242, 2798283430),
                ],
                W = [
                  new S(524288, 805437440),
                  new S(2146400),
                  new S(67108864, 16777216),
                  new S(1348481048, 3681400539),
                  new S(11702, 2759852034),
                  new S(1092883008, 306782344),
                  new S(1065248, 1073742080),
                  new S(2450071634, 613598240),
                  new S(157651673, 204527616),
                  new S(3277862616, 2954562566),
                  new S(1815534349, 409731075),
                  new S(2954587142, 2911241057),
                  new S(1533925085, 905970103),
                  new S(230032140, 3289526556),
                  new S(3068358150, 56077),
                  new S(3674310171, 152604166),
                  new S(1907829602, 7198427),
                  new S(8390944, 1076101705),
                  new S(2420711618, 545409280),
                  new S(1074040832, 302064768),
                  new S(2760925472, 1428467018),
                  new S(38273045, 1083326496),
                  new S(1212191753, 2454856978),
                  new S(603981856, 1226838017),
                  new S(541721760, 689080612),
                  new S(349513, 2416455890),
                  new S(616710196, 154440460),
                  new S(40379539, 68708608),
                  new S(1629493832, 2588509714),
                  new S(894585300, 204767233),
                  new S(2483889154, 616827184),
                  new S(153412173, 440402074),
                  new S(110231814, 1644468298),
                  new S(2456888978, 2454277460),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756, 1227133513),
                  new S(2454267026, 613566756),
                  new S(1227133513, 2454267026),
                  new S(613566756),
                ]
              class Q extends I {
                constructor(e) {
                  super(
                    e,
                    2,
                    [
                      0, 2, 1, 0, 1, 0, -1, 0, 0, -1, 0, -1, -1, -1, -1, -1, -2,
                      -1, -1, -1, -2, -1, -1, -2, -1, -1, -2, -1, -2, -2, -2,
                      -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
                    ]
                  )
                }
                transition(e, t, n) {
                  let r = Math.floor(e / (this._w + 1)),
                    o = e % (this._w + 1)
                  if (t === this._w) {
                    if (r < 3) {
                      const e = 3 * n + r
                      ;(o += I.unpack(T, e, 1)), (r = I.unpack(j, e, 2) - 1)
                    }
                  } else if (t === this._w - 1) {
                    if (r < 5) {
                      const e = 5 * n + r
                      ;(o += I.unpack(E, e, 1)), (r = I.unpack($, e, 3) - 1)
                    }
                  } else if (t === this._w - 2) {
                    if (r < 13) {
                      const e = 13 * n + r
                      ;(o += I.unpack(L, e, 2)), (r = I.unpack(F, e, 4) - 1)
                    }
                  } else if (t === this._w - 3) {
                    if (r < 28) {
                      const e = 28 * n + r
                      ;(o += I.unpack(V, e, 2)), (r = I.unpack(J, e, 5) - 1)
                    }
                  } else if (t === this._w - 4) {
                    if (r < 45) {
                      const e = 45 * n + r
                      ;(o += I.unpack(U, e, 3)), (r = I.unpack(B, e, 6) - 1)
                    }
                  } else if (r < 45) {
                    const e = 45 * n + r
                    ;(o += I.unpack(W, e, 3)), (r = I.unpack(K, e, 6) - 1)
                  }
                  return -1 === r ? -1 : r * (this._w + 1) + o
                }
              }
              class H {
                constructor(input, e) {
                  ;(this._word = input),
                    (this._editDistance = e),
                    (this._alphabet = [...new Set(this._word)].sort(
                      (a, b) => a - b
                    )),
                    (this._numRanges = 0),
                    (this._rangeLower = new Array(this._alphabet.length + 2)),
                    (this._rangeUpper = new Array(this._alphabet.length + 2))
                  let t = 0
                  for (let i = 0; i < this._alphabet.length; i++) {
                    const e = this._alphabet[i]
                    e > t &&
                      ((this._rangeLower[this._numRanges] = t),
                      (this._rangeUpper[this._numRanges] = e - 1),
                      this._numRanges++),
                      (t = e + 1)
                  }
                  t <= m &&
                    ((this._rangeLower[this._numRanges] = t),
                    (this._rangeUpper[this._numRanges] = m),
                    this._numRanges++),
                    (this._description =
                      1 === e ? new z(input.length) : new Q(input.length))
                }
                toAutomaton() {
                  let e = new x()
                  const t = 2 * this._editDistance + 1,
                    n = this._description.size()
                  e.createState()
                  for (let i = 1; i < n; i++) {
                    let t = e.createState()
                    e.setAccept(t, this._description.isAccept(i))
                  }
                  for (let r = 0; r < n; r++) {
                    const n = this._description.getPosition(r)
                    if (n < 0) continue
                    const o = n + Math.min(this._word.length - n, t)
                    for (let t = 0; t < this._alphabet.length; t++) {
                      const l = this._alphabet[t],
                        h = this._getVector(l, n, o),
                        c = this._description.transition(r, n, h)
                      c >= 0 && e.addTransition(r, c, l, l)
                    }
                    const l = this._description.transition(r, n, 0)
                    if (l >= 0)
                      for (let t = 0; t < this._numRanges; t++)
                        e.addTransition(
                          r,
                          l,
                          this._rangeLower[t],
                          this._rangeUpper[t]
                        )
                  }
                  return e.finishState(), e
                }
                _getVector(e, t, n) {
                  let r = 0
                  for (let i = t; i < n; i++)
                    (r <<= 1), this._word[i] === e && (r |= 1)
                  return r
                }
              }
              function G(e, t) {
                if (void 0 === t) return 1
                if ('number' == typeof t) return t < 0 ? e + t : t
                let n = e
                if (t.includes('<')) {
                  for (const s of t.split(' ')) {
                    const t = s.split('<')
                    if (e <= parseInt(t[0])) return n
                    n = G(e, t[1])
                  }
                  return n
                }
                if (t.includes('%')) {
                  const e = n * parseInt(t.slice(0, -1)) * 0.01
                  n = e < 0 ? n + Math.ceil(e) : Math.floor(e)
                } else {
                  const e = parseInt(t)
                  n = e < 0 ? n + e : e
                }
                return n < 1 ? 1 : n
              }
              class Y {
                constructor(e, t) {
                  ;(this._invIdxs = e),
                    (this._docs = t),
                    (this._scorer = new _(this._invIdxs))
                }
                search(e) {
                  let t = this._recursive(e.query, !0)
                  if (void 0 === e.calculate_scoring || e.calculate_scoring)
                    return this._scorer.finalScore(e, t)
                  const n = {}
                  for (const e of t.keys()) n[e] = { score: 1 }
                  return n
                }
                setDirty() {
                  this._scorer.setDirty()
                }
                _recursive(e, t) {
                  let n = new Map()
                  const r = void 0 !== e.boost ? e.boost : 1,
                    o = void 0 !== e.field ? e.field : null
                  let l = null,
                    c = null
                  switch (
                    (void 0 !== this._invIdxs[o] &&
                      ((l = this._invIdxs[o].root),
                      (c = this._invIdxs[o].analyzer)),
                    e.type)
                  ) {
                    case 'bool':
                      if (
                        ((n = null),
                        void 0 !== e.must &&
                          (n = this._getUnique(e.must, t, n)),
                        void 0 !== e.filter &&
                          (n = this._getUnique(e.filter, null, n)),
                        void 0 !== e.should)
                      ) {
                        const r = this._getAll(e.should, t)
                        let o = !1
                        null === n && ((o = !0), (n = new Map()))
                        const l = Math.max(
                          1,
                          G(e.should.length, e.minimum_should_match)
                        )
                        if (o && 1 === l) n = r
                        else
                          for (const [e, t] of r)
                            t.length >= l &&
                              (n.has(e)
                                ? n.get(e).push(...t)
                                : o
                                ? n.set(e, t)
                                : n.delete(e))
                      }
                      if (
                        (null === n &&
                          (n = this._recursive({ type: 'match_all' }, !1)),
                        void 0 !== e.not)
                      ) {
                        let t = this._getAll(e.not, null)
                        for (const e of t.keys()) n.has(e) && n.delete(e)
                      }
                      if (1 !== r)
                        for (const [e, t] of n)
                          for (let i = 0; i < t.length; i++) t[i].boost *= r
                      break
                    case 'term': {
                      const h = d(e.value)
                      let c = f.getTermIndex(h, l)
                      this._scorer.score(o, r, c, t, n, h)
                      break
                    }
                    case 'terms':
                      for (let i = 0; i < e.value.length; i++) {
                        const h = d(e.value[i])
                        let c = f.getTermIndex(h, l)
                        this._scorer.score(o, r, c, t, n, h)
                      }
                      break
                    case 'fuzzy': {
                      const [h, c] = (function (e, t) {
                        let n = d(e.value),
                          r = void 0 !== e.fuzziness ? e.fuzziness : 'AUTO'
                        'AUTO' === r &&
                          (r = n.length <= 2 ? 0 : n.length <= 5 ? 1 : 2)
                        let o =
                            void 0 !== e.prefix_length ? e.prefix_length : 0,
                          l = void 0 !== e.extended && e.extended
                        0 === r && (o = n.length)
                        let h = [],
                          c = t,
                          _ = n.slice(0, o),
                          m = n,
                          v = 0
                        if (
                          (0 !== o &&
                            ((c = f.getTermIndex(_, c)), (m = m.slice(o))),
                          null === c)
                        )
                          return [h, v]
                        if (0 === m.length) {
                          if (l) {
                            const e = f.extendTermIndex(c)
                            for (let i = 0; i < e.length; i++)
                              h.push({
                                index: e[i].index,
                                term: e[i].term,
                                boost: 1,
                              }),
                                (v = Math.max(v, e[i].index.df))
                          } else
                            void 0 !== c.dc &&
                              (h.push({
                                index: c,
                                term: n,
                                boost: 1,
                              }),
                              (v = c.df))
                          return [h, v]
                        }
                        const y = [0],
                          x = new w(new H(m, r).toAutomaton())
                        function S(e, t, n) {
                          let o = 0
                          if (
                            -1 !== (e = x.step(e, 0)) &&
                            x.isAccept(e) &&
                            (o++,
                            -1 !== (e = x.step(e, 0)) && x.isAccept(e) && o++,
                            t.length < n.length)
                          ) {
                            if (o !== r)
                              return (function (a, b) {
                                let i, e, t, n
                                const r = Array(a.length + 1)
                                for (i = 0; i <= a.length; i++) r[i] = i
                                for (i = 1; i <= b.length; i++) {
                                  for (t = i, e = 1; e <= a.length; e++)
                                    b[i - 1] === a[e - 1]
                                      ? (n = r[e - 1])
                                      : ((n = Math.min(
                                          r[e - 1] + 1,
                                          Math.min(t + 1, r[e] + 1)
                                        )),
                                        i > 1 &&
                                          e > 1 &&
                                          b[i - 2] === a[e - 1] &&
                                          a[e - 2] === b[i - 1] &&
                                          (n = Math.min(
                                            n,
                                            r[e - 1] -
                                              (a[e - 1] === b[i - 1] ? 1 : 0)
                                          ))),
                                      (r[e - 1] = t),
                                      (t = n)
                                  r[a.length] = t
                                }
                                return r[a.length]
                              })(t, n)
                            o -= n.length - t.length
                          }
                          return r - o
                        }
                        function k(e, t, r) {
                          if (
                            ((y[y.length - 1] = t), -1 !== (e = x.step(e, t)))
                          ) {
                            if (x.isAccept(e)) {
                              if (l) {
                                const e = f.extendTermIndex(r)
                                for (let i = 0; i < e.length; i++)
                                  h.push({
                                    index: e[i].index,
                                    term: e[i].term,
                                    boost: 1,
                                  }),
                                    (v = Math.max(v, e[i].index.df))
                                return
                              }
                              if (void 0 !== r.df) {
                                const t = S(e, y, m),
                                  o = Math.max(
                                    0,
                                    1 -
                                      t /
                                        Math.min(_.length + y.length, n.length)
                                  )
                                h.push({
                                  index: r,
                                  term: [..._, ...y],
                                  boost: o,
                                }),
                                  (v = Math.max(v, r.df))
                              }
                            }
                            y.push(0)
                            for (const t of r) k(e, t[0], t[1])
                            y.pop()
                          }
                        }
                        for (const e of c) k(0, e[0], e[1])
                        return [h, v]
                      })(e, l)
                      for (let i = 0; i < h.length; i++)
                        this._scorer.score(
                          o,
                          r * h[i].boost,
                          h[i].index,
                          t,
                          n,
                          h[i].term,
                          c
                        )
                      break
                    }
                    case 'wildcard': {
                      const h = void 0 !== e.enable_scoring && e.enable_scoring,
                        c = (function (e, t) {
                          let n = d(e.value),
                            r = []
                          function o(e, t = 0, l = [], h = !1) {
                            if (null !== e)
                              if (t !== n.length)
                                if (h || 92 !== n[t])
                                  if (h || 63 !== n[t])
                                    if (h || 42 !== n[t])
                                      o(f.getTermIndex([n[t]], e), t + 1, [
                                        ...l,
                                        n[t],
                                      ])
                                    else if (t + 1 === n.length) {
                                      const n = f.extendTermIndex(e)
                                      for (let i = 0; i < n.length; i++)
                                        o(n[i].index, t + 1, [
                                          ...l,
                                          ...n[i].term,
                                        ])
                                    } else {
                                      o(e, t + 1, l, !1)
                                      const n = [
                                        {
                                          index: e,
                                          term: [],
                                        },
                                      ]
                                      do {
                                        const e = n.pop()
                                        for (const r of e.index)
                                          o(r[1], t + 1, [
                                            ...l,
                                            ...e.term,
                                            r[0],
                                          ]),
                                            n.push({
                                              index: r[1],
                                              term: [...e.term, r[0]],
                                            })
                                      } while (0 !== n.length)
                                    }
                                  else
                                    for (const n of e)
                                      o(n[1], t + 1, [...l, n[0]])
                                else o(e, t + 1, l, !0)
                              else
                                void 0 !== e.df &&
                                  r.push({
                                    index: e,
                                    term: l.slice(),
                                  })
                          }
                          return o(t), r
                        })(e, l)
                      for (let i = 0; i < c.length; i++)
                        this._scorer.score(
                          o,
                          r,
                          c[i].index,
                          t && h,
                          n,
                          c[i].term
                        )
                      break
                    }
                    case 'match_all':
                      for (let e of this._docs)
                        this._scorer.scoreConstant(r, e, n)
                      break
                    case 'constant_score': {
                      let t = this._getAll(e.filter, !1)
                      for (const e of t.keys())
                        this._scorer.scoreConstant(r, e, n)
                      break
                    }
                    case 'prefix': {
                      const h = void 0 !== e.enable_scoring && e.enable_scoring,
                        c = d(e.value),
                        _ = f.getTermIndex(c, l)
                      if (null !== _) {
                        const e = f.extendTermIndex(_)
                        for (let i = 0; i < e.length; i++)
                          this._scorer.score(o, r, e[i].index, t && h, n, [
                            ...c,
                            ...e[i].term,
                          ])
                      }
                      break
                    }
                    case 'exists':
                      if (null !== l)
                        for (const e of this._invIdxs[o].docStore.keys())
                          this._scorer.scoreConstant(r, e, n)
                      break
                    case 'match': {
                      const l = h(c, e.value),
                        d = { type: 'bool' },
                        f = []
                      if (
                        ('or' === (void 0 !== e.operator ? e.operator : 'or')
                          ? (void 0 !== e.minimum_should_match &&
                              (d.minimum_should_match = e.minimum_should_match),
                            (d.should = f))
                          : (d.must = f),
                        (d.boost = r),
                        void 0 !== e.fuzziness)
                      ) {
                        let t =
                            void 0 !== e.prefix_length ? e.prefix_length : 2,
                          n = void 0 !== e.extended && e.extended
                        for (let i = 0; i < l.length; i++)
                          f.push({
                            type: 'fuzzy',
                            field: o,
                            value: l[i],
                            fuzziness: e.fuzziness,
                            prefix_length: t,
                            extended: n,
                          })
                      } else
                        for (let i = 0; i < l.length; i++)
                          f.push({
                            type: 'term',
                            field: o,
                            value: l[i],
                          })
                      n = this._recursive(d, t)
                      break
                    }
                  }
                  return n
                }
                _getUnique(e, t, n) {
                  if (0 === e.length) return n
                  for (let i = 0; i < e.length; i++) {
                    let r = this._recursive(e[i], t)
                    if (null !== n)
                      for (const e of n.keys())
                        r.has(e) ? n.get(e).push(...r.get(e)) : n.delete(e)
                    else n = this._recursive(e[0], t)
                  }
                  return n
                }
                _getAll(e, t, n = new Map()) {
                  for (let i = 0; i < e.length; i++) {
                    let r = this._recursive(e[i], t)
                    for (const e of r.keys())
                      n.has(e) ? n.get(e).push(...r.get(e)) : n.set(e, r.get(e))
                  }
                  return n
                }
              }
              var X = n(0)
              class Z {
                constructor(e = [], t) {
                  this._invIdxs = {}
                  for (let i = 0; i < e.length; i++) {
                    let t = e[i]
                    this._invIdxs[t.field] = new f(t)
                  }
                  ;(this._id = t),
                    (this._docs = new Set()),
                    (this._idxSearcher = new Y(this._invIdxs, this._docs))
                }
                static register() {
                  X.a.FullTextSearch = Z
                }
                addDocument(e, t = e[this._id]) {
                  let n = Object.keys(this._invIdxs)
                  for (let r, i = 0; n.length, (r = n[i]); i++) {
                    let n = e[r]
                    if (null != n) {
                      if ('string' != typeof n) {
                        if ('number' != typeof n)
                          throw TypeError(
                            'Unsupported field type for full text search.'
                          )
                        n = n.toString()
                      }
                      this._invIdxs[r].insert(n, t)
                    }
                  }
                  this._docs.add(t), this._idxSearcher.setDirty()
                }
                removeDocument(e, t = e[this._id]) {
                  let n = Object.keys(this._invIdxs)
                  for (let i = 0; i < n.length; i++)
                    this._invIdxs[n[i]].remove(t)
                  this._docs.delete(t), this._idxSearcher.setDirty()
                }
                updateDocument(e, t = e[this._id]) {
                  this.removeDocument(e, t), this.addDocument(e, t)
                }
                clear() {
                  for (let e of this._docs) this.removeDocument(null, e)
                }
                search(e) {
                  return this._idxSearcher.search(e)
                }
                toJSON() {
                  let e = { id: this._id, ii: {} },
                    t = Object.keys(this._invIdxs)
                  for (let i = 0; i < t.length; i++) {
                    const n = t[i]
                    e.ii[n] = this._invIdxs[n].toJSON()
                  }
                  return e
                }
                static fromJSONObject(e, t = {}) {
                  let n = new Z([], e.id),
                    r = Object.keys(e.ii)
                  for (let i = 0; i < r.length; i++) {
                    const o = r[i]
                    n._invIdxs[o] = f.fromJSONObject(e.ii[o], t[o])
                  }
                  return n
                }
              }
              n.d(t, 'FullTextSearch', function () {
                return Z
              }),
                n.d(t, 'analyze', function () {
                  return h
                }),
                n.d(t, 'StandardAnalyzer', function () {
                  return c
                }),
                n.d(t, 'whitespaceTokenizer', function () {
                  return r
                }),
                n.d(t, 'lowercaseTokenFilter', function () {
                  return o
                }),
                n.d(t, 'uppercaseTokenFilter', function () {
                  return l
                }),
                (Z.Analyzer = {}),
                (Z.Analyzer.analyze = h),
                (Z.Analyzer.StandardAnalyzer = c),
                (Z.Tokenizer = {}),
                (Z.Tokenizer.whitespaceTokenizer = r),
                (Z.TokenFilter = {}),
                (Z.TokenFilter.lowercaseTokenFilter = o),
                (Z.TokenFilter.uppercaseTokenFilter = l),
                (t.default = Z)
            },
            function (e, t) {
              var g
              g = (function () {
                return this
              })()
              try {
                g = g || Function('return this')() || (0, eval)('this')
              } catch (e) {
                'object' == typeof window && (g = window)
              }
              e.exports = g
            },
          ])
        }),
        (e.exports = r())
    },
    345: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(24),
        o =
          (n(14),
          n(34),
          n(48),
          n(27),
          n(26),
          n(67),
          n(115),
          n(198),
          n(199),
          n(114),
          n(334)),
        l = n.n(o),
        h = n(343),
        c = n.n(h),
        d = n(344)
      n.n(d).a.register()
      var f,
        _,
        w = ['/'],
        m = function () {
          var e = {},
            t = []
          Array.from(arguments).forEach(function (n) {
            'string' == typeof n
              ? t.push(n)
              : 'object' === Object(r.a)(n) && (e = n)
          })
          var n = e,
            o = n.text,
            text = void 0 !== o && o,
            h = n.deep,
            c = void 0 !== h && h,
            path = '/'.concat(t.join('/').replace(/\/+/g, '/')),
            d =
              !path ||
              !!w.find(function (e) {
                return e === path
              }),
            f = d
              ? {
                  dir: c ? { $regex: new RegExp('^'.concat(path)) } : path,
                }
              : { path: path },
            m = d
              ? []
              : [
                  function (data) {
                    return data[0]
                  },
                ]
          return new l.a(
            {
              query: _.chain().find(f, !d),
              path: path,
              postprocess: m,
              text: text,
            },
            {
              fullTextSearchFields: ['title', 'description', 'slug', 'text'],
            }
          )
        }
      t.default = function (e) {
        return (
          (f = new c.a('content.db')).loadJSONObject(e),
          (_ = f.getCollection('items')),
          m
        )
      }
    },
  },
])
