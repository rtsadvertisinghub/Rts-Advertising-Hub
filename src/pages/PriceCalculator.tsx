import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Ruler, Palette, Layers, Hash, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceTypes = [
  { value: "signage", label: "Signage / Boards" },
  { value: "billboard", label: "Billboards" },
  { value: "print", label: "Print Media" },
];

const materials: Record<string, { label: string; pricePerSqFt: number }[]> = {
  signage: [
    { label: "Acrylic (Standard)", pricePerSqFt: 250 },
    { label: "Acrylic (Premium)", pricePerSqFt: 400 },
    { label: "Metal (Aluminum)", pricePerSqFt: 350 },
    { label: "Neon / LED Letters", pricePerSqFt: 600 },
    { label: "3D Letters (PVC)", pricePerSqFt: 300 },
  ],
  billboard: [
    { label: "Flex Banner", pricePerSqFt: 80 },
    { label: "Panaflex (Backlit)", pricePerSqFt: 120 },
    { label: "Vinyl (Premium)", pricePerSqFt: 180 },
  ],
  print: [
    { label: "Sticker (Vinyl)", pricePerSqFt: 60 },
    { label: "Canvas Print", pricePerSqFt: 200 },
    { label: "Banner (Standard)", pricePerSqFt: 50 },
    { label: "Banner (Heavy Duty)", pricePerSqFt: 90 },
  ],
};

const colorOptions = [
  { value: "single", label: "Single Color", multiplier: 1 },
  { value: "multi", label: "Multi Color", multiplier: 1.3 },
  { value: "full", label: "Full Color / Digital", multiplier: 1.6 },
];

const PriceCalculator = () => {
  const [service, setService] = useState("signage");
  const [material, setMaterial] = useState("Acrylic (Standard)");
  const [width, setWidth] = useState(24);
  const [height, setHeight] = useState(24);
  const [color, setColor] = useState("single");
  const [quantity, setQuantity] = useState(1);

  const selectedMaterial = useMemo(() => {
    if (!service || !material) return null;
    return materials[service]?.find((m) => m.label === material) || null;
  }, [service, material]);

  const selectedColor = useMemo(() => {
    return colorOptions.find((c) => c.value === color) || null;
  }, [color]);

  const estimate = useMemo(() => {
    if (!selectedMaterial || !selectedColor) return null;
    const sqFt = (width * height) / 144;
    const unitPrice = sqFt * selectedMaterial.pricePerSqFt * selectedColor.multiplier;
    const total = unitPrice * quantity;
    return { sqFt: sqFt.toFixed(2), unitPrice: Math.round(unitPrice), total: Math.round(total) };
  }, [selectedMaterial, selectedColor, width, height, quantity]);

  const resetForm = () => {
    setService("signage");
    setMaterial("Acrylic (Standard)");
    setWidth(24);
    setHeight(24);
    setColor("single");
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Price Calculator — Signage, Billboard & Print Media Rates | RTS Advertising Hub"
        description="Free online price calculator for signage boards, billboards aur print media. Pakistan mein advertising rates instantly check karein."
        canonical="https://www.rtsadvertisinghub.com/calculator"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "RTS Advertising Price Calculator",
          "description": "Instant price estimates for signage, billboard and print media advertising in Pakistan",
          "url": "https://www.rtsadvertisinghub.com/calculator",
          "applicationCategory": "BusinessApplication",
          "provider": {
            "@type": "LocalBusiness",
            "name": "RTS Advertising Hub",
            "address": { "@type": "PostalAddress", "addressLocality": "Rawalpindi", "addressCountry": "PK" }
          }
        }}
      />
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
              Estimate
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Price <span className="text-gradient-primary">Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Slide to adjust — price updates instantly
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
            {/* Controls - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border space-y-7"
            >
              {/* Service Type */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-semibold">
                  <Layers className="w-4 h-4 text-primary" /> Service Type
                </Label>
                <Select value={service} onValueChange={(v) => { setService(v); setMaterial(materials[v][0].label); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Material */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-semibold">
                  <Layers className="w-4 h-4 text-primary" /> Material / Quality
                </Label>
                <Select value={material} onValueChange={setMaterial}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {materials[service]?.map((m) => (
                      <SelectItem key={m.label} value={m.label}>{m.label} — PKR {m.pricePerSqFt}/sq ft</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Width Slider */}
              <div className="space-y-3">
                <Label className="flex items-center justify-between text-sm font-semibold">
                  <span className="flex items-center gap-2"><Ruler className="w-4 h-4 text-primary" /> Width</span>
                  <span className="text-primary font-bold text-base">{width}"</span>
                </Label>
                <Slider value={[width]} onValueChange={(v) => setWidth(v[0])} min={6} max={240} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>6"</span><span>240"</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-3">
                <Label className="flex items-center justify-between text-sm font-semibold">
                  <span className="flex items-center gap-2"><Ruler className="w-4 h-4 text-primary" /> Height</span>
                  <span className="text-primary font-bold text-base">{height}"</span>
                </Label>
                <Slider value={[height]} onValueChange={(v) => setHeight(v[0])} min={6} max={240} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>6"</span><span>240"</span>
                </div>
              </div>

              {/* Color Type */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-semibold">
                  <Palette className="w-4 h-4 text-primary" /> Color Type
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {colorOptions.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setColor(c.value)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        color === c.value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="space-y-3">
                <Label className="flex items-center justify-between text-sm font-semibold">
                  <span className="flex items-center gap-2"><Hash className="w-4 h-4 text-primary" /> Quantity</span>
                  <span className="text-primary font-bold text-base">{quantity}</span>
                </Label>
                <Slider value={[quantity]} onValueChange={(v) => setQuantity(v[0])} min={1} max={100} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span><span>100</span>
                </div>
              </div>
            </motion.div>

            {/* Live Price - Right Side (Sticky) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2"
            >
              <div className="md:sticky md:top-28 space-y-6">
                <div className="bg-card rounded-2xl shadow-lg p-6 border border-border">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-6 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" /> Live Estimate
                  </h3>

                  {estimate && (
                    <div className="space-y-5">
                      {/* Total Price - Hero */}
                      <div className="text-center p-5 bg-primary/5 rounded-xl border border-primary/20">
                        <p className="text-sm text-muted-foreground mb-1">Total Price</p>
                        <p className="text-3xl md:text-4xl font-bold text-primary font-heading">
                          PKR {estimate.total.toLocaleString()}
                        </p>
                      </div>

                      {/* Breakdown */}
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Area</span>
                          <span className="font-semibold text-foreground">{estimate.sqFt} sq ft</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Per Unit</span>
                          <span className="font-semibold text-foreground">PKR {estimate.unitPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Quantity</span>
                          <span className="font-semibold text-foreground">× {quantity}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-muted-foreground">Size</span>
                          <span className="font-semibold text-foreground">{width}" × {height}"</span>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground text-center">
                        * Estimated price. Final quote may vary.
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a
                      href={`https://wa.me/923005382657?text=${encodeURIComponent(
                        `Price Inquiry:\nService: ${service}\nMaterial: ${material}\nSize: ${width}x${height} inches\nColor: ${color}\nQty: ${quantity}\nEstimate: PKR ${estimate?.total?.toLocaleString() || "N/A"}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      WhatsApp pe Inquiry
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" onClick={resetForm}>Reset</Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SEO Content Section */}
          <section className="max-w-4xl mx-auto mt-20 space-y-16">
            {/* How It Works */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Signage Price Calculator — Kaise Kaam Karta Hai?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hamara free Price Calculator aapko signage, billboard, aur print media ke instant cost estimates deta hai. 
                Bas apna service type select karein, material choose karein, size set karein aur quantity daalein — price 
                automatically update ho jayega. Yeh tool Pakistan mein advertising industry ke real market rates par based hai.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chahe aap apni dukaan ke liye acrylic board banwana chahein, kisi highway par billboard lagwana chahein, ya 
                event ke liye banners print karwane hon — hamara calculator aapko budget planning mein madad karega. Final 
                quote ke liye WhatsApp par inquiry bhejein.
              </p>
            </div>

            {/* Services Breakdown */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Advertising Services ke Rates — Pakistan 2026
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <article className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">Signage / Boards</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Acrylic boards, 3D PVC letters, neon signs, LED channel letters, aur aluminum signage. 
                    Shops, offices, hospitals aur commercial buildings ke liye professional branding solutions. 
                    Rates PKR 250 se PKR 600 per sq ft tak.
                  </p>
                </article>
                <article className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">Billboards</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Flex banners, panaflex backlit boards, aur premium vinyl billboards. Highways, city roads 
                    aur commercial areas ke liye large-format outdoor advertising. Rates PKR 80 se PKR 180 per sq ft tak.
                  </p>
                </article>
                <article className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">Print Media</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Vinyl stickers, canvas prints, standard banners aur heavy-duty banners. Events, exhibitions, 
                    retail stores aur promotional campaigns ke liye print solutions. Rates PKR 50 se PKR 200 per sq ft tak.
                  </p>
                </article>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Aksar Poochhe Jane Wale Sawalat (FAQ)
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Kya yeh prices final hain?",
                    a: "Nahi, yeh estimated prices hain jo market rates par based hain. Final quote design complexity, installation location aur quantity ke mutabiq thori different ho sakti hai. WhatsApp par exact quote le sakte hain."
                  },
                  {
                    q: "Delivery aur installation ka time kitna lagta hai?",
                    a: "Signage boards ka standard delivery time 3-7 working days hai. Billboards aur large projects mein 7-15 days lag sakte hain. Rush orders ke liye extra charges apply hote hain."
                  },
                  {
                    q: "Kya aap poore Pakistan mein service dete hain?",
                    a: "Haan, hum Rawalpindi, Islamabad, Lahore, Karachi aur Pakistan ke tamam major cities mein signage, billboard aur print media services provide karte hain."
                  },
                  {
                    q: "Payment ka kya tareeqa hai?",
                    a: "Hum bank transfer, JazzCash, EasyPaisa aur cash payment accept karte hain. Bade projects mein 50% advance aur 50% delivery par liya jata hai."
                  },
                  {
                    q: "Design bhi aap banate hain ya sirf printing hoti hai?",
                    a: "Haan, hum complete design services bhi provide karte hain — logo design, branding, aur artwork creation. Aap apna design bhi de sakte hain ya hamari team se banwa sakte hain."
                  },
                ].map((faq, i) => (
                  <details key={i} className="bg-card rounded-xl border border-border p-5 group">
                    <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-primary transition-transform group-open:rotate-45 text-xl">+</span>
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PriceCalculator;
