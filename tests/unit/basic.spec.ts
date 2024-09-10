import {shallowMount} from '@vue/test-utils';
import {expect} from 'chai'
import App from '@/App.vue';

describe('App.vue',()=>{
    it('renders the homepage',()=>{
        const wrapper =shallowMount(App);
        expect(wrapper.exists()).to.be.true;

    });

    it('has a navbar component',()=>{
        const wrapper=shallowMount(App);
        expect(wrapper.find('Navbar').exists().to.be.true);

    });
    it('has a homepage',()=>{
        const wrapper=shallowMount(App);
        expect(wrapper.find('HomePage').exists.to.be.true);
    })
})

