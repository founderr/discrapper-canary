function n(t) {
  var e = this;
  if (!(e instanceof n) && (e = new n), e.tail = null, e.head = null, e.length = 0, t && "function" == typeof t.forEach) t.forEach(function(t) {
    e.push(t)
  });
  else if (arguments.length > 0)
    for (var r = 0, o = arguments.length; r < o; r++) e.push(arguments[r]);
  return e
}
r("854508"), r("424973"), r("70102"), r("843762"), r("808653"), t.exports = n, n.Node = Node, n.create = n, n.prototype.removeNode = function(t) {
  if (t.list !== this) throw Error("removing node which does not belong to this list");
  var e = t.next,
    r = t.prev;
  e && (e.prev = r), r && (r.next = e), t === this.head && (this.head = e), t === this.tail && (this.tail = r), t.list.length--, t.next = null, t.prev = null, t.list = null
}, n.prototype.unshiftNode = function(t) {
  if (t !== this.head) {
    t.list && t.list.removeNode(t);
    var e = this.head;
    t.list = this, t.next = e, e && (e.prev = t), this.head = t, !this.tail && (this.tail = t), this.length++
  }
}, n.prototype.pushNode = function(t) {
  if (t !== this.tail) {
    t.list && t.list.removeNode(t);
    var e = this.tail;
    t.list = this, t.prev = e, e && (e.next = t), this.tail = t, !this.head && (this.head = t), this.length++
  }
}, n.prototype.push = function() {
  for (var t = 0, e = arguments.length; t < e; t++)(function(t, e) {
    t.tail = new Node(e, t.tail, null, t), !t.head && (t.head = t.tail), t.length++
  })(this, arguments[t]);
  return this.length
}, n.prototype.unshift = function() {
  for (var t = 0, e = arguments.length; t < e; t++)(function(t, e) {
    t.head = new Node(e, null, t.head, t), !t.tail && (t.tail = t.head), t.length++
  })(this, arguments[t]);
  return this.length
}, n.prototype.pop = function() {
  if (this.tail) {
    var t = this.tail.value;
    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, t
  }
}, n.prototype.shift = function() {
  if (this.head) {
    var t = this.head.value;
    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, t
  }
}, n.prototype.forEach = function(t, e) {
  e = e || this;
  for (var r = this.head, n = 0; null !== r; n++) t.call(e, r.value, n, this), r = r.next
}, n.prototype.forEachReverse = function(t, e) {
  e = e || this;
  for (var r = this.tail, n = this.length - 1; null !== r; n--) t.call(e, r.value, n, this), r = r.prev
}, n.prototype.get = function(t) {
  for (var e = 0, r = this.head; null !== r && e < t; e++) r = r.next;
  if (e === t && null !== r) return r.value
}, n.prototype.getReverse = function(t) {
  for (var e = 0, r = this.tail; null !== r && e < t; e++) r = r.prev;
  if (e === t && null !== r) return r.value
}, n.prototype.map = function(t, e) {
  e = e || this;
  for (var r = new n, o = this.head; null !== o;) r.push(t.call(e, o.value, this)), o = o.next;
  return r
}, n.prototype.mapReverse = function(t, e) {
  e = e || this;
  for (var r = new n, o = this.tail; null !== o;) r.push(t.call(e, o.value, this)), o = o.prev;
  return r
}, n.prototype.reduce = function(t, e) {
  var r, n = this.head;
  if (arguments.length > 1) r = e;
  else if (this.head) n = this.head.next, r = this.head.value;
  else throw TypeError("Reduce of empty list with no initial value");
  for (var o = 0; null !== n; o++) r = t(r, n.value, o), n = n.next;
  return r
}, n.prototype.reduceReverse = function(t, e) {
  var r, n = this.tail;
  if (arguments.length > 1) r = e;
  else if (this.tail) n = this.tail.prev, r = this.tail.value;
  else throw TypeError("Reduce of empty list with no initial value");
  for (var o = this.length - 1; null !== n; o--) r = t(r, n.value, o), n = n.prev;
  return r
}, n.prototype.toArray = function() {
  for (var t = Array(this.length), e = 0, r = this.head; null !== r; e++) t[e] = r.value, r = r.next;
  return t
}, n.prototype.toArrayReverse = function() {
  for (var t = Array(this.length), e = 0, r = this.tail; null !== r; e++) t[e] = r.value, r = r.prev;
  return t
}, n.prototype.slice = function(t, e) {
  (e = e || this.length) < 0 && (e += this.length), (t = t || 0) < 0 && (t += this.length);
  var r = new n;
  if (e < t || e < 0) return r;
  t < 0 && (t = 0), e > this.length && (e = this.length);
  for (var o = 0, i = this.head; null !== i && o < t; o++) i = i.next;
  for (; null !== i && o < e; o++, i = i.next) r.push(i.value);
  return r
}, n.prototype.sliceReverse = function(t, e) {
  (e = e || this.length) < 0 && (e += this.length), (t = t || 0) < 0 && (t += this.length);
  var r = new n;
  if (e < t || e < 0) return r;
  t < 0 && (t = 0), e > this.length && (e = this.length);
  for (var o = this.length, i = this.tail; null !== i && o > e; o--) i = i.prev;
  for (; null !== i && o > t; o--, i = i.prev) r.push(i.value);
  return r
}, n.prototype.reverse = function() {
  for (var t = this.head, e = this.tail, r = t; null !== r; r = r.prev) {
    var n = r.prev;
    r.prev = r.next, r.next = n
  }
  return this.head = e, this.tail = t, this
};

function Node(t, e, r, n) {
  if (!(this instanceof Node)) return new Node(t, e, r, n);
  this.list = n, this.value = t, e ? (e.next = this, this.prev = e) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
}