t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(346479),
    l = t(665906),
    u = t(689938);
function s(e) {
    let n = (0, l.Xb)(e),
        t = e.isLockedThread();
    if (n)
        return t
            ? (0, i.jsx)(a.MenuItem, {
                  id: 'unlock-thread',
                  label: e.isForumPost() ? u.Z.Messages.UNLOCK_FORUM_POST : u.Z.Messages.UNLOCK_THREAD,
                  action: () => r.Z.unlockThread(e)
              })
            : (0, i.jsx)(a.MenuItem, {
                  id: 'lock-thread',
                  label: e.isForumPost() ? u.Z.Messages.LOCK_FORUM_POST : u.Z.Messages.LOCK_THREAD,
                  action: () => r.Z.lockThread(e)
              });
}
