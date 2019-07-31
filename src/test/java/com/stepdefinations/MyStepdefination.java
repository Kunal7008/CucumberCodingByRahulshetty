package com.stepdefinations;

import Cucumber.Automation.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;


public class MyStepdefination {
    WebDriver driver;

        @Given("^User is on greenkart landing page$")
        public void user_is_on_greenkart_landing_page() throws IOException {
        driver= Base.getDriver();

        }

        @When("^User searched for (.+) vegetable$")
        public void user_searched_for_something_vegetable(String strArg1) {
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.MICROSECONDS);
driver.findElement(By.xpath("//input[@type='search']")).sendKeys(strArg1);
        }

        @Then("^\"([^\"]*)\"  result are displayed$")
        public void something_result_are_displayed(String strArg1) {
driver.findElement(By.cssSelector("h4.product-name")).getText().contains(strArg1);
        }


    @Then("^Verify selected (.+) items are displayed in Checkout page$")
    public void verify_selected_items_are_displayed_in_checkout_page(String name) throws Throwable {
        driver.findElement(By.cssSelector("p.product-name")).getText().contains(name);
    }

    @And("^Added to the cart$")
    public void added_to_the_cart() throws Throwable {
        driver.findElement(By.cssSelector("a.increment")).click();
        driver.findElement(By.xpath("//button[contains(text(),'ADD TO CART')]")).click();
    }

    @And("^User proceed to checkout page for purchase$")
    public void user_proceed_to_checkout_page_for_purchase() throws Throwable {
driver.findElement(By.xpath("//a[@class='cart-icon']//img[contains(@class,'')]")).click();
driver.findElement(By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();
    }
    }

