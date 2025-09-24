import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-xl font-extralight mb-8">Landing Page</h1>

            {/* Button Examples */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Button Sizes:</h2>
                <div className="flex gap-4 items-center mb-4">
                    <Button title="Small Button" size="small" />
                    <Button title="Medium Button" size="medium" />
                    <Button title="Large Button" size="large" />
                </div>

                <h2 className="text-lg font-semibold mb-4">Button Shapes:</h2>
                <div className="flex gap-4 items-center">
                    <Button title="Rounded Small" shape="rounded-sm" />
                    <Button title="Rounded Medium" shape="rounded-md" />
                    <Button title="Rounded Full" shape="rounded-full" />
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Landing;