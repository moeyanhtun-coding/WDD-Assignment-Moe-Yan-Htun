const profilePagePhoto = document.getElementById("profilePagePhoto");
const imageUrl3 = [
  "https://www.reuters.com/resizer/v2/GCVSDNFVDVJABCAGOPS35LHUTI.jpg?auth=b9ea17495ccf1165cf170092d7f988c32f9c221b51cb537040e069fae49b21b0&width=1200&quality=80",
  "https://www.reuters.com/resizer/v2/MDWKN2PFFJIM7BXUKXYSEEB7AI.jpg?auth=6d858338b197da1a44bca3825b9607518f98ac8193dbabea2daf30b4bf3e1131&width=1200&quality=80",
  "https://i.gadgets360cdn.com/large/apple_m4_chip_1715154181872.jpg?downsize=950:*https://i.gadgets360cdn.com/large/apple_m4_chip_1715154181872.jpg?downsize=950:*",
  "https://www.reuters.com/resizer/v2/3VJ6MQKHUBILTDYERZWHUBO6OA.jpg?auth=1c951c3a643c3d4fe03371d1af80823716517ede84fa98eb458d73991f2f3134&width=1200&quality=80",
  "https://i0.wp.com/macdailynews.com/wp-content/uploads/2022/07/220715_macbook_air.png?w=660&ssl=1",
  "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/05/1440/810/1-New-infostealer-malware-targets-macOS-devices.jpg?ve=1&tl=1",
  "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1440658172029-9d9e5cdc127c?q=80&w=3359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1537365587684-f490102e1225?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&w=3288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571904367676-b1ca681dfcad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4ODI0OTh8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let list = "";

for (let i = 0; i < 9; i++) {
  list += `<div class="col-4 p-1" style="height: 120px;">
    <img class="w-100 h-100 photos" src="${imageUrl3[i]}" alt="">
  </div>`;
}
profilePagePhoto.innerHTML = list;

const profilePageFriend = document.getElementById("profilePageFriends");

const otherPostImage = [
  "https://www.reuters.com/resizer/v2/GCVSDNFVDVJABCAGOPS35LHUTI.jpg?auth=b9ea17495ccf1165cf170092d7f988c32f9c221b51cb537040e069fae49b21b0&width=1200&quality=80",
  "https://www.reuters.com/resizer/v2/MDWKN2PFFJIM7BXUKXYSEEB7AI.jpg?auth=6d858338b197da1a44bca3825b9607518f98ac8193dbabea2daf30b4bf3e1131&width=1200&quality=80",
  "https://i.gadgets360cdn.com/large/apple_m4_chip_1715154181872.jpg?downsize=950:*https://i.gadgets360cdn.com/large/apple_m4_chip_1715154181872.jpg?downsize=950:*",
  "https://www.reuters.com/resizer/v2/3VJ6MQKHUBILTDYERZWHUBO6OA.jpg?auth=1c951c3a643c3d4fe03371d1af80823716517ede84fa98eb458d73991f2f3134&width=1200&quality=80",
  "https://i0.wp.com/macdailynews.com/wp-content/uploads/2022/07/220715_macbook_air.png?w=660&ssl=1",
  "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/05/1440/810/1-New-infostealer-malware-targets-macOS-devices.jpg?ve=1&tl=1",
  "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1440658172029-9d9e5cdc127c?q=80&w=3359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1537365587684-f490102e1225?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&w=3288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571904367676-b1ca681dfcad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4ODI0OTh8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1688700437975-0ea63cfa59e1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1538037408370-a1aa8e9ef2b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8ODgyNDk4fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1536168032936-9ce3b4b3165c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxNzk0MTZ8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531142732168-f52d89465607?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTc5NDE2fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1428342319217-5fdaf6d7898e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw0MjB8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527580795266-e93c8e079c22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwzMTQ0NDE0M3x8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzMTQ0NDE0M3x8ZW58MHx8fHx8",
];

const imageUrl4 = [
  "https://mdbcdn.b-cdn.net/img/new/avatars/20.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/19.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/18.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/17.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/16.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/15.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/14.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/13.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/12.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/11.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/10.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/9.webp",

  "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2I7N1JkOZXdo5xNbKWlr8EvuDPrBuJJmDe3dShdVxYjZCOz7drFLBuZp4F2qgkTpIlM&usqp=CAU",
  "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/2c0a720adef65ecf0e1859f48c987f4f.jpg",
  "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2021/11/01/mi_zx_011121.jpg?VersionId=koeuTfw0Y5EPRmqN7RaMmmCf9XDBqYo0"
  , "https://cdn4.premiumread.com/?url=https://malaymail.com/malaymail/uploads/images/2023/09/27/150177.jpeg&w=800&q=100&f=jpg&t=2",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ELLE_TAIWAN_Seo_Yea-ji_2020.jpg/640px-ELLE_TAIWAN_Seo_Yea-ji_2020.jpg",
];
const nameList1 = [
  "Victor Ironsoul",
  "Lily Stormborn",
  "Phoenix Flame",
  "Drake Nightfall",
  "Violet Skywatcher",
  "Duke Shadow",
  "Sasha Sunstrike",
  "Axel Frostwing",
  "Zara Moonlight",
  "Rex Firestorm",
  "Luna Nightshade",
  "Max Steelheart",
  "Eva Darkstorm",
  "Ace Swiftblade",
  "Nova Starfury",
  "Blaze Shadow",
  "Xero Thunder",
  "Jane Smith",
  "John Doe",
  "justin",
];

let friendList = "";
for (let i = 0; i < 9; i++) {
  friendList += `<div class="col-4 p-1">
    <img class="w-100 photos " src="${imageUrl4[i]}" alt="">
    <p class=" fs-6 fw-bold text-dark ">${nameList1[i]}</p>
  </div>`;
}
profilePageFriend.innerHTML = friendList;

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
  "As the day drew to a close, she reflected on the memories made and lessons learned.",
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
  "2 days ago",
];


const socialMidiaProfile = [
  "Elon Musk",
  "Tim Cook",
  "Satya Nadella",
  "Jeff Bezos",
  "Mark Zuckerberg",
  "Sundar Pichai",
  "Jack Ma",
  "Larry Page",
  "Sergey Brin",
  "Sheryl Sandberg",
  "Jensen Huang",
  "Reed Hastings",
  "Ginni Rometty",
  "Masayoshi Son",
  "Susan Wojcicki",
  "Larry Ellison",
  "Marc Benioff",
  "Brian Chesky",
  "Jeff Weiner",
  "Kiran Mazumda"
]
const socialMidiaProfieImg = [
  "https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
  "https://s.yimg.com/ny/api/res/1.2/Dtm3kPIafa27CSf1k__h8A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/ea69e0e0-9344-11ed-bfce-7252c032292b",
  "https://media.cnn.com/api/v1/images/stellar/prod/ap24016572665890.jpg?c=16x9&q=h_833,w_1480,c_fill",
  "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.862xh;0,0.0207xh&resize=1200:*",
  "https://img.20mn.fr/Xs6X1d4dTcK3K59-PXfPPSk/1444x920_pdg-meta-mark-zuckerberg",
  "https://cdn.britannica.com/42/193142-050-F69B1A23/Sundar-Pichai-Google.jpg",
  "https://images.seattletimes.com/wp-content/uploads/2018/09/310c7340-b844-11e8-b3b6-c3284ec38ae6.jpg?d=2040x1360",
  "https://imageio.forbes.com/specials-images/imageserve/5c76bcaaa7ea43100043c836/0x0.jpg?format=jpg&crop=1795,1795,x227,y22,safe&height=416&width=416&fit=bounds",
  "https://hips.hearstapps.com/hmg-prod/images/gettyimages-456023687.jpg",
  "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201712/MIT-Sheryl-Sandberg_0.jpg?itok=2KOTmTJL",
  "https://www.nbim.no/cdn-cgi/image/width=832,format=auto,quality=85/contentassets/333ba94afaad45bbb8195336dfff5fab/jensen-huang.jpg?v=496f72",
  "https://ca-times.brightspotcdn.com/dims4/default/fa2c8c9/2147483647/strip/true/crop/5568x3712+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2b%2F16%2Feb1b51294246a5161df6ba020718%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F948027478",
  "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fbf912ec6-8f1f-444c-9b73-91c85ca5b46b.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
  "https://i.insider.com/5cf545d311e2050e3f760258?width=700",
  "https://image.cnbcfm.com/api/v1/image/102862252-Various-July-130.jpg?v=1565986072",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2I7N1JkOZXdo5xNbKWlr8EvuDPrBuJJmDe3dShdVxYjZCOz7drFLBuZp4F2qgkTpIlM&usqp=CAU",
  "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/2c0a720adef65ecf0e1859f48c987f4f.jpg",
  "https://compote.slate.com/images/302ff4e8-bd07-4233-9484-dd7f144583f6.jpeg?crop=1926%2C1284%2Cx0%2Cy0&width=1560",
  "https://images.inc.com/uploaded_files/image/1920x1080/getty_126695011_402683.jpg",
  "https://sugermint.com/wp-content/uploads/2020/03/Kiran-Mazumdar-Shaw-Chairperson-and-Managing-Director-of-Biocon-Ltd.jpg",

]

const socialMediaPostImage = [
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Desktop.jpg",
  "https://ichef.bbci.co.uk/news/1536/cpsprodpb/12509/production/_131071057_all_colors__d4w03v51nwcy_large_2x.jpg.webp",
  "https://images.edigest.hk/wp-content/uploads/2023/05/2166abig01_1272995167645b716e6b524.jpg",
  "https://images.wsj.net/im-925105?width=700&size=1.5058823529411764&pixel_ratio=2",
  "https://ichef.bbci.co.uk/news/1536/cpsprodpb/6062/production/_119547642_lifestyle_4.jpg.webp",
  "https://ichef.bbci.co.uk/news/1536/cpsprodpb/b0d3/live/50a2c570-0301-11ef-ba6e-79ab326cb5e5.jpg.webp",
  "https://ichef.bbci.co.uk/news/1536/cpsprodpb/9589/production/_128218283_jackma.jpg.webp",
  "https://i.insider.com/661972143f923f7dab077005?width=750&format=jpeg&auto=webp",
  "https://images.inc.com/uploaded_files/image/1920x1080/getty_632081268_195456.jpg",
  "https://i.guim.co.uk/img/media/288af93244f199de1dccc87e74724743ca61d57a/0_59_3500_2101/master/3500.jpg?width=1900&dpr=2&s=none",
  "https://miro.medium.com/v2/resize:fit:1392/format:webp/1*1PIRQ49yWBPFsuONaQ0H5A.jpeg",
  "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Oknpopz6GeDKNEje",
  "https://ichef.bbci.co.uk/news/1536/cpsprodpb/D096/production/_121589335_quantum20summit_hero20and20carousel20template_1920x720.jpg.webp",
  "https://cdn-ak.f.st-hatena.com/images/fotolife/s/sbn_16/20240327/20240327145136.jpg",
  "https://ichef.bbci.co.uk/news/1536/cpsprodpb/47E6/production/_128660481_gettyimages-978599412.jpg.webp",
  "https://cdn.i-scmp.com/sites/default/files/styles/wide_landscape/public/d8/images/canvas/2023/12/01/8380ed43-330b-49c1-9611-b17ef3dca58b_f09c794d.jpg?itok=FzuaLpGM&v=1701417028",
  "https://datascientest.com/en/wp-content/uploads/sites/9/2024/03/Salesforce-1024x585-1.jpg",
  "https://news.airbnb.com/wp-content/uploads/sites/4/2022/01/Brian_Chesky_Airbnb-3.jpg?w=2400",
  `https://www.siliconvalley.com/wp-content/uploads/2020/02/20160613__p_02d025b4-b327-4129-8b2d-e27dc135f57dlsoriginalph-1.jpg?w=480`,
  `https://nishantverma.in/wp-content/uploads/2024/01/Kiran-Mazumdar-Shaw-A-Trailblazer-in-Biopharmaceutical-Leadership-Nishant-Verma.jpg`,
]
const soicalMediaPostBody = [
  `Elon Musk named Innovator of the Year in Technology by WSJ. Magazine NEW YORK – Elon Musk , CEO and Co-founder of Tesla Motors and CEO and CTO of SpaceX, last night received the Innovator of the Year Award in Technology by WSJ. Magazine.
WSJ. Magazine’s first annual Innovator of the Year Awards honors the most creative, disruptive, and influential individuals in the world today. Musk was recognized for revolutionizing three of the biggest industries in the world--automobiles, energy and space exploration. Artist Tom Sachs, whose recent work is based on the imagery of space, presented the award to Musk.`,
  `Apple has confirmed its new iPhone will not feature its proprietary lightning charging port, after the EU forced the change.
The tech giant said that the iPhone 15, unveiled at its annual event on Tuesday, would use a USB-C cable as the "universally accepted standard".
A new Apple Watch series was also unveiled with a more advanced chip.
But one analyst said a lack of "headline-grabbing" updates from Apple this year would disappoint some.`,
  `Satya Nadella is Chairman and Chief Executive Officer of Microsoft. Before being named CEO in February 2014, Nadella held leadership roles in both enterprise and consumer businesses across the company.
Joining Microsoft in 1992, he quickly became known as a leader who could span a breadth of technologies and businesses to transform some of Microsoft’s biggest product offerings.`,
  `Jeff Bezos is executive chairman of Amazon, the company he founded in 1994. He was chief executive of the tech giant until 2021, when Andy Jassy took over. Since its creation in a Washington state garage, Amazon has grown from a scrappy online bookseller to America’s largest online retailer, as well as the leading provider of cloud-computing services, a significant player in Hollywood, a competitor in groceries through its Whole Foods subsidiary, and a rival to UPS and FedEx in logistics. Bezos also owns the Washington Post newspaper and Blue Origin, an aerospace company developing rockets for commercial use.`,
  `Facebook has invested heavily in virtual reality, spending $2bn (£1.46bn) on acquiring Oculus, which develops its VR products.
In 2019, it launched Facebook Horizon - an invitation-only immersive environment where users can mingle and chat in a virtual space with a cartoon avatar through Oculus headsets.
Zuckerberg admitted current VR headsets were “a bit clunky” and needed improving for people to work in them all day.`,
  `Google has been accused of taking advantage of its market dominance to make it harder to search for a rival email service.
Tuta Mail - which says it has more than ten million users worldwide - alleges that, since March, it hasn’t appeared prominently in Google searches for “encrypted email."
The company has made a complaint to the EU claiming that Google - which has its own hugely popular Gmail service - has damaged a rival business.`,
  `The billionaire founder of Ant Group, Jack Ma, is to give up control of the Chinese fintech giant after a regulatory crackdown.
Ant Group said that after the change no-one would have overall control.
The formerly flamboyant Mr Ma has seldom been seen in public since criticising China's financial sector in 2020.
Following that criticism, Ant Group's planned stock market flotation was abruptly halted.`,
  `Larry Page, Google's co-founder and one of the world's richest men, has been granted New Zealand residency under a category for wealthy investors.
Applicants are required to invest at least NZ$10m ($7m, £5m) in New Zealand over three years.
Mr Page entered New Zealand in January, when its borders were still closed because of Covid-19.
But the government said he was allowed in because of a medical emergency application involving his son.
`,
  `Google co-founder Sergey Brin has been building a giant airship inside a hangar in Mountain View, according to Bloomberg. The secret work is taking place at the NASA Ames Research Center, down the street from Google's headquarters.
Engineers have already built the airship's metal frame, which takes up most of the Ames Center's massive Hangar 2. While Google took over those NASA hangars in 2015, the secret project reportedly isn't a Google or Alphabet venture.`,
  `Mark Zuckerberg hired Sheryl Sandberg as Facebook’s chief operating officer in 2008 as the social network was growing fast and trying to attract investment. Zuckerberg, who founded Facebook in his Harvard dorm room, was just 23 – Sandberg, then 38, was deemed “the adult in the room”.

The former sales executive at Google and chief of staff at the US Treasury rose to become one of the most influential figures in global technology sector and one of very few women at the top of the industry. She also made a lot of money – after selling most of her stake in Facebook’s parent company, Meta, which also owns Instagram and WhatsApp, she is now worth close to $2bn (£1.6bn).`,
  `NVIDIA is a leading company in the field of artificial intelligence, providing high-performance GPUs for various applications. The company has achieved remarkable results in the past year, both in terms of revenue and stock price. Behind this success, there is a man who has been leading the company for 30 years: Jensen Huang, the co-founder, president, and CEO of NVIDIA.`,
  `Has the name Reed Hastings buzzed in your ears before? If you’re a cinephile or a binge-watcher who loves cozying up with a good show, it should. Let’s travel back in time to 1997 when Hastings co-founded Netflix, a company destined to revolutionize our approach to entertainment.
“Reed Hastings is not just a name, but a synonym for change in the world of digital entertainment.”`,
  `IBM has unveiled an advanced "quantum" processor that is part of an effort to build super-fast computers.
These machines could revolutionise computing, harnessing the strange world of quantum physics to solve problems beyond reach for even the most advanced "classical" ones.
But the hurdles in building practical, large-scale versions have kept quantum computers confined to the lab.
The new chip has 127 "qubits", twice as many as the previous IBM processor.
Qubits (quantum bits) are the most basic units of information in a quantum computer.
The company called its new Eagle processor "a key milestone on the path towards practical quantum computation".
But one quantum computing expert said more details were needed to assess whether it represented a significant advance.`,
  `On March 13, 2024, SoftBank Corp. (TOKYO: 9434) launched its "Private 5G (Dedicated Type)" service that enables enterprises, local governments and other organizations to build customized 5G networks on their premises with dedicated base stations.
With the Private 5G (Dedicated Type) service, SoftBank installs network equipment at a client’s site and combines it with its own allocated spectrum to build a dedicated and closed network. The service makes it possible for enterprise customers to build private 5G network environments outside the conventional public 5G service areas provided by telecommunications operators. The Private 5G (Dedicated Type) service launch follows SoftBank’s introduction of its shared type service first launched in March 2023.`,
  `YouTube CEO Susan Wojcicki is stepping down after nine years in the role.
In a blog post, she said she had "decided to start a new chapter focused on my family, health and personal projects I'm passionate about."
YouTube's chief product officer, Neal Mohan, will take over as head of the Google-owned video platform.
"The time is right for me, and I feel able to do this because we have an incredible leadership team in place at YouTube," Ms Wojcicki said.
Ms Wojcicki added she would continue to work at YouTube in the "short term" to "support Neal and help with the transition."
In her blog, she praised Mr Mohan's work launching YouTube TV, as well as leading YouTube Music, Premium, and Shorts.
At the invitation of Sundar Pichai, chief executive of Google's parent firm, Alphabet, Ms Wojcicki confirmed she would to "take on an advisory role across Google and Alphabet."`,
  `Ellison owns multiple properties in Newport, but his most prized one is undoubtedly his Beechwood Mansion on Bellevue Avenue. The historic house was originally built in 1851 and occupied by the famous Astor family, once among the richest and most prominent families in the US.
Ellison bought the property for US$10.5 million in 2010 and spent over US$100 million converting it into an art museum since then, according to the Newport Daily News. After the purchase, Ellison also bought three surrounding properties on Newport’s Bellevue Avenue, according to Business Insider.`,
  `Salesforce est une entreprise américaine devenue célèbre pour sa plateforme CRM et ses nombreuses solutions basées sur le Cloud : une technologie qu'elle a été l'une des premières à exploiter. Découvre tout ce qu'il faut savoir sur son histoire, ses différents logiciels et comment devenir un expert !
Our story begins in 1999, on the eve of the new millennium. It was then, in a small bedroom flat in San Francisco, that Marc Benioff and Parker Harris decided to revolutionise the way companies manage their relationships with their customers.

And to achieve this, they relied on innovative tools to optimise sales, customer service, marketing and much more. A year later, in 2000, they launched one of the first cloud-based software solutions: the Salesforce platform.

Much more than a revolution in CRM, the first building blocks of a Cloud empire had just been laid.`,
  `Remote and hybrid work have untethered many people from the need to be in an office every day, driving the biggest change to travel since the advent of commercial flying. For the first time, millions of people can now live anywhere.

On Airbnb’s platform, we have seen:

One out of every five gross nights booked in Q3 were for stays of 28 days or longer.
Nearly half of nights booked in Q3 were for stays of at least seven days, up from 44 percent in 2019.
In the 12 months through September, more than 100,000 guests booked stays of 90 days or longer.
More than 300,000 people applied for 12 openings to live anywhere on Airbnb for a year and are providing insights to help inform our product development and upgrades.`,
  `LinkedIn Chief Executive Jeff Weiner said Wednesday he will step down from his position at the business and professional-services online network on June 1 and become the company’s executive chairman.

Weiner, who has been with Sunnyvale-based LinkedIn since 2008, and its CEO since June 2009, said he was making the move because it was time to make the “next play” in his career. Weiner made his decision public in a post on LinkedIn.

“While I’ve been thinking about the timing of this transition for some time, over the last year or so, several factors converged that led me to conclude now is the right time to make this change,” Weiner said. “My passion for initiatives beyond my day-to-day role as CEO has continued to grow.”`,
  `Kiran Mazumdar-Shaw is one of the richest women in India. She is the founder of Biocon, a biotech company and Asia's largest insulin maker.
But the chairman and managing director attributes her success to her go-getting nature rather than entrepreneurial spirit.
Ms Mazumdar-Shaw originally trained to become a brewer in Australia, before returning to India to follow in her father's footsteps as a brew-master.
But she struggled to find a job on her return and recalls the industry wasn't ready for a strong female presence. "The brewing industry is a very, very male dominated industry" she says. "It's a male bastion."`
]


const fakeMessage = [
  "You: Hey, just checking in! How's everything going?",
  "Got any plans for the weekend?",
  "You: Just saw something that reminded me of you!",
  "Wishing you a fantastic day ahead!",
  "Missing your company lately!",
  "Have you tried that new restaurant in town?",
  "You: Hope you're staying safe and healthy!",
  "Thinking of you!",
  "Sending good vibes your way!",
  "Let's catch up soon!",
  "Remember that time we...",
  "Hope your day is as awesome as you are!",
  "Can't wait to hang out again!",
  "You always know how to make me smile!",
  "Sending virtual hugs!",
  "Any exciting news on your end?",
  "Hope your week is off to a great start!",
  "Just wanted to say hi!",
  "You're on my mind!",
  "Keep shining bright!",
];

const otherPersonalPost = document.getElementById("otherPersonalPost");

otherPostList = "";

for (let i = 0; i < socialMidiaProfieImg.length; i++) {
  otherPostList += `                  <div class="profile shadow py-2 px-3 mt-2 w-100 rounded-5">
  <div
    class="d-flex justify-content-between align-items-center mb-3"
  >
    <div class="d-flex align-items-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        class="rounded-circle me-3"
        height="55"
        alt="Black and White Portrait of a Man"
        loading="lazy"
      />
      <div class="userName">
        <div class="text-dark"><b>Moe Yan Htun</b></div>
        <div class=""><small>${timeIntervals[i]}</small></div>
      </div>
    </div>
    <div class="">
      <i class="fs-4 fa-solid fa-ellipsis"></i>
    </div>
  </div>
  <div class="card w-100 personalPost">
    <img
      src="${socialMediaPostImage[i]}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <div class="card-title d-flex">
        <img
          src="${socialMidiaProfieImg[i]}"
          class="rounded-circle me-3"
          height="55"
          width="55"
          style="object-fit: cover;"
          alt="Black and White Portrait of a Man"
          loading="lazy"
        />
        <div class="userName">
          <div class="text-dark"><b>${socialMidiaProfile[i]}</b><i class="text-primary ms-2 fa-solid fa-user-check"></i></div>
          <div class=""><small>${timeIntervals[i]}</small></div>
        </div>
      </div>
      <p class="card-text text-dark">
${soicalMediaPostBody[i]}
      </p>
    </div>
  </div>

  <div class="d-flex justify-content-between mt-2">
    <div class="d-flex p-2 text-dark">
      <i class="fs-4 fa-solid fa-heart me-3"></i>
      <div id="_reactionCount">10</div>
    </div>
    <div class="d-flex p-2 text-dark">
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
</div>`;
}
otherPersonalPost.innerHTML = otherPostList;

const imageUrl1 = [
  "https://mdbcdn.b-cdn.net/img/new/avatars/20.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/19.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/18.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/17.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/16.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/15.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/14.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/13.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/12.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/11.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/10.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/9.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/7.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/4.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
];
const usernameList1 = [
  "@victori",
  "@lilystorm",
  "@phoenixf",
  "@drakenight",
  "@violets",
  "@dukeshadow",
  "@sashasun",
  "@axelfrost",
  "@zaramoon",
  "@rexfire",
  "@lunanight",
  "@maxsteel",
  "@evadark",
  "@aceswift",
  "@novastar",
  "@blazeshadow",
  "@xerothunder",
  "@janesmith",
  "@johndoe",
  "@moeyan",
];

const friendRequestNameList = [
  "Victor Ironsoul",
  "Lily Stormborn",
  "Phoenix Flame",
  "Drake Nightfall",
  "Violet Skywatcher",
  "Duke Shadow",
  "Sasha Sunstrike",
  "Axel Frostwing",
  "Zara Moonlight",
  "Rex Firestorm",
  "Luna Nightshade",
  "Max Steelheart",
  "Eva Darkstorm",
  "Ace Swiftblade",
  "Nova Starfury",
  "Blaze Shadow",
  "Xero Thunder",
  "Jane Smith",
  "John Doe",
  "justin",
];
const friendRequestList = document.getElementById("personalFriend");

let requestFriendList = "";

for (let i = 0; i < imageUrl1.length; i++) {
  requestFriendList += `<div class="messageChatProfile justify-content-between mb-3" >
<div class="d-flex">
  <img
    src="${imageUrl1[i]}"
    class="rounded-circle me-3"
    height="40"
    alt="Black and White Portrait of a Man"
    loading="lazy"
  />
  <div class="messageChat">
    <div class="text-dark"><b>${friendRequestNameList[i]}</b></div>
    <div class="">${usernameList1[i]}</div>
  </div>
</div>
  <div class="d-flex">
    <button class="btn btnPrimary"><i class="fa-solid fa-check"></i></button>
    <button class="btn btn-danger ms-2"><i class="fa-solid fa-xmark"></i></button>
  </div>
</div> `;
}

friendRequestList.innerHTML = requestFriendList;

const messageList = document.getElementById("_messageChatProfile");

let messageRequestList = "";

for (let i = 0; i < 9; i++) {
  messageRequestList += `<div class="messageChatProfile justify-content-between mb-3" >
<div class="d-flex">
  <img
    src="${imageUrl4[i]}"
    class="rounded-circle me-3 profileImage"
    width="40"
    height="40"
    alt="Black and White Portrait of a Man"
    loading="lazy"
  />
  <div class="messageChat">
    <div class="text-dark"><b>${nameList1[i]}</b></div>
    <div class="fw-bolder text-primg text-primary">${fakeMessage[i]}</div>
  </div>
</div>
</div> `;
}

messageList.innerHTML = messageRequestList

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