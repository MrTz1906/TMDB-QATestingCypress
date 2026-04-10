# Feature: TMDB Test Cases

  Scenario: TMDB-Langguage-001 As User. Change Langguage Settings From Indonesia to English  
  //In Home Page Default Langguage Indonesia (Already Login)  
  Given Click Langguage Button  
  And Click Default Langguage Dropdown  
  And Filter English  
  And Click Reload Page Button  
  Then Default Langguage Should Change to English.  
  And User Doesn’t Get Logged out  
  And Favorite Data Still Intact  

  Scenario: TMDB-Langguage-002 As User. Change Langguage Settings From English to Indonesia  
  //In Home Page Default Langguage English (Already Login)  
  Given Click Langguage Button  
  And Click Default Langguage Dropdown  
  And Filter Indonesia  
  And Click Reload Page Button  
  Then Default Langguage Should Change to Indonesia.  
  And User Doesn’t Get Logged out  
  And Favorite Data Still Intact  

  Scenario: TMDB-Langguage-003 Force Stop Reload Page Manually Before Langguage Change  
  //In Home Page  
  Given Click Langguage Button  
  And Click Default Langguage Dropdown  
  And Select Another Language  
  And Force Stop Reload  
  Then Language Should Not Change Completely  

  Scenario: TMDB-Favorite-001 Tag Favorite a Movie without Login  
  //In Movie Page (Not Logined)  
  Given Click Favorite Button  
  Then System Should Redirect to Login Page  

  Scenario: TMDB-Favorite-002 As User. Tag Favorite a Movie From Movie List  
  //In Movie Listing Page (Login)  
  Given Click Favorite Button  
  Then Movie Should be Added to Favorite  

  Scenario: TMDB-Favorite-002 As User. Tag Favorite a Movie From Movie Detail Page  
  //In Movie Detail Page (Login)  
  Given Click Favorite Button  
  Then Movie Should be Added to Favorite  

  Scenario: TMDB-Favorite-003 Rapid Click Favorite Button  
  //In Movie Detail Page (Login)  
  Given Rapid Click Favorite Button  
  Then System Should Handle Without Error  

  Scenario: TMDB-FavoriteList-001 As User. Able to View Favorite List  
  //In Profile Page  
  Given Navigate to Favorite List  
  Then Favorite Movies Should be Displayed  

  Scenario: TMDB-FavoriteList-002 As User. Able to Sort Favorite List by Popularity  
  //In Favorite Movie List  
  Given Select Sort by Popularity  
  Then List Should be Sorted by Popularity  

  Scenario: TMDB-FavoriteList-003 As User. Able to Sort Favorite List by Release Date  
  //In Favorite Movie List  
  Given Select Sort by Release Date  
  Then List Should be Sorted by Release Date  

  Scenario: TMDB-RemoveFavorite-001 As User. Able to Remove Favorite From Favorite List Page  
  //In Favorite Movie List  
  Given Click Remove Favorite Button  
  Then Movie Should be Removed from Favorite  

  Scenario: TMDB-RemoveFavorite-002 As User. Able to Remove Favorite From Movie List Page  
  //In Movie List Page  
  Given Click Remove Favorite Button  
  Then Movie Should be Removed from Favorite  

  Scenario: TMDB-RemoveFavorite-003 As User. Able to Remove Favorite From Movie Detail Page  
  //In Movie Detail Page  
  Given Click Remove Favorite Button  
  Then Movie Should be Removed from Favorite  
