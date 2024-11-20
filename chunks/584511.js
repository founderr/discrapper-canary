var r,
    i,
    a,
    s = n(200651),
    o = n(192379),
    l = n(120356),
    u = n.n(l),
    c = n(481060),
    d = n(686546),
    f = n(890648);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((r = i || (i = {}))[(r.OUTGOING = 0)] = 'OUTGOING'), (r[(r.INCOMING = 1)] = 'INCOMING');
class p extends (a = o.PureComponent) {
    renderStatus() {
        let { muted: e, deafen: t } = this.props,
            n = t ? c.HeadphonesSlashIcon : c.MicrophoneSlashIcon;
        return e || t
            ? (0, s.jsx)(
                  n,
                  {
                      className: f.status,
                      color: c.tokens.colors.WHITE.css
                  },
                  'status'
              )
            : null;
    }
    renderBorder() {
        let { speaking: e } = this.props;
        return (0, s.jsx)('div', { className: u()(f.border, { [f.speaking]: e }) }, 'border');
    }
    renderMask() {
        let { muted: e, speaking: t, deafen: n } = this.props;
        return e && t
            ? (0, s.jsxs)(s.Fragment, {
                  children: [this.renderBorder(), this.renderStatus()]
              })
            : e || n
              ? (0, s.jsx)(s.Fragment, { children: this.renderStatus() })
              : (0, s.jsx)(s.Fragment, { children: this.renderBorder() });
    }
    renderVoiceCallAvatar() {
        let { src: e, disabled: t, ringing: n, ringingType: r, avatarClassName: i, muted: a, deafen: o, size: l, renderIcon: _ } = this.props,
            p = (0, c.getAvatarSize)(l),
            h = (0, s.jsx)('img', {
                src: e,
                alt: ' ',
                className: u()(f.voiceAvatar, i, { [f.ringingOutgoing]: n && 0 === r })
            });
        if (t) return h;
        let m = d.QS.AVATAR_DEFAULT;
        return (
            null != _ ? (m = l === c.AvatarSizes.SIZE_32 ? d.QS.AVATAR_CALL_ICON_32 : d.QS.AVATAR_CALL_ICON) : (a || o) && (m = d.QS.AVATAR_VOICE_CALL_80),
            (0, s.jsxs)('div', {
                className: f.callAvatarMaskContainer,
                children: [
                    (0, s.jsxs)(d.ZP, {
                        className: f.callAvatarMask,
                        width: p,
                        height: p,
                        mask: m,
                        children: [null == _ ? void 0 : _(), h]
                    }),
                    this.renderMask()
                ]
            })
        );
    }
    render() {
        let { size: e, onClick: t, style: n, onContextMenu: r, className: i, ringingType: a, ringing: o } = this.props,
            l = u()(
                f.wrapper,
                {
                    [f.clickable]: null != t,
                    [f.ringingOutgoing]: o && 0 === a,
                    [f.ringingIncoming]: o && 1 === a
                },
                i
            ),
            d = (0, c.getAvatarSize)(e),
            _ = {
                height: d,
                width: d,
                ...n
            };
        return (0, s.jsx)('div', {
            style: _,
            onContextMenu: r,
            className: l,
            children: this.renderVoiceCallAvatar()
        });
    }
}
_(p, 'defaultProps', {
    size: c.AvatarSizes.SIZE_80,
    ringingType: 0,
    speaking: !1,
    soundsharing: !1,
    ringing: !1,
    muted: !1,
    deafen: !1,
    hasVideo: !1,
    mirror: !1,
    disabled: !1,
    paused: !1
}),
    _(p, 'RingingType', i),
    (t.Z = p);
