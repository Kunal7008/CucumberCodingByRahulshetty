package Cucumber.Automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Base {

    public static WebDriver driver;
    public static Properties prop;
    public static WebDriver getDriver() throws IOException {

         prop = new Properties();
        FileInputStream fis= new FileInputStream("C:\\Users\\KUNAL BHATTA\\Cucumber_Coding\\src\\test\\java\\Cucumber\\Automation\\global.properties");
        prop.load(fis);
        System.setProperty("webdriver.chrome.driver","C:\\Users\\KUNAL BHATTA\\Desktop\\chromedriver.exe");
        driver= new ChromeDriver();
        driver.get(prop.getProperty("url"));
        return driver;
    }
}
