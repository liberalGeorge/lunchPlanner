/**
 * Created by georginaHughes on 13/09/2014.
 */
beforeEach(function() {
    browser.get('http://lunchplanner.com');
});
describe('state provider configuration:', function(){
    describe('clicking register user', function(){
        it('should render the register user area', function(){
            //click register
            element(by.css('.mainNavigation__item-registerUser')).click().then(function() {
                //see if registration area exists
                //ui-router is injecting a class onto my element, therefore my class
                //alone produces a fail, even though the expected element is present
                expect(element(by.css('.registerUser.ng-scope')).isPresent()).toBe(true);
            });
        });
        it('should remove the pre-existing area', function(){
            //click register
            element(by.css('.mainNavigation__item-registerUser')).click();

            //check if initial area has been removed
            expect(element(by.css('welcome')).isPresent()).toBe(false);
        });
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-registerUser')).click().then(function(){
                expect(browser.getTitle()).toBe('Register User - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-registerUser')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/registerUser');
            });
        });
    });
    describe('clicking register team', function(){
        it('should render the register team area', function(){
            element(by.css('.mainNavigation__item-registerTeam')).click().then(function(){
                expect(element(by.css('.registerTeam.ng-scope')).isPresent()).toBe(true);
            });
        });
        it('should remove the pre-existing area', function(){
            element(by.css('.mainNavigation__item-registerTeam')).click().then(function(){
                expect(element(by.css('.welcome')).isPresent()).toBe(false);
            });
        });
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-registerTeam')).click().then(function(){
                expect(browser.getTitle()).toBe('Register Team - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-registerTeam')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/registerTeam');
            });
        });
    });
    describe('clicking join team', function(){
        it('should render the join team area', function(){
            element(by.css('.mainNavigation__item-joinTeam')).click().then(function(){
                expect(element(by.css('.joinTeam.ng-scope')).isPresent()).toBe(true);
            });
        });
        it('should remove the pre-existing area', function(){
            element(by.css('.mainNavigation__item-joinTeam')).click().then(function(){
                expect(element(by.css('.welcome')).isPresent()).toBe(false);
            });
        });
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-joinTeam')).click().then(function(){
                expect(browser.getTitle()).toBe('Join Team - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-joinTeam')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/joinTeam');
            });
        });
    });
    describe('clicking plan meal', function(){
        it('should render the plan area', function(){
            //click plan
            element(by.css('.mainNavigation__item-planMeal')).click().then(function(){
                //see if plan area exists
                expect(element(by.css('.planMeal.ng-scope')).isPresent()).toBe(true);
            });
        });
        it('should remove the pre-existing area', function(){
            //click register
            element(by.css('.mainNavigation__item-planMeal')).click();

            //check if initial area has been removed
            expect(element(by.css('welcome')).isPresent()).toBe(false);
        });
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-planMeal')).click().then(function(){
                expect(browser.getTitle()).toBe('Plan Meal - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-planMeal')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/planMeal');
            });
        });
    });
    describe('clicking join meal', function(){
        it('should render the join area', function(){
            //click join
            element(by.css('.mainNavigation__item-joinMeal')).click().then(function(){
                //see if join area exists
                expect(element(by.css('.joinMeal.ng-scope')).isPresent()).toBe(true);
            });
        });
        it('should remove the pre-existing area', function(){
            //click register
            element(by.css('.mainNavigation__item-joinMeal')).click();

            //check if initial area has been removed
            expect(element(by.css('welcome')).isPresent()).toBe(false);
        });
        it('should have the correct page title', function(){
            element(by.css('.mainNavigation__item-joinMeal')).click().then(function(){
                expect(browser.getTitle()).toBe('Join Meal - Lunch Planner for Teams that Lunch');
            });
        });
        it('should have the correct url', function(){
            element(by.css('.mainNavigation__item-joinMeal')).click().then(function(){
                expect(browser.getCurrentUrl()).toBe('http://lunchplanner.com/#/joinMeal');
            });
        });
    });
});