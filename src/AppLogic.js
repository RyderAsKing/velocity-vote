import React, { useState, useEffect } from "react";

const AppLogic = () => {
  const [username, setUsername] = useState("");
  const [minutes, setMinutes] = useState(30);
  const [configuration, setConfiguration] = useState({});

  useEffect(() => {
    var now = new Date();
    var future = now.setMinutes(now.getMinutes() + minutes);

    setConfiguration({
      settings: {
        disabledNotifStart: true,
        disabledNotifInfo: false,
        disabledNotifWarn: false,
        disabledNotifError: false,
        enabledSilentVote: true,
        disabledCheckTime: false,
        disabledCheckInternet: false,
        enableCustom: false,
        timeout: 10000,
      },
      generalStats: {
        successVotes: 0,
        monthSuccessVotes: 0,
        lastMonthSuccessVotes: 0,
        errorVotes: 0,
        laterVotes: 0,
        lastSuccessVote: now,
        lastAttemptVote: now,
        added: now,
      },
      todayStats: {
        successVotes: 1,
        errorVotes: 1,
        laterVotes: 0,
        lastSuccessVote: now,
        lastAttemptVote: now,
      },
      version: 6,
      projects: [
        {
          rating: "TopG",
          id: "638433",
          nick: username,
          stats: {
            successVotes: 0,
            monthSuccessVotes: 0,
            lastMonthSuccessVotes: 0,
            errorVotes: 0,
            laterVotes: 0,
            lastSuccessVote: now,
            lastAttemptVote: now,
            added: now,
          },
          time: now,
          game: "minecraft-servers",
          name: "Velocity Craft",
          key: 1,
          nextAttempt: future,
        },
        {
          rating: "MinecraftServerNet",
          id: "VelocityCraft",
          nick: username,
          stats: {
            successVotes: 0,
            monthSuccessVotes: 0,
            lastMonthSuccessVotes: 0,
            errorVotes: 0,
            laterVotes: 0,
            lastSuccessVote: now,
            lastAttemptVote: now,
            added: now,
          },
          time: now,
          name: "Velocity Craft",
          key: 2,
          nextAttempt: future,
        },
        {
          rating: "MinecraftServersBiz",
          id: "servers/150128",
          nick: username,
          stats: {
            successVotes: 0,
            monthSuccessVotes: 0,
            lastMonthSuccessVotes: 0,
            errorVotes: 0,
            laterVotes: 0,
            lastSuccessVote: now,
            lastAttemptVote: now,
            added: now,
          },
          time: now,
          name: "Velocity Craft",
          key: 3,
          nextAttempt: future,
        },
        {
          rating: "MinecraftServersOrg",
          id: "615842",
          nick: username,
          stats: {
            successVotes: 0,
            monthSuccessVotes: 0,
            lastMonthSuccessVotes: 0,
            errorVotes: 0,
            laterVotes: 0,
            lastSuccessVote: now,
            lastAttemptVote: now,
            added: now,
          },
          time: now,
          name: "Velocity Craft",
          key: 4,
        },
        {
          rating: "ListForge",
          id: "286929",
          nick: username,
          stats: {
            successVotes: 0,
            monthSuccessVotes: 0,
            lastMonthSuccessVotes: 0,
            errorVotes: 0,
            laterVotes: 0,
            lastSuccessVote: now,
            lastAttemptVote: now,
            added: now,
          },
          time: now,
          game: "minecraft-mp.com",
          addition: "",
          name: "Vote for",
          key: 5,
          nextAttempt: future,
        },
        {
          rating: "MinecraftServerList",
          id: "484447",
          nick: username,
          stats: {
            successVotes: 0,
            monthSuccessVotes: 0,
            lastMonthSuccessVotes: 0,
            errorVotes: 0,
            laterVotes: 0,
            lastSuccessVote: now,
            lastAttemptVote: now,
            added: now,
          },
          time: now,
          name: "Velocity Craft",
          key: 6,
        },
        {
          rating: "MinecraftList",
          id: "23177 ",
          nick: username,
          stats: {
            successVotes: 0,
            monthSuccessVotes: 0,
            lastMonthSuccessVotes: 0,
            errorVotes: 0,
            laterVotes: 0,
            lastSuccessVote: now,
            lastAttemptVote: now,
            added: now,
          },
          time: now,
          name: "Velocity Craft ",
          key: 7,
          nextAttempt: future,
        },
      ],
    });
  }, [username]);

  useEffect(() => {
    console.log(configuration);
  }, [configuration]);

  const handleChange = (e) => {
    if (e.target.name == "minutes") {
      setMinutes(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  };

  return {
    handleChange,
    minutes,
  };
};

export default AppLogic;
