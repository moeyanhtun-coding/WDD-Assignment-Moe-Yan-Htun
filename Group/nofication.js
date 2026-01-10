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