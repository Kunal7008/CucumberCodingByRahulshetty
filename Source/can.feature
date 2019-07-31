Feature: Search and place order
  @SmokeTest
  Scenario: search the items and validate the results
    Given User is on greenkart landing page
    When User searched for Cucumber vegetable
    Then "Cucumber"  result are displayed

    @SanityTest
  Scenario Outline: Search the items and proceed to checkout page
    Given User is on greenkart landing page
    When User searched for <Name> vegetable
      And Added to the cart
      And User proceed to checkout page for purchase
    Then Verify selected <Name> items are displayed in Checkout page

      Examples:
      |Name|
      |Brinjal|
      |Beetroot|


