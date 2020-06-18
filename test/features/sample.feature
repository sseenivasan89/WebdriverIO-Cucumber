Feature: Search And Page Navigation
  @search
  Scenario: Search & Page Navigation
    Given I am launching webdriverio page
    When I search for keyword 
    Then I navigate to some pages
