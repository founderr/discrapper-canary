t.d(s, {
    S: function () {
        return l;
    }
});
var n = t(259076),
    o = t(689938);
let a = {
    [n.pw.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_DISCORD_EMPLOYEE_ASKED,
    [n.pw.SOMEONE_ASKED_ME_TO]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_SOMEONE_ASKED,
    [n.pw.NEW_EMAIL]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_NEW_EMAIL,
    [n.pw.SOMETHING_ELSE]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_SOMETHING_ELSE
};
function l(e) {
    return a[e]();
}
