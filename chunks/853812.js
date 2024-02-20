"use strict";
E.r(_), E.d(_, {
  FORMAT_RE: function() {
    return t
  },
  MARKDOWN_RE: function() {
    return o
  },
  UNSAFE_RE: function() {
    return I
  },
  UNSAFE_RE_ALL: function() {
    return T
  }
});
let t = /\{.+?\}/,
  o = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/,
  I = /!!/,
  T = /!!/g