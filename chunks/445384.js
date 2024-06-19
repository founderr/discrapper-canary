var l = n(570140);
t.Z = {
  viewPrompt: function(e, t) {
    l.Z.wait(() => {
      l.Z.dispatch({
        type: "GUILD_PROMPT_VIEWED",
        prompt: e,
        guildId: t
      })
    })
  }
}