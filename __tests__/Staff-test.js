const { Manager, NonManager } = require ('../lib/Staff');

test( 'Creates a Manager object', () => {
    const manager = new Manager();

    expect( manager.name ).toBe( '' );
    expect( manager.employeeID ).toBe( '' );
    expect( manager.email ).toBe( '' );
    expect( manager.role ).toBe( 'Manager' );
    expect( manager.officeNumber ).toBe( '' );
});
 
test( 'Creates a NonManager object', () => {
    const nonmanager = new NonManager();

    expect( nonmanager.name ).toBe( '' );
    expect( nonmanager.employeeID ).toBe( '' );
    expect( nonmanager.email ).toBe( '' );
    expect( nonmanager.role ).toBe( '' );
});
 

