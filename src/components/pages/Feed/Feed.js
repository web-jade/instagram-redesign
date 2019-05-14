import React, { Component } from 'react';
import styles from './Feed.module.css';

import Container from "../../common/Container/Container";
import AccountInfo from "../../blocks/AccountInfo/AccountInfo";
import Trending from "../../blocks/Trending/Trending";
import Suggestions from "../../blocks/Suggestions/Suggestions";
import Footer from "../../blocks/Footer/Footer";
import PostItem from "../../blocks/PostItem/PostItem";

class Feed extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <aside className={styles.leftSidebar}>
          <AccountInfo
            username="Steve Jobs"
            login="@steve_jobs"
            avatarUrl="https://www.lragir.am/ru/wp-content/uploads/sites/3/2011/10/131787794832-1.jpg"
            backgroundUrl="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=100"
            postsCount={997}
            followersCount={353}
            followingCount={299}
            className={styles.module}
          />
          <Trending
            data={[
              { id: 0, tag: "#instagram", postsCount: 1008567 },
              { id: 1, tag: "#children", postsCount: 9146357 },
              { id: 2, tag: "#silhouette", postsCount: 534123 },
              { id: 3, tag: "#style", postsCount: 56423 },
              { id: 4, tag: "#deutschland", postsCount: 54312 },
              { id: 5, tag: "#yosemite", postsCount: 752123 },
              { id: 6, tag: "#paysage", postsCount: 644215 },
              { id: 7, tag: "#macromondays", postsCount: 855321 }
            ]}
          />
        </aside>
        <main className={styles.content}>
          <PostItem
            userName="Instagram"
            date={(new Date()).toString()}
            imageUrl="https://cdn12.img.sputnik.by/images/103459/51/1034595145.jpg"
            description="Three years ago, Paulo del Valle (@paulodelvalle) started the My Instagram Logo project, inspiring thousands of creators to remix our"
            likesCount={104}
            comments={[
              { id: 0, username: "janlosert", text: "Amazing!", href: "/" },
              { id: 1, username: "marcallcock", text: "Awesome! Congrats man!!", href: "/" },
              { id: 2, username: "firmansananda", text: "Cool mate. 👌", href: "/" },
              { id: 3, username: "muroadriano", text: "It's just too iOS for Android. And the other one was too iOS6-... Keep thinking", href: "/" },
              { id: 4, username: "jleet", text: "Wow, nice try at damage control. WE DON'T CARE! Give us the old logo back, and keep the black and white. It looks better black and white", href: "/" },
              { id: 5, username: "dwtsrikerI", text: "like the layout but the logo is terrible", href: "/" },
              { id: 6, username: "emma.elizabethh", text: "Please change it back", href: "/" }
            ]}
          />
          <PostItem
            userName="Instagram"
            date={(new Date()).toString()}
            imageUrl="https://cdn12.img.sputnik.by/images/103459/51/1034595145.jpg"
            description="Three years ago, Paulo del Valle (@paulodelvalle) started the My Instagram Logo project, inspiring thousands of creators to remix our"
            likesCount={104}
            comments={[
              { id: 0, username: "janlosert", text: "Amazing!", href: "/" },
              { id: 1, username: "marcallcock", text: "Awesome! Congrats man!!", href: "/" },
              { id: 2, username: "firmansananda", text: "Cool mate. 👌", href: "/" },
              { id: 3, username: "muroadriano", text: "It's just too iOS for Android. And the other one was too iOS6-... Keep thinking", href: "/" },
              { id: 4, username: "jleet", text: "Wow, nice try at damage control. WE DON'T CARE! Give us the old logo back, and keep the black and white. It looks better black and white", href: "/" },
              { id: 5, username: "dwtsrikerI", text: "like the layout but the logo is terrible", href: "/" },
              { id: 6, username: "emma.elizabethh", text: "Please change it back", href: "/" }
            ]}
          />
          <PostItem
            userName="Instagram"
            date={(new Date()).toString()}
            imageUrl="https://cdn12.img.sputnik.by/images/103459/51/1034595145.jpg"
            description="Three years ago, Paulo del Valle (@paulodelvalle) started the My Instagram Logo project, inspiring thousands of creators to remix our"
            likesCount={104}
            comments={[
              { id: 0, username: "janlosert", text: "Amazing!", href: "/" },
              { id: 1, username: "marcallcock", text: "Awesome! Congrats man!!", href: "/" },
              { id: 2, username: "firmansananda", text: "Cool mate. 👌", href: "/" },
              { id: 3, username: "muroadriano", text: "It's just too iOS for Android. And the other one was too iOS6-... Keep thinking", href: "/" },
              { id: 4, username: "jleet", text: "Wow, nice try at damage control. WE DON'T CARE! Give us the old logo back, and keep the black and white. It looks better black and white", href: "/" },
              { id: 5, username: "dwtsrikerI", text: "like the layout but the logo is terrible", href: "/" },
              { id: 6, username: "emma.elizabethh", text: "Please change it back", href: "/" }
            ]}
          />
        </main>
        <aside className={styles.rightSidebar}>
          <Suggestions
            data={[
              { id: 0, username: "Greg Dlubacz", tag: "gregdlubacz", avatarUrl: "https://www.lragir.am/ru/wp-content/uploads/sites/3/2011/10/131787794832-1.jpg" },
              { id: 1, username: "Tony Scott", tag: "tony22scott", avatarUrl: "https://www.lragir.am/ru/wp-content/uploads/sites/3/2011/10/131787794832-1.jpg" },
              { id: 2, username: "Zoe Keating", tag: "keating_007", avatarUrl: "https://www.lragir.am/ru/wp-content/uploads/sites/3/2011/10/131787794832-1.jpg" },
              { id: 3, username: "Chris Messina", tag: "chri_messina", avatarUrl: "https://www.lragir.am/ru/wp-content/uploads/sites/3/2011/10/131787794832-1.jpg" }
            ]}
            className={styles.module}
          />
          <Footer
            nav={[
              { id: 0, title: "About", href: "/" },
              { id: 1, title: "Support", href: "/" },
              { id: 2, title: "Blog", href: "/" },
              { id: 3, title: "Api", href: "/" },
              { id: 4, title: "Press", href: "/" },
              { id: 5, title: "Jobs", href: "/" },
              { id: 6, title: "Privacy", href: "/" },
              { id: 7, title: "Terms", href: "/" }
            ]}
          />
        </aside>
      </Container>
    );
  }
}

export default Feed;
