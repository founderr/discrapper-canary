n(442837), n(592125), n(594174), n(291574);
function r(e) {
    if ((null == e ? void 0 : e.isDM()) !== !0) return !1;
    let t = UserStore.getUser(e.getRecipientId());
    return null != t && t.bot;
}
