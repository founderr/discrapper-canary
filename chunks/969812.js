var i = r(544891),
    a = r(904245),
    s = r(981631),
    o = r(388032);
n.Z = {
    changeNickname: (e, n, r, l) =>
        i.tn
            .patch({
                url: s.ANM.GUILD_MEMBER_NICK(e, r),
                body: { nick: l },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    (l = e.body.nick), a.Z.sendBotMessage(n, null != l && '' !== l ? o.intl.formatToMarkdownString(o.t['gz+HRk'], { nick: l }) : o.intl.string(o.t.Vhpd9P));
                },
                (e) => {
                    403 === e.status ? a.Z.sendBotMessage(n, o.intl.formatToMarkdownString(o.t.Izf9jI, {})) : a.Z.sendBotMessage(n, o.intl.string(o.t['5LO/Sk']));
                }
            )
};
