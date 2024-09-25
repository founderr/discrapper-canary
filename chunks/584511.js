var r,
    i,
    a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(686546),
    d = n(890648);
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
!(function (e) {
    (e[(e.OUTGOING = 0)] = 'OUTGOING'), (e[(e.INCOMING = 1)] = 'INCOMING');
})(r || (r = {}));
class E extends (i = o.PureComponent) {
    renderStatus() {
        let { muted: e, deafen: t } = this.props,
            n = t ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
        return e || t
            ? (0, a.jsx)(
                  n,
                  {
                      className: d.status,
                      color: u.tokens.colors.WHITE.css
                  },
                  'status'
              )
            : null;
    }
    renderBorder() {
        let { speaking: e } = this.props;
        return (0, a.jsx)('div', { className: l()(d.border, { [d.speaking]: e }) }, 'border');
    }
    renderMask() {
        let { muted: e, speaking: t, deafen: n } = this.props;
        return e && t
            ? (0, a.jsxs)(a.Fragment, {
                  children: [this.renderBorder(), this.renderStatus()]
              })
            : e || n
              ? (0, a.jsx)(a.Fragment, { children: this.renderStatus() })
              : (0, a.jsx)(a.Fragment, { children: this.renderBorder() });
    }
    renderVoiceCallAvatar() {
        let { src: e, disabled: t, ringing: n, ringingType: r, avatarClassName: i, muted: o, deafen: s, size: _, renderIcon: E } = this.props,
            f = (0, u.getAvatarSize)(_),
            h = (0, a.jsx)('img', {
                src: e,
                alt: ' ',
                className: l()(d.voiceAvatar, i, { [d.ringingOutgoing]: n && 0 === r })
            });
        if (t) return h;
        let p = c.QS.AVATAR_DEFAULT;
        return (
            null != E ? (p = _ === u.AvatarSizes.SIZE_32 ? c.QS.AVATAR_CALL_ICON_32 : c.QS.AVATAR_CALL_ICON) : (o || s) && (p = c.QS.AVATAR_VOICE_CALL_80),
            (0, a.jsxs)('div', {
                className: d.callAvatarMaskContainer,
                children: [
                    (0, a.jsxs)(c.ZP, {
                        className: d.callAvatarMask,
                        width: f,
                        height: f,
                        mask: p,
                        children: [null == E ? void 0 : E(), h]
                    }),
                    this.renderMask()
                ]
            })
        );
    }
    render() {
        let { size: e, onClick: t, style: n, onContextMenu: r, className: i, ringingType: o, ringing: s } = this.props,
            c = l()(
                d.wrapper,
                {
                    [d.clickable]: null != t,
                    [d.ringingOutgoing]: s && 0 === o,
                    [d.ringingIncoming]: s && 1 === o
                },
                i
            ),
            _ = (0, u.getAvatarSize)(e),
            E = {
                height: _,
                width: _,
                ...n
            };
        return (0, a.jsx)('div', {
            style: E,
            onContextMenu: r,
            className: c,
            children: this.renderVoiceCallAvatar()
        });
    }
}
_(E, 'defaultProps', {
    size: u.AvatarSizes.SIZE_80,
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
    _(E, 'RingingType', r),
    (t.Z = E);
