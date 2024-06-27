a.d(l, {
  U: function() {
    return r
  },
  a: function() {
    return s
  }
});
var n, s, t = a(626135),
  i = a(981631);
(n = s || (s = {}))[n.FollowGame = 0] = "FollowGame", n[n.UnfollowGame = 1] = "UnfollowGame", n[n.ClickMessageUser = 2] = "ClickMessageUser", n[n.SendMessageUser = 3] = "SendMessageUser", n[n.JoinVC = 4] = "JoinVC", n[n.WatchStream = 5] = "WatchStream", n[n.ClickSimilarGame = 6] = "ClickSimilarGame", n[n.WebsiteLink = 7] = "WebsiteLink", n[n.XLink = 8] = "XLink", n[n.YouTubeLink = 9] = "YouTubeLink", n[n.ShowMore = 10] = "ShowMore", n[n.ShowLess = 11] = "ShowLess", n[n.JoinOfficialServer = 12] = "JoinOfficialServer", n[n.ClickImage = 13] = "ClickImage";
let r = e => {
  let {
    gameName: l,
    applicationId: a,
    action: n,
    recipientUserId: s,
    similarGameId: r
  } = e;
  t.default.track(i.rMx.GAME_PROFILE_ACTION, {
    game_name: l,
    application_id: a,
    action: n,
    recipient_user_id: s,
    similar_game_id: r
  })
}