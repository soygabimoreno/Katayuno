package soy.gabimoreno.katayuno

import org.junit.Before
import org.junit.Test

import org.junit.Assert.*

class FooTest {

    private lateinit var foo: Foo

    @Before
    fun setUp() {
        foo = Foo()
    }

    @Test
    fun foo() {
        val res = foo.foo()

        assertEquals("foo", res)
    }
}
