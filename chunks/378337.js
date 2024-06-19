t.d(n, {
  Z: function() {
    return r
  }
}), t(653041), t(47120);
var l = t(131704);

function r(e) {
  let n = [];
  for (let t = 0; t < e._categories.length; t++) {
    let r = e._categories[t].channel,
      i = e[r.id].map(e => e.channel).filter(e => l.iR.has(e.type));
    if (null != i && 0 !== i.length)
      for (let e of ("null" !== r.id && n.push(r), i)) n.push(e)
  }
  return n
}