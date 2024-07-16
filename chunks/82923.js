s(47120);
var n = s(748780);

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
class a {
  start() {
return new Promise(e => {
  this.animation.start(() => {
    e();
  });
});
  }
  stop() {
this.animation.stop();
  }
  constructor(e) {
r(this, 'animation', void 0), this.animation = e;
  }
}
class o {
  _map(e) {
return this.animations.map(e);
  }
  start() {
return new Promise(e => Promise.all(this._map(e => e.start())).then(() => e()));
  }
  stop() {
this._map(e => e.stop());
  }
  constructor(e) {
r(this, 'animations', void 0), this.animations = e;
  }
}
class i {
  async start() {
for (let e of (this.stopped = !1, this.animations)) {
  if (this.stopped)
    return;
  await e.start();
}
  }
  stop() {
this.stopped = !0, this.animations.map(e => e.stop());
  }
  constructor(e) {
r(this, 'animations', void 0), r(this, 'stopped', !1), this.animations = e;
  }
}

function l(e, t, s) {
  return new a(s(e, {
...t
  }));
}
t.Z = {
  ...n.Z,
  timing: function(e, t) {
return l(e, t, n.Z.timing);
  },
  spring: function(e, t) {
return l(e, t, n.Z.spring);
  },
  parallel: function(e) {
return new o(e);
  },
  sequence: function(e) {
return new i(e);
  }
};