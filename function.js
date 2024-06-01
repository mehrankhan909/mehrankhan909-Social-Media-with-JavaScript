let crossLeft = document.querySelectorAll(".cross-friend");
const likeButton = document.querySelectorAll("button");
const postItem = document.getElementById("post-post");
crossLeft.forEach((cross) => {
    cross.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });
});
let add = "";
function incrementLike(button) {
    if(add == "like"){
        button.style.backgroundColor = "";
        button.style.color = "";
        add="dislike";
        let photo = button.parentNode.parentNode;
        let likeCountElement = photo.querySelector('.jama');
        let likeCount = parseInt(likeCountElement.innerHTML) - 1;
        likeCountElement.innerHTML = likeCount;
        button.classList.remove("hover1");
        button.addEventListener("mouseout",()=>{
            button.classList.add("hover1");
        })
    }
    else{
        button.style.backgroundColor = "rgb(31, 94, 158)";
        button.style.color = "white";
        add="like";
        let photo = button.parentNode.parentNode;
        let likeCountElement = photo.querySelector('.jama');
        let likeCount = parseInt(likeCountElement.innerHTML) + 1;
        likeCountElement.innerHTML = likeCount;
    }
  }

postItem.addEventListener("click",()=>{
    let writing = document.querySelector(".whatmind");
    let time = new Date();
    let hours = time.getSeconds();
    let image = document.querySelector("#fileUpload");
        let file = image.files[0];
        let photo = URL.createObjectURL(file)
    let postit = `
    <div class="whole-user-info">
                    <div class="post-name">
                        <img src="/images/1.jpg" alt="" class="personme1">
                        <div>
                        <p class="persone-name">Rafaella Menas</p>
                        <p style="font-size: 11px; margin-top: 2px;">${hours}m <i class="fa fa-instagram"></i></p>
                    </div>
                    </div>
                    <p class="post-text">${writing.value}</p>
                    </div>
                    <img src="${photo}" alt="" class="user-post-image">
                    <div>
                    <div class="like-counts">
                        <img src="/images/likebutton.png" alt="" width="40" style="filter: saturate(200%);"><p><span class="jama">0</span> likes</p></div>
                        <div class="likes-comment-share">
                            <button class="hover1 hover" id="likes" onclick="incrementLike(this)"><img src="/images/like.png" width="30" alt="" class="lcs1">Like</button>
                            <button class="hover1 hover comments" onclick="comments(this)"><img src="/images/comment.png" width="30" class="lcs2" alt="">Comment</button>
                            <button class="hover1 hover" onclick="sharepost(this)"><img src="/images/share.png" width="30" class="lcs3" alt="">Share</button>
                        </div>
                        </div>
                        <div class="comment-section hidden">
                        <div class="borderpadding">
                            <h3 style="margin-bottom: 10px; font-style: italic; font-weight: lighter;color: rgb(156, 155, 154);">Comments...</h3>
                            <div class="comment-box"> 
                                <img src="/images/11.jpg" width="30" style="width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;" alt="">
                           <h4 style="color: black;">Mehran Khan</h4>
                            </div>
                            <input type="text" class="commnt-section" placeholder="Comment your thoughts...">
                            <div class="allComments">
                                
                            </div>
                            </div>
                </div>`
    let postona = document.querySelector(".postona");
    console.log(postona);
    let div = document.createElement("div");
    div.classList.add("posts-feedline");
    div.innerHTML = postit;
    let divIs = div;
    add = "dislike";
    postona.prepend(div);
    writing.value = "";
    let commentSections = divIs.querySelector(".commnt-section");
    commentSections.addEventListener('keypress',(event)=>{
        if(event.key == "Enter"){
                let comments = commentSections.value;

            let divs = document.createElement("div");
            divs.classList.add("comment1");
            let allCommentsRoute = commentSections.parentNode;
            let allComments = allCommentsRoute.querySelector(".allComments");
            divs.innerHTML = `<div class="comment-boxes" style="display: flex; align-items: center; margin-top: 10px;"> 
            <img src="/images/11.jpg" width="30" style="width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;" alt="">
       <h4 style="color: black; display: block;">Mehran Khan</h4>
        </div>
        <p class="last-comments">${comments}</p>`
            allComments.prepend(divs);
            commentSections.value = "";
            }
})
  })

function addFriend(button){
    let following = document.querySelector(".following-count");
    let addingCount = parseInt(following.innerHTML)+1;
    following.innerHTML = addingCount;
    let buttonParent = button.parentNode;
    buttonParent.style.marginTop = "5px";
    buttonParent.style.backgroundColor = "silver";
    buttonParent.style.padding = "5px 10px";
    buttonParent.style.borderRadius = "3px";
    buttonParent.innerHTML = "You are friends";
    let parent = buttonParent.parentNode.parentNode;
    setInterval(()=>{
        parent.remove();
    },2000)
    
}

function delFriend(button){
    let following = document.querySelector(".following-count");
    let addingCount = parseInt(following.innerHTML)-1;
    following.innerHTML = addingCount;
    let buttonParent = button.parentNode;
    buttonParent.style.marginTop = "5px";
    buttonParent.style.backgroundColor = "silver";
    buttonParent.style.padding = "5px 10px";
    buttonParent.style.borderRadius = "3px";
    buttonParent.innerHTML = "Not longer Friends";
    let parent = buttonParent.parentNode.parentNode;
    setInterval(()=>{
        parent.remove();
    },2000)
}

function sharepost(shareit){
    const title = window.document.title;
    console.log(title);
    const url = this.location.href;
    shareit.classList.remove("hover1");
    shareit.addEventListener("mouseout",()=>{
        shareit.classList.add("hover1");
        })
    if(navigator.share){
        navigator.share({
            title: `${title}`,
            url: `${url}`,
        }).then(()=>{
            console.log("Thanks")
        })
    } else{
        alert("Your browser does not support this feature")
    }
}
let commentColor = "";
function comments(comment){
        if(commentColor == "like"){
            comment.style.backgroundColor = "";
            comment.style.color = "";
            commentColor="dislike";
            comment.classList.remove("hover1");
            let show = comment.parentNode.parentNode.parentNode;
            let commentBox = show.querySelector(".comment-section");
            commentBox.classList.add("hidden");
            comment.addEventListener("mouseout",()=>{
            comment.classList.add("hover1");
            })
        }
        else{
            comment.style.backgroundColor = "#008080";
            comment.style.color = "white";
            commentColor="like";
            let show = comment.parentNode.parentNode.parentNode;
            let commentBox = show.querySelector(".comment-section");
            commentBox.classList.remove("hidden");
        }
}


const commentSection = document.querySelectorAll(".commnt-section");
commentSection.forEach((section)=>{
    let count = 0;
    section.addEventListener('keypress',(event)=>{
        if(event.key == "Enter"){
            count++;
            if(count<10){
                let comments = section.value;
            if(comments==""){
                alert("Please enter something!");
            }else{
            let divs = document.createElement("div");
            divs.classList.add("comment1");
            let allCommentsRoute = section.parentNode;
            let allComments = allCommentsRoute.querySelector(".allComments");
            divs.innerHTML = `<div class="comment-boxes" style="display: flex; align-items: center; margin-top: 10px;"> 
            <img src="/images/11.jpg" width="30" style="width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;" alt="">
       <h4 style="color: black; display: block;">Mehran Khan</h4>
        </div>
        <p class="last-comments">${comments}</p>`
            allComments.prepend(divs);
            section.value = "";
            }
            
        }else{
            alert("You can't comment more than 10 times!");
        }}
    })
})
