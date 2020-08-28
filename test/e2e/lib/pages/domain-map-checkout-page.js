/**
 * External dependencies
 */
import { By } from 'selenium-webdriver';

/**
 * Internal dependencies
 */
import AsyncBaseContainer from '../async-base-container.js';

export default class MapADomainCheckoutPage extends AsyncBaseContainer {
	constructor( driver ) {
		super( driver, By.css( '.checkout__payment-box-container,.composite-checkout' ) );
	}
}
