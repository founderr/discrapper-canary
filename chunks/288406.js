var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(481060),
    c = n(633302),
    d = n(334920),
    f = n(768581),
    _ = n(185923),
    h = n(226904);
let p = l().memoize((e) => ''.concat(e * _.DC.NonDiversityPerRow, 'px ').concat(e * Math.ceil(c.ZP.numNonDiversitySprites / _.DC.NonDiversityPerRow), 'px')),
    m = l().memoize((e) => ''.concat(e * _.DC.DiversityPerRow, 'px ').concat(e * Math.ceil(c.ZP.numDiversitySprites / _.DC.DiversityPerRow), 'px')),
    g = (e, t, r) => {
        let i, a, s;
        if (!e.useSpriteSheet) return;
        let o = null != e.index ? e.index : 0;
        e.hasDiversity ? ((i = n(735800)('./spritesheet-'.concat(t, '-').concat(r, '.png'))), (a = m(r)), (s = _.DC.DiversityPerRow)) : ((i = n(604901)('./spritesheet-emoji-'.concat(r, '.png'))), (a = p(r)), (s = _.DC.NonDiversityPerRow));
        let l = (-o % s) * r,
            u = -Math.floor(o / s) * r;
        return {
            backgroundImage: "url('".concat(i, "')"),
            backgroundPosition: ''.concat(l, 'px ').concat(u, 'px'),
            backgroundSize: a,
            height: r,
            width: r
        };
    },
    E = i.memo(function (e) {
        let { emoji: t, size: n, surrogateCodePoint: a, allowAnimatedEmoji: o, 'aria-label': l, isLocked: c } = e,
            p = (() => {
                if (!t.useSpriteSheet) {
                    var e;
                    let i =
                        null == t.id
                            ? t.url
                            : f.ZP.getEmojiURL({
                                  id: t.id,
                                  animated: o && t.animated,
                                  size: _.$U
                              });
                    return null != i
                        ? (0, r.jsx)(d.Z, {
                              className: h.lockedEmoji,
                              'aria-label': l,
                              src: i,
                              size: n,
                              alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ''
                          })
                        : null;
                }
                return (0, r.jsx)('div', {
                    className: s()(h.emojiSpriteImage, { [h.lockedEmoji]: c }),
                    style: g(t, a, n),
                    children: (0, r.jsx)(u.HiddenVisually, { children: l })
                });
            })();
        return (0, r.jsxs)(i.Fragment, {
            children: [
                p,
                c
                    ? (0, r.jsx)('div', {
                          className: h.emojiLockIconContainer,
                          children: (0, r.jsx)(u.LockIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: h.emojiLockIcon
                          })
                      })
                    : null
            ]
        });
    });
t.Z = E;
