const groupPost = {
  groupPostProfile: [
    'https://people.com/thmb/63vkoIr01KJocMw-Eanou_lOCHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x39:721x41)/Elon-Musk-5b33223ae173454382ea3cc04373e8b8.jpg',
    'https://cdn.tatlerasia.com/tatlerasia/i/2021/12/30111106-s-ami12307_cover_1000x1500.jpg',
    'https://img.etimg.com/thumb/width-1200,height-900,imgsize-11108,resizemode-75,msid-102506985/tech/technology/tesla-cfo-zachary-kirkhorn-steps-down.jpg'

    , 'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/06/Enrique-Lores-2.jpg'
    , 'https://cdn.shopify.com/s/files/1/0373/0813/7608/files/CAM-MacBook-Mobile-banner-02.jpg?v=1715075182'
  ],
  groupProfile: [
    'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x1600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23906794/VRG_Illo_STK022_K_Radtke_Musk_Bolts.jpg'
    , "https://i1.feedspot.com/200/5231479.jpg?t=1609244254",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4cE108FkeZaOpr5nz9KCT2PBK9zIkYUTe6Tp2WPpQo0QPcSLZNw97AGMvydzDIkBCPk&usqp=CAU",
    "https://pbs.twimg.com/media/Fy_LxGBWIAMbj4K.jpg",
    "https://i.ytimg.com/vi/9oWQB1T0f0U/maxresdefault.jpg",


  ],
  groupName: [
    'Elo Musk Fan Group',
    "Asus Community Support",
    "Tesla Car Community",
    "Hp Gaming Commnuity",
    "MacBook Buy, Sale & Trate",
  ],
  postBody: [
    'Last week Musk and Tesla laid off nearly the entire Supercharger organization, which was responsible for the build-out of its best-in-class charging network. In the aftermath of the initial layoffs, Musk addressed the Supercharger news on X, stating that the network will grow at “a slower pace” for new locations.'
    , "We are on the precipice of a new age of computing, powered by AI. But even today, you might not realize how much access to AI you already have thanks to the latest NVIDIA GeForce RTX GPUs and the RTX AI platform. From image and video upscaling, DLSS frame generation, innovative ray-tracing enhancements, and a suite of exclusive tools and improved capabilities geared towards creators, whether you’re a casual gamer, a professional video editor, or someone in between, ROG and NVIDIA have the right GPU for you."
    , `(Reuters) -Tesla will spend more than $500 million this year to expand its fast-charging network, CEO Elon Musk said on Friday, days after abruptly laying off employees who were running the business.
"Just to reiterate: Tesla (NASDAQ:TSLA) will spend well over $500M expanding our Supercharger network to create thousands of NEW chargers this year," Musk said in a post on his social media platform X.`
    , "AMD Smart Access Graphics mode in Graphics Switcher is temporarily disabled on the 2022 OMEN 16-n0xxx (AMD) Laptop due to SDK errors. In the meantime you can switch graphics modes from the BIOS Setup menu, and configure AMD Smart Access configuration from the AMD Radeon software."
    , `✰ 𝗠𝟭 𝗠𝗮𝗰𝗕𝗼𝗼𝗸 𝗣𝗿𝗼 𝟭𝟯" 𝗶𝗻𝗦𝘁𝗼𝗰𝗸 𝗨𝗽𝗱𝗮𝘁𝗲 𝗟𝗶𝘀𝘁  ✰
💻 M1 MacBook Pro 13” 8/512GB GRAY
⚈ Thailand Region - Thai + English Keyboard 
⚈ RAM 8GB / SSD Storage 512GB
⚈ Battery Health 100% / Cycle Count 12
    𝗦𝗔𝗟𝗘 𝗣𝗥𝗜𝗖𝗘 -  𝟯,𝟭𝟱𝟬,𝟬𝟬𝟬 𝗞𝗬𝗔𝗧𝗦 
———————————————————————
💻 M1 MacBook Pro 13” 8/256GB SILVER 
⚈ Thailand Region - English Keyboard
⚈ RAM 8GB / SSD Storage 256GB
⚈ Battery Health 86% / Cycle Count 186
⚈ AppleCare Plus - 15 Oct 2025 
    𝗦𝗔𝗟𝗘 𝗣𝗥𝗜𝗖𝗘 - 𝟮,𝟵𝟵𝟬,𝟬𝟬𝟬 𝗞𝗬𝗔𝗧𝗦 
———————————————————————`
  ],
  groupAdmin: [
    'Elo Musk',
    'Jonney Shih',
    'Vaibhav Taneja',
    'Enrique Lores',
    'Budget Mac Market'
  ],
  postPhoto: [
    "https://www.paraanaliz.com/wp-content/uploads/2023/07/Elon-Musk-Tesla.jpg",
    "https://rog.asus.com/media/1712977118578.jpg",
    "https://i-invdn-com.investing.com/trkd-images/LYNXMPEK490IX_L.jpg",
    "https://images.firstpost.com/wp-content/uploads/2020/11/3-HP-Omen-15.jpg?im=Resize,width=720,aspect=fit,type=normal",
    "https://www.macworld.com/wp-content/uploads/2024/04/macbook-pro-back-colors.jpg?quality=50&strip=all"
  ],
  postComment: [
    100,
    150,
    200,
    500,
    230,
    501
  ],
  postLike: [
    140,
    440,
    230,
    220,
    250,
    981,
  ],
  postSarch: [
    100,
    150,
    200,
    500,
    230,
    501
  ]
}
const group_post = document.getElementById("group_post");

let listGroupPost = "";
for (let i = 0; i < groupPost.groupPostProfile.length; i++) {
  listGroupPost += `<div class="profile shadow p-3 mt-2 w-100">
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <div class="d-flex align-items-center">
                  <div class="group-photo">
                    <img
                      src="${groupPost.groupProfile[i]}"
                      class="rounded-5 me-3"
                      height="55"
                      width="55"
                    />
                    <img
                      src="${groupPost.groupPostProfile[i]}"
                      class="rounded-circle me-3 profile-photo"
                      height="25"
                      width="25"
                    />
                  </div>
                  <div class="userName">
                    <div class="text-dark"><b>${groupPost.groupName[i]}</b><i class="ms-2 me-4 fa-solid fa-user-group"></i></div>
                    <div class="">
                      <small
                        ><b>${groupPost.groupAdmin[i]}</b>.
                        <span class="text-primary">Admin</span> . 10 May at
                        23:06</small
                      >
                    </div>
                  </div>
                </div>
                <div class="">
                  <i class="fs-4 fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <p>
                ${groupPost.postBody[i]}
              </p>
              <div class="pb-2">
                <img
                  src="${groupPost.postPhoto[i]}"
                  class="w-100 rounded-5"
                  alt=""
                />
              </div>

              <div class="d-flex justify-content-between">
                <div class="d-flex p-2">
                  <i class="fs-4 fa-solid fa-heart me-3"></i>
                  <div id="_reactionCount">${groupPost.postComment[i] + groupPost.postSarch[i]}K</div>
                </div>
                <div class="d-flex">
                  <div class="d-flex p-2 me-2">
                    <i class="fs-4 fa-solid fa-comment me-2"></i>
                    <div id="_shareCount">${groupPost.postComment[i]}K</div>
                  </div>
                  <div class="d-flex p-2">
                    <i class="fs-4 fa-solid fa-share me-2"></i>
                    <div id="_shareCount">${groupPost.postSarch[i]}K</div>
                  </div>
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
            </div>`

}
group_post.innerHTML = listGroupPost;

const GroupList = {
  groupName: [
    "Asus Community Support",
    "Hp Gaming Commnuity",
    "MacBook Buy, Sale & Trate",
    "Tesla Car Community",
    'Elo Musk Fan Group',
    'Apple Community Support'
  ],
  groupProfilePhoto: [
    "https://i1.feedspot.com/200/5231479.jpg?t=1609244254",
    "https://pbs.twimg.com/media/Fy_LxGBWIAMbj4K.jpg",
    "https://i.ytimg.com/vi/9oWQB1T0f0U/maxresdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4cE108FkeZaOpr5nz9KCT2PBK9zIkYUTe6Tp2WPpQo0QPcSLZNw97AGMvydzDIkBCPk&usqp=CAU",
    "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x1600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23906794/VRG_Illo_STK022_K_Radtke_Musk_Bolts.jpg",
    "https://developer.apple.com/wwdc23/hero/endframes/p3-startframe-large_2x.jpg"
  ],
  groupUserImage: [
    ""
  ],
  userName: [
    ""
  ],
  groupMemember: [
    "229K Members",
    "303K Members",
    "478K Members",
    "789K Members",
    "478K Members",
    "689K Members"
  ]

}

let CommunityList = "";
for (let i = 0; i < GroupList.groupName.length; i++) {
  CommunityList += ` <div class="messageChatProfile mb-3">
                <img
                  src="${GroupList.groupProfilePhoto[i]}"
                  class="rounded-4 me-3"
                  height="40"
                  width="40"
                  loading="lazy"
                />
                <div class="messageChat">
                  <div class="text-dark"><b>${GroupList.groupName[i]}</b></div>
                  <div>${GroupList.groupMemember[i]}</div>
                </div>
              </div>`
}

document.getElementById('_groupList').innerHTML = CommunityList;