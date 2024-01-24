import {
    Emoji1, Emoji2, Emoji3,
    Emoji4, Emoji5, Emoji6,
    Microphone, Video, Monitor,
    faceSmile, Messages, Settings,

    Automattic, Coinbase, Dropbox,
    Intercom, Marvel, Shopify,

    videoIcon, Audio, Calender,
    Security, ImageGrid,
  } from "../src/assets"


export const imageData = [
    { image: Emoji1, id: Math.random()},
    { image: Emoji2, id: Math.random()},
    { image: Emoji3, id: Math.random()},
    { image: Emoji4, id: Math.random()},
    { image: Emoji5, id: Math.random()},
    { image: Emoji6, id: Math.random()},
]

export const icons = [
  { image: Microphone, id: Math.random()},
  { image: Video, id: Math.random()},
  { image: Monitor, id: Math.random()},
  { image: faceSmile, id: Math.random()},
  { image: Messages, id: Math.random()},
  { image: Settings, id: Math.random()},
]

export const companies = [
    { image: Shopify, id: Math.random()},
    { image: Coinbase, id: Math.random()},
    { image: Dropbox, id: Math.random()},
    { image: Intercom, id: Math.random()},
    { image: Marvel, id: Math.random()},
    { image: Automattic, id: Math.random()},
]

export const chooseData = [
  {
    icon: videoIcon,
    title: "Crystal-clear HD video",
    desc: `
    No more pixelation or blurriness – just stunning,
    lifelike clarity that brings your team closer in meetings.
    `,
    id: Math.random()
  },
  {
    icon: Audio,
    title: "Noise-canceling audio",
    desc: `
    Say goodbye to distractions with our advanced audio tech for crisp,
    interruption-free conversations.
    `,
    id: Math.random()
  },
  {
    icon: Calender,
    title: "Scheduling made easy",
    desc: `
    Streamline your agenda with ClearLink's intuitive scheduling.
    Set up meetings, send invitations, and receive reminders in one place.
    `,
    id: Math.random()
  },
  {
    icon: Security,
    title: "Bank-grade security",
    desc: `
    Your privacy is our priority with bank-grade security protocols safeguarding 
    your meetings and data from unwanted intruders.
    `,
    id: Math.random()
  },
]

export const dropDown = [
  {
    title: "How many participants can join a ClearLink video conference?",
    id: Math.random(),
  },
  {
    title: "Can I use ClearLink on multiple devices?",
    id: Math.random(),
  },
  {
    title: "Is ClearLink compatible with other video conferencing platforms?",
    id: Math.random(),
  },
  {
    title: "How does ClearLink ensure the security of my video conferences?",
    id: Math.random(),
  },
  {
    title: "Do I need to download any software to use ClearLink?",
    id: Math.random(),
  },
  {
    title: "What kind of customer support does ClearLink provide?",
    id: Math.random(),
  },

]