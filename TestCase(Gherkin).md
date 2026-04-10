Feature: TMDB Test Cases

    Scenario: TMDB-Langguage-001 As User. Change Langguage Settings From Indonesia to English
        Given In Home Page Default Langguage Indonesia Already Login
        When Click Langguage Button
        And Click Default Langguage Dropdown
        And Filter English
        And Click Reload Page Button
        Then Default Langguage Should Change to English.
        And User Doesn’t Get Logged out
        And Favorite Data Still Intact
        
    Scenario: TMDB-Langguage-002 As User. Change Langguage Settings From English to Indonesia
        Given In Home Page Default Langguage English Already Login
        Given Click Langguage Button
        And Click Default Langguage Dropdown
        And Filter Indonesia
        And Click Reload Page Button
        Then Default Langguage Should Change to Indonesia.
        And User Doesn’t Get Logged out
        And Favorite Data Still Intact

    Scenario: TMDB-Favorite-001 Tag favorite without login
        Given the user is on the movie page and is not logged in
        When the user clicks the options button on a movie
        Then a notification should appear indicating login is required

    Scenario: TMDB-Favorite-002 As User. Tag Favorite a Movie From Movie List
        Given In Movie Listing Page
        Given Click Favorite Button From Movie Listing
        Then Movie Should be Added to Favorite

    Scenario: TMDB-Favorite-003 As User. Tag Favorite a Movie From Movie Detail Page
        Given In Movie Detail Page
        When Click Favorite Button on Movie Detail Page
        Then Movie Should be Added to Favorite List

     Scenario: TMDB-FavoriteList-001 As User. Able to View Favorite List
        Given In Profile Page
        When Navigate to Favorite List
        Then Favorite Movies Should be Displayed

    Scenario: TMDB-FavoriteList-002 As User. Able to Sort Favorite List by Popularity
        Given In Favorite Movie List
        When Select Sort by Popularity
        Then List Should be Sorted by Popularity

    Scenario: TMDB-FavoriteList-003 As User. Able to Sort Favorite List by Release Date
        Given In Favorite Movie List
        When Select Sort by Release Date
        Then List Should be Sorted by Release Date

    Scenario: TMDB-RemoveFavorite-001 As User. Able to Remove Favorite From Favorite List Page
        Given In Favorite Movie List
        When Click Remove Favorite Button
        Then Movie Should be Removed from Favorite

    Scenario: TMDB-RemoveFavorite-002 As User. Able to Remove Favorite From Movie List Page
        Given In Movie Listing Page
        When Click Remove Favorite Button From Movie List Page
        Then Movie Should be Removed from Favorite

    Scenario: TMDB-RemoveFavorite-003 As User. Able to Remove Favorite From Movie Detail Page
        Given In Movie Detail Page Mario
        When Click Remove Favorite Button From Movie Detail Page
        Then Movie Should be Removed from Favorite List



