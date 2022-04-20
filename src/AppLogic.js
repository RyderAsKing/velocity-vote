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
        successVotes: 0,
        errorVotes: 0,
        laterVotes: 0,
        lastSuccessVote: now,
        lastAttemptVote: now,
      },
      version: 7,
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
          time: future,
          game: "minecraft-servers",
          name: "Velocity Craft",
          key: 1,
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
          time: future,
          name: "Velocity Craft",
          key: 2,
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
          time: future,
          name: "Velocity Craft",
          key: 3,
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
          time: future,
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
          time: future,
          game: "minecraft-mp.com",
          addition: "",
          name: "Vote for",
          key: 5,
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
          time: future,
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
          time: future,
          name: "Velocity Craft ",
          key: 7,
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

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToJson = (e) => {
    e.preventDefault();
    downloadFile({
      data: JSON.stringify(configuration),
      fileName: `auto_vote_${username}_${minutes}.json`,
      fileType: "text/json",
    });
  };

  return {
    handleChange,
    minutes,
    exportToJson,
  };
};

export default AppLogic;
