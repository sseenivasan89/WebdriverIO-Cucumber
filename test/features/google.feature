Feature: Google Search

    @google
    Scenario Outline: Doing Google Search
        Given I open Google
        Then I see "Google" in the title
        And I Search <keyword>

         Examples:
        |keyword| 
        |"saravanan seenivasan"| 
