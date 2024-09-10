import {expect} from 'chai'
import {config} from '@vue/test-utils'
import * as chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import {createApp} from 'vue'

config.global.mocks={
    $t:(msg) =>msg,
};



chai.use(chaiAsPromised)

globalThis.app=createApp({

})