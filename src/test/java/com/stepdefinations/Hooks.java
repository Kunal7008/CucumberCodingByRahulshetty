package com.stepdefinations;

import Cucumber.Automation.Base;
import cucumber.api.java.After;


public class Hooks extends Base {
    @After("@SmokeTest")
    public void afterValidation(){
        driver.close();
    }
    @After("@SanityTest")
    public void afterValidation1(){
        driver.close();
    }
}

