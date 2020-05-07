#insta-clone

# Routes:
# / (feed page)
Components:
- FeedPost
- FeedPostSkeleton
- FeedSideSuggestions
- FeedStories
- FeedGettingStarted	

## /explore (explore page) 
Components:
- ExploreSuggestions
- ExploreGrid


## /p/:postId (post page) 
Components: 
- Post
- PostModal
- MorePostFromUser
- PostSkeleton

##(notification ♥)
Components: 
- NotificationList
- NotificationTooltip

##/:username (profile page)
Components: 
- ProfilePage
- ProfileTabs


##/accounts/edit/ (edit profile page)

##/accounts/login(login page)

##/accounts/emailsignup/ (signup page)

##* (not found page)

##SharedComponents
- FollowSuggetions
- Navbar
- UserCard
- FollowButton
- LoadingScreen
- OptionsDialog
- ProfilePicture
- Layout
- SEO