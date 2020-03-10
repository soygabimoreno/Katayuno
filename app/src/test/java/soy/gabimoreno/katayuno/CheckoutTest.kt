package soy.gabimoreno.katayuno

import org.junit.Assert.assertEquals
import org.junit.Test

class CheckoutTest {

    @Test
    fun `1 book gets 0% discount`() {
        val checkout = Checkout(numberOfDifferentBooks = 1)

        val res = checkout.get()

        assertEquals("8.00 €", res)
    }

    @Test

    fun `2 different books gets 5% discount`() {
        val checkout = Checkout(numberOfDifferentBooks = 2)

        val res = checkout.get()

        assertEquals("15.20 €", res)
    }

    @Test

    fun `3 different books gets 10% discount`() {
        val checkout = Checkout(numberOfDifferentBooks = 3)

        val res = checkout.get()

        assertEquals("21.60 €", res)
    }

    @Test

    fun `4 different books gets 20% discount`() {
        val checkout = Checkout(numberOfDifferentBooks = 4)

        val res = checkout.get()

        assertEquals("25.60 €", res)
    }

    @Test

    fun `5 different books gets 25% discount`() {
        val checkout = Checkout(numberOfDifferentBooks = 5)

        val res = checkout.get()

        assertEquals("30.00 €", res)
    }

    @Test
    fun `2 equal books applies 0% discount and 1 different book applies 0% discount`() {
        val checkout = Checkout(
            numberOfEqualBooks = 2,
            numberOfDifferentBooks = 1
        )

        val res = checkout.get()

        assertEquals("24.00 €", res)
    }


    @Test
    fun `2 equal books applies 0% discount and 2 different book applies 10% discount`() {
        val checkout = Checkout(
            numberOfEqualBooks = 2,
            numberOfDifferentBooks = 2
        )

        val res = checkout.get()

        assertEquals("31.20 €", res)
    }

    @Test
    fun `3 equal books applies 0% discount and 2 different book applies 10% discount`() {
        val checkout = Checkout(
            numberOfEqualBooks = 3,
            numberOfDifferentBooks = 2
        )

        val res = checkout.get()

        assertEquals("39.20 €", res)
    }
}
