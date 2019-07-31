package com.get.code;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="Source",glue="com.stepdefinations",plugin = {"pretty","html:target/cucumber-reports"})
public class Test_01 {

}
