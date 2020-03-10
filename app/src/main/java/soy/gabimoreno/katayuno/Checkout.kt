package soy.gabimoreno.katayuno

class Checkout(
    private val numberOfEqualBooks: Int = 0,
    private val numberOfDifferentBooks: Int
) {

    companion object {
        private const val BOOK_PRICE = 8
    }

    private var discount = 0F

    fun get(): String {
        discount = when (numberOfDifferentBooks) {
            1 -> 0F
            2 -> 0.05F
            3 -> 0.10F
            4 -> 0.20F
            5 -> 0.25F
            else -> 0F
        }

        val cash = BOOK_PRICE * numberOfEqualBooks +
                BOOK_PRICE * numberOfDifferentBooks * (1 - discount)

        val formattedCash = cash.format()

        return "$formattedCash €"
    }
}

private fun Float.format() = "%.2f".format(this)
