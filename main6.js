//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті


fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response => response.json())
    .then(value => {

        let postsBox = document.getElementsByClassName('posts_box')[0];
        for (const post of value) {

            let pUserPost = document.createElement('p');
            pUserPost.innerText = `${post.id} - ${post.title}`;
            postsBox.append(pUserPost);
        }
    });

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then(value => {

        let commentsBox = document.getElementsByClassName('comments_box')[0];
        for (const comment of value) {

            let pComment = document.createElement('p');
            pComment.innerText = `${comment.postId} - ${comment.id} - ${comment.name} - ${comment.email} - ${comment.body} `
            commentsBox.append(pComment)

        }

    })