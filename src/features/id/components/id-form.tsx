import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useIdStore } from "@/store/id/id-store";

export function IdForm() {
  const { data, setData, setPhoto } = useIdStore();

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData({ [name]: value });
  }

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPhoto(e.target?.result as string);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Formulário</h2>

      <form className="space-y-4">
        <div>
          <Label htmlFor="fullName">Nome Completo</Label>
          <Input
            id="fullName"
            name="fullName"
            defaultValue={data?.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="cid">CID-11</Label>
          <Input
            id="cid"
            name="cid"
            defaultValue={data?.cid}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstContactName">Responsável</Label>
            <Input
              id="firstContactName"
              name="firstContactName"
              defaultValue={data.firstContact?.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="firstContactPhone">Telefone</Label>
            <Input
              id="firstContactPhone"
              name="firstContactPhone"
              defaultValue={data.firstContact?.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="secondContactName">Responsável</Label>
            <Input
              id="secondContactName"
              name="secondContactName"
              defaultValue={data.secondContact?.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="secondContactPhone">Telefone</Label>
            <Input
              id="secondContactPhone"
              name="secondContactPhone"
              defaultValue={data.secondContact?.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="address">Endereço</Label>
          <Input
            id="address"
            name="address"
            defaultValue={data?.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="diagnosticLink">Link do Diagnóstico</Label>
          <Input
            id="diagnosticLink"
            name="diagnosticLink"
            defaultValue={data?.diagnosticLink}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="additionalInfo">Informações Adicionais</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            defaultValue={data?.additionalInfo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="photo">Foto 3x4</Label>
          <Input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </div>
      </form>
    </>
  );
}
