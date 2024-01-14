const messages = [
    {
        avatar: "images/avatar-mark-webber.webp",
        author: "Mark Webber",
        reaction: "reacted to your recent post",
        post: "My first tournament today!",
        timestamp: "1m ago",
        unread: true
    },
    {
        avatar: "images/avatar-angela-gray.webp",
        author: "Angela Gray",
        reaction: "followed you",
        timestamp: "5m ago",
        unread: true
    },
    {
        avatar: "images/avatar-jacob-thompson.webp",
        author: "Jacob Thompson",
        reaction: "has joined your group",
        post: "Chess Club",
        timestamp: "1 day ago",
        unread: true
    },
    {
        avatar: "images/avatar-rizky-hasanuddin.webp",
        author: "Rizky Hasanuddin",
        reaction: "sent you a private message",
        privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        timestamp: "5 days ago",
        unread: false
    },
    {
        avatar: "images/avatar-kimberly-smith.webp",
        author: "Kimberly Smith",
        reaction: "commented on your picture",
        reactedImage: "images/image-chess.webp",
        timestamp: "1m ago",
        unread: false
    },
    {
        avatar: "images/avatar-nathan-peterson.webp",
        author: "Nathan Peterson",
        reaction: "reacted to your recent post",
        post: "5 end-game strategies to increase your win rate",
        timestamp: "2 weeks ago",
        unread: false
    },
    {
        avatar: "images/avatar-anna-kim.webp",
        author: "Anna Kim",
        reaction: "left the group",
        post: "Chess Club",
        timestamp: "2 weeks ago",
        unread: false
    },
]

const messageList = document.getElementById("message-list");
const unreadMessageCount = document.getElementById("unread-message-count");
const markAllButton = document.getElementById("mark-all-btn");
markAllButton.addEventListener("click", markAllAsRead);

function renderMessages() {
    messageList.innerHTML = "";
    messages.forEach((message, index) => {
        messageList.innerHTML += `
        <li class="message__list-item ${message.unread ? "unread" : ""}">
            <img class="message__avatar" src="${message.avatar}" alt="mark-webber-profile-image">
            <div>
                <div>
                    <p class="message__text-wrapper">
                        <span onclick="markAsRead(${index})" class="message__author">${message.author}</span>
                        <span class="message__reaction">${message.reaction}</span>
                        <span onclick="markAsRead(${index})" class="message__notification">${message.post === undefined ? "" : message.post}</span>
                        ${message.unread === true ? '<span class="message__unread-dot"></span>' : ""}
                    </p>
                    <p class="message__timestamp">1m ago</p>
                </div>
                ${message.privateMessage ? `<p class="message__private">${message.privateMessage}</p>` : ""}
            </div>
            ${message.reactedImage ? `<img class="message__image" src="${message.reactedImage}" alt="chess-image">` : ""}
        </li>
        `;
    });
}

function markAsRead(index) {
    messages[index].unread = false;
    renderMessages();
    updateUnreadMessageCount();
}

function markAllAsRead() {
    messages.forEach((message) => {
        message.unread = false;
    });
    renderMessages();
    updateUnreadMessageCount();
}

function updateUnreadMessageCount() {
    const unreadMessages = messages.filter(message => message.unread === true);
    const unreadMessagesCount = unreadMessages.length;
    unreadMessageCount.innerText = unreadMessagesCount;
}

renderMessages();
updateUnreadMessageCount();