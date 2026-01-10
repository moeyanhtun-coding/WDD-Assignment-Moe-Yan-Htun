const messageCheck = document.getElementById('_messageChatProfile');
const nameList = [
  'Moe Yan Htun',
  'John Doe',
  'Jane Smith',
  'Xero Thunderblade',
  'Blaze Shadowcaster',
  'Nova Starfury',
  'Ace Swiftblade',
  'Eva Darkstorm',
  'Max Steelheart',
  'Luna Nightshade',
  'Rex Firestorm',
  'Zara Moonlight',
  'Axel Frostwing',
  'Sasha Sunstrike',
  'Duke Shadowstorm',
  'Violet Skywatcher',
  'Drake Nightfall',
  'Phoenix Flameheart',
  'Lily Stormborn',
  'Victor Ironsoul'
];

const usernameList = [
  '@moeyan',
  '@johndoe',
  '@janesmith',
  '@xerothunder',
  '@blazeshadow',
  '@novastar',
  '@aceswift',
  '@evadark',
  '@maxsteel',
  '@lunanight',
  '@rexfire',
  '@zaramoon',
  '@axelfrost',
  '@sashasun',
  '@dukeshadow',
  '@violets',
  '@drakenight',
  '@phoenixf',
  '@lilystorm',
  '@victori'
];

const imageUrl = ['https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/3.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/4.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/6.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/7.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/9.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/10.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/11.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/12.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/13.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/14.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/15.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/16.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/17.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/18.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/19.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/20.webp'];


const nameList1 = [
  'Victor Ironsoul',
  'Lily Stormborn',
  'Phoenix Flame',
  'Drake Nightfall',
  'Violet Skywatcher',
  'Duke Shadow',
  'Sasha Sunstrike',
  'Axel Frostwing',
  'Zara Moonlight',
  'Rex Firestorm',
  'Luna Nightshade',
  'Max Steelheart',
  'Eva Darkstorm',
  'Ace Swiftblade',
  'Nova Starfury',
  'Blaze Shadow',
  'Xero Thunder',
  'Jane Smith',
  'John Doe',
  'justin'
];

const usernameList1 = [
  '@victori',
  '@lilystorm',
  '@phoenixf',
  '@drakenight',
  '@violets',
  '@dukeshadow',
  '@sashasun',
  '@axelfrost',
  '@zaramoon',
  '@rexfire',
  '@lunanight',
  '@maxsteel',
  '@evadark',
  '@aceswift',
  '@novastar',
  '@blazeshadow',
  '@xerothunder',
  '@janesmith',
  '@johndoe',
  '@moeyan'
];

const imageUrl1 = [
  'https://mdbcdn.b-cdn.net/img/new/avatars/20.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/19.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/18.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/17.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/16.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/15.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/14.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/13.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/12.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/11.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/10.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/9.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/7.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/6.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/4.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/3.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
];


const imageUrl2 = ['https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/3.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/4.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/6.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/7.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/9.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/10.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/11.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/12.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/13.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/14.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/15.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/16.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/17.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/18.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/19.webp',
  'https://mdbcdn.b-cdn.net/img/new/avatars/20.webp'];

const imageUrl3 = [
  'https://www.reuters.com/resizer/v2/GCVSDNFVDVJABCAGOPS35LHUTI.jpg?auth=b9ea17495ccf1165cf170092d7f988c32f9c221b51cb537040e069fae49b21b0&width=1200&quality=80',
  'https://www.reuters.com/resizer/v2/MDWKN2PFFJIM7BXUKXYSEEB7AI.jpg?auth=6d858338b197da1a44bca3825b9607518f98ac8193dbabea2daf30b4bf3e1131&width=1200&quality=80',
  'https://i.gadgets360cdn.com/large/apple_m4_chip_1715154181872.jpg?downsize=950:*https://i.gadgets360cdn.com/large/apple_m4_chip_1715154181872.jpg?downsize=950:*'
  , 'https://www.reuters.com/resizer/v2/3VJ6MQKHUBILTDYERZWHUBO6OA.jpg?auth=1c951c3a643c3d4fe03371d1af80823716517ede84fa98eb458d73991f2f3134&width=1200&quality=80'
  , 'https://i0.wp.com/macdailynews.com/wp-content/uploads/2022/07/220715_macbook_air.png?w=660&ssl=1'
  , 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/05/1440/810/1-New-infostealer-malware-targets-macOS-devices.jpg?ve=1&tl=1'
  , 'https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
  , 'https://images.unsplash.com/photo-1440658172029-9d9e5cdc127c?q=80&w=3359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  , 'https://images.unsplash.com/photo-1537365587684-f490102e1225?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  , 'https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&w=3288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  , 'https://images.unsplash.com/photo-1571904367676-b1ca681dfcad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4ODI0OTh8fGVufDB8fHx8fA%3D%3D'
  , 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  , 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  , 'https://plus.unsplash.com/premium_photo-1688700437975-0ea63cfa59e1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1538037408370-a1aa8e9ef2b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8ODgyNDk4fHxlbnwwfHx8fHw%3D'
  , 'https://images.unsplash.com/photo-1536168032936-9ce3b4b3165c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxNzk0MTZ8fGVufDB8fHx8fA%3D%3D'
  , 'https://images.unsplash.com/photo-1531142732168-f52d89465607?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTc5NDE2fHxlbnwwfHx8fHw%3D'
  , 'https://images.unsplash.com/photo-1428342319217-5fdaf6d7898e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw0MjB8fGVufDB8fHx8fA%3D%3D'
  , 'https://images.unsplash.com/photo-1527580795266-e93c8e079c22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwzMTQ0NDE0M3x8ZW58MHx8fHx8'
  , 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzMTQ0NDE0M3x8ZW58MHx8fHx8'

]

const nameList2 = [
  'Justin',
  'John Doe',
  'Jane Smith',
  'Xero Thunderblade',
  'Blaze Shadowcaster',
  'Nova Starfury',
  'Ace Swiftblade',
  'Eva Darkstorm',
  'Max Steelheart',
  'Luna Nightshade',
  'Rex Firestorm',
  'Zara Moonlight',
  'Axel Frostwing',
  'Sasha Sunstrike',
  'Duke Shadowstorm',
  'Violet Skywatcher',
  'Drake Nightfall',
  'Phoenix Flameheart',
  'Lily Stormborn',
  'Victor Ironsoul'
];

const usernameList2 = [
  '@victori',
  '@lilystorm',
  '@phoenixf',
  '@drakenight',
  '@violets',
  '@dukeshadow',
  '@sashasun',
  '@axelfrost',
  '@zaramoon',
  '@rexfire',
  '@lunanight',
  '@maxsteel',
  '@evadark',
  '@aceswift',
  '@novastar',
  '@blazeshadow',
  '@xerothunder',
  '@janesmith',
  '@johndoe',
  '@moeyan'
];
const sentences = [
  "SYDNEY, May 10 (Reuters) - Elon Musk's X has policies to take down harmful content when it chooses but should not be allowed to overrule Australian law in deciding what can be viewed there, a lawyer for the cyber regulator told a hearing into video of a bishop being stabbed.",
  "May 10 (Reuters) - Zeekr (ZK.N), opens new tab shares opened nearly 24% above their IPO price on Friday in a strong start for the electric-vehicle maker, the first major U.S. market debut by a China-based company since 2021.",
  "Apple Inc. will deliver some of its upcoming artificial intelligence features this year via data centers equipped with its own in-house processors, part of a sweeping effort to infuse its devices with AI capabilities. The company is placing high-end chips — similar to ones it designed for the Mac — in cloud-computing servers designed to process the most advanced AI tasks coming to Apple devices, according to people familiar with the matter. Simpler AI-related features will be processed directly on iPhones, iPads and Macs, said the people, who asked not to be identified because the plan is still under wraps.",
  "The report claims that transcriptions of audio recordings will be available in both the Voice Memos and Notes apps on iOS 18. In addition, the Notes app will apparently be able to provide AI-generated summaries of key points in audio recordings. These features are also expected to be included in iPadOS 18 and macOS 15.",
  "The 'Cuckoo' malware, as it's been named by the security provider Kandji, is a new type of malware that meticulously searches for files linked to specific applications on your Mac or MacBook to extract as much data as possible. It is designed to gather a wide array of information, including hardware details, active processes, applications, and more installed on your system.",
  "The ancient ruins held secrets of a civilization long forgotten by time.",
  "The melody of a violin echoed through the concert hall, captivating the audience.",
  "The mischievous kitten played with a ball of yarn, unaware of the chaos it caused.",
  "The sunflower fields stretched endlessly, their golden petals dancing in the sunlight.",
  "The thunderstorm raged outside, lightning illuminating the dark sky in flashes.",
  "The aroma of spices wafted from the kitchen, signaling a delicious meal in the making.",
  "The intricate patterns of a spider's web glistened with dewdrops in the morning sun.",
  "The majestic eagle soared high above the mountains, its wings outstretched in flight.",
  "The laughter of children filled the playground, a symphony of joy and innocence.",
  "The ancient book contained knowledge passed down through generations, waiting to be discovered.",
  "The soft rustle of leaves in the forest whispered secrets only nature could understand.",
  "The city skyline glittered with lights, a beacon of civilization in the darkness.",
  "The wise old owl perched on a branch, observing the world with its piercing eyes.",
  "The delicate petals of a rose bloomed in vibrant hues, a symbol of love and beauty.",
  "The gentle waves lapped against the shore, a rhythmic melody of the sea.",
  "The sun slowly sank below the horizon, painting the sky in hues of orange and pink.",
  "Lost in thought, she wandered aimlessly through the bustling city streets.",
  "The old oak tree stood tall and proud, its branches swaying in the gentle breeze.",
  "Laughter echoed through the park as children played games and chased after each other.",
  "With a flick of his wand, the magician made the rabbit disappear into thin air.",
  "The waves crashed against the shore, leaving behind shells and seaweed in their wake.",
  "Music filled the air as the band played their instruments with passion and skill.",
  "In the quiet of the night, the stars twinkled brightly in the dark sky above.",
  "The aroma of freshly baked cookies wafted from the kitchen, enticing everyone nearby.",
  "She gazed out of the window, lost in the beauty of the snow-covered landscape.",
  "The clock ticked steadily on the wall, marking the passage of time.",
  "Birds chirped merrily in the trees, their songs a symphony of nature's harmony.",
  "The smell of coffee greeted her as she entered the cozy cafe on the corner.",
  "His heart raced as he waited nervously for her answer to his proposal.",
  "The ancient ruins stood as a testament to the greatness of civilizations past.",
  "A rainbow arched across the sky, its colors vibrant and mesmerizing.",
  "The scent of roses filled the air, signaling the arrival of spring.",
  "With a deep breath, she plunged into the icy waters of the lake, feeling alive and free.",
  "The city skyline glittered with lights, a dazzling display of urban life.",
  "As the day drew to a close, she reflected on the memories made and lessons learned."
];

const timeIntervals = [
  "1 min ago",
  "5 mins ago",
  "10 mins ago",
  "15 mins ago",
  "30 mins ago",
  "1 hr ago",
  "2 hrs ago",
  "3 hrs ago",
  "4 hrs ago",
  "5 hrs ago",
  "6 hrs ago",
  "7 hrs ago",
  "8 hrs ago",
  "9 hrs ago",
  "10 hrs ago",
  "12 hrs ago",
  "15 hrs ago",
  "18 hrs ago",
  "1 day ago",
  "2 days ago"
];
const postList = document.getElementById("postList");
let list2 = "";

for (let i = 0; i < imageUrl2.length; i++) {
  list2 += `<div div class= "profile shadow py-2 px-3 mt-3 w-100" >
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="${imageUrl2[i]}"
                    class="rounded-circle me-3"
                    height="55"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                  <div class="userName">
                    <div class="text-dark"><b>${nameList2[i]}</b></div>
                    <div class=""><small>${timeIntervals[i]}</small></div>
                  </div>
                </div>
                <div class="">
                  <i class="fs-4 fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <p>
                ${sentences[i] + sentences[i + 2] + sentences[i + 4] + sentences[i + 8]}
              </p>
              <div class="pb-2">
                <img
                    src="${imageUrl3[i]}"
                    class="w-100 rounded-3"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
              </div>

              <div class="d-flex justify-content-between">
                <div class="d-flex p-2">
                  <i class="fs-4 fa-solid fa-heart me-3"></i>
                  <div id="_reactionCount">10</div>
                </div>
                <div class="d-flex p-2">
                  <i class="fs-4 fa-solid fa-share me-3"></i>
                  <div id="_shareCount">14</div>
                </div>
              </div>

              <div class="actionLog p-3">
                <div class="row">
                  <div class="col-4">
                    <div
                      id="like-btn"
                      class="reaction-button like-button d-flex actionLogHover p-2 rounded-5 justify-content-center align-items-center"
                    >
                      <div class="me-3">Love</div>
                      <i class="fs-4 fa-solid fa-heart"></i>
                    </div>
                  </div>
                  <div class="col-4">
                    <div
                      class="d-flex like-button actionLogHover p-2 rounded-5 justify-content-center align-items-center"
                    >
                      <div class="me-3">Comment</div>
                      <i class="fs-4 fa fa-comment"></i>
                    </div>
                  </div>
                  <div class="col-4">
                    <div
                      id="share-btn"
                      class="reaction-button like-button d-flex actionLogHover p-2 rounded-5 justify-content-center align-items-center"
                    >
                      <div class="me-3">Share</div>
                      <i class="fs-4 fa-solid fa-share"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div > `;

}
postList.innerHTML = list2;


const friendRequest = document.getElementById('_friendRequest')
let list1 = "";

for (let i = 0; i < nameList1.length; i++) {
  list1 += `              <div class="messageChatProfile justify-content-between mb-3" >
                <div class="d-flex">
                  <img
                    src="${imageUrl1[i]}"
                    class="rounded-circle me-3"
                    height="40"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                  <div class="messageChat">
                    <div class="text-dark"><b>${nameList1[i]}</b></div>
                    <div class="">${usernameList1[i]}</div>
                  </div>
                </div>
                <div class="d-flex">
                  <button class="btn btnPrimary">Accept</button>
                  <button class="btn btn-danger ms-2">Delete</button>
                </div>
              </div> `;

}
friendRequest.innerHTML = list1;

let reaction = 10;
const reactionCount = document.getElementById("_reactionCount");

function handleLikeButtonClick() {
  const likeButton = document.getElementById("like-btn");
  const isLiked = likeButton.classList.toggle("liked");

  if (isLiked) {
    console.log("Like button is now liked!");
    reaction += 1;
  } else {
    console.log("Like button is no longer liked!");
    reaction -= 1;
  }

  reactionCount.innerHTML = reaction;
}

document.getElementById("like-btn").addEventListener("click", handleLikeButtonClick);

let share = 14;
const shareCount = document.getElementById("_shareCount");

function handleShareButtonClick() {
  const shareButton = document.getElementById("share-btn");
  const isShare = shareButton.classList.toggle("shared");

  if (isShare) {
    console.log("Share button is now shared!");
    share += 1;
  } else {
    console.log("Share button is no longer shared!");
    share -= 1;
  }

  shareCount.innerHTML = share;
}

document.getElementById("share-btn").addEventListener("click", handleShareButtonClick);

let list = "";

for (let i = 0; i < nameList.length; i++) {
  list += `<div class="messageChatProfile mb-3" >
                <img
                  src="${imageUrl[i]}"
                  class="rounded-circle me-3"
                  height="40"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
                <div class="messageChat">
                  <div class="text-dark"><b>${nameList[i]}</b></div>
                  <div>${usernameList[i]}</div>
                </div>
              </div> `;

}
messageCheck.innerHTML = list;


const notifications = {
  id: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  title: [
    "Tesla Unveils New Electric Truck",
    "Apple Introduces iPhone 15",
    "Google Launches AI-Powered Search Engine",
    "Microsoft Releases Windows 12",
    "Amazon Unveils New Drone Delivery Service",
    "Samsung Announces Foldable Tablet",
    "Intel Releases Next-Gen Processors",
    "Facebook Introduces Virtual Reality Meetings",
    "Sony Reveals PlayStation 6",
    "NVIDIA Launches New Graphics Cards"
  ],
  content: [
    "Tesla has just announced the release of its new electric truck, featuring a revolutionary battery technology and a range of over 500 miles.",
    "Apple's latest iPhone 15 comes with an advanced AI chip, improved camera system, and longer battery life.",
    "Google has launched a new AI-powered search engine that provides more accurate and relevant search results.",
    "Microsoft has officially released Windows 12, featuring a redesigned user interface and enhanced security features.",
    "Amazon's new drone delivery service promises to deliver packages within 30 minutes using state-of-the-art drone technology.",
    "Samsung has announced its first foldable tablet, combining the portability of a tablet with the functionality of a laptop.",
    "Intel's next-generation processors offer unprecedented speed and efficiency, setting a new standard for computing performance.",
    "Facebook has introduced a new virtual reality meeting platform that aims to revolutionize remote work.",
    "Sony has revealed the PlayStation 6, featuring groundbreaking graphics and immersive gameplay experiences.",
    "NVIDIA's latest graphics cards deliver unparalleled performance for gamers and professionals alike."
  ],
  date: [
    "2024-05-17",
    "2024-05-16",
    "2024-05-15",
    "2024-05-14",
    "2024-05-13",
    "2024-05-12",
    "2024-05-11",
    "2024-05-10",
    "2024-05-09",
    "2024-05-08"
  ],
  category: [
    "Tesla",
    "Apple",
    "Google",
    "Microsoft",
    "Amazon",
    "Samsung",
    "Intel",
    "Facebook",
    "Sony",
    "NVIDIA"
  ],
  image: [
    "https://www.pacher.agency/assets/05_Blog/0029_Tesla/pa_Blog_Tesla_Header__FillWzU3NiwzMDBd.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQmnV_JcXPjgIId3UfkUgBlEkvaZPlcTtqD0qpWXvQA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuszbwi16GcmdkCKY_Uv2mVvFAkcd2IfMCQJmp7XjGdg&s",
    "https://m.media-amazon.com/images/I/31epF-8N9LL.png",
    "https://yt3.googleusercontent.com/TtoYXLkyKZu3EDOHAbLjhtpPKwW9eBa0vKacVOmFfq4qzG_Si5KHqzS_u86KO1VIoZJp11scbw=s900-c-k-c0x00ffffff-no-rj",
    "https://imageio.forbes.com/blogs-images/patrickmoorhead/files/2016/04/Intel-Logo-1200x911.png?height=539&width=711&fit=bounds",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsZzOHaW4Qvy3PEYvG-2EgH_q6bQURj14T00fv-lG1w&s",
    "https://assets-global.website-files.com/63f6e52346a353ca1752970e/644fb7a52156f63ce1fc3254_20230501T1259-761207c6-5c2d-4489-b10a-5af0d73cb454.jpeg"
  ]
};


let notification = document.getElementById('_notification');

let notificationList = "";

for (let i = 0; i < notifications.image.length; i++) {
  notificationList += `<div class="messageChatProfile w-100 justify-content-between mb-3">
                  <div class="d-flex w-100">
                  <div>                    <img
                      src="${notifications.image[i]}"
                      class="rounded-circle me-3"
                      width="40"
                      height="40"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                      style="object-fit:cover;"
                    />
                    </div class=" w-100">
                    <div class="messageChat w-100">
                      <div class="d-flex justify-content-between w-100">
                      <div class="text-dark fw-bolder"><b>${notifications.category[i]}</b></div>
                      <div class="text-primary">${notifications.date[i]}</div>
                      </div>
                      <div class="w-100 text-dark">${notifications.content[i].substring(0, 20) + "..."}</div>
                    </div>
                  </div>
                </div>`
  console.log(notifications)
}
notification.innerHTML = notificationList;